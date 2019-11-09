describe('Home page tests', () => {
  beforeEach(() => {
    cy.visit('https://xkcd-webcomic-app.firebaseapp.com/')
  })

  it('should have specific class names for elements', () => {
    cy.get('.search')
      .should('have.class', 'search')

    cy.get('.latest')
      .should('have.class', 'latest')

  })
})

describe('Home page image tests', () => {
  beforeEach(() => {
    cy.visit('https://xkcd-webcomic-app.firebaseapp.com/')
  })
  it("should display a image in element div with class image", () => {
    cy.get('div[class="latestComic"]').find("img")
      .should('be.visible')
  });
})