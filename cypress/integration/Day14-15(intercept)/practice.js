

describe('Exprlore the intercept concept', function () {

    it('Validate GET request', function () {

        cy.intercept({
            method: "GET",
            url: "https://jsonplaceholder.cypress.io/comments/1"
        }).as('getElement')

        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.get('.btn-primary').click()
        cy.wait('@getElement').then((res) => {
            cy.log(res)
            expect(res.response.statusCode).to.eq(200)
            expect(res.response.body.email).to.eq('Eliseo@gardner.biz')
        })
        cy.get('.network-comment').should('contain', 'laudantium enim quasi')
    })


    it('Validate POST request', function () {

        cy.intercept({
            method: 'POST',
            url: 'https://jsonplaceholder.cypress.io/comments'
        }).as('postElement')

        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.get('.btn-success').click()
        cy.wait('@postElement').then((res) => {
            cy.log(res)
            expect(res.response.statusCode).to.eq(201)
            expect(res.response.body.email).eq("hello@cypress.io")
        })
        cy.get('.network-post-comment').should('have.text', 'POST successful!')
    })

    it('Validate PUT request', function () {
        cy.intercept({
            method:"PUT",
            url:"https://jsonplaceholder.cypress.io/comments/1"
        }).as('putElement')

        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.get('.btn-warning').click()
        cy.wait('@putElement').then((res)=>{
            cy.log(res)
            expect(res.request.headers.host).to.eq('jsonplaceholder.cypress.io')
            expect(res.response.body).to.have.keys('body','email','id','name')
        })
    })
})