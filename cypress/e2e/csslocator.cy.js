describe('csslocator', () => {
    it("csslocator", () => {
        cy.visit("http://www.automationpractice.pl/index.php")
        //cy.get("input#search_query_top").type("T-SHIRT")     // id tag is optional
        
        //cy.get(".search_query").type("T-SHIRT") // class tag is optional

        //cy.get("[name = 'search_query']").type("T-SHIRT")  //attribute tag is optional

        cy.get("input.search_query[name = 'search_query']").type("T-SHIRT")  // class with attribute  tag is optional 

        // xpath --npm install -D cypress-xpath
        
        cy.get("[name='submit_search']").click()
        cy.get(".lighter").contains("T-SHIRT")    //assertion


    }) 
})