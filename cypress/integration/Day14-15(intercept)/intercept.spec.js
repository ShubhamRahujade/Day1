/// <reference types = "cypress" />


describe('Validate intercept functionality', () => {

    it('Validate GET Request', () => {

        cy.request({
            method: "GET",
            url: "https://jsonplaceholder.cypress.io/comments/1"
        }).then((response) => {
            cy.visit('https://example.cypress.io/commands/network-requests'),
                cy.get('.btn-primary').click()
            cy.get('.network-comment').should('have.text', response.body.body)
        })
    })

    it.only('Validate Get Request Using Intercept', () => {

        cy.intercept({
            method: "GET",
            url: "https://jsonplaceholder.cypress.io/comments/1",
        }).as('getElement')

        cy.visit('https://example.cypress.io/commands/network-requests')
            cy.get('.btn-primary').click()
        cy.wait('@getElement')
        cy.get('.network-comment').should('contain', 'laudantium enim quasi ')


    })


    it('Validate Post Request Using Intercept', () => {

        cy.intercept({
            method: 'POST',
            url: 'https://jsonplaceholder.cypress.io/comments',
        }).as('postElement')

        cy.visit('https://example.cypress.io/commands/network-requests'),
            cy.get('.btn-success').click()
        cy.wait('@postElement')
        cy.get('.network-post-comment').should('have.text', 'POST successful!')
    })


    it('Validate Put Request Using Intercept', () => {

        cy.intercept({
            method: 'PUT',
            url: 'https://jsonplaceholder.cypress.io/comments/1'
        }).as('putElement')

        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.get('.btn-warning').click()
        cy.wait('@putElement').then((response) => {
            expect(response.response.body).to.have.keys('name', 'email', 'body', 'id')
        })

    })
})