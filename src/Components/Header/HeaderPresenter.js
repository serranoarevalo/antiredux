import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import FontAwesome from "react-fontawesome";

const Header = styled.header`
  height: 100px;
  background-color: #ecf0f1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const HeaderIcon = styled.span`
  width: 40px;
  height: 40px;
`;

const HeaderPresenter = ({}) => (
  <Header>
    <HeaderIcon>
      <FontAwesome name="rocket" />
    </HeaderIcon>
  </Header>
);

HeaderPresenter.propTypes = {};

export default HeaderPresenter;
