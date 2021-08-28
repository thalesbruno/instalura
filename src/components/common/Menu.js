import React from 'react';
import PropTypes from 'prop-types';
import Logo from '../../theme/Logo';
import Button from './Button';
import MenuWrapper from './MenuWrapper';
import { IconTheme, ThemeButton } from '../../theme/ThemeButton';
import Text from './Text';

const Menu = ({
  theme, setTheme, isModalOpen, setIsModalOpen,
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

  const toggleTheme = () => (theme === 'light' ? setTheme('dark') : setTheme('light'));

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
        <ThemeButton onClick={toggleTheme}><IconTheme theme={theme} /></ThemeButton>
        <Button href="/app/login" ghost variant="secondary.main">
          Entrar
        </Button>
        <Button onClick={() => setIsModalOpen(!isModalOpen)} variant="primary.main">Cadastrar</Button>
      </MenuWrapper.RightSide>
    </MenuWrapper>
  );
};

Menu.propTypes = {
  theme: PropTypes.string.isRequired,
  setTheme: PropTypes.func.isRequired,
  isModalOpen: PropTypes.bool.isRequired,
  setIsModalOpen: PropTypes.func.isRequired,
};

export default Menu;
