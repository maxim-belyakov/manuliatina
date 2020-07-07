import React, { PureComponent } from "react";

class SaveLoadMenu extends PureComponent {
  constructor() {
    super(); //constructor init

    this.state = { slotNumber: 1 };
  }

  swapSlotButtons() {
    let buttonCache = [];
    for (let i = 1; i < 21; i++) {
      let style = {};

      if (this.state.slotNumber === i) style["backgroundColor"] = "darkGreen";
      else if (!JSON.parse(localStorage.getItem(i))) style["backgroundColor"] = "gray";

      buttonCache.push(
        <button 
          className="save-load-btn"
          key={i}
          onClick={() => this.setState({ slotNumber: i })} 
          style={style}
        >
          {i}
        </button>
      );
    }

    return <div className="save-load-buttons">{buttonCache}</div>;
  }

  menuSlot(number) {
    if (JSON.parse(localStorage.getItem(this.state.slotNumber))) {
      return (
        <div
          className="save-load-slot"
          onClick={() => {
            if (
              JSON.parse(localStorage.getItem(this.state.slotNumber)) &&
              window.confirm(this.props.confirmationMessage)
            ) {
              this.props.executeSlot(this.state.slotNumber);
            } else return
          }}
        >
          <button>
            <img
              alt={JSON.parse(localStorage.getItem(this.state.slotNumber)).bg}
              draggable="false"
              className="slot-bg"
              src={JSON.parse(localStorage.getItem(this.state.slotNumber)).bg}
            />
          </button>
        </div>
      );
    } else {
      return <div className="save-load-slot empty" onClick={() => this.props.executeSlot(this.state.slotNumber)} />;
    }
  }

  render() {
    return (
      <div className="overlay overlay-save-load">
        <ul className="header">
          <li>
            <span>{this.props.menuType}</span>
          </li>
          <li className="exit-button" onClick={this.props.toggleMenu}>
            <button>&times;</button>
          </li>
        </ul>
        {this.menuSlot(this.state.slotNumber)}
        <div className="slot-date">{localStorage.getItem("time" + this.state.slotNumber)}</div>
        {this.swapSlotButtons()}
      </div>
    );
  }
}
export default SaveLoadMenu;
