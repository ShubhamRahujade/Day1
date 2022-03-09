


describe('Validate four basic API',function(){

    it('Validate GET Api',function(){

        cy.request({
            method:'GET',
            url:'https://reqres.in/api/users?page=2'
        })
        .then(function(response) {
            expect(response.status).to.eq(200)
            
        })
    })
   
    it('Validate POST Api',function () {
        
        cy.request({
            method:'POST',
            url:'https://reqres.in/api/users',
            body:{
                "name": "shubham",
                "job": "rahujade"
            }
        })
        .then(function (response) {
            expect(response.status).to.eq(201)
            
        })
    })


    it('Validate PUT Api',function () {
        
        cy.request({
            method:'PUT',
            url:'https://reqres.in/api/users/2',
            body:{
                "name": "shubham",
                "job": "rahujade"
            }
        })
        .then(function (response) {
            expect(response.status).to.eq(200)
            
        })
    })


    it('Validate DELETE Api',function () {
        
        cy.request({
            method:'DELETE',
            url:'https://reqres.in/api/users/2',
         
        })
        .then(function (response) {
            expect(response.status).to.eq(204)
            
        })
    })
})