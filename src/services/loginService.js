import { destroyCookie, setCookie } from 'nookies';

const loginService = {

  login: async (loginData) => {
    const res = await fetch('https://instalura-api-omariosouto.vercel.app/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginData),
    });
    const data = await res.json();
    console.log(data);

    const { token } = data.data;
    setCookie(null, 'APP_TOKEN', token, {
      path: '/',
      maxAge: 60,
    });

    return data;
  },

  logout: () => destroyCookie(null, 'APP_TOKEN'),

};

export default loginService;
