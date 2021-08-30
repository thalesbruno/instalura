import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { get } from 'lodash';
import propToStyle from '../../styles/utils/propToStyle';
import Link from './Link';

export const textStyleVariantMap = {
  title: css`
    font-size: ${({ theme }) => theme.typographyStyle.title.fontSize};
    font-weight: ${({ theme }) => theme.typographyStyle.title.fontWeight};
    line-height: ${({ theme }) => theme.typographyStyle.title.lineHeight};
  `,
  titleXS: css`
    font-size: ${({ theme }) => theme.typographyStyle.titleXS.fontSize};
    font-weight: ${({ theme }) => theme.typographyStyle.titleXS.fontWeight};
    line-height: ${({ theme }) => theme.typographyStyle.titleXS.lineHeight};
  `,
  subTitle: css`
    font-size: ${({ theme }) => theme.typographyStyle.subTitle.fontSize};
    font-weight: ${({ theme }) => theme.typographyStyle.subTitle.fontWeight};
    line-height: ${({ theme }) => theme.typographyStyle.subTitle.lineHeight};
  `,
  paragraph1: css`
    font-size: ${({ theme }) => theme.typographyStyle.paragraph1.fontSize};
    font-weight: ${({ theme }) => theme.typographyStyle.paragraph1.fontWeight};
    line-height: ${({ theme }) => theme.typographyStyle.paragraph1.lineHeight};
  `,
  paragraph2: css`
    font-size: ${({ theme }) => theme.typographyStyle.paragraph2.fontSize};
    font-weight: ${({ theme }) => theme.typographyStyle.paragraph2.fontWeight};
    line-height: ${({ theme }) => theme.typographyStyle.paragraph2.lineHeight};
  `,
  smallestException: css`
    font-size: ${({ theme }) => theme.typographyStyle.smallestException.fontSize};
    font-weight: ${({ theme }) => theme.typographyStyle.smallestException.fontWeight};
    line-height: ${({ theme }) => theme.typographyStyle.smallestException.lineHeight};
  `,
};

const TextBase = styled.span`
  ${({ variant }) => textStyleVariantMap[variant]}
  ${propToStyle('textAlign')}
  color: ${({ color, theme }) => get(theme, `colors.${color}.color`)};
`;

const Text = ({
  tag,
  variant,
  children,
  color,
  href,
  ...props
}) => (
  href ? (
    <TextBase
      color={color}
      as={Link}
      variant={variant}
      href={href}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    >
      {children}
    </TextBase>
  )
    : (
    // eslint-disable-next-line react/jsx-props-no-spreading
      <TextBase color={color} as={tag} variant={variant} {...props}>
        {children}
      </TextBase>
    )
);

Text.defaultProps = {
  tag: 'a',
  variant: 'paragraph1',
  color: '#000',
  children: null,
  href: undefined,
};

Text.propTypes = {
  tag: PropTypes.string,
  variant: PropTypes.string,
  children: PropTypes.node,
  color: PropTypes.string,
  href: PropTypes.string,
};

export default Text;
