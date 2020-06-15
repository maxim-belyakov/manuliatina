// bg
const myRoom = require("./bg/комната гг 3.jpg");
// bgm
const field = require("./bgm/Field.mp3");

// speakers
const b = "Block";

// sprites
const bn = require("./sprites/block-neutral.png");
const bh = require("./sprites/block-happy.png");
const bp = require("./sprites/block-pout.png");

let story = [
  {
    bg: myRoom,
    // sprite: bn,
    speaker: b,
    text: "In this demo, we'll go over through the majority of the features that this application offers."
  },
  { 
    speaker: "", 
    bgm: field,
    // text: 'soundEffect: require("./sounds/jump.mp3")',
    // soundEffect: require("./sounds/jump.mp3")
  },
  { 
    choicesExist: true, 
    receiveJump: "features"
  },
  
  // Effects
  { 
    routeBegins: "showEffects", 
    sprite: bh, 
    text: "There are some preset effects at the moment." 
  },
  {
    text: "Just write the class in the effects.css file and set the effect value to that in a string.",
    jumpTo: "features"
  },

  // Transitions
  {
    routeBegins: "showTransitions",
    sprite: "",
    text: "There are background transitions and sprite transitions."
  },
  { speaker: b, text: "That's about it for now.", jumpTo: "features" },

  // Storing choices
  {
    spriteLeft: "",
    routeBegins: "showStoringChoices",
    text: "The user is jumped to a specific index depending on what choice is clicked on."
  },
  { choicesExist: true, text: "Help? (Refer to choices.js to see the properties.)" },


  // helpBlock
  {
    routeBegins: "helpBlock",
    speaker: "nashkenazy",
    text: "No problem."
  },
  {
    sprite: bh,
    speaker: b,
    text: "Thanks.",
    jumpTo: "blockHelp"
  },

  // noHelpBlock
  {
    routeBegins: "noHelpBlock",
    speaker: "nashkenazy",
    text: "Nah, I'm good."
  },
  {
    speaker: "",
    sprite: "",
    text: "The block trips and falls.",
    jumpTo: "blockHelp"
  },

  // blockHelp
  {
    receiveJump: "blockHelp",
    text: "(Back to common route) Some weeks pass."
  },
  { text: "Block asked me to hang out at his place." },
  { text: "Did I accept?", choicesExist: true },


  // hangOutWithBlock
  {
    routeBegins: "hangOutWithBlock",
    text: "It was fun. We ate some pizza and watched a movie.",
    jumpTo: "blockHangOut"
  },

  // noHangOutWithBlock
  {
    routeBegins: "noHangOutWithBlock",
    text: "I said I was busy, but I just didn't feel like it.",
    jumpTo: "blockHangOut"
  },
  {
    receiveJump: "blockHangOut",
    text: "(Back to common route) I haven't seen Block for a few years now."
  },
  { text: "I text him to see how he's doing.", jumpToBecauseStore: "blockAffection" },
  
  // Goes to next index if the user's choices do not fulfill any `receiveJumpBecauseStore` requirements.
  { text: "blockAffection score: 0. (Technically anything not 1 or 2)", jumpTo: "skitDone" },
  {
    receiveJumpBecauseStore: ["blockAffection", 1],
    text: "A few hours later, he texts back."
  },
  {
    speaker: b,
    text: "Sorry, I've been a bit busy organizing my wedding."
  },
  { text: "I forgot to send you a letter, but would you like to come?" },
  { speaker: "", text: "blockAffection score: 1.", jumpTo: "skitDone" },
  {
    receiveJumpBecauseStore: ["blockAffection", 2],
    text: "He texts back immediately."
  },
  {
    speaker: b,
    text: "Hey, nashkenazy! It's been so long since we'd last talked."
  },
  { text: "I was thinking about making you my best man for a wedding I've been planning." },
  { text: "I know it's a bit sudden, but you're the only one I think is best for the role." },
  { text: "blockAffection score: 2.", jumpTo: "skitDone" },
  {
    receiveJump: "skitDone",
    text: "(Done with skit) It takes a bit more work to get the choices done, but it should work out in the end.",
    jumpTo: "features"
  },
  {
    routeBegins: "leave",
    sprite: bh,
    spriteEffect: "shake",
    text: "Thank you for trying out the demo.",
    jumpTo: "title-screen"
  }
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
    if (obj[key] || obj[key] === "") {
      cache = obj[key];
    } else {
      obj[key] = cache;
    }
  }
}
export default story;
