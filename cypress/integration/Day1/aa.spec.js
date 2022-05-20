/// <reference types = "cypress" />

describe("Validate Login",()=>{
    it("Validate Valid login creds",()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/")
        cy.get("#txtUsername").type("Admin")
        cy.log("HEllo")
        cy.get("#txtPassword").type("admin123")
        cy.get("#btnLogin").click()
    })
})