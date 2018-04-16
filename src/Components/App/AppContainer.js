import React, { Component } from "react";
import AppPresenter from "./AppPresenter";

class AppContainer extends Component {
  state = {
    notifications: {
      "01": {
        text: "Sup!",
        seen: false
      },
      "02": {
        text: "Wasup!",
        seen: false
      },
      "03": {
        text: "Wasup!",
        seen: false
      }
    },
    deleteNotification: this._deleteNotification,
    seeNotification: this._seeNotification
  };
  render() {
    return <AppPresenter {...this.state} />;
  }
  _deleteNotification = id => {
    this.setState(prevState => {
      const newState = delete prevState[id];
      return newState;
    });
  };
  _seeNotification = id => {
    this.setState(prevState => {
      return {
        ...prevState,
        [id]: {
          ...prevState[id],
          seen: true
        }
      };
    });
  };
}

export default AppContainer;
