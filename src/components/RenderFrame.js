import React from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { t } from "../i18n";

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
      <div className="viewPortrait" onClick={props.toggleGameMenu}>
        <div className="viewPortraitInner">
          <svg
            className="viewPortraitIcon"
            viewBox="0 0 120 120"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            focusable="false"
          >
            <g
              fill="none"
              stroke="currentColor"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="44" y="14" width="32" height="60" rx="4" transform="rotate(-35 60 44)" />
              <path d="M20 48 A40 40 0 0 1 96 26" />
              <polyline points="14,40 20,48 28,42" />
              <path d="M100 72 A40 40 0 0 1 24 94" />
              <polyline points="106,80 100,72 92,78" />
            </g>
          </svg>
          <p className="viewPortraitText">{t("rotateDevice", props.language)}</p>
        </div>
      </div>
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