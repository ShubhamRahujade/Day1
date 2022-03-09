/// <reference types = "cypress" />

// Alerts 
// Basic 3 Types
// 1) window.alert()
// 2) window.confirm()
// 3) window.prompt()



describe('Validate Various Tyoes Of Alerts On Browser',()=>{

    it('Type 1 - alert',()=>{

        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
          })

        cy.visit('https://webdriveruniversity.com/')
        cy.get('#popup-alerts').invoke('removeAttr','target').click()
        cy.get('#button1').click()
        cy.on("window:alert",(alert)=>{
            expect(alert).to.eq('I am an alert box!')
            return true // For clicking Ok
            
        })
    })

    it.only('Type 2 - confirm',()=>{

        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
          })

        cy.visit('https://webdriveruniversity.com/')
        cy.get('#popup-alerts').invoke('removeAttr','target').click()
        cy.get('#button4').click()
        cy.on("window:alert",(alert)=>{
            expect(alert).to.have.text('CLICK ME!')
            return true
            
            
        })
    })
})