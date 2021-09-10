import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Text from '../common/Text';

const InputWrapper = styled.div`
  margin-bottom: 17px;
`;

const Input = styled(Text)`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.tertiary.light.color};
  padding: 12px 16px;
  outline: 0;
  border-radius: ${({ theme }) => theme.borderRadius};
`;

Input.defaultProps = {
  tag: 'input',
  variant: 'paragraph1',
};

const TextField = ({
  placeholder,
  name,
  value,
  onChange,
  ...props
}) => (
  <InputWrapper>
    <Input
      type="text"
      placeholder={placeholder}
      name={name}
      onChange={onChange}
      value={value}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    />
  </InputWrapper>
);

TextField.defaultProps = {
  value: '',
  onChange: () => {},
};

TextField.propTypes = {
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default TextField;
