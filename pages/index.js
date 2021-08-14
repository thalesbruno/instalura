import React from 'react';
import PropTypes from 'prop-types';

import Button from '../src/components/common/Button';
import Footer from '../src/components/common/Footer';
import Menu from '../src/components/common/Menu';
import Text from '../src/components/foundation/Text';
import Grid from '../src/components/layout/Grid';
import Box from '../src/components/layout/Box';

export default function Home({ theme, setTheme }) {
  return (
    <Box
      flex={1}
      display="flex"
      flexWrap="wrap"
      flexDirection="column"
      justifyContent="space-between"
      // backgroundImage="url(/images/bubbles.svg)"
      backgroundImage={theme === 'light' ? 'url(/images/bubbles.svg)' : 'url(/images/bubbles_dark.svg)'}
      backgroundRepeat="no-repeat"
      backgroundPosition="bottom right"
    >
      <Menu theme={theme} setTheme={setTheme} />
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
      <Footer />
    </Box>
  );
}

Home.propTypes = {
  theme: PropTypes.string.isRequired,
  setTheme: PropTypes.func.isRequired,
};
