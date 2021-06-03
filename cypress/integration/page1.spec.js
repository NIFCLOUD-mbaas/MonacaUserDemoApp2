import TestFilters from '../support/filterTests.js'

TestFilters([], () => {
    describe('ID/PW認証 - Handling Action Sign up', function () {
        var email = ''
        var pass = '123456'
        beforeEach(() => {
            cy.viewport('iphone-x')
            cy.visit('http://localhost:8080')

            email = generate_random_string(8) + '@gmail.com'
        })
    
        it('ID/PW認証 screen', function () {
            cy.get('#toolbar-title').should('have.text', 'ID/PW認証')
        }) 

        it('Handling Action Sign up - Validate empty ID', function () {
            cy.get('#singupPassword').type(pass, { delay: 100 }).should('have.value', pass)
            cy.get('#singupPasswordConfirm').type(pass, { delay: 100 }).should('have.value', pass)
            cy.get('#first-page').find('ons-button').contains('Sign up').click()
            cy.contains('入力されていない項目があります').should('be.visible')
        })

        it('Handling Action Sign up - Validate empty password', function () {
            cy.get('#singupUsername').type(email, { delay: 100 }).should('have.value', email)
            cy.get('#singupPasswordConfirm').type(pass, { delay: 100 }).should('have.value', pass)
            cy.get('#first-page').find('ons-button').contains('Sign up').click()
            cy.contains('入力されていない項目があります').should('be.visible')
        })

        it('Handling Action Sign up - Validate empty confirm password', function () {
            cy.get('#singupUsername').type(email, { delay: 100 }).should('have.value', email)
            cy.get('#singupPassword').type(pass, { delay: 100 }).should('have.value', pass)
            cy.get('#first-page').find('ons-button').contains('Sign up').click()
            cy.contains('入力されていない項目があります').should('be.visible')
        })

        it('Handling Action Sign up - Validate password and confirm password not match', function () {
            cy.get('#singupUsername').type(email, { delay: 100 }).should('have.value', email)
            cy.get('#singupPassword').type(pass, { delay: 100 }).should('have.value', pass)
            var confirm_pass = generate_random_string(8)
            cy.get('#singupPasswordConfirm').type(confirm_pass, { delay: 100 }).should('have.value', confirm_pass)
            cy.get('#first-page').find('ons-button').contains('Sign up').click()
            cy.contains('パスワードが不一致です').should('be.visible')
        })

        it('Handling Action Sign up - Sign up successful', function () {
            cy.get('#singupUsername').type(email, { delay: 100 }).should('have.value', email)
            cy.get('#singupPassword').type(pass, { delay: 100 }).should('have.value', pass)
            cy.get('#singupPasswordConfirm').type(pass, { delay: 100 }).should('have.value', pass)
            cy.get('#first-page').find('ons-button').contains('Sign up').click()
            cy.wait(1000)
            cy.contains('【ID/PW認証】ログイン成功:').should('be.visible')
        })
    })

    describe('ID/PW認証 - Handling Action Sign in', function () {
        var email = 'test@gmail.com'
        var pass = '123456'
        beforeEach(() => {
            cy.viewport('iphone-x')
            cy.visit('http://localhost:8080')
        })

        it('Handling Action Sign in - Validate empty ID', function () {
            cy.get('#singinPassword').type(pass, { delay: 100 }).should('have.value', pass)
            cy.get('#first-page').find('ons-button').contains('Sign in').click()
            cy.contains('入力されていない項目があります').should('be.visible')
        })

        it('Handling Action Sign up - Validate empty password', function () {
            cy.get('#singinUsername').type(email, { delay: 100 }).should('have.value', email)
            cy.get('#first-page').find('ons-button').contains('Sign in').click()
            cy.contains('入力されていない項目があります').should('be.visible')
        })

        it('Handling Action Sign up - Sign up successful', function () {
            cy.get('#singinUsername').type(email, { delay: 100 }).should('have.value', email)
            cy.get('#singinPassword').type(pass, { delay: 100 }).should('have.value', pass)
            cy.get('#first-page').find('ons-button').contains('Sign in').click()
            cy.wait(1000)
            cy.contains('【ID/PW認証】ログイン成功:').should('be.visible')
        })
    })

    function generate_random_string(string_length) {
        let random_string = '';
        let random_ascii;
        for(let i = 0; i < string_length; i++) {
            random_ascii = Math.floor((Math.random() * 25) + 97);
            random_string += String.fromCharCode(random_ascii)
        }
        return random_string
    }
})