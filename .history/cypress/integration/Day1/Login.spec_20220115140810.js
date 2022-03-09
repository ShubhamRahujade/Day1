

describe('Checking Login Functionality',function(){

    it('Check Valid Login Credentials',function(){
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.get('#txtUsername').type('Admin')
        cy.get('#txtPassword').type('admin123')
        cy.get('#btnLogin').click()
        cy.get('img[alt="OrangeHRM"]').should('be.visible')



    })

    it('Check Invalid Login Credentials',function(){
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.get('#txtUsername').type('Addmin')
        cy.get('#txtPassword').type('adminf123')
        cy.get('#btnLogin').click()
        cy.get('#spanMessage').should('be.visible')
 })

})