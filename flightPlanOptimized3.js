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
            "_text": "003"
        },
        "Name": {
            "_text": "KJFK to KMSP"
        },
        "FlightDate": {
            "_text": "2019-04-04"
        },
        "TailNumber": {
            "_text": "5670"
        },
        "FlightNumber": {
            "_text": "G659"
        },
        "AircraftType": {
            "_text": "G659"
        },
        "ScheduledDepartureTime": {
            "_text": "2019-04-10T11:30:40Z"
        },
        "EstimatedDepartureTime": {
            "_text": "2019-04-10T11:40:43Z"
        },
        "EstimatedArrivalTime": {
            "_text": "2019-04-10T14:34:58Z"
        },
        "Airport": [
            {
                "Id": {
                    "_text": "KJFK"
                },
                "ICAOId": {
                    "_text": "KJFK"
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
                "Alarm": [{
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
                },
                    {
                        "Id": {
                            "_text": "2534"
                        },
                        "Type": {
                            "_text": "ObservedFog"
                        },
                        "Condition": {
                            "Exists": {}
                        }
                    },
                    {
                        "Id": {
                            "_text": "2534"
                        },
                        "Type": {
                            "_text": "AnyHail"
                        },
                        "Condition": {
                            "Exists": {}
                        }
                    },
                    {
                        "Id": {
                            "_text": "2534"
                        },
                        "Type": {
                            "_text": "PossibleTornado"
                        },
                        "Condition": {
                            "Exists": {}
                        }

                    }
                ],

                "Id": {
                    "_text": "KMSP"
                },
                "ICAOId": {
                    "_text": "KMSP"
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
                            "_text": "3000"
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
                            "_text": "2528"
                        },
                        "Type": {
                            "_text": "ObservedVisibility"
                        },
                        "Condition": {
                            "PropertyIsGreaterThanOrEqualTo": {
                                "Name": {
                                    "_text": "Distance"
                                },
                                "Value": {
                                    "_text": "4"
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
            "Alarm": [{
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
            },
                {
                    "Id": {
                        "_text": "2536"
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
            ]
        }
    }
};

module.exports = data;
