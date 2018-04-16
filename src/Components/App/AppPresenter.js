import React, { Fragment } from "react";
import Header from "Components/Header";
import Flex from "styled-flex-component";
import Notification from "Components/Notification";
import { ThemeContext } from "themeContext";

const AppPresenter = () => (
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
