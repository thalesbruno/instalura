import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { ThemeLight } from '../styles';
import Animations from '../styles/animations';
import GlobalStyle from '../styles/GlobalStyle';

const GlobalProvider = ({ children }) => (
  <ThemeProvider
    theme={ThemeLight}
  >
    <GlobalStyle />
    <Animations />
    {children}
  </ThemeProvider>
);

GlobalProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default GlobalProvider;
