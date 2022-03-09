
// Google Traversal cypress
// Site - WebdriversUnoversity


// Traversal (Traversing Methods)

describe('Learning Of Traversal Methods', () => {
    // children()

    it('To get children of DOM elements, use the .children() command.', () => {
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html#')
        cy.get('.traversal-drinks-list').children().should('have.length', 5)
    })

    //eq()

    it('To get a DOM element at a specific index, use the .eq() command.', () => {
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html#')
        cy.get('.traversal-drinks-list').children().eq(3).should('have.text', 'Espresso')
    })

    //first()

    it('To get the first DOM element within elements, use the .first() command.', () => {
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html#')
        cy.get('.traversal-drinks-list').children().first().should("have.text", 'Coffee')
    })

    //last()

    it('To get the last DOM element within elements, use the .last() command.', () => {
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html#')
        cy.get('.traversal-drinks-list').children().last().should('have.text', 'Sugar')
    })

    // Next (All Next Methods Work With Their Siblings)

    it('To get the next sibling DOM element within elements, use the .next() command.', () => {
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html#')
        cy.get('#tea').next().should('have.text', 'Milk')
    })

    //nextAll()

    it('To get all of the next sibling DOM elements within elements, use the .nextAll() command.', () => {
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html#')
        cy.get('#tea').nextAll().should('have.length', 3)
    })

    //nextUntill()

    it('To get all of the next sibling DOM elements within elements until another element, use the .nextUntil() command.', () => {
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html#')
        cy.get('#tea').nextUntil('#sugar').should('have.length', 2)
    })

    //prev()

    it('To get the previous sibling DOM element within elements, use the .prev() command.', () => {
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html#')
        cy.get('#espresso').prev().should('have.text', 'Milk')
    })

    //prevAll()

    it('To get all previous sibling DOM elements within elements, use the .prevAll() command.', () => {
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html#')
        cy.get('#milk').prevAll().should('have.length', 2)
    })


    //prevUntill()

    it('To get all previous sibling DOM elements within elements until other element, use the .prevUntil() command.', () => {
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html#')
        cy.get('#espresso').prevUntil('#coffee').should('have.length', 2)
    })



    it('To get all sibling DOM elements of elements, use the .siblings() command.', () => {
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html#')
        cy.get('#espresso').siblings().should('have.length', 4)
    })

    //find()

    it('To get descendant DOM elements of the selector, use the .find() command.', () => {
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html#')
        cy.get('nav[aria-label="breadcrumb"]').find('ol').find('li').should('have.length', 3)
    })

    //filter()

    it('To get descendant DOM elements of the selector, use the .filter() command.', () => {
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html#')
        cy.get('nav[aria-label="breadcrumb"]').find('li').filter('li[class="breadcrumb-item active"]').should('have.text', 'Contact Us')
    })

    //closest()

    it('To get the closest ancestor DOM element, use the .closest() command.', () => {
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html#')
        cy.get('#espresso').closest('ul').children().should('have.id', 'coffee')

    })


    it('To remove DOM element(s) from the set of elements, use the .not() command.', () => {
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html#')
        cy.get('.traversal-button-states').children().not('.disabled').should('have.length', 3)

    })


    it('To get parent DOM element of elements, use the .parent() command.', () => {
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html#')
        cy.get('#sugar').parent('.traversal-drinks-list').children().should('have.id', 'coffee')

    })


    it('To get parents DOM element of elements, use the .parents() command.', () => {
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html#')
        cy.get('#sugar').parents('.traversal-drinks-list').children().should('have.length', 5)

    })



    it.only('To get parents DOM element of elements until other element, use the .parentsUntil() command.', () => {
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html#')
        cy.get('.breadcrumb').parentsUntil('.navbar ').should('have.length',6)

    })
})