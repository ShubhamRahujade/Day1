


describe('Calculate the SUM of table elements',()=>{
      
    it('Verify Sum of first table',()=>{
        let sum = 0 
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html#')
        cy.get('#t01').find('tbody').children().each((eq,index)=>{
            if(index>0){
               sum = sum + Number(eq.children().eq(2).text())

            }
        }).then(()=>{
            cy.log(sum)
        })
    })


    it('Verify Sum of second table',()=>{
        let sum = 0 
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html#')
        cy.get('#t02').find('tbody').children().each((eq,index)=>{
            if(index>0){
               sum = sum + Number(eq.children().eq(2).text())

            }
        }).then(()=>{
            cy.log(sum)
        })

    })
})