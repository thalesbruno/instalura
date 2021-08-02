import React from "react";

import Logo from "../../../theme/Logo";
import { MenuWrapper } from "./styles/MenuWrapper";
import { Button } from "../Button";

const Menu = () => {
  const links = [
    {
      texto: "Home",
      url: "/",
    },
    {
      texto: "Perguntas frequentes",
      url: "/faq",
    },
    {
      texto: "Sobre",
      url: "/sobre",
    },
  ];
  return (
    <MenuWrapper>
      <MenuWrapper.LeftSide>
        <Logo />
      </MenuWrapper.LeftSide>
      <MenuWrapper.CenterSide>
        {links.map((link, key) => (
          <li key={key}>
            <a href={link.url}>{link.texto}</a>
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
