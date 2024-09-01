import { Routes } from "@constants/routes";

const URL = 'https://api.emailjs.com/api/v1.0/email/send';

describe('Contacts Form', () => {
  beforeEach(() => {
    cy.visit(`/en${Routes.ContactUs}`);
  });

  it('should submit the form successfully and show success toast', () => {
    cy.intercept('POST', URL, {
      statusCode: 200,
      body: {},
    }).as('sendContactsForm');

    cy.get('input[name="name"]').type('Valeria');
    cy.get('input[name="email"]').first().type('valeriakorolkova2703@gmail.com');
    cy.get('select[name="queryRelated"]').select('feedback');
    cy.get('textarea[name="message"]').type('test message.');

    cy.get('button[type="submit"]').first().click();
    cy.wait('@sendContactsForm');

    cy.get('[data-testid="toast"]').should('exist');

    cy.get('input[name="name"]').should('have.value', '');
    cy.get('input[name="email"]').should('have.value', '');
    cy.get('textarea[name="message"]').should('have.value', '');
  });
});