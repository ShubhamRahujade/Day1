

export class Homepage {

    
elements = {
    username:'#txtUsername',
    password:'#txtPassword',
    loginButton:'#btnLogin',
    homeLogo:'#divLogo > img',
    forgetPass:'#forgotPasswordLink>a',
    socialIcons:'#social-icons'
}


login(userName,passWord){
    
    cy.get(this.elements.username).type(userName)
    cy.get(this.elements.password).type(passWord)
    cy.get(this.elements.loginButton).click()

}

validateLogo(){
    cy.get(this.elements.homeLogo).should('be.visible')
}


validateForgetpasswor(){
    cy.get(this.elements.forgetPass).click()
    cy.url().should('contain','requestPasswordResetCode')
}

validateSocialMedia(){
    cy.get(this.elements.socialIcons).children().should('have.length',4)
}












}