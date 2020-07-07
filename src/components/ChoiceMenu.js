import React from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

function ChoiceMenu(props) {

  const goooseCheck = (props.index === 'goose') ? true : false

  function renderChoiceOptions(key, i) {

    let checkRequired = true;

    if (key.required) {

      // time checking
      if (key.required.timeOfDay && key.required.timeOfDay.indexOf(props.timeOfDay) === -1) checkRequired = false;
      
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
        onClick={props.onChoiceSelected}
        style={{ fontFamily: props.font }}
      >{key.title}</button>
    ) : null;
  }

  function containerChoice(choiceArray, justRender) {
    return (
      <ReactCSSTransitionGroup
        transitionName="default-transition"
        transitionEnterTimeout={500}
        transitionLeaveTimeout={500}
        transitionAppear={true}
      >
        {props.choicesExist ? 
          <div className={`overlay overlay-choices ${goooseCheck && justRender ? 'gooseDisabled' : ''}`}>
              <div className="choices-container">
                {props ? choiceArray.map(renderChoiceOptions) : null}
              </div>
          </div>
        :
          null
        }
        </ReactCSSTransitionGroup>
    )
  }

  function gooseChoice() {
    const run = [{
      "name": "sentabrskayaStreet",
      "title": "БЕЖАТЬ!!!"
    }]

    return (
      <ReactCSSTransitionGroup
        transitionName={'gooose'}
        transitionEnterTimeout={200000}
        transitionLeaveTimeout={400}
        transitionAppear={true}
      >
        {props.choicesExist ? 
          <div className="gooseChoices">
            {containerChoice(run)}
          </div>
          :
          null
        }
      </ReactCSSTransitionGroup>
    )
  }

  // cursor: not-allowed;

  return (
    <div>
      {containerChoice(props.choice, true)}
      {goooseCheck ? gooseChoice() : null}
    </div>
  );
}

export default ChoiceMenu;
