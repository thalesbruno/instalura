import React from 'react';
import PropTypes from 'prop-types';
import Logo from '../../theme/Logo';
import Button from './Button';
import Text from '../foundation/Text';
import MenuWrapper from './MenuWrapper';
import { IconTheme, ThemeButton } from '../../theme/ThemeButton';

const Menu = ({
  theme, setTheme, isModalOpen, setIsModalOpen,
}) => {
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

  const toggleTheme = () => (theme === 'light' ? setTheme('dark') : setTheme('light'));

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
        <ThemeButton onClick={toggleTheme}><IconTheme theme={theme} /></ThemeButton>
        <Button ghost variant="secondary.main">
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
