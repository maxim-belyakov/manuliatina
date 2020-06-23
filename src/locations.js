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
        "_id": "5ed4e1a6dd1b429f7d602219",
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
            },
            {
                "name": "cleanMyRoom1",
                "image": "корридор гг 2------1.jpg",
                "timeOfDay": "day",
                "order": 1
            },
            {
                "name": "cleanMyRoom2",
                "image": "корридор гг 2------2.jpg",
                "timeOfDay": "day",
                "order": 2
            },
            {
                "name": "cleanMyRoom3",
                "image": "корридор гг 2------3.jpg",
                "timeOfDay": "day",
                "order": 3
            },
            {
                "name": "cleanMyRoom4",
                "image": "корридор гг 2------4.jpg",
                "timeOfDay": "day",
                "order": 4
            }
        ],
        "navigation": [
            {
                "name": "hall",
                "required": {
                    "timeOfDay": "day"
                },
                "action": "cleanMyRoom4",
                "title": "Убрать пыль 4"
            },
            {
                "name": "hall",
                "required": {
                    "timeOfDay": "day"
                },
                "action": "cleanMyRoom3",
                "title": "Убрать пыль 3"
            },
            {
                "name": "hall",
                "required": {
                    "timeOfDay": "day"
                },
                "action": "cleanMyRoom2",
                "title": "Убрать пыль 2"
            },
            {
                "name": "hall",
                "required": {
                    "timeOfDay": "day"
                },
                "action": "cleanMyRoom1",
                "title": "Убрать пыль 1"
            },
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
                "timeout": true,
                "title": "Принять душ"
            },
            {
                "name": "lesnayaStreet",
                "title": "Выйти на улицу"
            }
        ]
    }
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
