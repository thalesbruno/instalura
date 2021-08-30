/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import GlobalProvider from './GlobalProvider';
import WebsitePageWrapper from './WebsitePageWrapper';

export default function websitePageHOC(PageComponent, { pageWrapperProps }) {
  return (props) => (
    <GlobalProvider>
      <WebsitePageWrapper {...pageWrapperProps}>
        <PageComponent {...props} />
      </WebsitePageWrapper>
    </GlobalProvider>
  );
}
