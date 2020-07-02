import React from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

import { ReactComponent as Loading } from '../static/clock-loading.svg';

function loadingBlock(props) {
  let transitionDuration = props.transitionDuration ? props.transitionDuration : 400

  return (
    <div className="loading-block">
      <ReactCSSTransitionGroup
            transitionName={'transition-' + transitionDuration}
            transitionEnterTimeout={transitionDuration}
            transitionLeaveTimeout={transitionDuration}
          >
            { props.showLoading ? <Loading/> :  null }    
      </ReactCSSTransitionGroup>
    </div>
  );
}

export default loadingBlock;
