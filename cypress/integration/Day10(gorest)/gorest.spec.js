

describe('Validate Gorest Api', function () {

    function emailGen() {
        let chars = 'abcdefwxyz1234567890';
        let string = '';
        for (let ii = 0; ii < 15; ii++) {
            string += chars[Math.floor(Math.random() * chars.length)];
        }
        return (string + '@gmail.com');

    }


    it('Verify POST Api', function () {

        cy.request({
            method: 'POST',
            url: 'https://gorest.co.in/public/v1/users',
            headers: {
                authorization: 'Bearer 0d4d781fe8e2e0f7a308b09770e01649836681643d7891b26f9704eed68600f2'
            },
            body: {
                "name": "Shubham Rahujade",
                "email": emailGen(),
                "gender": "male",
                "status": "inactive"
            }
        }).then(function (response) {
            expect(response.status).to.be.eq(201)
            expect(response.body.data).to.have.property('id')
            return (response.body.data['id'])
        })

            .then(function (id) {


                cy.request({
                    method: "GET",
                    url: `https://gorest.co.in/public/v1/users/${id}`,
                    headers: {
                        authorization: 'Bearer 0d4d781fe8e2e0f7a308b09770e01649836681643d7891b26f9704eed68600f2'
                    },

                }).then(function (response) {
                    expect(response.status).to.eq(200)
                    expect(response.statusText).to.be.eq('OK')
                    return id
                })

            })
            .then(function (id) {

                cy.request({
                    method: 'PUT',
                    url: `https://gorest.co.in/public/v1/users/${id}`,
                    headers: {
                        authorization: 'Bearer 0d4d781fe8e2e0f7a308b09770e01649836681643d7891b26f9704eed68600f2'
                    },
                    body: {
                        "email": emailGen(),
                        "name": "Rahul Raj",
                        "gender": "male",
                        "status": "active",
                        "id": 1001
                    }

                }).then(function (response) {
                    expect(response.status).to.eq(200)
                    expect(response.statusText).to.be.eq('OK')
                    return id
                })
            })
            .then(function (id) {

                cy.request({
                    method: 'DELETE',
                    url: `https://gorest.co.in/public/v1/users/${id}`,
                    headers: {
                        authorization: 'Bearer 0d4d781fe8e2e0f7a308b09770e01649836681643d7891b26f9704eed68600f2'
                    }
                }).then(function(response){
                    expect(response.status).to.eq(204)
                    expect(response.statusText).to.be.eq('No Content')
                })
            })
    })
})