

describe('Validate the Calender functionality', function () {


    it('Verify the calender functions', function () {

        cy.visit('https://webdriveruniversity.com/Datepicker/index.html')
        cy.get('.form-control').click()

        let date = new Date()

        date.setDate(date.getDate() + 600)

        let year = date.getFullYear()
        let month = date.getMonth()
        let day = date.getDate()
        let themonth = date.toLocaleString('default', { month: 'long' })
        // cy.log(year)
        // cy.log(month)
        // cy.log(day)
        // cy.log(themonth)

        function getYear() {

            cy.get('.datepicker-switch').first().then((eq) => {
                if (!eq.text().includes(year)) {
                    cy.get('.next').first().click()
                    getYear()

                }
            }).then(() => {

                cy.get('.datepicker-switch').first().then((eq) => {
                    if (!eq.text().includes(themonth)) {
                        cy.get('.next').first().click()
                        getYear()

                    }
                })

            })
        }

        function gettheDate() {
            cy.get('.day').contains(day).click()
        }
        getYear()
        gettheDate()
        

    })

})

