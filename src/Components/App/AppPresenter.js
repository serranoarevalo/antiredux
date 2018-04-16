import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Header from "Components/Header";
import Flex from "styled-flex-component";
import Notification from "Components/Notification";
import { ThemeContext } from "themeContext";

const AppPresenter = store => (
  <ThemeContext.Provider value={store}>
    <Fragment>
      <Header />
      <Flex justifyCenter full>
        <Notification />
      </Flex>
    </Fragment>
  </ThemeContext.Provider>
);

AppPresenter.propTypes = {
  notifications: PropTypes.object.isRequired
};

export default AppPresenter;
