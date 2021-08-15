import styled, { css } from 'styled-components';
import { get } from 'lodash';
import PropTypes from 'prop-types';

import { textStyleVariantMap } from './Text';
import breakpointsMedia from '../../theme/utils/breakpointsMedia';
import propToStyle from '../../theme/utils/propToStyle';

const ButtonGhost = css`
  background: transparent;
  color: ${({ theme, variant }) => get(theme, `colors.${variant}.color`)};
`;

const ButtonDefault = css`
  background-color: ${({ theme, variant }) => get(theme, `colors.${variant}.color`)};
  color: ${({ theme, variant }) => get(theme, `colors.${variant}.contrastText`)};
`;

const Button = styled.button`
  border: 0;
  cursor: pointer;
  padding: 12px 26px;
  opacity: 1;
  font-weight: bold;
  border-radius: ${({ theme }) => theme.borderRadius};
  transition: opacity ${({ theme }) => theme.transition};
  ${({ ghost }) => (ghost ? ButtonGhost : ButtonDefault)};
  &:hover,
  &:focus {
    opacity: 0.5;
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

Button.propTypes = {
  ghost: PropTypes.bool,
  variant: PropTypes.string.isRequired,
};

export default Button;
