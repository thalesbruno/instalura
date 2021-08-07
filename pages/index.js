import React from "react";

import Button from "../src/components/common/Button";
import Footer from "../src/components/common/Footer";
import Menu from "../src/components/common/Menu";
import Text from "../src/components/foundation/Text";
import { Grid } from "../src/components/layout/Grid";

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
      <Grid.Container>
        <Grid.Row>
          <Grid.Col value={{ xs: 12, md: 5 }} offset={{ xs: 0, md: 1 }}>
            <div>
              <Text
                tag="h1"
                variant="title"
                textAlign={{ xs: "center", md: "left" }}
              >
                Compartilhe momentos e conecte-se com amigos
              </Text>
              <Text
                tag="p"
                variant="paragraph2"
                textAlign={{ xs: "center", md: "left" }}
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industrys standard dummy text
                ever since the 1500s.
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
          </Grid.Col>
          <Grid.Col value={{ xs: 12, md: 5 }}>
            <img
              style={{ display: "block", margin: "auto" }}
              src="https://bootcamp-alura-01-git-modulo01.omariosouto.vercel.app/images/phones.png"
            />
          </Grid.Col>
        </Grid.Row>
      </Grid.Container>
      <Footer />
    </div>
  );
}
