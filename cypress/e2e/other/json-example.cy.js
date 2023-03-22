/// <reference types= "Cypress" />

describe("JSON Object", () => {
    it("Json Object Examples", () => {
        const exampleObject = {"key": "Brock", "key2": "Lesnar"}
        const exampleArrayOfValues = ["Mount", "Rushmore", "Boring"]
        const exampleArrayOfObjects = [{"key": "Marcus"}, {"key2": "Layla"}, {"key3": "Alan"}]

        const users = {
            "firstName": "Wicked",
            "lastName": "Game",
            "Age": 50,
            "Students": [
                {
                    "firstName": "Mitro",
                    "lastName": "Lovich"
                },
                {
                    "firstName": "Blizzard",
                    "lastName": "Entertainment",
                }
            ]
        }

        cy.log(exampleObject["key"]);
        cy.log(exampleObject["key2"]);
        cy.log(exampleObject.key2);

        cy.log(exampleArrayOfValues[0]);
        cy.log(exampleArrayOfValues[2]);

        cy.log(users.lastName);
        cy.log(users.Students[0].lastName);

        cy.log(exampleArrayOfObjects[0].key);
        cy.log(exampleArrayOfObjects[1].key2);
        cy.log(exampleArrayOfObjects[2].key3);
        
    });
});