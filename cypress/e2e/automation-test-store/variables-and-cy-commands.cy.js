/// <reference types= "Cypress" />

describe("Verifying variables, cypress commands and jquery commands", () => {
    it("Navigating to specific product pages", () => {
        cy.visit("https://automationteststore.com/")
        //Based on the course this failed, but it was successfull 
        // const makeupLink = cy.get("a[href*='product/category&path=']").contains("Makeup")
        // const skincareLink = cy.get("a[href*='product/category&path=']").contains("Skincare")
        // makeupLink.click()
        // skincareLink.click()

        //Based on the course this will pass, this also passed 
        // const makeupLink = cy.get("a[href*='product/category&path=']").contains("Makeup")
        // makeupLink.click()
        // const skincareLink = cy.get("a[href*='product/category&path=']").contains("Skincare")
        // skincareLink.click()

        //This is the recommended approach
        const makeupLink = cy.get("a[href*='product/category&path=']").contains("Makeup").click()
        const skincareLink = cy.get("a[href*='product/category&path=']").contains("Skincare").click()

    });

    it("Navigating to specific product pages", () => {
        cy.visit("https://automationteststore.com/")
        const skincareLink = cy.get("a[href*='product/category&path=']").contains("Skincare").click()
        //Following code will fail, based on the course it will run forever
        // const header = cy.get("h1 .maintext")
        // cy.log(header.text())

        cy.get("h1 .maintext").then(($headerText) => {
            const headerText = $headerText.text()
            cy.log("Found header text: " + headerText)
            expect(headerText).is.eq('Skincare')
        }) 
    });

    it("Validate properties of the contact us page", () => {
        cy.visit("https://automationteststore.com/index.php?rt=content/contact")
        
        //Uses cypress commands and chaining 
        cy.contains('#ContactUsFrm', 'Contact Us Form').find('#field_11').should('contain', 'First name')

        //JQuery Approach 
        cy.contains('#ContactUsFrm', 'Contact Us Form').then(text => {
            const firstNameText = text.find('#field_11').text()
            expect(firstNameText).to.contain('First name')

            //Embedded commands (Closure)
            cy.get('#field_11').then(fnText => {
                cy.log(fnText.text())
                cy.log(fnText)
            })
        })
    })
    
})