/// <reference types = "cypress" />

// Alerts 
// Basic 3 Types
// 1) window.alert()
// 2) window.confirm()
// 3) window.prompt()



describe('Validate Various Tyoes Of Alerts On Browser', () => {

    it('Type 1 - alert', () => {

        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })

        cy.visit('https://webdriveruniversity.com/')
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click()
        cy.get('#button1').click()
        cy.on("window:alert", (alert) => {
            expect(alert).to.eq('I am an alert box!')
            return true // For clicking Ok

        })
    })

    it('Type 2 - confirm', () => {

        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })

        cy.visit('https://webdriveruniversity.com/')
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click()
        cy.get('#button4').click()
        cy.on("window:alert", (alert) => {
            expect(alert).to.have.text('CLICK ME!')
            return true

        })
        cy.contains('You pressed OK!')
    })

    it('Type 3 - prompt', () => {

        // Cypress.on('uncaught:exception', (err, runnable) => {
        //     return false
        //   })

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.window().then((p) => {
            cy.stub(p, 'prompt').returns('hello')
            cy.contains('Click for JS Prompt').click()
            cy.get('#result').should('have.text', 'You entered: hello')
        })
    })

    it('Type 4 - Model Popup', () => {
        cy.visit('https://webdriveruniversity.com/')
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click()
        cy.get('#button2').click()
        cy.get('.modal-title').should('have.text', 'It’s that Easy!!  Well I think it is.....')
        cy.contains('Close').click()
    })


    it('Type 4 - Model Popup', () => {
        cy.visit('https://webdriveruniversity.com/')
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click()
        cy.get('#button2').click()
        cy.get('.modal-title').should('have.text', 'It’s that Easy!!  Well I think it is.....')
        cy.contains('Close').click()
    })

    it.only('Type 5 - Ajax loader', () => {

        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })

        cy.visit('https://webdriveruniversity.com/')
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click()
        cy.get('#button3').click()
        // cy.wait(5000)
        cy.get('#loader').click()

    })
})