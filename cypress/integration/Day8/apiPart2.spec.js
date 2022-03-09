


describe('Validate the All APIs ', function () {

    it('Validate GET Api and count the number of Users', function () {

        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/users?page=2'
        })
            .then(function (response) {
                expect(response.body.per_page).to.eq(response.body.data.length)
            })

    })

    it('Validate GET Api and check the keys of data', function () {

        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/users?page=2'
        })
            .then(function (response) {
                expect(response.body.data[0]).to.have.keys('email', 'id', 'first_name', 'last_name', 'avatar')
            })

    })


    //OR

    it('Validate GET Api and check the keys of data', function () {

        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/users?page=2'
        })
            .then(function (response) {
                (response.body.data.forEach(element => {
                    // expect(element).to.have.property('id')
                    // expect(element).to.have.property('first_name')
                    // expect(element).to.have.property('last_name')
                    // expect(element).to.have.property('avatar')
                    // expect(element).to.have.property('email')

                    expect(element).to.have.keys('email', 'id', 'first_name', 'last_name', 'avatar')
                }))
            })

        })


        it('Validate Email of second User', function () {

            cy.request({
                method: 'GET',
                url: 'https://reqres.in/api/users?page=2'
            })
                .then(function (response) {
                    expect(response.body.data[1]['email']).to.eq("lindsay.ferguson@reqres.in")
                })
    
        })


        it.only('Validate response body for user created api', function () {

            cy.request({
                method: 'POST',
                url: 'https://reqres.in/api/users',
                body:{
                    "name": "shubham",
                    "job": "rahujade"
                }
            })
                .then(function (response) {
                    expect(response.duration).to.be.within(200,500)
                    expect(response.body).have.keys('name','job','id','createdAt')
                    expect(response.duration).to.be.greaterThan(200)
                    expect(response.duration).to.be.lessThan(300)
                    

            })

        })

})