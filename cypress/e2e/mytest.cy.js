describe('test verify', () => {
  it('test1 title positive', () => {
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    cy.title().should('eq','OrangeHRM')
  })

  it('test2 title negative', () => {
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    cy.title().should('eq','OrangeHRcy')
  })
})

// locator
// css selector , xpath  cy.get(Locator)
// css selector  tag id , tag class , tag attribute , tag class attribute  (tag optional)
// id .class [attribute='value']  .class[attribute='value']  