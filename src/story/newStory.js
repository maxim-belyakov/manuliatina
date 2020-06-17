// bg
const myRoom = require("./bg/комната гг 3.jpg");
const hall = require("./bg/корридор гг 3.jpg");
const street = require("./bg/Лесная День.jpg");
// bgm
const field = require("./bgm/Field.mp3");

// speakers
const b = "Block"; // Представляет строку в пузырьке над текстовым полем. Также заключает текст в кавычки.

// sprites
// const bn = require("./sprites/block-neutral.png");
// const bh = require("./sprites/block-happy.png");
// const bp = require("./sprites/block-pout.png");

let location = {
    my_room: {
        "_id": "5ed4dcd2dd1b429f7d602212",
        "title": "Моя комната",
        "original": "комната гг 7.png",
        "sunrise": "комната гг 5.png",
        "sunset": "комната гг 5.png",
        "night": "комната гг 3.png",
        "music": [
            {
                "name": "Field.mp3",
                "percent": 100
            }
        ],
        "musicSunrise": [
            {
                "name": "Navprostets.mp3",
                "percent": 100
            }
        ],
        "musicSunset": [
            {
                "name": "Sunset.mp3",
                "percent": 100
            }
        ],
        "musicNight": [
            {
                "name": "Sunset.mp3",
                "percent": 100
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
                "name": "forest_song",
                "percent": 100
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
                "percent": 100
            }
        ]
    },
    lesnaya_street: {
        "_id": "5ed4e1a6dd1b429f7d602219",
        "title": "Улица “Лесная”",
        "original": "Лесная День",
        "night": "Лесная Ночь",
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
        "original": "корридор гг 3.png",
        "night": "корридор гг 5.png",
        "music": [
            {
                "name": "Navprostets.mp3",
                "percent": 100
            }
        ],
        "musicNight": [
            {
                "name": "Field.mp3",
                "percent": 100
            }
        ],
        "special": {
            "cleanMyRoom": {
                "original": "корридор гг 2.png",
                "order": 0
            }
        },
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
                "name": "my_room",
                "title": "Пойти в комнату"
            },
            {
                "name": "shower",
                "timeout": true,
                "title": "Принять душ"
            },
            {
                "name": "my_room",
                "title": "Выйти на улицу"
            }
        ]
    }
}

let story = [
  {
    routeBegins: "myRoom",
    bg: myRoom,
  },
  { 
    bgm: field,
    choicesExist: true, 
    choices: "myRoom"
  },


  // Hall
  { 
    routeBegins: "hall", 
    bg: hall,
    bgm: field,
  },
  { 
    choicesExist: true, 
    choices: "hall"
  },

  // Shower
  {
    routeBegins: "shower",
    jumpTo: "myRoom"
  },

  // Sleep
  {
    routeBegins: "sleep",
    jumpTo: "myRoom"
  },


  // Storing choices
  {
    routeBegins: "showStoringChoices",
    spriteLeft: "",
    text: "The user is jumped to a specific index depending on what choice is clicked on."
  },
  { 
    choicesExist: true,
    text: "Help?",
    choice: 'test'
  },
];

// The code below is to set undefined properties to the last defined property.
// It is optional and based on preference, so feel free to add or remove any function calls.

setFutureProperties("bg");
setFutureProperties("bgm");
setFutureProperties("speaker");
setFutureProperties("sprite");
setFutureProperties("spriteLeft");
setFutureProperties("spriteRight");

function setFutureProperties(key) {
  let cache = "";
  for (let obj of story) {
    if (obj[key] || obj[key] === "") cache = obj[key];
    else obj[key] = cache;

    // Переделать под объекты, имеющие имена
    // А не массив безымянных объектов как сейчас
  }
}

export default location;