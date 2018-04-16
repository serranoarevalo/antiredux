import React, { Fragment } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Header from "Components/Header";
import Flex, { FlexItem } from "styled-flex-component";
import Notification from "Components/Notification";
import { ThemeContext } from "themeContext";

const AppPresenter = ({}) => (
  <ThemeContext.Provider value={"suup"}>
    <Fragment>
      <Header />
      <Flex justifyCenter full>
        <Notification />
      </Flex>
    </Fragment>
  </ThemeContext.Provider>
);

export default AppPresenter;
