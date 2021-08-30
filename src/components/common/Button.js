import React from 'react';
import styled, { css } from 'styled-components';
import { get } from 'lodash';
import PropTypes from 'prop-types';

import { textStyleVariantMap } from './Text';
import breakpointsMedia from '../../styles/utils/breakpointsMedia';
import propToStyle from '../../styles/utils/propToStyle';
import Link from './Link';

const ButtonGhost = css`
  background: transparent;
  color: ${({ theme, variant }) => get(theme, `colors.${variant}.color`)};
`;

const ButtonDefault = css`
  background-color: ${({ theme, variant }) => get(theme, `colors.${variant}.color`)};
  color: ${({ theme, variant }) => get(theme, `colors.${variant}.contrastText`)};
`;

const ButtonWrapper = styled.button`
  border: 0;
  cursor: pointer;
  padding: 12px 26px;
  opacity: 1;
  font-weight: bold;
  border-radius: ${({ theme }) => theme.borderRadius};
  transition: opacity ${({ theme }) => theme.transition};
  ${({ ghost }) => (ghost ? ButtonGhost : ButtonDefault)};
  ${({ fullWidth }) => fullWidth && css`
    width: 100%;
  `}
  &:hover,
  &:focus {
    opacity: 0.5;
  }
  &:disabled {
    cursor: not-allowed;
    opacity: .2;
  }
  ${breakpointsMedia({
    xs: css`
      ${textStyleVariantMap.smallestException}
    `,
    md: css`
      ${textStyleVariantMap.paragraph1}
    `,
  })}
  ${propToStyle('display')}
  ${propToStyle('margin')}
`;

const Button = ({ children, href, ...props }) => {
  const hasHref = Boolean(href);
  const tag = hasHref ? Link : 'button';

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <ButtonWrapper as={tag} href={href} {...props}>
      {children}
    </ButtonWrapper>
  );
};

Button.defaultProps = {
  href: undefined,
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string,
  variant: PropTypes.string.isRequired,
};

export default Button;
