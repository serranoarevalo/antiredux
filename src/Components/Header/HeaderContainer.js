import React, { Component } from "react";
import PropTypes from "prop-types";
import HeaderPresenter from "./HeaderPresenter";

class HeaderContainer extends Component {
  static propTypes = {};
  state = {};
  render() {
    return <HeaderPresenter {...this.state} />;
  }
}

export default HeaderContainer;
