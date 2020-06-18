// Dependencies
import React, { Component, useState } from "react";
import Sound from "react-sound";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import Fullscreen from "react-full-screen";
import WheelReact from "wheel-react";

// API
// import story from "./story/story";
// import choices from "./story/choices";
import newStory from "./story/newStory";

// Components
// import TitleScreen from "./components/TitleScreen"; // DISABLE
import Backlog from "./components/Backlog";
import ChoiceMenu from "./components/ChoiceMenu";
import ConfigMenu from "./components/ConfigMenu";
import RenderFrame from "./components/RenderFrame";
import MenuButtons from "./components/MenuButtons";
import SaveLoadMenu from "./components/SaveLoadMenu";

// CSS
import "./styles/config.css";
import "./styles/container.css";
import "./styles/backlog.css";
import "./styles/choicesoverlay.css";
import "./styles/effects.css";
import "./styles/menubuttons.css";
import "./styles/saveloadmenu.css";
import "./styles/sprites.css";
import "./styles/textbox.css";
import "./styles/titlescreen.css";
import "./styles/transitions.css";

const INITIAL_STATE = {
  bgmVolume: 80,
  soundEffectVolume: 90,
  voiceVolume: 100,
  font: "Trebuchet MS",
  isFull: false,
  index: 'myRoom',
  // choicesStore: {},
  // stateHistory: [],
  // choicesHistory: [],
  // choicesIndexHistory: [],
  // indexHistory: [],
  choicesExist: false,
  configMenuShown: false,
  titleScreenShown: true,
  frameIsRendering: false,
  backlogShown: false,
  // textBoxShown: true,
  saveMenuShown: false,
  loadMenuShown: false,
  // isSkipping: false,
  // newChoices: newChoices,
  hasError: [false, ''],
};

class App extends Component {
  constructor() {
    super();
    this.setFrame = this.setFrame.bind(this);
    this.toggleBacklog = this.toggleBacklog.bind(this);
    this.state = INITIAL_STATE;

    WheelReact.config({
      down: () => {
        if (
          !this.state.backlogShown &&
          !this.state.choicesExist &&
          !this.state.loadMenuShown &&
          !this.state.saveMenuShown &&
          !this.state.titleScreenShown &&
          !this.state.configMenuShown
        ) {
          // this.toggleBacklog();
        }
      }
    });
  }

  componentDidMount() {
    // window.addEventListener("beforeunload", e => (e.returnValue = "Unsaved changes will be lost."));
  }

  setFrameFromChoice(choice) {

    console.log('setFrameFromChoice!!')

    this.setFrame(choice);
    
  }

  setFrame(index) {

    if (!newStory[index]) {
      this.setState({ hasError: [true, 'Найдена локация, которой нет на карте локаций: ' + index] });

      index = 'myRoom'
    }
    // else if (index <= -1) index = 0;
    
    // Updates story with new index

    console.log('index setFrame', index)

    this.setState({
      index: index,
      bg: require("../public/locations/" + newStory[index].original),
      bgm: require("../public/music/" + newStory[index].music[0].name),
      choicesExist: !!newStory[index].navigation,
    });
  }

  renderFrame() {
    return (
      <RenderFrame
        font={this.state.font}
        // setNextFrame={this.setNextFrame.bind(this)}
        bg={this.state.bg}
        // sprite={this.state.sprite}
        // spriteEffect={this.state.spriteEffect}
        // spriteTransition={this.state.spriteTransition}
        // spriteLeft={this.state.spriteLeft}
        // spriteLeftEffect={this.state.spriteLeftEffect}
        // spriteLeftTransition={this.state.spriteLeftTransition}
        // spriteRight={this.state.spriteRight}
        // spriteRightEffect={this.state.spriteRightEffect}
        // spriteRightTransition={this.state.spriteRightTransition}
        // speaker={this.state.speaker}
        // text={this.state.text}
        // textBoxShown={this.state.textBoxShown}
        bgTransition={this.state.bgTransition}
        hasError={this.state.hasError}
      />
    );
  }

  // setChoice() {
  //   // Makes sure the index is within the Choices array // TODO: Make it for new logic

  //   // let choices
  //   // if (choicesIndex >= choices.length) choicesIndex = choices.length - 1;
  //   // else if (choicesIndex <= -1) choicesIndex = 0;

  //   const currentIndex = this.state.index;

  //   console.log('newStory[currentIndex].choice',newStory[currentIndex].choice)

  //   console.log(`currentIndex ${currentIndex}`)

  //   this.setState({
  //     choice: newStory[currentIndex].choice,
  //     // choicesIndex: choicesIndex,
  //     // choiceOptions: choices[choicesIndex].choices,
  //   });
  // }

  handleChoiceSelected(event) {

    // this.stopSkip();
    this.setFrameFromChoice(event.currentTarget.name);
    
    // this.setChoice();

    // let nextIndex = 0;
    // if (event.currentTarget.id) this.setState({ choicesStore: {} });


    // if (event.currentTarget.placeholder) nextIndex = parseInt(event.currentTarget.placeholder, 10);
    // else nextIndex = this.state.choicesIndex + 1;
  }

  renderChoiceMenu() {

    const currentIndex = this.state.index;

    const choice = newStory[currentIndex].navigation ? newStory[currentIndex].navigation : []; // TODO: Wrong line

    console.log('currentIndex', currentIndex)

    return (
      <ChoiceMenu 
        onChoiceSelected={this.handleChoiceSelected.bind(this)} 
        choice={choice}
        // choiceOptions={this.state.choiceOptions}
        // choices={this.state.newChoices}
      />
    );
  }

  toggleConfigMenu() {
    if (this.state.saveMenuShown) this.setState({ saveMenuShown: false });
    if (this.state.loadMenuShown) this.setState({ loadMenuShown: false });
    if (this.state.backlogShown) this.setState({ backlogShown: false });
    this.setState(prevState => ({
      configMenuShown: !prevState.configMenuShown
    }));
  }

  toggleBacklog() {
    if (this.state.configMenuShown) {
      this.setState({ configMenuShown: false });
    }
    if (this.state.saveMenuShown) {
      this.setState({ saveMenuShown: false });
    }
    if (this.state.loadMenuShown) {
      this.setState({ loadMenuShown: false });
    }
    this.setState(prevState => ({
      backlogShown: !prevState.backlogShown
    }));
  }

  toggleTextBox() {
    this.setState(prevState => ({
      textBoxShown: !prevState.textBoxShown
    }));
  }

  toggleSaveMenu() {
    if (this.state.configMenuShown) {
      this.setState({ configMenuShown: false });
    }
    if (this.state.loadMenuShown) {
      this.setState({ loadMenuShown: false });
    }
    if (this.state.backlogShown) {
      this.setState({ backlogShown: false });
    }
    this.setState(prevState => ({
      saveMenuShown: !prevState.saveMenuShown
    }));
  }

  toggleLoadMenu() {
    if (this.state.configMenuShown) {
      this.setState({ configMenuShown: false });
    }
    if (this.state.saveMenuShown) {
      this.setState({ saveMenuShown: false });
    }
    if (this.state.backlogShown) {
      this.setState({ backlogShown: false });
    }
    this.setState(prevState => ({
      loadMenuShown: !prevState.loadMenuShown
    }));
  }

  // startSkip() {
  //   const intervalTime = prompt("How many milliseconds per frame would you like?", "75");
  //   if (intervalTime > 0) {
  //     this.setState({
  //       isSkipping: true
  //     });
  //     this.textSkipper = setInterval(this.setNextFrame.bind(this), intervalTime);
  //   }
  // }

  // stopSkip() {
  //   clearInterval(this.textSkipper);
  //   this.setState({
  //     isSkipping: false
  //   });
  // }

  saveSlot(number) {
    var d = new Date();
    var datestring =
      ("0" + (d.getMonth() + 1)).slice(-2) +
      "-" +
      ("0" + d.getDate()).slice(-2) +
      "-" +
      d.getFullYear() +
      " " +
      ("0" + d.getHours()).slice(-2) +
      ":" +
      ("0" + d.getMinutes()).slice(-2);

    localStorage.setItem("time" + number, datestring); // saves the current time to the save slot
    localStorage.setItem(number, JSON.stringify(this.state, (k, v) => (v === undefined ? null : v)));
    this.setState(this.state);
  }

  loadSlot(number) {
    this.setState(JSON.parse(localStorage.getItem(number)));
    this.setState({
      saveMenuShown: false
    }); // save menu to false and not load because save is true when saving
  }

  beginStory() {
    // this.stopSkip();
    this.setState({
      titleScreenShown: false,
      frameIsRendering: true
    });
    this.setFrame('myRoom');
    this.setState({
      index: 'myRoom',
      // choiceOptions: choices[0].choices,
      choice: newStory.myRoom.navigation,
      hasError: [false, '']
    });
  }

  titleScreen() {
    this.beginStory()
    // return <TitleScreen beginStory={this.beginStory.bind(this)} toggleLoadMenu={this.toggleLoadMenu.bind(this)} />;  // DISABLE
  }

  configMenu() {
    return (
      <ConfigMenu
        changeFont={newFont => this.setState({ font: newFont.label })}
        font={this.state.font}
        bgmVolume={this.state.bgmVolume}
        soundEffectVolume={this.state.soundEffectVolume}
        voiceVolume={this.state.voiceVolume}
        bgmVolumeChange={value => this.setState({ bgmVolume: value })}
        soundEffectVolumeChange={value => this.setState({ soundEffectVolume: value })}
        voiceVolumeChange={value => this.setState({ voiceVolume: value })}
        toggleConfigMenu={this.toggleConfigMenu.bind(this)}
      />
    );
  }

  saveMenu() {
    return (
      <SaveLoadMenu
        choicesExist={this.state.choicesExist}
        choiceOptions={this.state.choiceOptions}
        // newChoices={this.state.newChoices}
        confirmationMessage="Overwrite save?"
        currentTime={this.state.currentTime}
        menuType="Save"
        executeSlot={this.saveSlot.bind(this)}
        toggleMenu={this.toggleSaveMenu.bind(this)}
        speaker={this.state.speaker}
        text={this.state.text}
        // textBoxShown={this.state.textBoxShown}
      />
    );
  }

  loadMenu() {
    return (
      <SaveLoadMenu
        choicesExist={this.state.choicesExist}
        choiceOptions={this.state.choiceOptions}
        // newChoices={this.state.newChoices}
        confirmationMessage="Load save?"
        currentTime={this.state.currentTime}
        menuType="Load"
        executeSlot={this.loadSlot.bind(this)}
        toggleMenu={this.toggleLoadMenu.bind(this)}
        speaker={this.state.speaker}
        text={this.state.text}
        // textBoxShown={this.state.textBoxShown}
      />
    );
  }

  renderMenuButtons() {
    return (
      <MenuButtons
        menuButtonsShown={this.state.menuButtonsShown}
        // setNextFrame={this.setNextFrame.bind(this)}
        toggleSaveMenu={this.toggleSaveMenu.bind(this)}
        toggleLoadMenu={this.toggleLoadMenu.bind(this)}
        saveSlot={this.saveSlot.bind(this)}
        loadSlot={this.loadSlot.bind(this)}
        saveMenuShown={this.state.saveMenuShown}
        loadMenuShown={this.state.loadMenuShown}
        toggleConfigMenu={this.toggleConfigMenu.bind(this)}
        configMenuShown={this.state.configMenuShown}
        toggleBacklog={this.toggleBacklog.bind(this)}
        toggleTextBox={this.toggleTextBox.bind(this)}
        toggleFullscreen={() => this.setState({ isFull: true })}
        // textBoxShown={this.state.textBoxShown}
        backlogShown={this.state.backlogShown}
        // startSkip={this.startSkip.bind(this)}
        // stopSkip={this.stopSkip.bind(this)}
        isSkipping={this.state.isSkipping}
      />
    );
  }

  backlog() {
    return (
      <Backlog
        index={this.state.index}
        setFrame={this.setFrame}
        // setChoice={this.setChoice.bind(this)}
        toggleBacklog={this.toggleBacklog}
        // choicesStore={this.state.choicesStore}
        // choicesHistory={this.state.choicesHistory}
        // choicesIndexHistory={this.state.choicesIndexHistory}
        // indexHistory={this.state.indexHistory}
        setChoicesHistory={choicesHistory => this.setState({ choicesHistory: choicesHistory })}
        setIndexHistory={indexHistory => this.setState({ indexHistory: indexHistory })}
        setChoicesStore={choicesStore => this.setState({ choicesStore: choicesStore })}
      />
    );
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.index < this.state.index) {
      this.setState({
        // choicesHistory: [...this.state.choicesHistory, prevState.choicesStore],
        // choicesIndexHistory: [...this.state.choicesIndexHistory, prevState.choicesIndex],
        // indexHistory: [...this.state.indexHistory, prevState.index]
      });
    }
  }

  playBGM() {
    return <Sound url={this.state.bgm} volume={this.state.bgmVolume} playStatus={Sound.status.PLAYING} loop={true} />;
  }
  playSoundEffect() {
    return (
      <Sound url={this.state.soundEffect} volume={this.state.soundEffectVolume} playStatus={Sound.status.PLAYING}/>

    );
  }
  playVoice() {
    return <Sound url={this.state.voice} volume={this.state.voiceVolume} playStatus={Sound.status.PLAYING} />;
  }

  render() {
    let zoomMultiplier = 0;

    if (window.innerWidth * 1 / window.innerHeight <= 1280 * 1 / 720) zoomMultiplier = window.innerWidth * 1 / 1280;
    else zoomMultiplier = window.innerHeight * 1 / 720;

    return (
      <div {...WheelReact.events} style={this.state.isFull ? { zoom: zoomMultiplier } : null}>
        <Fullscreen enabled={this.state.isFull} onChange={isFull => this.setState({ isFull })}>
          <ReactCSSTransitionGroup
            className="container"
            component="div"
            transitionName="menu"
            transitionEnterTimeout={400}
            transitionLeaveTimeout={400}
          >
            {this.state.titleScreenShown ? this.titleScreen() : null}
            {this.state.frameIsRendering ? this.renderFrame() : null}
            {/* GUI menu buttons */}
            {this.state.configMenuShown ? this.configMenu() : null}
            {this.state.saveMenuShown ? this.saveMenu() : null}
            {this.state.loadMenuShown ? this.loadMenu() : null}
            {this.state.backlogShown ? this.backlog() : null}
            {/* {this.state.frameIsRendering ? this.renderFrame() : null} */}
            {this.state.choicesExist ? this.renderChoiceMenu() : null} 
          </ReactCSSTransitionGroup>
        </Fullscreen>
        {!this.state.titleScreenShown ? this.renderMenuButtons() : null}
        {this.state.bgm ? this.playBGM() : null}
        {this.state.soundEffect ? this.playSoundEffect() : null}
        {this.state.voice ? this.playVoice() : null}
      </div>
    );
  }
}

export default App;
