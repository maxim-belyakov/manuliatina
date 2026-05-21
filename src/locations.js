let locations = {
    begin: {
        "title": { ru: "Начало", en: "Begin" },
        "original": "black.png",
    },
    myRoom: {
        "title": { ru: "Моя комната", en: "My room" },
        "original": "комната гг 7.jpg",
        "sunrise": "комната гг 5.jpg",
        "sunset": "комната гг 5.jpg",
        "night": "комната гг 3.jpg",
        "music": [
            {
                "name": "Field.mp3",
                "percent": 100,
                "duration": 105000,
            }
        ],
        "musicSunrise": [
            {
                "name": "Navprostets.mp3",
                "percent": 100,
                "duration": 120200,
            }
        ],
        "musicSunset": [
            {
                "name": "Sunset.mp3",
                "percent": 100,
                "duration": 126000,
            }
        ],
        "musicNight": [
            {
                "name": "Sunset.mp3",
                "percent": 100,
                "duration": 126000,
            }
        ],
        "navigation": [
            {
                "name": "hall",
                "title": { ru: "Выйти в коридор", en: "Step into the hallway" }
            },
            {
                "name": "shower",
                "timeout": true,
                "title": { ru: "Принять душ", en: "Take a shower" }
            },
            {
                "name": "sleep",
                "timeout": true,
                "title": { ru: "Поспать", en: "Sleep" }
            }
        ]
    },
    hall: {
        "_id": "5ed4e0c6dd1b429f7d602216",
        "title": { ru: "Коридор", en: "Hallway" },
        "original": "корридор гг 3.jpg",
        "night": "корридор гг 5.jpg",
        "music": [
            {
                "name": "Navprostets.mp3",
                "percent": 100,
                "duration": 120200,
            }
        ],
        "musicNight": [
            {
                "name": "Field.mp3",
                "percent": 100,
                "duration": 105000,
            }
        ],
        "specials": [
            {
                "name": "cleanMyRoom",
                "original": "корридор гг 2.jpg",
                "timeOfDay": ["day"],
                "order": 0
            }
        ],
        "navigation": [
            {
                "name": "hall",
                "required": {
                    "timeOfDay": ["day", 'sunrise'],
                    "specials": {
                        "cleanMyRoom": false
                    }
                },
                "action": "cleanMyRoom",
                "title": { ru: "Убрать пыль", en: "Dust the room" }
            },
            {
                "name": "shower",
                "timeout": true,
                "title": { ru: "Принять душ", en: "Take a shower" }
            },
            {
                "name": "lesnayaStreet",
                "title": { ru: "Выйти на улицу", en: "Go outside" }
            },
            {
                "name": "myRoom",
                "title": { ru: "Пойти в комнату", en: "Return to the room" }
            }
        ]
    },
    sleep: {
        "_id": "5ed4dd84dd1b429f7d602213",
        "title": { ru: "Сон", en: "Dream" },
        "original": "black.png",
        "music": [
            {
                "name": "forest_song.mp3",
                "percent": 100,
                "duration": 30500,
            }
        ]
    },
    shower: {
        "_id": "5ed4e116dd1b429f7d602217",
        "title": { ru: "Душ", en: "Shower" },
        "original": "black.png",
        "music": [
            {
                "name": "running-water.mp3",
                "percent": 100,
                "duration": 6000,
            }
        ]
    },
    lesnayaStreet: {
        "title": { ru: "Улица “Лесная”", en: "“Lesnaya” Street" },
        "original": "Лесная День.jpg",
        "night": "Лесная Ночь.jpg",
        "music": [
            {
                "name": "morning_birds.mp3",
                "percent": 40,
                "duration": 153000,
            },
            {
                "name": "Neon.mp3",
                "percent": 100,
                "duration": 135000,
            }
        ],
        "musicNight": [
            {
                "name": "night_sounds.mp3",
                "percent": 100,
                "duration": 135000,
            }
        ],
        "navigation": [
            {
                "name": "sentabrskayaStreet",
                "title": { ru: "Пойти на юг", en: "Go south" }
            },
            {
                "name": "severnayaStreet",
                "title": { ru: "Пойти на север", en: "Go north" },
                "luck": {
                    "percent": "25",
                    "timeOfDay": ["night"],
                    "name": "goose"
                }
            },
            {
                "name": "houseEnya",
                "required": {
                    "timeOfDay": ["day"],
                },
                "title": { ru: "Пойти к Ене", en: "Visit Enya" }
            },
            {
                "name": "school",
                "required": {
                    "timeOfDay": ["day"]
                },
                "title": { ru: "Пойти к школе", en: "Go to the school" }
            },
            {
                "name": "hall",
                "title": { ru: "Вернуться домой", en: "Return home" }
            }
        ]

    },
    severnayaStreet: {
        "title": { ru: "Улица “Северная”", en: "“Severnaya” Street" },
        "original": "Северная день.jpg",
        "night": "Северная ночь.jpg",
        "music": [
            {
                "name": "clear_birds.mp3",
                "percent": 25,
                "duration": 50000,
            },
            {
                "name": "Neon.mp3",
                "percent": 100,
                "duration": 135000
            }
        ],
        "musicNight": [
            {
                "name": "night_sounds.mp3",
                "percent": 100,
                "duration": 135000,
            }
        ],
        "navigation": [
            {
                "name": "edgeNorthernForest",
                "title": { ru: "Пойти в северный лес", en: "Go to the northern forest" }
            },
            {
                "name": "sentabrskayaStreet",
                "title": { ru: "Пойти на юг", en: "Go south" }
            },
            {
                "name": "lesnayaStreet",
                "title": { ru: "Лесная улица", en: "Lesnaya Street" }
            },
            {
                "name": "bridge",
                "required": {
                    "timeOfDay": ["day"]
                },
                "title": { ru: "Пойти к мосту", en: "Go to the bridge" }
            },
        ]

    },
    sentabrskayaStreet: {
        "title": { ru: "Улица “Сентябрьская”", en: "“Sentabrskaya” Street" },
        "original": "Сентябрьская день.jpg",
        "night": "Сентябрьская ночь.jpg",
        "music": [
            {
                "name": "woodpecker.mp3",
                "percent": 25,
                "duration": 90000,
            },
            {
                "name": "Neon.mp3",
                "percent": 100,
                "duration": 135000,
            }
        ],
        "musicNight": [
            {
                "name": "night_sounds.mp3",
                "percent": 100,
                "duration": 135000,
            }
        ],
        "navigation": [
            {
                "name": "southernForest",
                "title": { ru: "Пойти в южный лес", en: "Go to the southern forest" }
            },
            {
                "name": "severnayaStreet",
                "title": { ru: "Пойти на север", en: "Go north" },
                "luck": {
                    "percent": "25",
                    "timeOfDay": ["night"],
                    "name": "goose"
                }
            },
            {
                "name": "lesnayaStreet",
                "title": { ru: "Лесная улица", en: "Lesnaya Street" }
            },
            {
                "name": "houseJeanette",
                "required": {
                    "timeOfDay": ["day"]
                },
                "title": { ru: "Пойти к Жанетт", en: "Visit Jeanette" }
            },
            {
                "name": "town",
                "title": { ru: "Поехать в Дубраву", en: "Travel to Dubrava" }
            },
        ]
    },
    edgeNorthernForest: {
        "title": { ru: "Опушка Северного Леса", en: "Edge of the Northern Forest" },
        "original": "СЛ день.jpg",
        "night": "СЛ ночь.jpg",
        "sunset": "СЛ вечер.jpg",
        "sunrise": "СЛ вечер.jpg",
        "music": [
            {
                "name": "beatiful_forest_and_water.mp3",
                "percent": 100,
                "duration": 77000,
            }
        ],
        "navigation": [
            {
                "name": "lake",
                "title": { ru: "Пойти к озеру", en: "Walk to the lake" },
                "luck": {
                    "percent": "35",
                    "timeOfDay": ["day", "sunrise", "sunset"],
                    "name": "belasia"
                }
            },
            {
                "name": "severnayaStreet",
                "title": { ru: "Вернуться в деревню", en: "Return to the village" },
                "luck": {
                    "percent": "25",
                    "timeOfDay": ["night"],
                    "name": "goose"
                }
            },
        ]
    },
    southernForest: {
        "title": { ru: "Южный лес", en: "Southern Forest" },
        "original": "Южный Лес день.jpg",
        "night": "Южный Лес ночь.jpg",
        "sunset": "Южный Лес вечер.jpg",
        "sunrise": "Южный Лес вечер.jpg",
        "music": [
            {
                "name": "happy_birds.mp3",
                "percent": 33,
                "duration": 73000,
            },
            {
                "name": "Field.mp3",
                "percent": 100,
                "duration": 105000,
            }
        ],
        "musicNight": [
            {
                "name": "Podzakat.mp3",
                "percent": 100,
                "duration": 96000,
            },
            {
                "name": "crow.mp3",
                "percent": 35,
                "duration": 21000,
            }
        ],
        "musicSunset": [
            {
                "name": "Podzakat.mp3",
                "percent": 100,
                "duration": 96000,
            },
            {
                "name": "crow.mp3",
                "percent": 35,
                "duration": 21000,
            }
        ],
        "navigation": [
            {
                "name": "nearTreeHouse",
                "title": { ru: "Углубиться", en: "Go deeper" },
                "required": {
                    "timeOfDay": ["day"],
                    "specials": {
                        "repairedHouse": false
                    }

                }
            },
            {
                "name": "treeHouse",
                "title": { ru: "Домик на дереве", en: "Tree house" },
                "required": {
                    "specials": {
                        "repairedHouse": true
                    }
                }
            },
            {
                "name": "sentabrskayaStreet",
                "title": { ru: "Вернуться в деревню", en: "Return to the village" }
            },
        ]
    },
    nearTreeHouse: {
        "title": { ru: "Старый домик на дереве", en: "Old tree house" },
        "original": "Поломанный.jpg",
        "specials": [
            {
                "name": "repairedHouse",
                "original": "Починенный.jpg",
                "timeOfDay": ["day"],
                "order": 0
            }
        ],
        "music": [
            {
                "name": "happy_birds.mp3",
                "percent": 33,
                "duration": 73000,
            },
            {
                "name": "Field.mp3",
                "percent": 100,
                "duration": 105000,
            }
        ],
        "musicNight": [
            {
                "name": "Podzakat.mp3",
                "percent": 100,
                "duration": 96000,
            },
            {
                "name": "crow.mp3",
                "percent": 100,
                "duration": 21000,
            }
        ],
        "musicSunset": [
            {
                "name": "Podzakat.mp3",
                "percent": 100,
                "duration": 96000,
            },
            {
                "name": "crow.mp3",
                "percent": 100,
                "duration": 21000,
            }
        ],
        "navigation": [
            {
                "name": "nearTreeHouse",
                "title": { ru: "Починить", en: "Repair" },
                "required": {
                    "specials": {
                        "repairedHouse": false
                    }
                },
                "action": "repairedHouse",
            },
            {
                "name": "treeHouse",
                "title": { ru: "Заползти внутрь", en: "Crawl inside" },
                "required": {
                    "specials": {
                        "repairedHouse": true
                    }
                }
            },
            {
                "name": "southernForest",
                "title": { ru: "Вернуться", en: "Go back" }
            },
        ]
    },
    treeHouse: {
        "title": { ru: "Домик на дереве", en: "Tree house" },
        "original": "прибранный домик 2.jpg",
        "specials": [
            {
                "name": "decoratedHouse",
                "original": "наряженный домик 4.jpg",
                "timeOfDay": ["day"],
                "order": 0
            }
        ],
        "music": [
            {
                "name": "Shkatulka_2.mp3",
                "percent": 100,
                "duration": 39000,
            }
        ],
        "navigation": [
            {
                "name": "treeHouse",
                "title": { ru: "Украсить", en: "Decorate" },
                "required": {
                    "specials": {
                        "decoratedHouse": false
                    }
                },
                "action": "decoratedHouse",
            },
            {
                "name": "southernForest",
                "title": { ru: "Покинуть", en: "Leave" }
            },
        ]
    },
    houseEnya: {
        "title": { ru: "Дом Ени", en: "Enya’s house" },
        "original": "дом ени.jpg",
        "music": [
            {
                "name": "morning_birds.mp3",
                "percent": 20,
                "duration": 153000,
            },
            {
                "name": "Neon.mp3",
                "percent": 100,
                "duration": 135000,
            }
        ],
        "navigation": [
            {
                "name": "island",
                "title": { ru: "Позвать на остров", en: "Invite to the island" }
            },
            {
                "name": "visitingYenya",
                "title": { ru: "Зайти в гости", en: "Drop in for a visit" }
            },
            {
                "name": "lesnayaStreet",
                "title": { ru: "Вернуться в деревню", en: "Return to the village" }
            },
        ]
    },
    island: {
        "title": { ru: "Остров", en: "Island" },
        "original": "лесная поляна с Еней.png",
        "night": "лесная поляна ночью.png",
        "music": [
            {
                "name": "Shkatulka.mp3",
                "percent": 100,
                "duration": 93000,
            }
        ],
        "navigation": [
            {
                "name": "myRoom",
                "title": { ru: "Закончить путешествие", en: "End the journey" }
            },
            {
                "name": "sky",
                "title": { ru: "Посмотреть в небо", en: "Look at the sky" }
            }
        ]
    },
    visitingYenya: {
        "title": { ru: "В гостях у Ени", en: "Visiting Enya" },
        "original": "Еня 4.jpg",
        "music": [
            {
                "name": "Snow Mood (yenia).mp3",
                "percent": 100,
                "duration": 180000,
            }
        ],
        "specials": [
            {
                "name": "talkEnya",
                "original": "Еня 3.jpg",
                "timeOfDay": ["day"],
                "order": 0
            }
        ],
        "navigation": [
            {
                "name": "visitingYenya",
                "title": { ru: "Поболтать", en: "Chat" },
                "action": "talkEnya",
                "sound": {
                    "music": "laugh_yenia2.mp3"
                },
                "required": {
                    "specials": {
                        "talkEnya": false
                    }
                },

            },
            {
                "name": "lesnayaStreet",
                "required": {
                    "specials": {
                        "talkEnya": true
                    }
                },
                "title": { ru: "Покинуть Еню", en: "Leave Enya" }
            }
        ]
    },
    sky: {
        "title": { ru: "Небо", en: "Sky" },
        "original": "Дневное небо.png",
        "night": "Nochnoe_nebo.png",
        "music": [
            {
                "name": "Shkatulka.mp3",
                "percent": 100,
                "duration": 93000,
            }
        ],
        "navigation": [
            {
                "name": "prevLocation",
                "title": { ru: "Вернуться на землю", en: "Return to the ground" }
            }
        ]
    },
    houseJeanette: {
        "title": { ru: "Дом Жанетт", en: "Jeanette’s house" },
        "original": "дом жанетт.jpg",
        "music": [
            {
                "name": "morning_birds.mp3",
                "percent": 20,
                "duration": 153000,
            },
            {
                "name": "Neon.mp3",
                "percent": 100,
                "duration": 135000
            }
        ],
        "navigation": [
            {
                "name": "bushes",
                "title": { ru: "Немного погулять", en: "Take a stroll" }

            },
            {
                "name": "sentabrskayaStreet",
                "title": { ru: "Вернуться в деревню", en: "Return to the village" }
            }
        ]
    },
    bushes: {
        "title": { ru: "Кустики", en: "Bushes" },
        "original": "кустики.jpg",
        "music": [
            {
                "name": "Fling (janett).mp3",
                "percent": 70,
                "duration": 210000,
            }
        ],
        "navigation": [
            {
                "name": "bushes",
                "title": { ru: "Поболтать", en: "Chat" },
                "action": "talkJeanette",
                "sound": {
                    "music": "laugh_janett.mp3"
                },
                "required": {
                    "specials": {
                        "talkJeanette": false
                    }
                },

            },
            {
                "name": "lesnayaStreet",
                "required": {
                    "specials": {
                        "talkJeanette": true
                    }
                },
                "title": { ru: "Попрощаться", en: "Say goodbye" }
            }
        ]
    },
    lake: {
        "title": { ru: "Озеро", en: "Lake" },
        "original": "day_lake.jpg",
        "sunset": "evening_lake.jpg",
        "sunrise": "dawn_lake.jpg",
        "luck": {
            "percent": "20",
            "timeOfDay": ["day"],
            "original": "birds_lake.jpg"
        },
        "specials": [
            {
                "name": "changeMusic",
                "music": [
                    {
                        "name": "Sopilka1.mp3",
                        "percent": 100,
                        "duration": 210000,
                    },
                    {
                        "name": "Sopilka2.mp3",
                        "percent": 100,
                        "duration": 580000,
                    },
                    {
                        "name": "Sopilka3.mp3",
                        "percent": 100,
                        "duration": 490000,
                    }
                ],
                "timeOfDay": ["day", "night", "sunset", "sunrise"],
                "order": 0
            }
        ],
        "music": [
            {
                "name": "Navprostets.mp3",
                "percent": 100,
                "duration": 210000,
            }
        ],
        "musicNight": [
            {
                "name": "Kolibelnaya.mp3",
                "percent": 100,
                "duration": 122000,
            }
        ],
        "navigation": [
            {
                "name": "lake",
                "action": "changeMusic",
                "title": { ru: "Сыграть на сопилке", en: "Play the sopilka" }
            },
            {
                "name": "sky",
                "title": { ru: "Посмотреть в небо", en: "Look at the sky" }
            },
            {
                "name": "edgeNorthernForest",
                "title": { ru: "Вернуться в лес", en: "Return to the forest" }
            }
        ]
    },
    belasia: {
        "title": { ru: "Белашья", en: "Belasia" },
        "original": "Белашья 4.jpg",
        "music": [
            {
                "name": "Cafe del Mar (bel).mp3",
                "percent": 100,
                "duration": 160000,
            }
        ],
        "navigation": [
            {
                "name": "belasia",
                "title": { ru: "Помолчать вместе", en: "Sit in silence together" },
                "action": "talkBelasia",
                "sound": {

                },
                "required": {
                    "specials": {
                        "talkBelasia": false
                    }
                },

            },
            {
                "name": "severnayaStreet",
                "required": {
                    "specials": {
                        "talkBelasia": true
                    }
                },
                "title": { ru: "Вернуться в деревню", en: "Return to the village" }
            }
        ]
    },
    school: {
        "title": { ru: "Школа", en: "School" },
        "original": "порог школы 2.jpg",
        "music": [
            {
                "name": "MaxZim.mp3",
                "percent": 100,
                "duration": 205000,
            }
        ],
        "navigation": [
            {
                "name": "thresholdSchool",
                "title": { ru: "Подойти ближе", en: "Get closer" }

            },
            {
                "name": "sentabrskayaStreet",
                "title": { ru: "Вернуться в деревню", en: "Return to the village" }
            }
        ]
    },
    thresholdSchool: {
        "title": { ru: "Порог школы", en: "School threshold" },
        "original": "порог школы стенгазета.jpg",
        "music": [
            {
                "name": "MaxZim.mp3",
                "percent": 100,
                "duration": 205000,
            }
        ],
        "navigation": [
            {
                "name": "schoolFirstFloor",
                "title": { ru: "Зайти в школу", en: "Enter the school" }

            },
            {
                "name": "sentabrskayaStreet",
                "title": { ru: "Вернуться в деревню", en: "Return to the village" }
            }
        ]
    },
    schoolFirstFloor: {
        "title": { ru: "Школа", en: "School" },
        "original": "школа корридор.jpg",
        "music": [
            {
                "name": "MaxZim.mp3",
                "percent": 100,
                "duration": 205000,
            }
        ],
        "navigation": [
            {
                "name": "cafeteria",
                "title": { ru: "Перекусить", en: "Grab a snack" }
            },
            {
                "name": "schoolWindow",
                "title": { ru: "Посмотреть в окно", en: "Look out the window" }
            },
            {
                "name": "schoolSecondFloor",
                "title": { ru: "Подняться на второй этаж", en: "Go up to the second floor" }
            },
            {
                "name": "sentabrskayaStreet",
                "title": { ru: "Вернуться в деревню", en: "Return to the village" }
            }
        ]
    },
    schoolWindow: {
        "title": { ru: "Школа", en: "School" },
        "original": "окно.jpg",
        "music": [
            {
                "name": "MaxZim.mp3",
                "percent": 100,
                "duration": 205000,
            }
        ],
        "navigation": [
            {
                "name": "prevLocation",
                "title": { ru: "Обратно в коридор", en: "Back to the hallway" }
            }
        ]
    },
    schoolSecondFloor: {
        "title": { ru: "Школа", en: "School" },
        "original": "школа корридор 2.jpg",
        "music": [
            {
                "name": "MaxZim.mp3",
                "percent": 100,
                "duration": 205000,
            }
        ],
        "navigation": [
            {
                "name": "schoolWindow",
                "title": { ru: "Посмотреть в окно", en: "Look out the window" }
            },
            {
                "name": "schoolFirstFloor",
                "title": { ru: "Опуститься вниз", en: "Go back downstairs" }
            },
        ]
    },
    cafeteria: {
        "title": { ru: "Школа", en: "School" },
        "original": "кафетерий.jpg",
        "music": [
            {
                "name": "Buters.mp3",
                "percent": 100,
                "duration": 178000,
            }
        ],
        "navigation": [
            {
                "name": "cafeteria",
                "title": { ru: "Поесть", en: "Eat" },
                "action": "ate",
                "required": {
                    "specials": {
                        "ate": false
                    }
                },

            },
            {
                "name": "schoolFirstFloor",
                "title": { ru: "Уйти", en: "Leave" },
                "required": {
                    "specials": {
                        "ate": true
                    }
                }
            }
        ]
    },
    bridge: {
        "title": { ru: "Мост", en: "Bridge" },
        "original": "мост.jpg",
        "music": [
            {
                "name": "waterfall.mp3",
                "percent": 100,
                "duration": 15000,
            },
            {
                "name": "happy_birds.mp3",
                "percent": 100,
                "duration": 73000,
            }
        ]
    },
    town: {
        "title": { ru: "Дубрава", en: "Dubrava" },
        "original": "парк.jpg",
        "night": "дубрава.png",
        "music": [
            {
                "name": "Sny.mp3",
                "percent": 100,
                "duration": 103000,
            }
        ],
        "navigation": [
            {
                "name": "myRoom",
                "title": { ru: "Вернуться домой", en: "Return home" }
            },
        ]
    },
    goose: {
        "title": { ru: "Перелесье", en: "The grove" },
        "original": "Перелесье гусь 4.jpg",
        "night": "Перелесье гусь 4.jpg",
        "music": [
            {
                "name": "Klon.mp3",
                "percent": 100,
                "duration": 107000,
            }
        ],
        "navigation": [
            {
                "name": "edgeNorthernForest",
                "title": { ru: "Пойти в северный лес", en: "Go to the northern forest" }
            },
            {
                "name": "sentabrskayaStreet",
                "title": { ru: "Пойти на юг", en: "Go south" }
            },
            {
                "name": "lesnayaStreet",
                "title": { ru: "Лесная улица", en: "Lesnaya Street" }
            }
        ]
    },
    theend: {
        "title": { ru: "Конец", en: "The end" },
        "original": "theend.jpg",
        "navigation": [
            {
                "name": "myRoom",
                "title": { ru: "Вас скушали :( Начать заново", en: "You got eaten :( Start over" }
            },
        ]
    },

}
export default locations;
