import React, { useContext } from 'react';
import Button from '../common/Button';
import Text from '../common/Text';
import Grid from '../layout/Grid';
import { WebsitePageContext } from '../../contexts/WebsitePageWrapper';

const HomeScreen = () => {
  const websitePageContext = useContext(WebsitePageContext);

  return (
    <Grid.Container marginTop={{ xs: '32px', md: '75px' }}>
      <Grid.Row>
        <Grid.Col
          value={{ xs: 12, md: 5 }}
          offset={{ xs: 0, md: 1 }}
          display="flex"
          alignItems="flex-start"
          flexDirection="column"
          justifyContent="center"
        >
          <div>
            <Text
              tag="h1"
              variant="title"
              textAlign={{ xs: 'center', md: 'left' }}
              color="tertiary.main"
            >
              Compartilhe momentos e conecte-se com amigos
            </Text>
            <Text
              tag="p"
              variant="paragraph2"
              textAlign={{ xs: 'center', md: 'left' }}
              color="tertiary.main"
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s.
            </Text>
            <Button
              onClick={() => websitePageContext.toogleModalCadastro()}
              margin={{
                xs: 'auto',
                md: 'initial',
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
            alt="Imagem de smartphone com a interface do projeto Instalura na tela"
            style={{ display: 'block', margin: 'auto' }}
            src="https://bootcamp-alura-01-git-modulo01.omariosouto.vercel.app/images/phones.png"
          />
        </Grid.Col>
      </Grid.Row>
    </Grid.Container>
  );
};

export default HomeScreen;
