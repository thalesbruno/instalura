# Instalura

Projeto feito durante o Bootcamp Font-End Avançado da Alura

## Instalando

Para instalar a aplicação, primeiro é necessário fazer o clone do projeto:

```bash
git clone https://github.com/thalesbruno/instalura
```
ou
```bash
git clone git@github.com:thalesbruno/instalura.git
```

Agora, dentro do diretório `instalura`, vamos instalar as dependências usando `yarn` ou `npm`:

```bash
yarn
```
ou
```bash
npm install
```

## Executando

Para rodar a aplicação em modo desenvolvimento, dentro do mesmo diretório raiz do projeto, bastar executar:

```bash
yarn dev
```
ou
```bash
npm run dev
```

Se tudo correr bem, a aplicação estará acessível em `http://localhost:3000`

## Rodando ESLint

Para validação do código com ESLint, é possível rodar o comando a seguir diretamente em um arquivo ou em um diretório:
```bash
yarn run eslint <directory or file>
```

## Docker

Para rodar o projeto no Docker, após fazer o `git clone` do projeto, no diretório raiz `instalura` fazer build da imagem

```shell
docker build . -t next-instalura
```

E subir o container

```shell
docker run -p 3000:3000 next-instalura
```

Acessar a aplicação em `http://localhost:3000`