/// <reference types= "Cypress" />

describe("Test contact us form via automation test store",() => {
    before(function() {
        //cy.viewport(550,750)
        cy.fixture('userDetails').as("user")
    })
    it("Should be able to submit a successful submission via contact us form", {
        retries: {
            runMode: 3,
            openMode: 2
        }
    }, () => {
        cy.visit("https://automationteststore.com/")

        // Different selectors for the same thing
        //cy.get('.info_links_footer > :nth-child(5) > a').click()
        //cy.xpath("//a[contains(@href, 'contact')]").click()
        
        cy.get("a[href$='contact']").click().then(function(linkText) {
            cy.log("Clicked on link using text: " + linkText.text())
        })
        cy.get("@user").then((user) => {
            cy.get('#ContactUsFrm_first_name').type(user.first_name)
            cy.get('#ContactUsFrm_email').type(user.email)
        })

        cy.get('#ContactUsFrm_email').should('have.attr','name', 'email')
        cy.get('#ContactUsFrm_enquiry').type("WARNING! I am your competitor")
        //cy.get('.col-md-6 > .btn').click()
        cy.get("button[title='Submit']").click()
        cy.get('.mb40 > :nth-child(3)').should('have.text','Your enquiry has been successfully sent to the store owner!')

        //While using non-cypress commands, it's more likely that they run at the same time as cypress commands
        //console.log("Test has completed");
        cy.log("Test has completed")

    });
})