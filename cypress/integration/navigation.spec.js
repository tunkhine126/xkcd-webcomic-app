/// <reference types="Cypress" />

context('Navigation', () => {
  beforeEach(() => {
    cy.visit('https://xkcd-webcomic-app.firebaseapp.com')
    cy.get('.navbar-nav').contains('Latest').click()
    cy.get('.navbar-nav').contains('Search').click()
  })

  it('cy.go() - go back or forward in the browser\'s history', () => {
    // https://on.cypress.io/go

    cy.location('pathname').should('include', 'search')

    // cy.go('back')
    // cy.location('pathname').should('not.include', 'navigation')

    cy.go('forward')
    cy.location('pathname').should('include', '/')

    // clicking back
    cy.go(-1)
    cy.location('pathname').should('not.include', 'search')

    // clicking forward
    cy.go(1)
    cy.location('pathname').should('include', 'search')
  })

  it('cy.reload() - reload the page', () => {
    // https://on.cypress.io/reload
    cy.reload()

    // reload the page without using the cache
    cy.reload(true)
  })

  it('cy.visit() - visit a remote url', () => {
    // https://on.cypress.io/visit

    // Visit any sub-domain of your current domain

    // Pass options to the visit
    cy.visit('https://xkcd-webcomic-app.firebaseapp.com', {
      timeout: 50000, // increase total time for the visit to resolve
      onBeforeLoad (contentWindow) {
        // contentWindow is the remote page's window object
        expect(typeof contentWindow === 'object').to.be.true
      },
      onLoad (contentWindow) {
        // contentWindow is the remote page's window object
        expect(typeof contentWindow === 'object').to.be.true
      },
    })
    cy.visit('https://xkcd-webcomic-app.firebaseapp.com/search', {
      timeout: 50000, // increase total time for the visit to resolve
      onBeforeLoad(contentWindow) {
        // contentWindow is the remote page's window object
        expect(typeof contentWindow === 'object').to.be.true
      },
      onLoad(contentWindow) {
        // contentWindow is the remote page's window object
        expect(typeof contentWindow === 'object').to.be.true
      },
    })
    })
})
