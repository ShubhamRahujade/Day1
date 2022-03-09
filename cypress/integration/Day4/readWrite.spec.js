// Read and write functionallity


// const cypress = require("cypress");
// const { describe } = require("mocha");
// <referance types="cypress"/>

describe('Validating Read/Write Functionality', () => {

    // Write(txt)
    it('Validating Write Functionality', () => {
        cy.writeFile('textFile.txt', 'Hey whats going on?') //We Wrote the file
        cy.writeFile('textFile.txt', 'Welcome all....! \n',) // This Enables (overwrite)
        cy.writeFile('textFile.txt', 'How its going?', { flag: 'a+' }) //(flag used as append+)

    })

    // Read(txt)
    it('Validating Read Functionality', () => {
        cy.readFile('textFile.txt').should('exist') // Existance of file(before checking contents)
        cy.readFile('textFile.txt').should('have.contain', 'Welcome') //Checked contents
    })

    // Write(Json) 
    it('Validating Write Functionality', () => {
        cy.writeFile('cypress/fixtures/json.json', {
            'fullName': "shubham",
            'Age': 27,
            'Skills': 'Cypress'
        })
    })

    // Read(Json)
    // it('Validating Read Functionality', () => {
    //     cy.fixture('json').then((resp)=> {
    //         cy.log(resp)
    //     })

    // })

     it('Validating Read Functionality', () => {
        cy.readFile('cypress/fixtures/json.json').should('exist')
        cy.readFile('cypress/fixtures/json.json').its('fullName').should('eq','shubham')
     
    
    })

})