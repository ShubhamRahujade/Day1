// Lets try for Radio Buttons (Test Cases with Hooks)


describe('We are testing radio buttons',function () {
    
before(function () {
    cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
    
})

it('Verify the check functionality(single)',()=>{
    cy.get("input[type='checkbox']").first().check().should('be.checked')
    cy.wait(3000)
    cy.get("input[type='checkbox']").first().uncheck().should('not.be.checked')
})

it('Verify the check functionality(all)',()=>{
    cy.get("input[type='checkbox']").check(["option-1","option-2","option-3","option-4"]).should('be.checked')
    cy.get("input[type='checkbox']").uncheck(["option-1","option-2","option-3","option-4"]).should('not.be.checked')
    
})

// click functionallity
it('Verify the click functionality',()=>{
    cy.get('#radio-buttons').children().first().click().should('be.checked')
    cy.get('#radio-buttons').children().eq(2).should('not.be.checked')
    
})



})