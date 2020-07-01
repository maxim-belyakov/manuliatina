import React from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

function Menu(props) {
  function bgTransitionTime(key) { return 2000; }

  return (
    <div className="menu-buttons-container">
      <div className="menu-buttons">
        <img draggable="false" alt="settings-button" className="settings-button" src={require("../static/settings-button.png")} onClick={props.toggleGameMenu} />
      </div>
    </div>
  );
}

export default Menu;
