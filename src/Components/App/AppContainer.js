import React, { Component } from "react";
import AppPresenter from "./AppPresenter";
import { Store } from "store";

class AppContainer extends Component {
  constructor(props) {
    super(props);
    this._deleteNotification = id => {
      this.setState(prevState => {
        const newState = delete prevState.notifications[id];
        return newState;
      });
    };
    this._seeNotification = id => {
      this.setState(prevState => {
        return {
          ...prevState,
          notifications: {
            ...prevState.notifications,
            [id]: {
              ...prevState.notifications[id],
              seen: true
            }
          }
        };
      });
    };
    this.state = {
      notifications: {
        "1": {
          id: 1,
          text: "Sup!",
          seen: false
        },
        "2": {
          id: 2,
          text: "Wasup!",
          seen: false
        },
        "3": {
          id: 3,
          text: "Waza!",
          seen: false
        }
      },
      deleteNotification: this._deleteNotification,
      seeNotification: this._seeNotification
    };
  }

  render() {
    return (
      <Store.Provider value={this.state}>
        <AppPresenter />
      </Store.Provider>
    );
  }
}

export default AppContainer;
