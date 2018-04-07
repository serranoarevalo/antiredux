import React, { Component } from "react";
import PropTypes from "prop-types";
import AppPresenter from "./AppPresenter";

class AppContainer extends Component {
  static propTypes = {};
  state = {};
  render() {
    return <AppPresenter {...this.state} />;
  }
}

export default AppContainer;
