import React from "react";
import { ReactComponent as Loading } from '../static/clock-loading.svg';

function loadingBlock(props) {

  return (
    <div className="loading-block">
      <Loading/>
    </div>
  );
}

export default loadingBlock;
