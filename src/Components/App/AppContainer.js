import React, { Component } from "react";
import AppPresenter from "./AppPresenter";

class AppContainer extends Component {
  state = {};
  render() {
    return <AppPresenter {...this.state} />;
  }
}

export default AppContainer;
