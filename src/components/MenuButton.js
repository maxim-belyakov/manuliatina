import React from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

function Menu(props) {
  let transitionDuration = props.transitionDuration ? props.transitionDuration : 400

  return (
    <ReactCSSTransitionGroup
      transitionName={'transition-' + transitionDuration}
      transitionEnterTimeout={transitionDuration}
      transitionLeaveTimeout={transitionDuration}
    >
      {        
        (!props.showMenu && props.showMenuButton) ?
          <div className="menu-buttons-container">
            <div className="menu-buttons">
              <img draggable="false" alt="settings-button" className="settings-button" src={require("../static/settings-button.png")} onClick={props.toggleGameMenu} />
            </div>
          </div> 
        : 
        null
      }
      
    </ReactCSSTransitionGroup>    
  );
}

export default Menu;
