import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Grid from '../layout/Grid';
import Box from '../layout/Box';
import Text from '../common/Text';
import Button from '../common/Button';
import TextField from './TextField';
import CloseButton from '../../theme/icons/CloseButton';

const FormContent = () => {
  const [userInfo, setUserInfo] = useState({
    email: '',
    usuario: '',
  });

  const handleChange = (event) => {
    const inputField = event.target.getAttribute('name');
    setUserInfo({
      ...userInfo,
      [inputField]: event.target.value,
    });
  };

  const isFormInvalid = userInfo.email.length === 0 || userInfo.usuario.length === 0;

  return (
    <form
      onSubmit={(event) => event.preventDefault()}
    >
      <Text
        variant="title"
        tag="h1"
        color="tertiary.main"
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
      <TextField placeholder="Email" name="email" value={userInfo.email} onChange={handleChange} />
      <TextField placeholder="Usuário" name="usuario" value={userInfo.usuario} onChange={handleChange} />
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
        <CloseButton onClose={propsDoModal.onClose} />
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
