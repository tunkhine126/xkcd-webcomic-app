context('Search page classNames', () => {
  beforeEach(() => {
    cy.visit('https://xkcd-webcomic-app.firebaseapp.com/search')
  })

  it('should have specific class names for elements', () => {
    cy.get('.search')
      .should('have.class', 'search')

    cy.get('.latest')
      .should('have.class', 'latest')

    cy.get('.searchInput')
      .should('have.class', 'searchInput')

    cy.get('.searchSubmit')
      .should('have.class', 'searchSubmit')

    cy.get('.searchImage')
      .should('have.class', 'searchImage')
  })
})
