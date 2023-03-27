/// <reference types= "Cypress" />

describe("Verify checkboxes via webriveruni",() => {
    beforeEach(function() {
        //cy.visit("/") // this indicates that we want to visit to the baseURL set in cypress.config.js file
        //cy.navigateTo_WebdriverUni_Homepage();
        //cy.log(Cypress.env("name"));
        cy.navigateTo_WebdriverUni_Checkbox_Page();
    })
    it("Check and validate checkbox", () => {
        //Checks all checkboxes
        //cy.get('[type="checkbox"]').check()
        //cy.get('#checkboxes > :nth-child(1) > input').check()
        //cy.get('#checkboxes > :nth-child(1) > input').check().should('be.checked')
        cy.get('#checkboxes > :nth-child(1) > input').as('option-1')
        cy.get('@option-1').check()
        cy.get('@option-1').check().should('be.checked')
        /* ==== Generated with Cypress Studio ==== */
        cy.get('[value="green"]').check();
        cy.get('[value="blue"]').check();
        cy.get('[value="yellow"]').check();
        cy.get('#radio-buttons > [value="orange"]').check();
        cy.get('[value="purple"]').check();
        /* ==== End Cypress Studio ==== */
    });
    it("Checkbox challenge - Uncheck", () => {
        //Checks all checkboxes
        //cy.get('[type="checkbox"]').check()
        //cy.get('#checkboxes > :nth-child(1) > input').check()
        //cy.get('#checkboxes > :nth-child(1) > input').check().should('be.checked')
        cy.get('#checkboxes > :nth-child(5) > input').as('option-3')
        cy.get('@option-3').uncheck().should('not.be.checked')
    });
    it("Check multiple checkboxes", () => {
        cy.get("input[type='checkbox']").check(["option-1", "option-2", "option-3", "option-4"]).should('be.checked')
    });
})