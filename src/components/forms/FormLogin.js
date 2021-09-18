import { useRouter } from 'next/router';
import React from 'react';
import useForm from '../../hooks/useForm';
import loginService from '../../services/loginService';
import Button from '../common/Button';
import TextField from './TextField';

const FormLogin = () => {
  const initialValues = {
    username: '',
    password: '',
  };

  const router = useRouter();

  const form = useForm({
    initialValues,
    onSubmit: async (values) => {
      const res = await loginService.login(values);
      if (res.error) {
        console.error(res.error.message);
        router.push('/404');
      } else {
        console.log(res.data.token);
        router.push('/app/profile');
      }
    },
  });

  return (
    <form id="formCadastro" onSubmit={form.handleSubmit}>
      <TextField
        placeholder="Usuário"
        name="username"
        value={form.values.username}
        onChange={form.handleChange}
      />
      <TextField
        placeholder="Senha"
        name="password"
        type="password"
        value={form.values.password}
        onChange={form.handleChange}
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

export default FormLogin;
