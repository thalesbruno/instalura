import React from "react";
import Logo from "../../../theme/Logo";
import { MenuWrapper } from "./styles/MenuWrapper";

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
          <a key={key} href={link.url}>
            {link.texto}
          </a>
        ))}
      </MenuWrapper.CenterSide>
      <MenuWrapper.RightSide>
        <button>Entrar</button>
        <button>Cadastrar</button>
      </MenuWrapper.RightSide>
    </MenuWrapper>
  );
};

export default Menu;
