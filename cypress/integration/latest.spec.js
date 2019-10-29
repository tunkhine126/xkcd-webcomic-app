context('Aliasing', () => {
  beforeEach(() => {
    cy.visit('https://xkcd-webcomic-app.firebaseapp.com')
  })

  it('.as() - alias a DOM element for later use', () => {
    cy.get('.search')
      .should('have.class', 'search')

    cy.get('.latest')
      .should('have.class', 'latest')
      
    cy.get('.latestImage')
      .should('have.class', 'latestImage')
  })
})
