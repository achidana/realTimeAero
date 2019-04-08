const express = require('express');
const convert = require('xml-js');
const request = require('request');
const bodyParser = require('body-parser');
const fs = require('fs');
const mongo = require('mongodb');
const mongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017";


const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// let fp1= require('./flightPlanOptimized1');
// let fp2 =require('./flightPlanOptimized2');
// let fp3 =require('./flightPlanOptimized3');
//
// let flightPlanList=[fp1,fp2,fp3];
// let intialFlightPlan = require('./flightPlan1');
// var options = {compact: true, ignoreComment: true, spaces: 4};
// var xmlPayload = convert.json2xml(fp2, options);
//
// console.log(xmlPayload);

let flightPlanList = [];


//UTILITY METHOD TO WRITE TO FILES

// let temp = convert.xml2js(xmlPayload,{compact: true});
//
// fs.writeFile("./flightPlanOptimized1.js", JSON.stringify(temp, null, 4), (err) => {
//     if (err) {
//         console.error(err);
//         return;
//     };
//     console.log("File has been created");
// });


// app.get('/turbulence', (req, res) => {
//     request.post({
//             url: 'http://cat-weather-alerting.dtn.com/basic/fra?VERSION=1.0&REQUESTTYPE=Evaluate',
//             body: xmlPayload,
//             headers: {
//                 'Content-Type': 'application/xml',
//                 'Authorization': 'Basic aG9uZXl3ZWxsdDIzOTA1ODg6NDFFQnVVSjVUQm1rakNNMw=='
//             },
//             gzip: true
//         },
//         (error, response, body) => {
//             console.log(body);
//             res.send(convert.xml2js(body, {compact: true}))
//         })
//
// });

app.get('/flightplan', (req, res) => {
    request.get({
            url: 'http://cat-weather-alerting.dtn.com/basic/fra?VERSION=1.0&REQUESTTYPE=RetrieveFlightPlansSummary',
            headers: {

                'Authorization': 'Bsasic aG9uZXl3ZWxsdDIzOTA1ODg6NDFFQnVVSjVUQm1rakNNMw=='
            },
        },
        (error, response, body) => {
            flightPlanList = [];
            let jsonPayload = convert.xml2js(body, {compact: true}, {Pretty: true});


            jsonPayload.FlightPlanSummary.FlightPlan.forEach((fp) => {

                flightPlanList.push({
                    Id: fp.Id._text,
                    FlightDate: fp.FlightDate._text,
                    ScheduledDepartureTime: fp.ScheduledDepartureTime._text,
                    TailNumber: fp.TailNumber._text,
                    HasActiveAlerts: fp.HasActiveAlerts._text
                })
            });

            res.json(flightPlanList);


        });


});

//flight plan sub page- where we are showing flight plan of a particular flight!

app.get('/flightplan/displayflightplan', (req, res) => {

    let flightDate;
    let scheduledDepartureTime;
    console.log(flightPlanList);

    let id = req.query.flightid;

    flightPlanList.forEach((fp) => {
        if (fp.Id === id) {
            flightDate = fp.FlightDate;
            scheduledDepartureTime = fp.ScheduledDepartureTime
        }
    });

    request.get({
            url: `http://cat-weather-alerting.dtn.com/basic/fra?VERSION=1.0&REQUESTTYPE=Retrieve&flightPlanId=${id}&flightDate=${flightDate}&scheduledDepartureTime=${scheduledDepartureTime}`,
            headers: {

                'Authorization': 'Basic aG9uZXl3ZWxsdDIzOTA1ODg6NDFFQnVVSjVUQm1rakNNMw=='
            },
        },
        (error, response, body) => {
            res.json(convert.xml2js(body, {compact: true}, {Pretty: true}));
        })


});

app.post('/flightplan/displayflightplan', (req, res) => {

    let payload = (req.body);
    let xmlPayload = convert.json2xml(payload, {compact: true, ignoreComment: true, spaces: 4});

    request.post(
        {
            url: `http://cat-weather-alerting.dtn.com/basic/fra?VERSION=1.0&REQUESTTYPE=Update`,
            body: xmlPayload,
            headers: {

                'Authorization': 'Basic aG9uZXl3ZWxsdDIzOTA1ODg6NDFFQnVVSjVUQm1rakNNMw==',
                'Content-Type': 'application/xml'
            },
        },

        (error, response, body) => {
            console.log(body);
            res.send("success")
        }
    )


});


app.get('/mapalerts', async (req, res) => {
    let jsonResponseFromDtn;
    let flightDate = null;
    let scheduledDepartureTime = null;
    let id = req.query.flightid;
    let resultFromMongo;

    flightPlanList.forEach((fp) => {
        if (fp.Id === id && fp.HasActiveAlerts === "true") {
            flightDate = fp.FlightDate;
            scheduledDepartureTime = fp.ScheduledDepartureTime
        }
    });


    if (flightDate != null && scheduledDepartureTime != null) {
        jsonResponseFromDtn = await queryForAlerts(id, flightDate, scheduledDepartureTime);
    }

    resultFromMongo = await queryDB(id);

    // console.log(resultFromMongo);
    // console.log(j?sonResponseFromDtn.FlightPlanAlert.Airport.Alert[0]);
    //
    if (jsonResponseFromDtn) {
        // if (jsonResponseFromDtn.FlightPlanAlert.Airport) {
        //     jsonResponseFromDtn.FlightPlanAlert.Airport.forEach((element) => {
        //         if (element.Type === "Origin") {
        //             resultFromMongo.origin.alarms = element.Alert;
        //
        //         } else {
        //             resultFromMongo.arrival.alarms = element.Alert;
        //
        //         }
        //
        //     });
        // }

        if(jsonResponseFromDtn.FlightPlanAlert.Route)
        {
            jsonResponseFromDtn.FlightPlanAlert.Route.Segment.forEach((dtn) => {

                let point1= dtn.WayPointId[0]._text;
                let point2= dtn.WayPointId[1]._text;
                let alarm=dtn.Alert;


                resultFromMongo.route.forEach((mongo) => {

                    let way1= mongo.wayPoint1.Id;
                    let way2= mongo.wayPoint2.Id;

                    // console.log("DTN 1", (point1));
                    // console.log("DTN 2",(point2));
                    // console.log("MONGO 1",(way1));
                    // console.log("MONGO 2",(way2));

                    if(parseInt(point1)===way1 && parseInt(point2)===way2)
                    {
                        // console.log("here");
                        mongo.alarms=alarm;

                        // console.log(mongo.alarms);


                    }
                });


            });
        }
    }


    res.json(resultFromMongo);


});


async function queryDB(input) {

    return new Promise(resolve => {
        mongoClient.connect(url, {useNewUrlParser: 'true'}, (err, db) => {

            let dbo = db.db("dtn_aero");


            let query = {"flightPlan.id": input};


            dbo.collection("waypoints").find(query).toArray(function (err, result) {

                resolve(result[0].flightPlan);


            });
        });

    });


}

function queryForAlerts(id, flightDate, scheduledDepartureTime) {

    return new Promise(resolve => {

        request.get({
                url: `http://cat-weather-alerting.dtn.com/basic/fra?VERSION=1.0&REQUESTTYPE=RetrieveAlerts&flightPlanId=${id}&flightDate=${flightDate}&scheduledDepartureTime=${scheduledDepartureTime}`,
                headers: {

                    'Authorization': 'Basic aG9uZXl3ZWxsdDIzOTA1ODg6NDFFQnVVSjVUQm1rakNNMw=='
                },
            },
            (error, response, body) => {
                let result;
                result = convert.xml2js(body, {compact: true}, {Pretty: true});
                resolve(result);


            });
    });


}


app.listen(8000, () => {
    console.log('WELCOME TO REAL TIME FLIGHT SENTINEL')
});
