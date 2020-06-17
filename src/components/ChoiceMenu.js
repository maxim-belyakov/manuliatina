import React from "react";

function ChoiceMenu(props) {
  console.log('props.choices', props.choices)
  console.log('props.choice', props.choice)
  console.log('props.choiceOptions', props.choiceOptions)

  function renderChoiceOptions(key) {
    return (
      <input
        type="button"
        className="choice-button"
        // key={key.content}
        // alt={key.routeBegins}
        name={key.name}
        value={key.title}
        // id={key.resetStore}
        // placeholder={key.nextIndex}
        onClick={props.onChoiceSelected}
      />
    );
  }

  return <div className="overlay overlay-choices">
      <div className="choices-container">
        {props.choice.map(renderChoiceOptions)}
      </div>
    </div>;
}

export default ChoiceMenu;
