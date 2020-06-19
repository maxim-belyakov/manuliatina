import React,{ useLayoutEffect } from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

let errorCache

function RenderFrame(props) {

  function bgTransitionTime(key) { return 2000; }
  
  function spriteTransitionTime(key) {
    if (
      props[key] === "move-left" ||
      props[key] === "move-left-far" ||
      props[key] === "move-right" ||
      props[key] === "move-right-far" ||
      props[key] === "from-left-leave-right" ||
      props[key] === "from-right-leave-left"
    ) return 1200;
    else if (props[key] === "shake") return 700;
    else if (props[key] === "bounce") return 400;
    else return 250;
  }

  const hasError = () => {

    errorCache = props.hasError
    
    toast.error(props.hasError[1],{
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: 0,
    });

  }

  if (props.hasError[0] && errorCache != props.hasError) hasError()

  return (
    <div onClick={props.setNextFrame} className="zoom-frame">
      <ReactCSSTransitionGroup
        transitionName={props.bgTransition || "scene-change"}
        transitionEnterTimeout={bgTransitionTime("bgTransition")}
        transitionLeaveTimeout={bgTransitionTime("bgTransition")}
      >

        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />

        <img draggable="false" key={props.bg} alt={props.bg} className="bg" src={props.bg} />

        <ReactCSSTransitionGroup
          className="sprite-center-parent"
          transitionName={props.spriteTransition || "sprite"}
          transitionEnterTimeout={spriteTransitionTime("spriteTransition")}
          transitionLeaveTimeout={spriteTransitionTime("spriteTransition")}
        >
          <img 
            draggable="false" 
            key={props.sprite} 
            alt={props.sprite} 
            className={"sprite " + props.spriteEffect} 
            src={props.sprite} 
          />
        </ReactCSSTransitionGroup>

        <ReactCSSTransitionGroup
          transitionName={props.spriteLeftTransition || "sprite"}
          transitionEnterTimeout={spriteTransitionTime("spriteLeftTransition")}
          transitionLeaveTimeout={spriteTransitionTime("spriteLeftTransition")}
        >
          <img
            draggable="false"
            key={props.spriteLeft + "left"}
            alt={props.spriteLeft}
            className={"sprite left " + props.spriteLeftEffect}
            src={props.spriteLeft}
          />
        </ReactCSSTransitionGroup>

        <ReactCSSTransitionGroup
          transitionName={props.spriteRightTransition || "sprite"}
          transitionEnterTimeout={spriteTransitionTime("spriteRightTransition")}
          transitionLeaveTimeout={spriteTransitionTime("spriteRightTransition")}
        >
          <img
            draggable="false"
            key={props.spriteRight + "right"}
            alt={props.spriteRight}
            className={"sprite right " + props.spriteRightEffect}
            src={props.spriteRight}
          />
        </ReactCSSTransitionGroup>

      </ReactCSSTransitionGroup>
      
      {props.text && props.textBoxShown ? (
        <div className="text-box" style={{ fontFamily: props.font }}>
          {props.speaker ? <div className="speaker"> {props.speaker} </div> : null}
          <div className="text">{props.speaker ? `"${props.text}"` : props.text}</div>
        </div>
      ) : null}
    </div>
  );
}

export default RenderFrame;