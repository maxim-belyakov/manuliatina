// Dependencies
import React, { Component } from "react";
import Sound from "react-sound";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import Fullscreen from "react-full-screen";
import WheelReact from "wheel-react";

// API
import locations from "./locations";

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
  previousIndex: '',
  index: 'myRoom',
  choicesExist: false,
  configMenuShown: false,
  titleScreenShown: true,
  frameIsRendering: false,
  backlogShown: false,
  saveMenuShown: false,
  loadMenuShown: false,
  hasError: [false, ''],
  spicials: []
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

    this.setFrame(choice);
    
  }

  setFrame(index) {

    const previousIndex = this.state.index.slice()

    if (!locations[index]) {
      this.setState({ hasError: [true, 'Найдена локация, которой нет на карте локаций: ' + index] });
      index = 'myRoom'
    }

    this.setState({
      index: index,
      previousIndex: previousIndex,
      bg: require("../public/locations/" + locations[index].original),
      bgm: require("../public/music/" + locations[index].music[0].name),
      bgm2: locations[index].music[1] ? require("../public/music/" + locations[index].music[1].name) : null,
      choicesExist: !!locations[index].navigation,
    });

    // TIMEOUT
    if (!locations[index].navigation) {
      console.log('!this.state.choicesExist !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!', !this.state.choicesExist)
      setTimeout(() => { this.setFrame(previousIndex) }, 3000);
    }
  }

  renderFrame() {
    return (
      <RenderFrame
        font={this.state.font}
        bg={this.state.bg}
        bgTransition={this.state.bgTransition}
        hasError={this.state.hasError}
      />
    );
  }

  handleChoiceSelected(event) {

    this.setFrameFromChoice(event.currentTarget.name);
    
  }

  renderChoiceMenu() {

    const currentIndex = this.state.index;

    const choice = locations[currentIndex].navigation ? locations[currentIndex].navigation : []; // TODO: Wrong line

    console.log('currentIndex', currentIndex)

    return (
      <ChoiceMenu 
        onChoiceSelected={this.handleChoiceSelected.bind(this)} 
        choice={choice}
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

    // проверить куку specials и добавить содержимое в state

    this.setState({
      titleScreenShown: false,
      frameIsRendering: true
    });
    this.setFrame('myRoom');
    this.setState({
      index: 'myRoom',
      choice: locations.myRoom.navigation,
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
        confirmationMessage="Overwrite save?"
        currentTime={this.state.currentTime}
        menuType="Save"
        executeSlot={this.saveSlot.bind(this)}
        toggleMenu={this.toggleSaveMenu.bind(this)}
        speaker={this.state.speaker}
        text={this.state.text}
      />
    );
  }

  loadMenu() {
    return (
      <SaveLoadMenu
        choicesExist={this.state.choicesExist}
        choiceOptions={this.state.choiceOptions}
        confirmationMessage="Load save?"
        currentTime={this.state.currentTime}
        menuType="Load"
        executeSlot={this.loadSlot.bind(this)}
        toggleMenu={this.toggleLoadMenu.bind(this)}
        speaker={this.state.speaker}
        text={this.state.text}
      />
    );
  }

  renderMenuButtons() {
    return (
      <MenuButtons
        menuButtonsShown={this.state.menuButtonsShown}
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
        backlogShown={this.state.backlogShown}
        isSkipping={this.state.isSkipping}
      />
    );
  }

  backlog() {
    return (
      <Backlog
        index={this.state.index}
        setFrame={this.setFrame}
        toggleBacklog={this.toggleBacklog}
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
