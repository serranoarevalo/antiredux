import React, { Component } from "react";
import PropTypes from "prop-types";
import NotificationPresenter from "./NotificationPresenter";

class NotificationContainer extends Component {
  static propTypes = {};
  state = {};
  render() {
    return <NotificationPresenter {...this.state} />;
  }
}

export default NotificationContainer;
