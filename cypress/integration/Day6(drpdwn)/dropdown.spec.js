


describe('Check the dropdown lists', () => {

    it('Check first dropdown menu list', () => {
        cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.get('.section-title').find('select[class="dropdown-menu-lists" ]').first().select('Python').should('have.value', 'python')
    })

    it('Check all elements in dropdown menu list', () => {
        let theElements = ['python', 'testng', 'jquery']
        cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.get('.section-title').find('.dropdown-menu-lists').each(function (el, index) {
            if(index <= 2)
            cy.wrap(el).select(theElements[index]).should('have.value',theElements[index])
    })
    })

    it('Verify selected and disabled menu', () => {
        cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.get('[value="lettuce"]').click().should('be.enabled')
        cy.get('[value="cabbage"]').should('be.disabled')
        cy.get('#fruit-selects').select('Pear').should('contain','Pear')
    })


     // Verify the title
    
     it('Verify URL', () => {
        cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.url().should('include','RadioButtons')

     }) 

     // Verify the page Title

     it.only('Verify the page Title', () => {
        cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.title().should('contain','Checkboxe(s)')

     })
})