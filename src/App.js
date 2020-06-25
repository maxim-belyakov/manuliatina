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
import GameMenu from "./components/GameMenu";
import RenderFrame from "./components/RenderFrame";
import MenuButton from "./components/MenuButton";
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
  menuShown: false,
  beginStory: true,
  frameIsRendering: false,
  backlogShown: false,
  saveMenuShown: false,
  loadMenuShown: false,
  hasError: [false, ''],
  specials: [],
  logLocations: [

  ]
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
          !this.state.menuShown
        ) {
          // this.toggleBacklog();
        }
      }
    });
  }

  componentDidMount() {
    // window.addEventListener("beforeunload", e => (e.returnValue = "Unsaved changes will be lost."));
  }

  getTypeOfTime() {
    let time
    const hr = new Date().getHours()

    if (hr > 4 && hr < 6) time = 'sunrise'
    else if (hr > 6 && hr < 17) time = 'day'
    else if (hr > 17 && hr < 23) time = 'sunset'
    else if (hr > 0 && hr < 4) time = 'night'
    else time = 'day'

    return time
  }

  handleChoiceSelected(event) {

    let choice = {}

    choice.name = event.currentTarget.name
    choice.order = event.currentTarget.id
    choice.title = event.currentTarget.title
    
    this.setState({ logLocations: [...this.state.logLocations, this.state.index] })

    this.setChoice(choice);
  }

  renderChoiceMenu() {

    const currentIndex = this.state.index;
    const choice = locations[currentIndex].navigation ? locations[currentIndex].navigation : [];

    return (
      <ChoiceMenu
        onChoiceSelected={this.handleChoiceSelected.bind(this)} 
        choice={choice}
        timeOfDay={this.getTypeOfTime()}
        specials={this.state.specials}
      />
    );
  }

  setChoice(index) {

    let previousIndex = this.state.index

    let action = (locations[previousIndex].navigation && locations[previousIndex].navigation[index.order]) ? locations[previousIndex].navigation[index.order].action : null

    // Add SPECIAL point to state
    if (action) this.setState({ specials: [...this.state.specials, action] });

    console.log('index.name', index.name, 'action', action)

    // Change the frame
    this.setFrame(index.name, action);
    
  }

  timeout(fn, ms) {
    setTimeout(() => { fn() }, ms);
  }

  setFrame(index, action) {
  
    const previousIndex = this.state.index.slice()

    const currentLocation = locations[index]

    // location is not found

    if (!currentLocation) {
      this.setState({ hasError: [true, 'Что-то пошло не так :( Локация недоступна' + index] });
      console.error('Найдена локация, которой нет на карте локаций')
      currentLocation = 'myRoom'
    }    

    // Hours: day, night, sunset, sunrise

    let time = this.getTypeOfTime()
    let image = currentLocation.original
    let music = currentLocation.music ? currentLocation.music : []

    if (time === 'night') {
      if (currentLocation.night) image = currentLocation.night
      if (currentLocation.musicNight) music = currentLocation.musicNight
    }

    if (time === 'sunset') {
      if (currentLocation.sunset) image = currentLocation.sunset
      else if (currentLocation.night) image = currentLocation.night // if now is sunset but has only night
      if (currentLocation.musicSunset) music = currentLocation.musicSunset
      else if (currentLocation.musicNight) music = currentLocation.musicNight // if now is sunset but has only night
    }

    if (time === 'sunrise') {
      if (currentLocation.sunrise) image = currentLocation.sunrise
      if (currentLocation.musicSunrise) music = currentLocation.musicSunrise
    }

    // let orderMax = Math.max.apply(Math, Object.values(locations[index].special).map(function(o) { return o.y; }))

    // Special: day, night, sunset, sunrise
    // if we have two specials for one image, looks where order is lowers

    if (currentLocation.specials) {
      let currentSpecials = currentLocation.specials
      let beforeSpecials = this.state.specials
      let order = {}

      if (action) beforeSpecials.push(action)

      for (let i in Object.values(currentSpecials)) {
        let item = currentSpecials[i]

        if (time === item.timeOfDay && beforeSpecials.indexOf(item.name) > -1) order[item.order] = item.image
      }

      if (Object.keys(order).length !== 0 && order.constructor === Object) image = order[Math.max(...Object.keys(order))]
    }


    // get duration for limeout-location 

    if (!currentLocation.navigation) {
      let duration;
  
      if (currentLocation.music && currentLocation.music[0].name && currentLocation.music[0].duration) duration = currentLocation.music[0].duration

      this.timeout(() => this.setFrame(previousIndex), duration ? duration : 3000)
    }

    this.setState({
      index: index,
      previousIndex: previousIndex,
      bg: require("../public/locations/" + image),
      bgm: music[0] ? require("../public/music/" + music[0].name) : null,
      bgm2: music[1] ? require("../public/music/" + music[1].name) : null,
      choicesExist: false,
    });

    this.timeout(() => this.setState({choicesExist: !!currentLocation.navigation,}), 3000)

    // TIMEOUT
    if (!currentLocation.navigation) {
      let duration;
  
      if (currentLocation.music && currentLocation.music[0].name && currentLocation.music[0].duration) duration = currentLocation.music[0].duration

      this.timeout(() => this.setFrame(previousIndex), duration ? duration : 3000)
    }
  }

  renderFrame() {
    return (
      <RenderFrame
        index={this.state.index}
        font={this.state.font}
        bg={this.state.bg}
        bgTransition={this.state.bgTransition}
        hasError={this.state.hasError}
      />
    );
  }

  toggleGameMenu() {
    if (this.state.saveMenuShown) this.setState({ saveMenuShown: false });
    if (this.state.loadMenuShown) this.setState({ loadMenuShown: false });
    if (this.state.backlogShown) this.setState({ backlogShown: false });
    this.setState(prevState => ({
      menuShown: !prevState.menuShown
    }));
  }

  toggleBacklog() {
    if (this.state.menuShown) {
      this.setState({ menuShown: false });
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
    if (this.state.menuShown) {
      this.setState({ menuShown: false });
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
    if (this.state.menuShown) {
      this.setState({ menuShown: false });
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

    this.setFrame('begin');

    this.setState({
      beginStory: false,
      frameIsRendering: true,
      index: 'begin',
      choice: locations.myRoom.navigation,
      hasError: [false, ''],
      // menuButtonShown: true,
    });

    setTimeout(() => { this.setFrame('myRoom'); }, 3000)
  }

  saveMenu() {
    return (
      <SaveLoadMenu
        choicesExist={this.state.choicesExist}
        choiceOptions={this.state.index}
        confirmationMessage="Overwrite save?"
        currentTime={this.state.currentTime}
        menuType="Save"
        executeSlot={this.saveSlot.bind(this)}
        toggleMenu={this.toggleSaveMenu.bind(this)}
      />
    );
  }

  loadMenu() {
    return (
      <SaveLoadMenu
        choicesExist={this.state.choicesExist}
        choiceOptions={this.state.index}
        confirmationMessage="Load save?"
        currentTime={this.state.currentTime}
        menuType="Load"
        executeSlot={this.loadSlot.bind(this)}
        toggleMenu={this.toggleLoadMenu.bind(this)}
      />
    );
  }

  renderMenuButton() {
    return (
      <MenuButton
        menuButtonsShown={this.state.menuButtonsShown}
        saveSlot={this.saveSlot.bind(this)}
        loadSlot={this.loadSlot.bind(this)}
        toggleGameMenu={this.toggleGameMenu.bind(this)}
        menuShown={this.state.menuShown}
        toggleBacklog={this.toggleBacklog.bind(this)}
        toggleTextBox={this.toggleTextBox.bind(this)}
        backlogShown={this.state.backlogShown}
        isSkipping={this.state.isSkipping}
      />
    );
  }

  gameMenu() {
    return (
      <GameMenu
        changeFont={newFont => this.setState({ font: newFont.label })}
        font={this.state.font}
        bgmVolume={this.state.bgmVolume}
        soundEffectVolume={this.state.soundEffectVolume}
        voiceVolume={this.state.voiceVolume}
        bgmVolumeChange={value => this.setState({ bgmVolume: value })}
        soundEffectVolumeChange={value => this.setState({ soundEffectVolume: value })}
        voiceVolumeChange={value => this.setState({ voiceVolume: value })}
        toggleGameMenu={this.toggleGameMenu.bind(this)}
        toggleSaveMenu={this.toggleSaveMenu.bind(this)}
        toggleLoadMenu={this.toggleLoadMenu.bind(this)}
        saveMenuShown={this.state.saveMenuShown}
        loadMenuShown={this.state.loadMenuShown}
        toggleFullscreen={() => this.setState({ isFull: true })}
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
    return <Sound
              url={this.state.bgm} 
              volume={this.state.bgmVolume} 
              playStatus={Sound.status.PLAYING} 
              loop={true}
              ignoreMobileRestrictions={true}
            />;
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
            {this.state.beginStory ? this.beginStory() : null}
            {this.state.frameIsRendering ? this.renderFrame() : null}
            {/* GUI menu buttons */}
            {this.state.choicesExist ? this.renderChoiceMenu() : null} 
            {!this.state.menuShown ? this.renderMenuButton() : null}
            {this.state.menuShown ? this.gameMenu() : null}
            {this.state.saveMenuShown ? this.saveMenu() : null}
            {this.state.loadMenuShown ? this.loadMenu() : null}
            {this.state.backlogShown ? this.backlog() : null}
          </ReactCSSTransitionGroup>
        </Fullscreen>
        {this.state.bgm ? this.playBGM() : null}
        {/* bgm2 */}
      </div>
    );
  }
}



export default App;
