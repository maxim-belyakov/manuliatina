import React from "react";

function ChoiceMenu(props) {

  function renderChoiceOptions(key) {
    return (
      <button
        type="button"
        className="choice-button ripple"
        key={key.name}
        // alt={key.routeBegins}
        name={key.name}
        // id={key.resetStore}
        // placeholder={key.nextIndex}
        onClick={props.onChoiceSelected}
      >{key.title}</button>
    );
  }

  return <div className="overlay overlay-choices">
      <div className="choices-container">
        {props.choice.map(renderChoiceOptions)}
      </div>
    </div>;
}

export default ChoiceMenu;
