let locations = {
    begin: {
        "title": "Begin",
        "original": "black.png",
    },
    myRoom: {
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
                "title": "Выйти в коридор"
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
                "title": "Убрать пыль"
            },
            {
                "name": "shower",
                "timeout": true,
                "title": "Принять душ"
            },
            {
                "name": "lesnayaStreet",
                "title": "Выйти на улицу"
            },
            {
                "name": "myRoom",
                "title": "Пойти в комнату"
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
                "duration": 30500,
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
                "title": "Пойти на юг"
            },
            {
                "name": "severnayaStreet",
                "title": "Пойти на север",
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
                "title": "Пойти к Ене"
            },
            {
                "name": "school",
                "required": {
                    "timeOfDay": ["day"]
                },
                "title": "Пойти к школе"
            },
            {
                "name": "hall",
                "title": "Вернуться домой"
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
                "title": "Пойти в северный лес"
            },
            {
                "name": "sentabrskayaStreet",
                "title": "Пойти на юг"
            },
            {
                "name": "lesnayaStreet",
                "title": "Лесная улица"
            },
            {
                "name": "bridge",
                "required": {
                    "timeOfDay": ["day"]
                },
                "title": "Пойти к мосту"
            },        
        ]

    },
    sentabrskayaStreet: {
        "title": "Улица “Сентябрьская”",
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
                "title": "Пойти в южный лес"
            },
            {
                "name": "severnayaStreet",
                "title": "Пойти на север",
                "luck": {
                    "percent": "100",
                    "timeOfDay": ["night"],
                    "name": "goose"
                }        
            },
            {
                "name": "lesnayaStreet",
                "title": "Лесная улица"
            },
            {
                "name": "houseJeanette",
                "required": {
                    "timeOfDay": ["day"]
                },
                "title": "Пойти к Жанетт"
            },
            {
                "name": "town",
                "title": "Поехать в Дубраву"
            },
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
                "percent": 100,
                "duration": 77000,
            }
        ],
        "navigation": [
            {
                "name": "lake",
                "title": "Пойти к озеру",
                "luck": {
                    "percent": "35",
                    "timeOfDay": ["day", "sunrise", "sunday"],
                    "name": "belasia"
                }        
            },
            {
                "name": "severnayaStreet",
                "title": "Вернуться в деревню",
                "luck": {
                    "percent": "25",
                    "timeOfDay": ["night"],
                    "name": "goose"
                }        
            },
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
                "percent": 50,
                "duration": 21000,
            }
        ],
        "navigation": [
            {
                "name": "nearTreeHouse",
                "title": "Углубиться",
                "required": {
                    "timeOfDay": ["day"],
                    "specials": {
                        "repairedHouse": false
                    }
        
                }
            },
            {
                "name": "treeHouse",
                "title": "Домик на дереве",
                "required": {
                    "specials": {
                        "repairedHouse": true
                    }        
                }
            },
            {
                "name": "sentabrskayaStreet",
                "title": "Вернуться в деревню"
            },
        ]
    },
    nearTreeHouse: {
        "title": "Старый домик на дереве",
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
                "title": "Починить",
                "required": {
                    "specials": {
                        "repairedHouse": false
                    }        
                },
                "action": "repairedHouse",
            },
            {
                "name": "treeHouse",
                "title": "Заползти внутрь",
                "required": {
                    "specials": {
                        "repairedHouse": true
                    }        
                }
            },
            {
                "name": "southernForest",
                "title": "Вернуться"
            },
        ]
    },
    treeHouse: {
        "title": "Домик на дереве",
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
                "title": "Украсить",
                "required": {
                    "specials": {
                        "decoratedHouse": false
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
                "percent": 100,
                "duration": 93000,
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
                "title": "Поболтать",
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
                "percent": 100,
                "duration": 93000,
            }
        ],
        "navigation": [
            {
                "name": "prevLocation",
                "title": "Вернуться на землю"
            }
        ]
    },
    houseJeanette: {
        "title": "Дом Жанетт",
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
                "title": "Немного погулять"
        
            },
            {
                "name": "sentabrskayaStreet",
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
                "percent": 70,
                "duration": 210000,
            }
        ],
        "navigation": [
            {
                "name": "bushes",
                "title": "Поболтать",
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
                "title": "Попрощаться"
            }
        ]
    },
    lake: {
        "title": "Кустики",
        "original": "day_lake.jpg",
        "sunset": "evening_lake.jpg",
        "sunrise": "dawn_lake.jpg",
        "luck": {
            "percent": "20",
            "timeOfDay": ["day"],
            "original": "birds_lake.jpg"
        },
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
                "name": "sopilka",
                "title": "Сыграть на сопилке"
            },
            {
                "name": "sky",
                "title": "Посмотреть в небо"
            },
            {
                "name": "edgeNorthernForest",
                "title": "Вернуться в лес"
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
        "title": "Белашья",
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
                "title": "Помолчать вместе",
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
                "title": "Вернуться в деревню"
            }
        ]
    },
    school: {
        "title": "Школа",
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
                "percent": 100,
                "duration": 205000,
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
                "percent": 100,
                "duration": 205000,
            }
        ],
        "navigation": [
            {
                "name": "cafeteria",
                "title": "Перекусить"
            },
            {
                "name": "schoolWindow",
                "title": "Посмотреть в окно"        
            },
            {
                "name": "schoolSecondFloor",
                "title": "Подняться на второй этаж"
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
                "percent": 100,
                "duration": 205000,
            }
        ],
        "navigation": [            
            {
                "name": "prevLocation",
                "title": "Обратно в коридор"
            }
        ]
    },
    schoolSecondFloor: {
        "title": "Школа",
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
                "percent": 100,
                "duration": 178000,
            }
        ],
        "navigation": [
            {
                "name": "cafeteria",
                "title": "Поесть",
                "action": "ate",
                "required": {
                    "specials": {
                        "ate": false
                    }
                },
        
            },
            {
                "name": "schoolFirstFloor",
                "title": "Уйти",
                "required": {
                    "specials": {
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
        "title": "Мост",
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
                "title": "Вернуться домой"
            },
        ]
    },
    goose: {
        "title": "Мост",
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
                "title": "Пойти в северный лес"
            },
            {
                "name": "sentabrskayaStreet",
                "title": "Пойти на юг"
            },
            {
                "name": "lesnayaStreet",
                "title": "Лесная улица"
            }
        ]
    },
    theend: {
        "title": "Конец",
        "original": "theend.jpg",
        "navigation": [
            {
                "name": "myRoom",
                "title": "Вас скушали :( Начать заново"
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
