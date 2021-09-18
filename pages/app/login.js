import React, { useContext } from 'react';
import Text from '../../src/components/common/Text';
import Box from '../../src/components/layout/Box';
import Grid from '../../src/components/layout/Grid';
import websitePageHOC from '../../src/contexts/hoc';
import Logo from '../../src/styles/Logo';
import Link from '../../src/components/common/Link';
import { WebsitePageContext } from '../../src/contexts/WebsitePageWrapper';
import FormLogin from '../../src/components/forms/FormLogin';

const LoginScreen = () => {
  const websitePageContext = useContext(WebsitePageContext);

  return (
    <Grid.Container
      display="flex"
      flex="1"
      alignItems="center"
    >
      <Grid.Row
        flex="1"
        alignItems="center"
        justifyContent="center"
      >
        <Grid.Col
          display="flex"
          flexDirection="column"
          justifyContent="center"
          offset={{ lg: 2 }}
          value={{ xs: 12, md: 6, lg: 4 }}
          flex={1}
        >
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            marginTop="37px"
            marginBottom="37px"
          >
            <Link
              href="/"
              color="secondary.main"
            >
              <Logo size="large" />
            </Link>
          </Box>

          <FormLogin />

          <Text
            variant="paragraph1"
            tag="p"
            color="tertiary.light"
            textAlign="center"
          >
            {'Não tem uma conta? '}
            <Link
              href="/"
              color="secondary.main"
              onClick={(event) => {
                event.preventDefault();
                websitePageContext.toggleModalCadastro();
              }}
            >
              Cadastre-se
            </Link>
          </Text>
        </Grid.Col>

        <Grid.Col value={{ xs: 12, md: 6 }}>
          <Box
            display="flex"
            justifyContent="center"
          >
            <img
              align="center"
              src="https://bootcamp-alura-01-git-modulo01.omariosouto.vercel.app/images/phones.png"
              alt="Telefones mostrando as páginas internas do app"
            />
          </Box>
        </Grid.Col>
      </Grid.Row>
    </Grid.Container>
  );
};

export default websitePageHOC(LoginScreen, {
  pageWrapperProps: {
    menuProps: {
      display: false,
    },
  },
});
