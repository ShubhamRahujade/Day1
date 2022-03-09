/// <reference types="cypress" />

describe('Validate OrangeHrm Login Functionality', () => {

    it('Login with valid credentials', () => {
        cy.visit('/')
    })

    it('Validate the forgot password link', () => {
        cy.visit('/index.php/auth/requestPasswordResetCode')
    })

    it('validate forgot pass link again', () => {
        let url = Cypress.config().baseUrl
        cy.visit(url)
    })

})


//npx cypress run --headed --browser chrome --config baseUrl="https://google.com/" --spec 'cypress\integration\Day20(environment)\login.spec.js'

