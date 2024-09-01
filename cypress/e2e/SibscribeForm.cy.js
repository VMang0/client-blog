import { Routes } from "@constants/routes";

const URL = 'https://api.emailjs.com/api/v1.0/email/send';

describe('Subscribe Form', () => {
  beforeEach(() => {
    cy.visit(`/en${Routes.Home}`);
  });

  it('should successfully submit the form and show success toast', () => {
    cy.intercept('POST', URL, {
      statusCode: 200,
      body: {},
    }).as('subscribeForm');

    cy.get('input[name="email"]').type('valeriakorolkova2703@gmail.com');
    cy.get('form').submit();

    cy.wait('@subscribeForm');

    cy.get('[data-testid="toast"]').should('exist');
  });

  it('should show error toast on failed submission', () => {
    cy.intercept('POST', URL, {
      statusCode: 422,
      body: { },
    }).as('subscribeForm');

    cy.get('input[name="email"]').type('valer123@gmail.com');
    cy.get('form').submit();

    cy.wait('@subscribeForm');

    cy.get('[data-testid="toast"]').should('exist');
  });
});
