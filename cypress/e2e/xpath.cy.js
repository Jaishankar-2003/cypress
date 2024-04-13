const cypress = require("cypress-xpath")

describe('xpath', () =>{
    it('find no of products', () =>{
        cy.visit("http://www.automationpractice.pl/index.php")
        cy.get(".blockbestsellers").click    //get is for css locator
        cy.xpath("//ul[@id='blockbestsellers']/li").should('have.length',6)    // xpath for xpath element
    })
})