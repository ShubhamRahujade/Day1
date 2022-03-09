/// <reference types="cypress" />

describe('Validate OrangeHrm Login Functionality',()=>{

    it('Login with valid credentials',()=>{
        cy.visit('/')
    })

    it('Validate the forgot password link',()=>{
        cy.visit('/index.php/auth/requestPasswordResetCode')
    })

    it.only('validate forgot pass link again',()=>{
        let url = Cypress.config().baseUrl
        cy.visit(url)
    })
})