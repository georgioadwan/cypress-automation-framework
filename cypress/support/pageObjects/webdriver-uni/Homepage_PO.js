class HomePage_PO {
    visitHomepage() {
        cy.visit(Cypress.env("webdriveruni_homepage"), {timeout: 60000}); 
        //the added explicit timeout will override the timeout set in the config file
    }
    clickOn_ContactUs_Button() {
        cy.get('#contact-us').invoke('removeAttr', 'target').click({force: true}, {timeout: 8000})
        //for this command, the timeout will be 8 seconds since we have explicitly stated so, it doesn't matter
        //what it is set in the test suite 
    }
}

export default HomePage_PO;