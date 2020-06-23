import React from "react";

function ChoiceMenu(props) {

  function renderChoiceOptions(key, i, c) {

    let checkRequired = true;

    if (key.required) {

      // time checking
      if (key.required.timeOfDay && key.required.timeOfDay !== props.timeOfDay) checkRequired = false;

      // specials checking
      if (key.required.special && props.specials) { 
        for (let i of Object.keys(key.required.special)) {
          let item = Object.keys(key.required.special)[i]

          if ((key.required.special[i] === true && props.specials.indexOf(item) < 0) || 
          (key.required.special[i] === false && props.specials.indexOf(i) > -1)) checkRequired = false;
        }
      }

    }

    return checkRequired ? (
      <button
        type="button"
        className="choice-button ripple"
        name={key.name}
        id={i}
        key={key.name}
        title={key.title}
        onClick={props.onChoiceSelected}
      >{key.title}</button>
    ) : null;
  }

  return <div className="overlay overlay-choices">
      <div className="choices-container">
          {props ? props.choice.map(renderChoiceOptions) : null}
      </div>
    </div>;
}

export default ChoiceMenu;
