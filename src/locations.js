let locations = {
    begin: {
        "title": "Begin",
        "original": "black.png",
    },
    myRoom: {
        "_id": "5ed4dcd2dd1b429f7d602212",
        "title": "Моя комната",
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
                "duration": 120600,
            }
        ],
        "musicNight": [
            {
                "name": "Sunset.mp3",
                "percent": 100,
                "duration": 12060,
            }
        ],
        "navigation": [
            {
                "name": "hall",
                "title": "Выйти в Коридор"
            },
            {
                "name": "shower",
                "timeout": true,
                "title": "Принять душ"
            },
            {
                "name": "sleep",
                "timeout": true,
                "title": "Поспать"
            }
        ]
    },
    hall: {
        "_id": "5ed4e0c6dd1b429f7d602216",
        "title": "Коридор",
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
                "image": "корридор гг 2.jpg",
                "timeOfDay": "day",
                "order": 0
            }
        ],
        "navigation": [
            {
                "name": "hall",
                "required": {
                    "timeOfDay": "day"
                },
                "action": "cleanMyRoom",
                "title": "Убрать пыль"
            },
            {
                "name": "myRoom",
                "title": "Пойти в комнату"
            },
            {
                "name": "shower",
                "timeout": "true",
                "title": "Принять душ"
            },
            {
                "name": "lesnayaStreet",
                "title": "Выйти на улицу"
            }
        ]
    },
    sleep: {
        "_id": "5ed4dd84dd1b429f7d602213",
        "title": "Сон",
        "original": "black.png",
        "music": [
            {
                "name": "forest_song.mp3",
                "percent": 100,
                "duration": 30000,
            }
        ]
    },
    shower: {
        "_id": "5ed4e116dd1b429f7d602217",
        "title": "Душ",
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
        "title": "Улица “Лесная”",
        "original": "Лесная День.jpg",
        "night": "Лесная Ночь.jpg",
        "music": [
            {
                "name": "morning_birds.mp3",
                "percent": 20
            },
            {
                "name": "Neon.mp3",
                "percent": 100
            }
        ],
        "musicNight": [
            {
                "name": "night_sounds.mp3",
                "percent": 100
            }
        ],
        "navigation": [
            {
                "name": "hall",
                "title": "Пойти домой"
            },
            {
                "name": "severnayaStreet",
                "title": "Пойти на север",
                "luck": {
                    "percent": "13",
                    "timeOfDay": "night",
                    "name": "goose"
                }
        
            },
            {
                "name": "sentabrskayaStreet",
                "title": "Пойти на юг"
            },
            {
                "name": "houseEnya",
                "required": {
                    "timeOfDay": "day"
                },
                "title": "Пойти к Ене"
            },
            {
                "name": "school",
                "required": {
                    "timeOfDay": "day"
                },
                "title": "Пойти к школе"
            }
        ]

    },
    severnayaStreet: {
        "title": "Улица “Северная”",
        "original": "Северная день.jpg",
        "night": "Северная ночь.jpg",
        "music": [
            {   
                "name": "clear_birds.mp3",
                "percent": 25
            },
            {   
                "name": "Neon.mp3",
                "percent": 100
            }
        ],
        "musicNight": [
            {
                "name": "night_sounds.mp3",
                "percent": 100
            }
        ],
        "navigation": [
            {
                "name": "sentabrskayaStreet",
                "title": "Пойти на юг"
            },
            {
                "name": "edgeNorthernForest",
                "title": "Пойти в лес"
            },
            {
                "name": "bridge",
                "required": {
                    "timeOfDay": "day"
                },
                "title": "Пойти к мосту"
            }
        ]

    },
    sentabrskayaStreet: {
        "title": "Улица “Сентябрьская”",
        "original": "Сентябрьская день.jpg",
        "night": "Сентябрьская ночь.jpg",
        "music": [
            {   
                "name": "woodpecker.mp3",
                "percent": 25
            },
            {   
                "name": "Neon.mp3",
                "percent": 100
            }
        ],
        "musicNight": [
            {
                "name": "night_sounds.mp3",
                "percent": 100
            }
        ],
        "navigation": [
            {
                "name": "severnayaStreet",
                "title": "Пойти на север",
                "luck": {
                    "percent": "13",
                    "timeOfDay": "night",
                    "name": "goose"
                }        
            },
            {
                "name": "town",
                "title": "Поехать в Дубраву"
            },
            {
                "name": "houseJeanette",
                "required": {
                    "timeOfDay": "day"
                },
                "title": "Пойти к Жанетт"
            },
            {
                "name": "southernForest",
                "title": "Пойти в лес"
            }
        ]
    },
    edgeNorthernForest: {
        "title": "Опушка Северного Леса",
        "original": "СЛ день.jpg",
        "night": "СЛ ночь.jpg",
        "sunset": "СЛ вечер.jpg",
        "sunrise": "СЛ вечер.jpg",
        "music": [
            {   
                "name": "beatiful_forest_and_water.mp3",
                "percent": 100
            }
        ],
        "navigation": [
            {
                "name": "severnayaStreet",
                "title": "Пойти в деревню",
                "luck": {
                    "percent": "13",
                    "timeOfDay": "night",
                    "name": "goose"
                }        
            },
            {
                "name": "lake",
                "title": "Пойти к озеру",
                "luck": {
                    "percent": "5",
                    "timeOfDay": ["day", "sunrise", "sunday"],
                    "name": "belasia"
                }        
            }
        ]
    },
    southernForest: {
        "title": "Южный лес",
        "original": "Южный Лес день.jpg",
        "night": "Южный Лес ночь.jpg",
        "sunset": "Южный Лес вечер.jpg",
        "sunrise": "Южный Лес вечер.jpg",
        "music": [
            {   
                "name": "happy_birds.mp3",
                "percent": 33
            },
            {   
                "name": "Field.mp3",
                "percent": 100
            }
        ],
        "musicNight": [
            {   
                "name": "Podzakat.mp3",
                "percent": 100
            },
            {   
                "name": "crow.mp3",
                "percent": 100
            }
        ],
        "musicSunset": [
            {   
                "name": "Podzakat.mp3",
                "percent": 100
            },
            {   
                "name": "crow.mp3",
                "percent": 100
            }
        ],
        "navigation": [
            {
                "name": "nearTreeHouse",
                "title": "Углубиться",
                "required": {
                    "timeOfDay": "day",
                    "special": {
                        "repairedHouse": "false"
                    }
        
                }
            },
            {
                "name": "sentabrskayaStreet",
                "title": "Вернуться в деревню"
            },
            {
                "name": "treeHouse",
                "title": "Домик на дереве",
                "required": {
                    "special": {
                        "repairedHouse": "true"
                    }
        
                }
            }
        ]
    },
    nearTreeHouse: {
        "title": "Старый домик на дереве",
        "original": "Поломанный.jpg",
        "special": [
            {
                "name": "repairedHouse",
                "original": "Починенный.jpg",
                "order": 0
            }
        ],
        "music": [
            {   
                "name": "happy_birds.mp3",
                "percent": 33
            },
            {   
                "name": "Field.mp3",
                "percent": 100
            }
        ],
        "musicNight": [
            {   
                "name": "Podzakat.mp3",
                "percent": 100
            },
            {   
                "name": "crow.mp3",
                "percent": 100
            }
        ],
        "musicSunset": [
            {   
                "name": "Podzakat.mp3",
                "percent": 100
            },
            {   
                "name": "crow.mp3",
                "percent": 100
            }
        ],
        "navigation": [
            {
                "name": "nearTreeHouse",
                "title": "Починить",
                "required": {
                    "special": {
                        "repairedHouse": "false"
                    }        
                },
                "action": "repairedHouse",
            },
            {
                "name": "southernForest",
                "title": "Вернуться"
            },
            {
                "name": "nearTreeHouse",
                "title": "Заползти внутрь",
                "required": {
                    "special": {
                        "repairedHouse": "true"
                    }        
                }
            }
        ]
    },
    treeHouse: {
        "title": "Домик на дереве",
        "original": "прибранный домик 2.jpg",
        "special": [
            {
                "name": "decoratedHouse",
                "original": "наряженный домик 4.jpg",
                "order": 0
            }
        ],
        "music": [
            {   
                "name": "Shkatulka_2.mp3",
                "percent": 100
            }
        ],
        "navigation": [
            {
                "name": "treeHouse",
                "title": "Украсить",
                "required": {
                    "special": {
                        "decoratedHouse": "false"
                    }        
                },
                "action": "decoratedHouse",
            },
            {
                "name": "southernForest",
                "title": "Покинуть"
            },
        ]
    },
    houseEnya: {
        "title": "Дом Ени",
        "original": "дом ени.jpg",
        "music": [
            {
                "name": "morning_birds.mp3",
                "percent": 20
            },
            {
                "name": "Neon.mp3",
                "percent": 100
            }
        ],
        "navigation": [
            {
                "name": "island",
                "title": "Позвать на остров"
            },
            {
                "name": "visitingYenya",
                "title": "Зайти в гости"
            },
            {
                "name": "lesnayaStreet",
                "title": "Вернуться в деревню"
            },
        ]
    },
    island: {
        "title": "Остров",
        "original": "лесная поляна с Еней.png",
        "night": "лесная поляна ночью.png",
        "music": [
            {
                "name": "Shkatulka.mp3",
                "percent": 100
            }
        ],
        "navigation": [
            {
                "name": "myRoom",
                "title": "Закончить путешествие"
            },
            {
                "name": "sky",
                "title": "Посмотреть в небо"
            }
        ]
    },
    visitingYenya: {
        "title": "В гостях у Ени",
        "original": "Еня 4.jpg",
        "music": [
            {
                "name": "Snow Mood (yenia).mp3",
                "percent": 100
            }
        ],
        "navigation": [
            {
                "name": "visitingYenya",
                "title": "Поболтать",
                "action": "talkEnya",
                "required": {
                    "special": {
                        "talkEnya": false
                    }
                },
        
            },
            {
                "name": "lesnayaStreet",
                "required": {
                    "special": {
                        "talkEnya": true
                    }
                },
                "title": "Покинуть Еню"
            }
        ]
    },
    sky: {
        "title": "Небо",
        "original": "Дневное небо.png",
        "night": "Nochnoe_nebo.png",
        "music": [
            {
                "name": "Shkatulka.mp3",
                "percent": 100
            }
        ]
    },
    houseJeanette: {
        "title": "Дом Жанетт",
        "original": "дом жанетт.jpg",
        "music": [
            {
                "name": "morning_birds.mp3",
                "percent": 20
            },
            {
                "name": "Neon.mp3",
                "percent": 100
            }
        ],
        "navigation": [
            {
                "name": "bushes",
                "title": "Немного погулять"
        
            },
            {
                "name": "lesnayaStreet",
                "title": "Вернуться в деревню"
            }
        ]
    },
    bushes: {
        "title": "Кустики",
        "original": "кустики.jpg",
        "music": [
            {
                "name": "Fling (janett).mp3",
                "percent": 100
            }
        ],
        "navigation": [
            {
                "name": "bushes",
                "title": "Поболтать",
                "action": "talkJeanette",
                "required": {
                    "special": {
                        "talkJeanette": false
                    }
                },
        
            },
            {
                "name": "lesnayaStreet",
                "required": {
                    "special": {
                        "talkJeanette": true
                    }
                },
                "title": "Попрощаться"
            }
        ]
    },
    lake: {
        "title": "Кустики",
        "original": "day_lake.jpg",
        "night": "evening_lake.jpg",
        "sunset": "evening_lake.jpg",
        "sunrise": "dawn_lake.jpg",
        "music": [
            {
                "name": "Navprostets.mp3",
                "percent": 100
            }
        ],
        "musicNight": [
            {
                "name": "Kolibelnaya.mp3",
                "percent": 100
            }
        ],
        "navigation": [
            {
                "name": "sopilka",
                "title": "Сыграть на сопилке"
            },
            {
                "name": "sky",
                "title": "Посмотреть в небо"
            },
            {
                "name": "edgeNorthernForest",
                "title": "Пойти в лес (опушка)"
            }
        ]
    },
    sopilka: {
        "original": "black.png",
        "music": [
            {
                "name": "Sopilka1.mp3",
                "percent": 100,
                "duration": 30000,
            }
        ]
    },
    belasia: {
        "title": "Кустики",
        "original": "Белашья 4.jpg",
        "music": [
            {
                "name": "Navprostets.mp3",
                "percent": 100
            }
        ],
        "musicNight": [
            {
                "name": "Kolibelnaya.mp3",
                "percent": 100
            }
        ],
        "navigation": [
            {
                "name": "visitingYenya",
                "title": "Помолчать вместе",
                "action": "talkBelasia",
                "required": {
                    "special": {
                        "talkBelasia": false
                    }
                },
        
            },
            {
                "name": "severnayaStreet",
                "required": {
                    "special": {
                        "talkBelasia": true
                    }
                },
                "title": "Вернутьсяв деревню"
            }
        ]
    },
    school: {
        "title": "Школа",
        "original": "порог школы 2.jpg",
        "music": [
            {
                "name": "MaxZim.mp3",
                "percent": 100
            }
        ],
        "navigation": [
            {
                "name": "thresholdSchool",
                "title": "Подойти ближе"
        
            },
            {
                "name": "sentabrskayaStreet",
                "title": "Вернуться в деревню"
            }
        ]
    },
    thresholdSchool: {
        "title": "Порог школы",
        "original": "порог школы стенгазета.jpg",
        "music": [
            {
                "name": "MaxZim.mp3",
                "percent": 100
            }
        ],
        "navigation": [
            {
                "name": "schoolFirstFloor",
                "title": "Зайти в школу"
        
            },
            {
                "name": "sentabrskayaStreet",
                "title": "Вернуться в деревню"
            }
        ]
    },
    schoolFirstFloor: {
        "title": "Школа",
        "original": "школа корридор.jpg",
        "music": [
            {
                "name": "MaxZim.mp3",
                "percent": 100
            }
        ],
        "navigation": [
            {
                "name": "schoolWindow",
                "title": "Посмотреть в окно"        
            },
            {
                "name": "schoolSecondFloor",
                "title": "Подняться на второй этаж"
            },
            {
                "name": "cafeteria",
                "title": "Перекусить"
            },
            {
                "name": "sentabrskayaStreet",
                "title": "Вернуться в деревню"
            }
        ]
    },
    schoolWindow: {
        "title": "Школа",
        "original": "окно.jpg",
        "music": [
            {
                "name": "MaxZim.mp3",
                "percent": 100
            }
        ],
        "navigation": [
            {
                "name": "thresholdSchool",
                "title": "Выйти на улицу"        
            },
            {
                "name": "cafeteria",
                "title": "Перекусить"
            },
        ]
    },
    schoolSecondFloor: {
        "title": "Школа",
        "original": "школа корридор 2.jpg",
        "music": [
            {
                "name": "MaxZim.mp3",
                "percent": 100
            }
        ],
        "navigation": [
            {
                "name": "schoolWindow",
                "title": "Посмотреть в окно"        
            },
            {
                "name": "schoolFirstFloor",
                "title": "Опуститься вниз"
            },
        ]
    },
    cafeteria: {
        "title": "Школа",
        "original": "кафетерий.jpg",
        "music": [
            {
                "name": "Buters.mp3",
                "percent": 100
            }
        ],
        "navigation": [
            {
                "name": "cafeteria",
                "title": "Поесть",
                "action": "ate",
                "required": {
                    "special": {
                        "ate": false
                    }
                },
        
            },
            {
                "name": "schoolFirstFloor",
                "title": "Уйти",
                "required": {
                    "special": {
                        "ate": true
                    }
                }
            }
        ]
    },
    bridge: {
        "title": "Мост",
        "original": "мост.jpg",
        "music": [
            {
                "name": "waterfall.mp3",
                "percent": 100,
            },
            {
                "name": "happy_birds.mp3",
                "percent": 100,
            }
        ]
    },
    town: {
        "title": "Мост",
        "original": "парк.jpg",
        "night": "дубрава.png",
        "music": [
            {
                "name": "Sny.mp3",
                "percent": 100,
            }
        ],
        "navigation": [
            {
                "name": "myRoom",
                "title": "Вернуться домой"
            },
        ]
    },
    goose: {
        "title": "Мост",
        "original": "парк.jpg",
        "night": "дубрава.png",
        "music": [
            {
                "name": "Klon.mp3",
                "percent": 100,
            }
        ],
        "navigation": [
            {
                "name": "sentabrskayaStreet",
                "title": "БЕЖАТЬ!!!"
            },
        ]
    },

}
export default locations;


// Переделать под объекты, имеющие имена
// А не массив безымянных объектов как сейчас

// The code below is to set undefined properties to the last defined property.
// It is optional and based on preference, so feel free to add or remove any function calls.

// setFutureProperties("bg");
// setFutureProperties("bgm");
// setFutureProperties("speaker");
// setFutureProperties("sprite");
// setFutureProperties("spriteLeft");
// setFutureProperties("spriteRight");

// function setFutureProperties(key) {
//   let cache = "";
//   for (let obj of story) {
//     if (obj[key] || obj[key] === "") cache = obj[key];
//     else obj[key] = cache;
    
//   }
// }
