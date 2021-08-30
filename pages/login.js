import React from 'react';
import websitePageHOC from '../src/contexts/hoc';

const LoginScreen = () => (
  <div>
    Login
  </div>
);

export default websitePageHOC(LoginScreen, {
  pageWrapperProps: {
    menuProps: {
      display: false,
    },
  },
});
