import React from "react";

function ChoiceMenu(props) {

  function renderChoiceOptions(key, i) {
    return (
      <button
        type="button"
        className="choice-button ripple"
        name={key.name}
        id={i}
        key={key.name}
        title={key.title}
        // alt={key.routeBegins}
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
