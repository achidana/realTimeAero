const data = {
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
        "Id": {
            "_text": "001"
        },
        "Name": {
            "_text": "KATL to KMIA"
        },
        "FlightDate": {
            "_text": "2019-04-06"
        },
        "TailNumber": {
            "_text": "5670"
        },
        "FlightNumber": {
            "_text": "G650"
        },
        "AircraftType": {
            "_text": "G650"
        },
        "ScheduledDepartureTime": {
            "_text": "2019-04-06T09:00:00Z"
        },
        "EstimatedDepartureTime": {
            "_text": "2019-04-06T09:30:00Z"
        },
        "EstimatedArrivalTime": {
            "_text": "2019-04-06T11:25:00Z"
        },
        "Airport": [
            {
                "Id": {
                    "_text": "KATL"
                },
                "ICAOId": {
                    "_text": "KATL"
                },
                "Type": {
                    "_text": "Origin"
                },
                "Tolerance": {
                    "_text": "1"
                },
                "Latitude": {
                    "_text": "33.636700"
                },
                "Longitude": {
                    "_text": "-84.427864"
                },
                "Alarm": {
                    "Id": {
                        "_text": "1"
                    },
                    "Type": {
                        "_text": "ForecastCeiling"
                    },
                    "Condition": {
                        "PropertyIsGreaterThan": {
                            "Name": {
                                "_text": "Altitude"
                            },
                            "Value": {
                                "_text": "10000"
                            }
                        }
                    }
                }
            },
            {
                "Id": {
                    "_text": "KMIA"
                },
                "ICAOId": {
                    "_text": "KMIA"
                },
                "Type": {
                    "_text": "Destination"
                },
                "Tolerance": {
                    "_text": "10"
                },
                "Latitude": {
                    "_text": "25.795361"
                },
                "Longitude": {
                    "_text": "-80.290111"
                },
                "Alarm": [
                    {
                        "Id": {
                            "_text": "2528"
                        },
                        "Type": {
                            "_text": "ForecastCeiling"
                        },
                        "Condition": {
                            "PropertyIsGreaterThan": {
                                "Name": {
                                    "_text": "Altitude"
                                },
                                "Value": {
                                    "_text": "10000"
                                }
                            }
                        }
                    },
                    {
                        "Id": {
                            "_text": "2529"
                        },
                        "Type": {
                            "_text": "Lightning"
                        },
                        "Condition": {
                            "Exists": {}
                        }
                    },
                    {
                        "Id": {
                            "_text": "2530"
                        },
                        "Type": {
                            "_text": "TAF"
                        },
                        "Condition": {
                            "Or": {
                                "PropertyIsEqualTo": [
                                    {
                                        "Name": {
                                            "_text": "FlightCategory"
                                        },
                                        "Value": {
                                            "_text": "IFR"
                                        }
                                    },
                                    {
                                        "Name": {
                                            "_text": "FlightCategory"
                                        },
                                        "Value": {
                                            "_text": "LIFR"
                                        }
                                    }
                                ]
                            }
                        }
                    }
                ]
            }
        ],
        "Route": {
            "VerticalTolerance": {
                "_text": "50"
            },
            "HorizontalTolerance": {
                "_text": "1000"
            },
            "WayPoint": {
                "Id": {
                    "_text": "1"
                },
                "Latitude": {
                    "_text": "33.636703"
                },
                "Longitude": {
                    "_text": "-84.427869"
                },
                "Altitude": {
                    "_text": "16000"
                },
                "TimeOffset": {
                    "_text": "20"
                }
            },
            "Alarm": {
                "Id": {
                    "_text": "2534"
                },
                "Type": {
                    "_text": "EDRTurbulence"
                },
                "Condition": {
                    "PropertyIsGreaterThan": {
                        "Name": {
                            "_text": "EDR"
                        },
                        "Value": {
                            "_text": "0.2"
                        }
                    }
                }
            }
        }
    }
};

module.exports = data;
