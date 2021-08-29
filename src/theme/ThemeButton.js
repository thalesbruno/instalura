import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
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

export const IconTheme = ({ theme }) => (theme === 'light' ? <Moon /> : <Sun />);

IconTheme.defaultProps = {
  theme: undefined,
};

IconTheme.propTypes = {
  theme: PropTypes.string,
};
