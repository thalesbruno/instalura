import React from 'react';
import PropTypes from 'prop-types';
import Logo from '../../styles/Logo';
import Button from './Button';
import MenuWrapper from './MenuWrapper';
// import { IconTheme, ThemeButton } from '../../styles/ThemeButton';
import Text from './Text';

const Menu = ({
  isModalOpen, setIsModalOpen,
}) => {
  const links = [
    {
      id: 1,
      texto: 'Home',
      url: '/',
    },
    {
      id: 2,
      texto: 'Perguntas frequentes',
      url: '/faq',
    },
    {
      id: 3,
      texto: 'Sobre',
      url: '/sobre',
    },
  ];

  // const toggleTheme = () => (setIsDarkTheme(!isDarkTheme));

  return (
    <MenuWrapper>
      <MenuWrapper.LeftSide>
        <Logo />
      </MenuWrapper.LeftSide>
      <MenuWrapper.CenterSide>
        {links.map((link) => (
          <li key={link.id}>
            <Text href={link.url}>
              {link.texto}
            </Text>
          </li>
        ))}
      </MenuWrapper.CenterSide>
      <MenuWrapper.RightSide>
        {/* <ThemeButton onClick={toggleTheme}>
          <IconTheme isDarkTheme={isDarkTheme} />
        </ThemeButton> */}
        <Button href="/login" ghost variant="secondary.main">
          Entrar
        </Button>
        <Button onClick={() => setIsModalOpen(!isModalOpen)} variant="primary.main">Cadastrar</Button>
      </MenuWrapper.RightSide>
    </MenuWrapper>
  );
};

Menu.propTypes = {
  isModalOpen: PropTypes.bool.isRequired,
  setIsModalOpen: PropTypes.func.isRequired,
};

export default Menu;
