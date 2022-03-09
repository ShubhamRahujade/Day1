/// <reference types = "cypress" />

// Alerts 
// Basic 3 Types
// 1) window.alert()
// 2) window.confirm()
// 3) window.prompt()



describe('Validate Various Tyoes Of Alerts On Browser',()=>{

    it('Type 1 - alert',()=>{

        cy.visit('https://webdriveruniversity.com/')
        cy.get('#popup-alerts').invoke('removeAttr','target').click()
        cy.get('#button1').click()
        cy.on("uncaught:exception",(error,runnable)=>{
            cy.log(error)
        })
    })
})