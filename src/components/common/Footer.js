import React from 'react';
import styled from 'styled-components';
import Link from './Link';

import Text from './Text';

const FooterWrapper = styled.footer`
  padding: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  padding-right: 28px;
  padding-left: 28px;
  img {
    width: 58px;
    margin-right: 23px;
  }
  a {
    color: ${({ theme }) => theme.colors.primary.main.color};
    text-decoration: none;
    transition: 0.3s;
    &:hover,
    &:focus {
      opacity: 0.5;
    }
  }
`;

const Footer = (props) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <FooterWrapper {...props}>
    <a href="https://www.alura.com.br/">
      <img
        src="https://www.alura.com.br/assets/img/alura-logo.svg"
        alt="Logo Alura"
      />
    </a>
    <Text as="p" variant="paragraph1" color="tertiary.main">
      Criado durante o
      {' '}
      <Link href="https://www.alura.com.br/">
        Bootcamp Alura JAM Stack
      </Link>
    </Text>
  </FooterWrapper>
);

export default Footer;
