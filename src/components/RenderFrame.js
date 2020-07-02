import React,{ useLayoutEffect } from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

let errorCache

function RenderFrame(props) {
  let bgTransitionTime = props.index === 'begin' ? 0 : 2000;

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

  if (props.hasError[0] && errorCache !== props.hasError) hasError()

  return (
    <div className="zoom-frame">
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
      <ReactCSSTransitionGroup
        transitionName="scene-change"
        transitionEnterTimeout={bgTransitionTime}
        transitionLeaveTimeout={bgTransitionTime}
      >
        <img draggable="false" key={props.bg} alt={props.bg} className="bg" src={props.bg} />
      </ReactCSSTransitionGroup>
    </div>
  );
}

export default RenderFrame;