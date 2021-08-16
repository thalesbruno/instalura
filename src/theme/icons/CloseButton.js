import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import breakpointsMedia from '../utils/breakpointsMedia';

const CloseIcon = styled.svg`
  cursor: pointer;
  position: absolute;
  top: 5%;
  ${breakpointsMedia({
    xs: css`
      right: 5%;
    `,
    md: css`
      right: 1%;
    `,
  })}
`;

const CloseButton = ({ onClose }) => (
  <CloseIcon
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    onClick={onClose}
  >
    <path d="M1 1L13 13" stroke="#88989E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M1 13L13 1" stroke="#88989E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </CloseIcon>
);

CloseButton.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default CloseButton;
