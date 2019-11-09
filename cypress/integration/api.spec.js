describe('XKCD API response codes', () => {
  // test API response codes
  it('returns HTTP success status', () => {
    cy.request('https://xkcd.now.sh/?comic=latest')

      .its('status')
        .should('be', 200)

      .its('statusText')
        .should('be', 'OK')

  })
})

describe('XKCD API data', () => {

  const initialItems = {
    'alt': "",
    'day': "",
    'img': "",
    'link': "",
    'month': "",
    'news': "",
    'num': 0,
    'safe_title': "",
    'title': "",
    'transcript': "",
    'year': "",
  }

  it('returns an object with data', () => {
    cy.request('https://xkcd.now.sh/?comic=latest')
      expect(initialItems).to.have.any.keys('alt', 'day', 'img', 'link')

  })
})