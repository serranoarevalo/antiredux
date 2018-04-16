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
    }
  };
  render() {
    return <AppPresenter {...this.state} />;
  }
}

export default AppContainer;
