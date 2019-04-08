const convert = require('xml-js');
const mongo = require('mongodb');
const mongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017";



let flightPlan1 = require('./response50.js');

function optimizeJson(inputJson) {
    return jsonResult =
        {
            "_declaration": {
                "_attributes": {
                    "version": "1.0",
                    "encoding": "utf-8"
                }
            },
            "FlightPlan": {
                "_attributes": {
                    "xmlns": "http://weather-alerting.dtn.com/flightplan/v1",
                    "xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
                    "xsi:schemaLocation": "http://weather-alerting.dtn.com/flightplan/v1 http://cat-weather-alerting.dtn.com/xsds/alerting/flightplan/flightPlan.xsd"

                },
                "Id": "020:test to test",
                "Name": inputJson.AIRPORT_DATA.DEPARTURE.ICAO + " to " + inputJson.AIRPORT_DATA.ARRIVAL.ICAO,
                "FlightDate": "2019-04-05",
                "TailNumber": "567",
                "FlightNumber": inputJson.AIRCRAFT_DATA.AIRCRAFT_NUMBER,
                "AircraftType": inputJson.AIRCRAFT_DATA.AIRCRAFT_TYPE,
                "ScheduledDepartureTime": "2019-04-05T19:50:00Z",
                "EstimatedDepartureTime": "2019-04-05T19:50:00Z",
                "EstimatedArrivalTime": "2019-04-06T08:00:00Z",
                "Airport": [
                    {
                        "Id": inputJson.AIRPORT_DATA.DEPARTURE.ICAO,
                        "ICAOId": inputJson.AIRPORT_DATA.DEPARTURE.ICAO,
                        "Type": "Origin",
                        "Tolerance": "1",
                        "Latitude": inputJson.AIRPORT_DATA.DEPARTURE.FIX_POSITION.LAT_DEGREES.toFixed(6),
                        "Longitude": inputJson.AIRPORT_DATA.DEPARTURE.FIX_POSITION.LON_DEGREES.toFixed(6),
                        "Alarm":
                            [
                                {
                                    "Id": "D1",
                                    "Type": "ForecastVisibility",
                                    "Condition":
                                        {
                                            "PropertyIsGreaterThan": {
                                                "Name": "Distance",
                                                "Value": "5"
                                            }

                                        }
                                },
                                {
                                    "Id": "D2",
                                    "Type": "ForecastCeiling",
                                    "Condition":
                                        {
                                            "PropertyIsGreaterThan": {
                                                "Name": "Altitude",
                                                "Value": "1000"
                                            }

                                        }
                                },

                            ]
                    },


                    {
                        "Id": inputJson.AIRPORT_DATA.ARRIVAL.ICAO,
                        "ICAOId": inputJson.AIRPORT_DATA.ARRIVAL.ICAO,
                        "Type": "Destination",
                        "Tolerance": "10",
                        "Latitude": inputJson.AIRPORT_DATA.ARRIVAL.FIX_POSITION.LAT_DEGREES.toFixed(6),
                        "Longitude": inputJson.AIRPORT_DATA.ARRIVAL.FIX_POSITION.LON_DEGREES.toFixed(6),
                        "Alarm": [
                            {
                                "Id": "A1",
                                "Type": "ForecastVisibility",
                                "Condition":
                                    {
                                        "PropertyIsGreaterThan": {
                                            "Name": "Distance",
                                            "Value": "5"
                                        }

                                    }
                            },
                            {
                                "Id": "A2",
                                "Type": "ForecastCeiling",
                                "Condition":
                                    {
                                        "PropertyIsGreaterThan": {
                                            "Name": "Altitude",
                                            "Value": "1000"
                                        }

                                    }
                            },

                        ]
                    }
                ],

                "Route": {
                    "VerticalTolerance": "50",
                    "HorizontalTolerance": "1000",
                    "WayPoint": [],
                    "Alarm": [
                        {
                            "Id": "R1",
                            "Type": "FHIcing",
                            "Condition": {
                                "PropertyIsEqualTo": {
                                    "Name": "Category",
                                    "Value": "Slight"
                                }
                            }
                        },
                        {
                            "Id": "R2",
                            "Type": "USTFR",
                            "Condition": {
                                "PropertyIsEqualTo": {
                                    "Name": "Type",
                                    "Value": "Fire"
                                }
                            }
                        },
                        {
                            "Id": "R3",
                            "Type": "ForecastVisibility",
                            "Condition": {
                                "PropertyIsGreaterThan": {
                                    "Name": "Distance",
                                    "Value": "2"
                                }
                            }
                        },
                        {
                            "Id": "R4",
                            "Type": "ForecastCeiling",
                            "Condition": {
                                "PropertyIsGreaterThan": {
                                    "Name": "Altitude",
                                    "Value": "10"
                                }
                            }

                        }
                    ]

                },


            }

        }
}

let truncatedJson = optimizeJson(flightPlan1);
let truncatedJsonwithWaypoint = addWaypoints(truncatedJson);

// console.log(truncatedJsonwithWaypoint);

function addWaypoints(input) {
    let result = input;
    let temp = flightPlan1.WAYPOINT_SUMMARY;
    let count = 1;

    temp.forEach((wayPoint) => {

        result.FlightPlan.Route.WayPoint.push({

            "Id": count,
            "Latitude": wayPoint.FIX.LAT_DEGREES.toFixed(6),
            "Longitude": wayPoint.FIX.LON_DEGREES.toFixed(6),
            "Altitude": Math.round(wayPoint.ALTITUDE.VALUE),
            "TimeOffset": calculateTimeOffset(wayPoint.CUMULATIVE_TIME_IN_FORMAT)
        });
        count++;

    });

    return result;

}


function calculateTimeOffset(inputTime) {


    let temp = inputTime.split(":");


    let result = parseInt(temp[0]) * 60 + parseInt(temp[1]);

    return (result);

}


// console.log(truncatedJsonwithWaypoint.FlightPlan.Route.WayPoint);


var options = {compact: true, ignoreComment: true, spaces: 4};
var xmlPayload = convert.json2xml(truncatedJsonwithWaypoint, options);


console.log(xmlPayload);







// console.log(truncatedJsonwithWaypoint.FlightPlan.Route.WayPoint);


let result = {

    flightPlan: {
        id: truncatedJsonwithWaypoint.FlightPlan.Id,
        origin:[{
            ICAOId:truncatedJsonwithWaypoint.FlightPlan.Airport[0].ICAOId,
            lat: truncatedJsonwithWaypoint.FlightPlan.Airport[0].Latitude,
            long: truncatedJsonwithWaypoint.FlightPlan.Airport[0].Longitude,
            alarms:[]

}],
        arrival:[{
            ICAOId:truncatedJsonwithWaypoint.FlightPlan.Airport[1].ICAOId,
            lat: truncatedJsonwithWaypoint.FlightPlan.Airport[1].Latitude,
            long: truncatedJsonwithWaypoint.FlightPlan.Airport[1].Longitude,
            alarms:[]
        }],

        route:[]

    }



};

function populateRoute(input){

    for(let i=1; i< truncatedJsonwithWaypoint.FlightPlan.Route.WayPoint.length ; i++)
    {
        result.flightPlan.route.push({
            wayPoint1: truncatedJsonwithWaypoint.FlightPlan.Route.WayPoint[i-1],
            wayPoint2: truncatedJsonwithWaypoint.FlightPlan.Route.WayPoint[i],
            alarms:[]
        });

    }

}

populateRoute(result);

  // console.log(result);


 mongoClient.connect(url, function(err, db) {
    if (err) throw err;

    let dbo= db.db("dtn_aero");


    dbo.collection("waypoints").insertOne(result, function(err, res){

         // console.log(res);

    })
});


