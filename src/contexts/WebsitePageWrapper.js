/* eslint-disable react/jsx-props-no-spreading */
import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import Box from '../components/layout/Box';
import Footer from '../components/common/Footer';
import Modal from '../components/common/Modal';
import FormCadastro from '../components/forms/FormCadastro';
import Menu from '../components/common/Menu';
import SEO from '../components/common/SEO';

export const WebsitePageContext = createContext({
  toogleModalCadastro: () => {},
});

const WebsitePageWrapper = ({
  pageBoxProps,
  menuProps,
  children,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <WebsitePageContext.Provider
      value={{
        toogleModalCadastro: () => setIsModalOpen(!isModalOpen),
      }}
    >
      <SEO />
      <Box
        flex={1}
        display="flex"
        flexDirection="column"
        {...pageBoxProps}
      >
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        >
          {(propsDoModal) => (
            <FormCadastro propsDoModal={propsDoModal} />
          )}
        </Modal>
        {menuProps.display && (
        <Menu
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
        )}
        {children}
        <Footer />
      </Box>
    </WebsitePageContext.Provider>
  );
};

WebsitePageWrapper.defaultProps = {
  pageBoxProps: {},
  menuProps: {
    display: true,
  },
};

WebsitePageWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  pageBoxProps: PropTypes.shape({
    justifyContent: PropTypes.string,
    backgroundImage: PropTypes.string,
    backgroundRepeat: PropTypes.string,
    backgroundPosition: PropTypes.string,
  }),
  menuProps: PropTypes.shape({
    display: PropTypes.bool.isRequired,
  }),
};

export default WebsitePageWrapper;
