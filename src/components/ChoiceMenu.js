import React from "react";

function ChoiceMenu(props) {

  function renderChoiceOptions(key, i) {

    let checkRequired = true;

    console.log('key.title', key.title)

    if (key.required) {

      // time checking
      if (key.required.timeOfDay && key.required.timeOfDay !== props.timeOfDay) checkRequired = false;
      
      // if we already did it
      if (props.specials.indexOf(key.action) > -1) checkRequired = false;

      // specials checking
      if (key.required.specials && props.specials) {

        for (let item of Object.keys(key.required.specials)) {
 
          if ((key.required.specials[item] && props.specials.indexOf(item) < 0) || 
          (!key.required.specials[item] && props.specials.indexOf(item) > -1)) checkRequired = false;
        }
      }

    }

    return checkRequired ? (
      <button
        type="button"
        className="choice-button ripple"
        name={key.name}
        id={i}
        key={i}
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
