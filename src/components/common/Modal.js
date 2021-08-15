import styled, { createGlobalStyle, css } from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const ModalWrapper = styled.div`
  background-color: rgba(0,0,0,0.3);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;  
  justify-content: flex-end;
  z-index: 10;
  align-items: stretch;
  margin: auto;
  overflow: scroll;
  ${({ isOpen }) => {
    if (isOpen) {
      return css`
        opacity: 1;
        pointer-events: all;
      `;
    }
    return css`
      opacity: 0;
      pointer-events: none;
    `;
  }}
`;

const LockScroll = createGlobalStyle`
  body {
    overflow: hidden;
  }
`;

const Modal = ({ isOpen, onClose, children }) => (
  <ModalWrapper
    isOpen={isOpen}
    onClick={(event) => {
      const isSafeArea = event.target.closest('[data-modal-safe-area="true"]');
      if (!isSafeArea) {
        onClose();
      }
    }}
  >
    {isOpen && <LockScroll />}
    <motion.div
      variants={{
        hidden: {
          x: '100%',
        },
        visible: {
          x: 0,
          transition: {
            duration: 0.3,
          },
        },
      }}
      animate={isOpen ? 'visible' : 'hidden'}
      style={{
        display: 'flex',
        flex: 1,
        justifyContent: 'flex-end',
      }}
    >
      { children({
        'data-modal-safe-area': 'true',
      }) }
    </motion.div>
  </ModalWrapper>
);

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.func.isRequired,
};

export default Modal;
