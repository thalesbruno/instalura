import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import breakpointsMedia from '../utils/breakpointsMedia';
import propToStyle from '../utils/propToStyle';

const CloseIcon = styled.svg`
  cursor: pointer;
  ${propToStyle('position')};
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

const CloseButton = ({ onClose, ...props }) => (
  <CloseIcon
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...props}
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
