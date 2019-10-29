
context('Actions', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/search')
  })

  it('.type() - type into a DOM element', () => {
    cy.get('.searchInput')
      .type('303').should('have.value', '303')
      .type('{leftarrow}{rightarrow}{uparrow}{downarrow}')
      .type('{del}{selectall}{backspace}')

      .type('{alt}{option}') //these are equivalent
      .type('{ctrl}{control}') //these are equivalent
      .type('{meta}{command}{cmd}') //these are equivalent
      .type('{shift}')

      // Delay each keypress by 0.1 sec
      .type('slow.400', { delay: 100 })
      .should('have.value', 'slow.400')
  })

  it('.clear() - clears an input or textarea element', () => {
    cy.get('.searchInput').type('Clear this text')
      .should('have.value', 'Clear this text')
      .clear()
      .should('have.value', '')
  })

  it('.submit() - submit a form', () => {
    cy.get('.searchInput')
      .type('303').should('have.value', '303')
    cy.get('.searchSubmit').click()
  })
})
