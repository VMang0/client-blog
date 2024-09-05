import { Routes } from "@constants/routes";

describe('Infinite scroll', () => {
  beforeEach(() => {
    cy.visit(`/en${Routes.Home}`);
    cy.viewport(1440, 800);
  });

  it('should load initial content', () => {
    cy.get('[data-testid="section-item"]').first().should('exist');
  });

  it('should load more content on scroll', () => {
    const scrollAndCheckContentItems = (scrollTimes) => {
      let previousCount = 0;

      const scrollAndCount = (remainingScrolls) => {
        if (remainingScrolls > 0) {
          cy.scrollTo('bottom', { duration: 500 });

          cy.get('[data-testid="section-item"]').then(($items) => {
            const currentCount = $items.length;
            expect(currentCount).to.be.greaterThan(previousCount);
            previousCount = currentCount;
          });

          scrollAndCount(remainingScrolls - 1);
        }
      };

      scrollAndCount(scrollTimes);
    };

    scrollAndCheckContentItems(5);
  });
});
