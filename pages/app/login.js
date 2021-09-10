import React, { useContext, useState } from 'react';
import Button from '../../src/components/common/Button';
import Text from '../../src/components/common/Text';
import TextField from '../../src/components/forms/TextField';
import Box from '../../src/components/layout/Box';
import Grid from '../../src/components/layout/Grid';
import websitePageHOC from '../../src/contexts/hoc';
import Logo from '../../src/styles/Logo';
import Link from '../../src/components/common/Link';
import { WebsitePageContext } from '../../src/contexts/WebsitePageWrapper';

const LoginForm = () => {
  const [loginData, setLoginData] = useState({
    user: '',
    password: '',
  });

  const handleChangeLoginData = (event) => {
    const field = event.target.getAttribute('name');
    setLoginData({
      ...loginData,
      [field]: event.target.value,
    });
  };

  return (
    <form id="formCadastro" action="/app/profile">
      <TextField
        placeholder="Usuário"
        name="user"
        value={loginData.user}
        onChange={handleChangeLoginData}
      />
      <TextField
        placeholder="Senha"
        name="password"
        type="password"
        value={loginData.password}
        onChange={handleChangeLoginData}
      />

      <Button
        type="submit"
        variant="primary.main"
        margin={{
          xs: '0 auto',
          md: 'initial',
        }}
        fullWidth
      >
        Entrar
      </Button>
    </form>
  );
};

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
          <LoginForm />
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
