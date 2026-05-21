import React from "react";
import { t } from "../i18n";

function TitleScreen(props) {
  return (
    <div className="overlay" id="title-overlay">
      <div id="title-screen-header">
        <div id="logo">Some React Visual Novel</div>
        <ul id="menu">
          <li>
            <span onClick={props.beginStory}>{t("titleBegin", props.language)}</span>
          </li>
          <li>
            <span onClick={props.toggleLoadMenu}>{t("titleContinue", props.language)}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default TitleScreen;
