import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Grid from '../layout/Grid';
import Box from '../layout/Box';
import Text from '../common/Text';
import Button from '../common/Button';
import TextField from './TextField';
import CloseButton from '../../theme/icons/CloseButton';
import Alert from '../common/Alert';

const Loading = styled.div`
  animation: flash 3s;
  -webkit-animation: flash 3s;
  margin-bottom: 10px;
`;

const FormContent = () => {
  const [userInfo, setUserInfo] = useState({
    username: '',
    name: '',
  });

  const submitStates = {
    DEFAULT: 'DEFAULT',
    LOADING: 'LOADING',
    DONE: 'DONE',
    ERROR: 'ERROR',
  };

  const [submitStatus, setSubmitStatus] = useState(submitStates.DEFAULT);

  const isFormInvalid = userInfo.username.length === 0 || userInfo.name.length === 0;

  const handleChange = (event) => {
    const inputField = event.target.getAttribute('name');
    setUserInfo({
      ...userInfo,
      [inputField]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitStatus(submitStates.LOADING);
    fetch('https://instalura-api.vercel.app/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username: userInfo.username, name: userInfo.name }),
    })
      .then((response) => {
        if (!response.ok) {
          setSubmitStatus(submitStates.ERROR);
          throw new Error('Erro ao realizar o cadastro');
        }
        setSubmitStatus(submitStates.DONE);
        return response.json();
      })
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  };

  return (
    <form
      onSubmit={handleSubmit}
    >
      <Text
        variant="title"
        tag="h1"
        color="#000"
      >
        Pronto para saber da vida dos outros?
      </Text>
      <Text
        variant="paragraph1"
        tag="p"
        color="tertiary.light"
        marginBottom="32px"
      >
        Você está a um passo de saber tudoo que está
        rolando no bairro, complete seu cadastro agora!
      </Text>
      { submitStatus === submitStates.DONE && <Alert onClose={() => setSubmitStatus(submitStates.DEFAULT)} type="success">Usuário cadastrado com sucesso!</Alert> }
      { submitStatus === submitStates.ERROR && <Alert onClose={() => setSubmitStatus(submitStates.DEFAULT)} type="danger">Erro ao cadastrar o usuário.</Alert> }
      { submitStatus === submitStates.LOADING && <Loading>Aguarde um momento...</Loading> }
      <TextField placeholder="Username" name="username" value={userInfo.username} onChange={handleChange} />
      <TextField placeholder="Nome" name="name" value={userInfo.name} onChange={handleChange} />
      <Button variant="primary.main" type="submit" disabled={isFormInvalid} fullWidth>Cadastrar</Button>
    </form>
  );
};

const FormCadastro = ({ propsDoModal }) => (
  <Grid.Row
    marginLeft={0}
    marginRight={0}
    flex={1}
    justifyContent="flex-end"
  >
    <Grid.Col
      display="flex"
      paddingRight={{ md: '0' }}
      flex={1}
      value={{ xs: 12, md: 5, lg: 4 }}
    >
      <Box
        boxShadow="-10px 0px 24px rgba(7, 12, 14, 0.1)"
        display="flex"
        flex={1}
        flexDirection="column"
        justifyContent="center"
        backgroundColor="white"
        padding={{
          xs: '16px',
          md: '85px',
        }}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...propsDoModal}
      >
        <CloseButton onClose={propsDoModal.onClose} position="absolute" />
        <FormContent />
      </Box>

    </Grid.Col>
  </Grid.Row>
);

FormCadastro.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  propsDoModal: PropTypes.object.isRequired,
};

export default FormCadastro;
