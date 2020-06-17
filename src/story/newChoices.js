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

    features: [
      {
        routeBegins: "showEffects",
        title: "Effects",
        nextIndex: 0
      },
      {
        routeBegins: "showTransitions",
        title: "Transitions",
        nextIndex: 0 // ???
      },
  
      {
        routeBegins: "showStoringChoices",
        title: "Storing choices for future use",
        resetStore: "true"
      },
      {
        routeBegins: "leave",
        title: "Leave"
      }
    ],

    test: [
      {
        store: "blockAffection",
        routeBegins: "hangOutWithBlock",
        title: "Yep.",
        nextIndex: 0
      },
      {
        routeBegins: "noHangOutWithBlock",
        title: "Nope.",
        nextIndex: 0
      }
    ]
  }
  
  export default newChoices;
  