/// <reference types="cypress" />

describe('/pages/app/login', () => {
  it('Fill the form and go to /app/profile/ page', () => {
    cy.intercept('https://instalura-api-omariosouto.vercel.app/api/login').as('getToken');
    cy.visit('/app/login/');
    cy.get('#formCadastro input[name="username"]').type('yazan');
    cy.get('#formCadastro input[name="password"]').type('senhasegura');
    cy.get('#formCadastro button[type="submit"]').click();
    cy.url().should('include', '/app/profile');
    cy.wait('@getToken')
      .then((interception) => {
        const { token } = interception.response.body.data;
        cy.getCookie('APP_TOKEN').should('exist')
          .then((c) => c === token);
      });
  });
});
