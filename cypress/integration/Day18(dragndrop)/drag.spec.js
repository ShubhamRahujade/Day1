

describe('Validate scrolIntoview,drag & drop,dblclick functonality',function(){

    it('Validate scrolIntoview functonality',function(){
        cy.visit('https://webdriveruniversity.com/')
        cy.get('#file-upload').scrollIntoView()
        cy.get('#file-upload').find('div').find('h1').should('have.text','FILE UPLOAD')
    })

    it('Validate Drag & Drop functionality',function () {
        cy.visit('https://webdriveruniversity.com/')
        cy.get('#actions').scrollIntoView()
        cy.get('#actions').invoke('removeAttr','target').click()
        cy.get('#draggable').trigger('mousedown',{button:1})
        cy.get('#droppable').trigger('mousemove')
        cy.get('#droppable').trigger('mouseup',{force:true})
    })

    it('Validate Dblclick functionality',function () {
        cy.visit('https://webdriveruniversity.com/')
        cy.get('#actions').scrollIntoView()
        cy.get('#actions').invoke('removeAttr','target').click()
        cy.get('#double-click').dblclick()
        cy.get('#double-click').should('have.attr','class','div-double-click double')
        
        
    })
})

