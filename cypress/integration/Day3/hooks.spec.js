// hooks are generally used for not making repeatation of a program line 
// they are introduced to set conditions before or after the tests
// Usuallly they run (before/after between it blocks)(statemnets order doesnt matter)



before(function() {
    cy.log(`This is before all the test(running 1st)`)
})

beforeEach(function () {
    cy.log(`This is after before block and before it block(running 2nd and 5th)`)
})

afterEach(function () {
    cy.log(`This is after it block(running 4th and 7th)`)   
})

after(function () {
    cy.log(`This is after/last block`)
})


it('This block is running 3rd',()=>{
    cy.log(`Hello`)
})

it('This block is runnin 6th',()=>{
    cy.log(`Hello...2`)
})
