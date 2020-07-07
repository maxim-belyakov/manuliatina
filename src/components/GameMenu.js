import React, { Component } from "react";
import Slider from "react-rangeslider";
import Select from "react-select";

// import KeyHandler, { KEYDOWN, KEYUP } from "react-key-handler";

import "react-rangeslider/lib/index.css";

class GameMenu extends Component {
  constructor() {
    super(); //constructor init

    this.state = {
      audioShown: false,
      textShown: false
    };

    this.toggleAudio = this.toggleAudio.bind(this);
    this.toggleText = this.toggleText.bind(this);
  }

  toggleAudio() {
    if (!this.state.audioShown) {
      this.setState({
        audioShown: true,
        textShown: false
      });
    }
  }

  toggleText() {
    if (!this.state.textShown) {
      this.setState({
        textShown: true,
        audioShown: false
      });
    }
  }

  category(name, shown, handleClick) {
    return (
      <button className={"config-btn config-btn--stripe " + (shown ? "active" : null)} onClick={handleClick}>
        {name}
      </button>
    );
  }

  slider(type, value, onChangeFunction) {
    return (
      <div className="config-container slider-container">
        <span>{type}</span>
        <Slider value={value} onChange={onChangeFunction} />
      </div>
    );
  }

  render() {
    const { audioShown, textShown } = this.state;
    const {
      font,
      changeFont,
      bgmVolume,
      bgmVolumeChange,
      // soundEffectVolume,
      // soundEffectVolumeChange,
      // voiceVolume,
      // voiceVolumeChange,
      toggleGameMenu,
      toggleSaveMenu,
      toggleLoadMenu,
      saveMenu,
      loadMenu,
      toggleFullscreen
    } = this.props;
    const options = [
      { label: "Arial" },
      { label: "Arial Black" },
      { label: "Courier New" },
      { label: "Georgia" },
      { label: "Helvetica" },
      { label: "Impact" },
      { label: "Lucida Sans Unicode" },
      { label: "Times" },
      { label: "Trebuchet MS" },
      { label: "Verdana" }
    ];

    for (let i = 0; i < options.length; i++) {
      options[i].value = options[i].label;
    }

    const styles = {
      option: (styles, { data }) => {
        return {
          ...styles,
          fontFamily: data.label
        };
      }
    };

    // function handleToggles(event, value, toggle) {
    //   return <KeyHandler keyEventName={event} keyValue={value} onKeyHandle={toggle} />;
    // }

    return (
      <div className="overlay game-menu" id="config-overlay" style={{ fontFamily: font }}>
        <ul className="header">
          <li>
            <span>Меню</span>
          </li>
          <li className="exit-button" onClick={toggleGameMenu}>
            <button >&times;</button>
          </li>
        </ul>
        <ul>
          {/* {handleToggles(KEYDOWN, " ", props.toggleTextBox)}
          {handleToggles(KEYDOWN, "Control", props.setNextFrame)}
          {handleToggles(KEYUP, "Enter", props.setNextFrame)} */}

          {this.category("Сохранить", saveMenu, toggleSaveMenu)}
          {this.category("Загрузить", loadMenu, toggleLoadMenu)}
          {this.category("Аудио", audioShown, this.toggleAudio)}
          {this.category("Текст", textShown, this.toggleText)}
          {this.category("Полный экран", null, toggleFullscreen)}

          {/* <button onClick={toggleSaveMenu}>{loadMenu ? "Hide Saves" : "Save"}</button> */}
          {/* <button onClick={toggleLoadMenu}>{loadMenu ? "Hide Loads" : "Load"}</button> */}
          {/* <button onClick={toggleFullscreen} style={{ float: "right" }}>Fullscreen</button> */}
        </ul>
        <div id="config-body">
          {audioShown ? (
            <div>
              {this.slider("Music Volume", bgmVolume, bgmVolumeChange)}
              {/* {this.slider("Voice", voiceVolume, voiceVolumeChange)} */}
              {/* {this.slider("Sound Effect", soundEffectVolume, soundEffectVolumeChange)} */}
            </div>
          ) : null}
          {textShown ? (
            <div className="config-container font-container">
              Font Styles
              <Select
                options={options}
                styles={styles}
                onChange={changeFont}
                defaultValue={options[options.findIndex(obj => obj.label === font)]}
              />
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}

export default GameMenu;
