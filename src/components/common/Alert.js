import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { get } from 'lodash';
import Text from './Text';
import CloseButton from '../../styles/icons/CloseButton';

const AlertWrapper = styled.div`
  background-color: ${({ theme, type }) => get(theme, `colors.alerts.${type}.color`)};
  margin-bottom: 17px;
  width: 100%;
  border: 1px solid ${({ theme, type }) => get(theme, `colors.alerts.${type}.color`)};
  padding: 12px 16px;
  outline: 0;
  border-radius: ${({ theme }) => theme.borderRadius};
  display: flex;
  justify-content: space-between;
`;

const Alert = ({ children, type, onClose }) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <AlertWrapper type={type}>
    <Text as="span" color="alerts.text">{children}</Text>
    <CloseButton onClose={onClose} />
  </AlertWrapper>
);

Alert.propTypes = {
  type: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func,
};

Alert.defaultProps = {
  onClose: null,
};

export default Alert;
