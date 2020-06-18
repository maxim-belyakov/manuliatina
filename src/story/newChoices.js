 let newChoices = {

    myRoom: [
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
    ],

    hall: [
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
  
  export default newChoices;
  