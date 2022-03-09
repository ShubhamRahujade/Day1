

describe('Calculate the SUM of table elements', () => {

    function tableTotal(id, expValue) {
        let sum = 0
        cy.get(`#${id}`).find('tbody').children().each((eq, index) => {
            if (index > 0) {
                sum = sum + Number(eq.children().eq(2).text())
            }
        }).then(() => {
            expect(sum).to.eq(expValue)
        })
    }

    beforeEach(() => {
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html#')
    })

    it('Verify Sum of first table', () => {
        tableTotal('t01', 159)

    })


    it('Verify Sum of second table', () => {
        tableTotal('t02', 163)


    })
})