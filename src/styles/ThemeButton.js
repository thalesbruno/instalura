/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import Sun from './icons/Sun';
import Moon from './icons/Moon';

export const ThemeButton = styled.button`
  position: relative;
  align-self: center;
  padding: 0;
  background-color: inherit;
  border: none;
  cursor: pointer;
  width: 25px;
  height: 25px;
`;

export const IconTheme = ({ isDarkTheme }) => (isDarkTheme ? <Sun /> : <Moon />);
