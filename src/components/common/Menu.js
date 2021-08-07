import React from 'react';

import Logo from '../../theme/Logo';
import Button from './Button';
import Text from '../foundation/Text';
import MenuWrapper from './MenuWrapper';

const Menu = () => {
  const links = [
    {
      texto: 'Home',
      url: '/',
    },
    {
      texto: 'Perguntas frequentes',
      url: '/faq',
    },
    {
      texto: 'Sobre',
      url: '/sobre',
    },
  ];
  return (
    <MenuWrapper>
      <MenuWrapper.LeftSide>
        <Logo />
      </MenuWrapper.LeftSide>
      <MenuWrapper.CenterSide>
        {links.map((link, key) => (
          // eslint-disable-next-line react/no-array-index-key
          <li key={key}>
            <Text tag="a" variant="smallestException" href={link.url}>
              {link.texto}
            </Text>
          </li>
        ))}
      </MenuWrapper.CenterSide>
      <MenuWrapper.RightSide>
        <Button ghost variant="secondary.main">
          Entrar
        </Button>
        <Button variant="primary.main">Cadastrar</Button>
      </MenuWrapper.RightSide>
    </MenuWrapper>
  );
};

export default Menu;
