import HomePage_PO from "../../support/pageObjects/webdriver-uni/Homepage_PO";
import Contact_Us_PO from "../../support/pageObjects/webdriver-uni/Contact_Us_PO";
/// <reference types= "Cypress" />

describe("Test contact us form via webdriverUni",() => {
    //The command below will override the commandtimeout set in the config file
    Cypress.config('defaultCommandTimeout', 20000) 
    const homepage_PO = new HomePage_PO();
    const contact_Us_PO = new Contact_Us_PO();
    beforeEach(function() {
        cy.fixture('example').then(function(data) {
            //this.data = data;
            globalThis.data = data;
        })
    })
    beforeEach(function () {
        //cy.visit(Cypress.env("webdriveruni_homepage") + "/Contact-Us/contactus.html")
        homepage_PO.visitHomepage();
        cy.wait(3000);
        homepage_PO.clickOn_ContactUs_Button();
        //cy.pause()
    })
    it("Should be able to submit a successful submission via contact us form", () => {
        //cypress code
        //cy.visit("http://www.webdriveruniversity.com/")
        //cy.get('#contact-us > .thumbnail').click() 
        //cy.get('#contact-us').click({force: true})
        //cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html")
        cy.document().should('have.property', 'charset').and('eq', 'UTF-8')
        cy.title().should('include', 'WebDriver | Contact Us')
        cy.url().should('include', 'contactus')
        // cy.get('[name="first_name"]').type(data.first_name)
        // cy.get('[name="last_name"]').type(data.last_name)
        // cy.get('[name="email"]').type(data.email)
        // cy.get('textarea.feedback-input').type("Get ready for launch!!!")
        // cy.get('[type="submit"]').click()
        // cy.get('h1').should('have.text', 'Thank You for your Message!')
        //cy.webdriverUni_ContactForm_Submission(Cypress.env("first_name"), data.last_name,data.email,"Get ready for launch!!!",'h1','Thank You for your Message!');
        //data.first_name
        contact_Us_PO.contactForm_Submission(Cypress.env("first_name"), data.last_name, data.email, "Get ready for launch!!!", "h1", "Thank You for your Message!");
    });

    // If we want to run only one test 
    // Use this command "it.only"
    it("Should not be able to submit a successful submission via contact us form as all fields are required", () => {
        //cypress code
        //cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html")
        // cy.get('[name="first_name"]').type(data.first_name)
        // cy.get('[name="last_name"]').type(data.last_name)
        // cy.get('textarea.feedback-input').type("Get ready for launch!!!")
        // cy.get('[type="submit"]').click()
        // cy.get('body').contains('Error: all fields are required')
        if (Cypress.isBrowser('Firefox')) {

        } else {
            contact_Us_PO.contactForm_Submission(data.first_name, data.last_name," ","Get ready for launch!!!",'body','Error: Invalid email address');
        }
        //cy.webdriverUni_ContactForm_Submission(data.first_name, data.last_name," ","Get ready for launch!!!",'body','Error: Invalid email address');
    })
})