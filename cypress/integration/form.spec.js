context('Check search form functionality', () => {
  beforeEach(() => {
    cy.visit('https://xkcd-webcomic-app.firebaseapp.com/search')
  })

  it('.clear() - clears an input or textarea element', () => {
    cy.get('.searchInput').type('Clear this text')
      .should('have.value', 'Clear this text')
      .clear()
      .should('have.value', '')
  })

  it('.submit() - submit a form and display an image', () => {
    cy.get('.searchInput')
      .type('303').should('have.value', '303')
    cy.get('.searchSubmit').click()
    cy.get('div[class="searchedComic"]').find("img")
      .should('be.visible')
  })

})
