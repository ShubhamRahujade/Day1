

describe('Validate Iframe Using Two Methods', () => {

    it('Validate iframe element using Jquery Method', () => {

        cy.visit('https://webdriveruniversity.com/IFrame/index.html')
        cy.get('#frame').then((a) => {
            let body = a.contents().find('body')
            cy.wrap(body).as('elementOne')
            cy.get('@elementOne').find('.sub-heading').eq(1).should('have.text', 'GREAT SERVICE!')
        })
    })

    it.only('Validate iframe element using JavaScript Method', () => {

        cy.visit('https://webdriveruniversity.com/IFrame/index.html')
        cy.get('#frame').then((el)=>{
            let body = (el['0'].contentDocument['body'])
            cy.wrap(body).as('elementTwo')
            cy.get('@elementTwo').find('.sub-heading').last().should('have.text','Excellent Customer Service!')
        })
    })
           

})