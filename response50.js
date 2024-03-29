module.exports={
    "ERRORS": [
        {
            "CODE": 1226,
            "MESSAGE": "MIN REQ FUEL EXCEEDS MAX FUEL WT OF 41489 LBS",
            "TITLE": "Errors generated by SPE",
            "TYPE": "ERROR"
        },
        {
            "CODE": 1609,
            "MESSAGE": "Failed to calculate performance parameters on these flight levels 31000 33000 35000 37000 39000 ",
            "TITLE": "Unable to calculate the performance parameters: ",
            "TYPE": "ERROR"
        }
    ],
    "INFO": [],
    "IsSuccessful": false,
    "PROCESSING_TIME": {
        "TOTAL": 5.57827833350548
    },
    "SPE_INPUT": {
        "AIRCRAFT_PROFILE": {
            "AIRFRAME_TYPE": "G550-GDC",
            "BOW": {
                "UNITS": "LBS",
                "VALUE": 48300
            },
            "ENGINE_TYPE": "BR710C4-",
            "FUELMAX": {
                "UNITS": "LBS",
                "VALUE": 41489
            },
            "PERFORMANCE_MODE": {
                "MODE": "FULL_PERFORMANCE"
            },
            "TAIL_NUMBER": "G550FPE"
        },
        "APIVERSION": "1.0.0",
        "FLIGHT_PLAN": {
            "DEPARTURE_DETAIL": {
                "DATE": "2019-04-05",
                "TIME": "11:27:04"
            },
            "FLIGHT_NUMBER": "AAA123",
            "FLIGHT_PLAN_SEGMENT_LIST": [
                {
                    "ALTITUDE_PLANNING": {
                        "CRUISE_ALTITUDE": 39000
                    },
                    "ROUTE_DEFINITION": {
                        "ROUTE_STRING": "SAZN ZN612 NIDBA UDUVU BUTMO ESNIM PADIT NINSI ARMUP OGSAN ENTIB XOPIS KIKIP ROS ANRAL DALAB S32123531/W058112898 SUGRA ENSAS LOLIL ILSIM PORLI S31183083/W055083187 URURI DADUT ISOBU NEBID OBLAD ESMAN ESBAV MUMEB NEDAS ANKAT RAXUS DOGTI VAGAL OGLOL BUTKI NIBSI GESDA ISGUM NUXUS UGIBU ERODU MADNI ANSAN RDE ILKOK BCO S23241809/W046230371 BUVNI VUMEV KORSA USAMO MULAP NELOV UTPIN VANEP GENED GAXUB SILUB EDMOG BUSUP KOKSU ANBEK MUMEN ERISA S17005409/W041425728 VUTNO LIBRA PUPVU OBDUD ELEFA NUXIL DUBLA KOGBU BORBA ADOLF TOMAS BUTED AVILA IMBOS EVPAB VACAR OPNED SEVIL RODES FEMUR VUNOK S02381184/W033302905 INTOL SALPU ORARO TASIL N04002290/W029592127 ASEBA SAGMA N13452365/W024395322 POMAT CVS PINPO N19215313/W019595976 GUNET N19372010/W019371452 N20000000/W018000000 N20040743/W017505784 GUPEL N21203896/W014585215 N22035153/W013424755 ZRT 2B09N ULPAK SENOX N26063904/W006372589 BRENA CHAMI TIO JOKKA GAFLA BARKA N30083693/E009240642 GAD NAFUS IZD WLD MIS CIBIA SOLUN DOLFI TUNAR FARUJ RAMLI RASNO N34242544/E021503506 ARLOS N34373167/E023000505 SIT MOKIS NIBOX KPC ROXOL LINRO RDS N36325741/E028285501 SOTIV AKIMO N37395614/E030000483 HAY BAG NENDO UVULU SUNUM SIN LTCM"
                    },
                    "ROUTE_SEGMENT_ROLE": "PRIMARY",
                    "SPEED_PLANNING": {
                        "ORIGIN_SPD_LIMIT": {
                            "LIMIT_ALT": {
                                "ALT_TYPE": "MSL",
                                "UNITS": "FEET",
                                "VALUE": 10000
                            },
                            "LIMIT_SPD": {
                                "UNITS": "KNOTS",
                                "VALUE": 250
                            }
                        },
                        "PHASE_SPEED_PLAN": [
                            {
                                "CAS": 260,
                                "FLIGHT_PHASE": "CLB",
                                "MACH": 0.75,
                                "MODE": "defined"
                            },
                            {
                                "FLIGHT_PHASE": "CRZ",
                                "MACH": 0.75,
                                "MODE": "defined"
                            },
                            {
                                "CAS": 260,
                                "FLIGHT_PHASE": "DES",
                                "MACH": 0.75,
                                "MODE": "defined"
                            }
                        ]
                    }
                }
            ],
            "PERFORMANCE_INITIALIZATION_DATA": {
                "ADDITIONAL_FUEL": {
                    "UNITS": "LBS",
                    "VALUE": 10
                },
                "FINAL_RESERVES_FUEL": {
                    "HOLDING_TIME": 20,
                    "STRATEGY_NAME": "holding_time"
                },
                "FUEL_WEIGHT": {
                    "MINIMUM_FUEL_REQUESTED": true
                },
                "PAYLOAD": {
                    "UNITS": "LBS",
                    "VALUE": 0
                },
                "RESERVES": {
                    "RESERVE_FUEL_PLAN": {
                        "BASIC_RESERVES": [
                            {
                                "RESERVE_FUEL": {
                                    "UNITS": "LBS",
                                    "VALUE": 3000
                                },
                                "STRATEGY_NAME": "fuel"
                            }
                        ]
                    }
                },
                "TAXI_IN_FUEL": {
                    "UNITS": "LBS",
                    "VALUE": 18
                },
                "TAXI_IN_TIME": "PT00:03:00",
                "TAXI_OUT_FUEL": {
                    "UNITS": "LBS",
                    "VALUE": 40
                }
            },
            "SCENARIOS": {
                "NO_RETURN_POINT": {
                    "FIX": {
                        "FIX_NAME": "SAZN"
                    }
                }
            }
        },
        "REQUEST": {
            "DATA_SET": [
                "FLIGHT_PLAN",
                "TRAJECTORY_SUMMARY",
                "WAYPOINT_SUMMARY",
                "ERRORS"
            ],
            "NAVDB_CYCLE": "SECOND",
            "TRANSACTION_ID": 111,
            "UNITS_REQUEST": {
                "MASS": "LBS"
            }
        }
    },
    "VERSION_DEFINITION": {
        "AEDB": "PS0SPE-03003",
        "FPE": "1.4.5.2",
        "FPE_NAVDB": "201904",
        "MAGVAR_DB": "PS60001004-0003",
        "NAVDB": {
            "FIRST_CYCLE": "2019-02-28/2019-03-28",
            "PARTNUM": "LPG1904001",
            "SECOND_CYCLE": "2019-03-28/2019-04-25",
            "SELECTED_CYCLE": "SECOND"
        },
        "SPE": "23.2.0"
    },
    "action": "trajectoryCalculation"
}
