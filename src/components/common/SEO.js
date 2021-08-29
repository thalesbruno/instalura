import React from 'react';
import Head from 'next/head';

const SEO = () => {
  const title = 'Instalura - Bootcamp JAMStack - Thales Bruno';
  const url = 'https://instalura-pi.vercel.app/';
  const description = 'Projeto de Front-end feito durante o Bootcamp da Alura usando Next.js, React, Styled-components, Github, entre outras tecnologias.';

  return (
    <Head>
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content="instalura, next, react, projetos, desenvolvimento web, web development, thales bruno" />
      <meta name="robots" content="index, follow" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="Portuguese" />

      {/* <!-- Open Graph / Facebook --> */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content="https://www.alura.com.br/assets/img/alura-share.1571848411.png" />

      {/* <!-- Twitter --> */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content="https://www.alura.com.br/assets/img/alura-share.1571848411.png" />
    </Head>
  );
};

export default SEO;
