import styled, { css } from "styled-components";
import { get } from "lodash";
import PropTypes from "prop-types";

const ButtonGhost = css`
  background: transparent;
  color: ${({ theme, variant }) => get(theme, `colors.${variant}.color`)};
`;

const ButtonDefault = css`
  background-color: ${({ theme, variant }) =>
    get(theme, `colors.${variant}.color`)};
  color: ${({ theme, variant }) =>
    get(theme, `colors.${variant}.contrastText`)};
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
`;

Button.propTypes = {
  ghost: PropTypes.bool,
  variant: PropTypes.string.isRequired,
};

export default Button;
