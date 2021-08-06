import React from "react";

import Button from "../src/components/common/Button";
import Footer from "../src/components/common/Footer";
import Menu from "../src/components/common/Menu";
import Text from "../src/components/foundation/Text";

export default function Home() {
  return (
    <div
      style={{
        flex: "1",
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Menu />
      <div>
        <Text tag="h1" variant="title" textAlign={{ xs: "center", md: "left" }}>
          Compartilhe momentos e conecte-se com amigos
        </Text>
        <Text
          tag="p"
          variant="paragraph2"
          textAlign={{ xs: "center", md: "left" }}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s.
        </Text>
        <Button
          margin={{
            xs: "auto",
            md: "initial",
          }}
          display="block"
          variant="primary.main"
        >
          Cadastrar
        </Button>
      </div>
      <Footer />
    </div>
  );
}
