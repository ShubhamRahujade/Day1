

import { Homepage } from '../../support/homePage/homepage'

describe('Validate the HomePage of OrangeHrm', function () {

    let newHome = new Homepage()

    beforeEach(function(){
        cy.visit('https://opensource-demo.orangehrmlive.com/')
    })

    it('Validate Login functionality', function () {
        newHome.login('Admin','admin123')
        cy.url().should('contain','dashboard')        
    })

    it('Validate Homepage LOGO',function(){
        newHome.validateLogo()
    })

    it('Validate ForgetPass link',function(){
        newHome.validateForgetpasswor()

    })

    it('Validate Social media icons',function(){
        newHome.validateSocialMedia()

    })
})