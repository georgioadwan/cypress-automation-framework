/// <reference types= "Cypress" />

describe("Handle JS alerts",() => {
    it("Confirm JS alert contains the correct text", () => {
        cy.visit("http://www.webdriveruniversity.com/")
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click({force:true})
        cy.get('#button1').click()
        cy.on('window:alert', (str) => {
            expect(str).to.eq('I am an alert box!')
        })
    });
    it("Validate JS confirm alert box works correctly when clicking ok", () => {
        cy.visit("http://www.webdriveruniversity.com/")
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click({force:true})
        cy.get('#button4').click()
        cy.on('window:confirm', (str) => {
            return true;
        })
        cy.get('#confirm-alert-text').contains('You pressed OK!')
    });
    it("Alert challenge", () => {
        cy.visit("http://www.webdriveruniversity.com/")
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click({force:true})
        cy.get('#button4').click()
        cy.on('window:confirm', (str) => {
            return false;
        })
        cy.get('#confirm-alert-text').contains('You pressed Cancel!')
    });
    it.only("Validate JS confirm alert box using a stub", () => {
        cy.visit("http://www.webdriveruniversity.com/")
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click({force:true})
        const stub = cy.stub()
        cy.on('window:confirm', stub)
        cy.get('#button4').click().then(() => {
            expect(stub.getCall(0)).to.be.calledWith('Press a button!')
        }).then(() => {
            return true;
        }).then(() => {
            cy.get('#confirm-alert-text').contains('You pressed OK!')
        })
    });
})