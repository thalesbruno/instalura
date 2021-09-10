/// <reference types="cypress" />

describe('/pages/app/login', () => {
  it('Fill the form and go to /app/profile/ page', () => {
    cy.visit('/app/login/');
    cy.get('#formCadastro input[name="user"]').type('thales');
    cy.get('#formCadastro input[name="password"]').type('senha');
    cy.get('#formCadastro button[type="submit"]').click();
    cy.url().should('include', '/app/profile');
  });
});
