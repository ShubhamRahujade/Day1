
describe('verify the go rest api', () => {
    function getNewemail() {
        let chars = 'abcdefghijklmnopqrstuvwxyz1234567890';
        let string = '';
        for (let ii = 0; ii < 15; ii++) {
            string += chars[Math.floor(Math.random() * chars.length)];
        }
        return string + '@gmail.com';
    }

    it('valdate the user create user API', () => {
        cy.request({
            method: "POST",
            url: "https://gorest.co.in/public/v1/users",
            headers: {
                Authorization: "Bearer 404e74f31db1680d0f910b9f8b8b60cb14c3b5d2a935a43f5ac6e86bf5c480ad"
            },
            body: {
                "name": "Test User",
                "email": getNewemail(),
                "gender": "male",
                "status": "active"
            }
        }).then(function (response) {
            //cy.log(response)
            expect(response.body.data.name).to.eq("Test User")
            expect(response.status).to.equal(201)
            expect(response.body.data).to.have.property('id')
            return response.body.data.id

        }).then(function (id) {
            //cy.log(id)
            cy.request({
                method: "GET",
                url: `https://gorest.co.in/public/v1/users/${id}`,
                headers: {
                    Authorization: "Bearer 404e74f31db1680d0f910b9f8b8b60cb14c3b5d2a935a43f5ac6e86bf5c480ad"
                }

            }).then(function (response) {
                //cy.log(response)
                expect(response.status).to.equal(200)
                expect(response.body.data).to.have.property('id')
                return response.body.data.id
            }).then(function (id) {
                //cy.log(id)
                cy.request({
                    method: "PUT",
                    url: `https://gorest.co.in/public/v1/users/${id}`,
                    headers: {
                        Authorization: "Bearer 404e74f31db1680d0f910b9f8b8b60cb14c3b5d2a935a43f5ac6e86bf5c480ad"
                    },
                    body: {
                        "name": "skkkk",
                        "email": getNewemail(),
                        "gender": "male",
                        "status": "inactive"
                    }
                }).then(function (response) {
                    // cy.log(response)
                    expect(response.statusText).to.eq('OK')
                    expect(response.body.data).to.have.property('id')
                    return response.body.data.id

                }).then(function (id) {
                    // cy.log(id)
                    cy.request({
                        method: "DELETE",
                        url: `https://gorest.co.in/public/v1/users/${id}`,
                        headers: {
                            Authorization: "Bearer 404e74f31db1680d0f910b9f8b8b60cb14c3b5d2a935a43f5ac6e86bf5c480ad"
                        }

                    }).then(function (response) {
                        //cy.log(response)
                        expect(response.status).to.eq(204)

                    })


                })

            })
        })
    })
})
