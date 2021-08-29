import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import Head from 'next/head';
import PropTypes from 'prop-types';
import { ThemeDark, ThemeLight } from '../src/theme';
import GlobalStyle from '../src/theme/GlobalStyle';
import Animations from '../src/theme/animations';
import SEO from '../src/components/common/SEO';

export default function App({ Component, pageProps }) {
  const [theme, setTheme] = useState('light');

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
        <link rel="shortcut icon" href="/images/favicon.ico" />
      </Head>
      <SEO />
      <ThemeProvider theme={theme === 'light' ? ThemeLight : ThemeDark}>
        <GlobalStyle />
        <Animations />
        <Component
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...pageProps}
          theme={theme}
          setTheme={setTheme}
        />
      </ThemeProvider>
    </>
  );
}

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.shape({}).isRequired,
};
