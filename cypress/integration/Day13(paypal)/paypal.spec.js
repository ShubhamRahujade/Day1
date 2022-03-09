
/// <reference types = "cypress" />

describe('Verify the PayPal Api', function () {

    let Token = ""


    it('Generate token of paypal', function () {

        cy.request({
            method: 'POST',
            url: 'https://api-m.sandbox.paypal.com/v1/oauth2/token',
            headers: {
                Authorization: 'Basic QVZuX1lkdXpYQmV1TmdDek1ya2tFRUFmdTd3TE5sanlvT2dLMTlsZ1pvcWF0bkRXSko1clZnNURFcHFmX0pfbWJwVHNMUi1xNHNKUUljRUQ6RU1zeUdWX0I3TzNXRzVtRGdLWFA1OTM0aEF2T3o3enJHYndMdENLSVhreWNnLWZnM3NjMjNOc015QVNhWTdaengwSExrWEM3SEZVLUpUNlQ='
            },
            body: {
                grant_type: 'client_credentials'
            },
            form: true

        }).then((res) => {
            Token = res.body['access_token']
        })
    })

    it('Create An Order', function () {
        cy.request({
            method: 'POST',
            url: 'https://api-m.sandbox.paypal.com/v2/checkout/orders',
            headers: {
                Content_Type: 'application/json',
                Authorization: `Bearer ${Token}` 
            },
            body: {
                "intent": "CAPTURE",
                "purchase_units": [
                    {
                        "amount": {
                            "currency_code": "USD",
                            "value": "100.00"
                        }
                    }
                ]
            }

        }).then((res)=>{
            expect(res.status).eq(201)
        })
    })
})