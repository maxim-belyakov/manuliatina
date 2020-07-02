// Dependencies
import React, { PureComponent } from "react";
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
import LoadingBlock from "./components/LoadingBlock";
import RenderFrame from "./components/RenderFrame";
import MenuButton from "./components/MenuButton";
import SaveLoadMenu from "./components/SaveLoadMenu";
import Sound from "./components/Sound";

// CSS
import "./styles/config.css";
import "./styles/container.css";
import "./styles/backlog.css";
import "./styles/choicesoverlay.css";
import "./styles/effects.css";
import "./styles/loadingblock.css";
import "./styles/menubuttons.css";
import "./styles/saveloadmenu.css";
import "./styles/sprites.css";
import "./styles/textbox.css";
import "./styles/titlescreen.css";
import "./styles/transitions.css";

const durationDefault = 3000

const INITIAL_STATE = {
  bgmVolume: 80,
  bgmVolumeLogic: 100,
  bgmVolumeLogic2: 100,
  soundEffectVolume: 90,
  voiceVolume: 100,
  font: "Trebuchet MS",
  isFull: false,
  previousIndex: '',
  index: '',
  choicesExist: false,
  menuShown: false,
  talked: false,
  beginStory: true,
  frameIsRendering: false,
  backlogShown: false,
  saveMenuShown: false,
  loadMenuShown: false,
  showLoading: false,
  hasError: [false, ''],
  specials: [],
  logLocations: []
};

class App extends PureComponent {
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
    else if (hr > 17 && hr < 0) time = 'sunset'
    else if (hr > 0 && hr < 4) time = 'night'
    else time = 'day'

    return time
  }

  handleChoiceSelected(event) {
    let choice = {}

    choice.name = event.currentTarget.name
    choice.order = event.currentTarget.id
    choice.title = event.currentTarget.title

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
        font={this.state.font}
      />
    );
  }

  renderLoadingBlock() {
    return (
      <LoadingBlock/>
    );
  }

  setChoice(index) {
    this.setState({ 
      choicesExist: false,
      showLoading: true,
    });

    let previousIndex = this.state.index
    let action = (locations[previousIndex].navigation && locations[previousIndex].navigation[index.order]) ? locations[previousIndex].navigation[index.order].action : null
    let talk = (locations[previousIndex].navigation && locations[previousIndex].navigation[index.order]) ? locations[previousIndex].navigation[index.order].sound : null

    // Add SPECIAL point to state
    if (action) this.setState({ specials: [...this.state.specials, action] });

    // Change the selection only after 1sec (or 6sec if there is talk)
    this.timeout(() => this.setFrame(index.name, action, talk), talk ? durationDefault * 2 : durationDefault / 2)
  }

  timeout(fn, ms) {
    setTimeout(() => fn(), ms);
  }

  setError(publicMessage, consoleMessage) {
    this.setState({ hasError: [true, publicMessage] });
    console.error(consoleMessage)
  }

  defineImegeByTime(image, music, currentLocation) {
    const time = this.getTypeOfTime()

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

    return [ image, music ]

  }

  defineImegeBySpecial(image, action, currentLocation, stateSpecials) {
    const time = this.getTypeOfTime()
    const currentSpecials = currentLocation.specials
    const beforeSpecials = stateSpecials
    let order = {}

    if (action) beforeSpecials.push(action)

    // if we have two allowed specials for one image, looks where order is lowers
    for (let i in Object.values(currentSpecials)) {
      let item = currentSpecials[i]

      if (time === item.timeOfDay && beforeSpecials.indexOf(item.name) > -1) order[item.order] = item.original
    }

    if (Object.keys(order).length !== 0 && order.constructor === Object) image = order[Math.max(...Object.keys(order))]

    return image
  }

  returnableFrame(location, previousIndex) {
    let duration = (location.music && location.music[0].duration) ? location.music[0].duration : durationDefault;

    // duration of stay in the location is determined from data or by default 3 seconds
    this.timeout(() => this.setFrame(previousIndex), duration)
  }

  setFrame(index, action, talk) {
    if (!index) return

    const previousIndex = this.state.index.slice()
    let currentLocation = locations[index]
    let image = currentLocation.original
    let music = currentLocation.music ? currentLocation.music : []

    // location is not found
    if (!currentLocation) {
      this.setError('Something went wrong :( Location is not available' + index, 'Found a location that is not on the location map')
      currentLocation = 'myRoom'
    }    

    // Hours: day, night, sunset, sunrise    
    [image, music] = this.defineImegeByTime(image, music, currentLocation)

    // Special: day, night, sunset, sunrise
    if (currentLocation.specials) {
      image = this.defineImegeBySpecial(image, action, currentLocation, this.state.specials)
    }

    // location is not found
    if (!image) {
      this.setError('Something went wrong :( location Photo is not available', `Before the last use of setState image =${image}`)
      image = 'black.png'
    }

    // talk
    this.setState({
      index: index,
      previousIndex: previousIndex,
      showLoading: false,
      bg: require("../public/locations/" + image),
      bgm: music[0] ? require("../public/music/" + music[0].name) : null,
      bgmVolumeLogic: music[0] ? music[0].percent : null,
      bgm2: music[1] ? require("../public/music/" + music[1].name) : null,
      bgmVolumeLogic2: music[1] ? music[1].percent : null,
      mTalk: (talk && talk.music && !this.state.talked) ? require("../public/music/" + talk.music) : null,
      talked: !talk ? false : this.state.talked
    });

    // a little later, durationDefault sec (or half as much if there is a talk) change the location
    this.timeout(() => this.setState({choicesExist: !!currentLocation.navigation}), talk ? durationDefault / 2 : durationDefault)

    // location that takes you back to the pre-location after some time
    if (!currentLocation.navigation) this.returnableFrame(currentLocation, previousIndex)
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
    this.setFrame('begin');

    this.setState({
      beginStory: false,
      frameIsRendering: true,
      index: 'begin',
      hasError: [false, '']
    });

    setTimeout(() => { this.setFrame('myRoom'); }, durationDefault)
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
        logLocations: [...this.state.logLocations, prevState.index],
        // choicesIndexHistory: [...this.state.choicesIndexHistory, prevState.choicesIndex],
        // indexHistory: [...this.state.indexHistory, prevState.index]
      });
    }
  }

  playBGM() {
    return <Sound
              url={this.state.bgm} 
              volume={Math.floor(this.state.bgmVolumeLogic / 100 * this.state.bgmVolume)} 
              playStatus={Sound.status.PLAYING} 
              loop={true}
              ignoreMobileRestrictions={true}
            />;
  }

  playBGM2() {
    return <Sound
              url={this.state.bgm2} 
              volume={Math.floor(this.state.bgmVolumeLogic2 / 100 * this.state.bgmVolume)} 
              playStatus={Sound.status.PLAYING} 
              loop={true}
              ignoreMobileRestrictions={true}
            />;
  }

  playTalk() {
    this.timeout(() => this.setState({ talked: true }), durationDefault / 2)

    return <Sound
              url={this.state.mTalk}
              volume={100} 
              playStatus={Sound.status.PLAYING} 
              loop={false}
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
            {this.state.showLoading ? this.renderLoadingBlock() : null}
            {!this.state.menuShown ? this.renderMenuButton() : null}
            {this.state.menuShown ? this.gameMenu() : null}
            {this.state.saveMenuShown ? this.saveMenu() : null}
            {this.state.loadMenuShown ? this.loadMenu() : null}
            {this.state.backlogShown ? this.backlog() : null}
          </ReactCSSTransitionGroup>
        </Fullscreen>
        {this.state.bgm ? this.playBGM() : null}
        {this.state.bgm2 ? this.playBGM2() : null}
        {(this.state.mTalk && !this.state.talked) ? this.playTalk() : null}
        {/* bgm2 */}
      </div>
    );
  }
}



export default App;
