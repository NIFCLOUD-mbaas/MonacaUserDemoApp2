import TestFilters from '../support/filterTests.js'

TestFilters([], () => {
    describe('ID/PW認証 - Handling Action Sign up (userName)', function () {
        var userName = ''
        var pass = '123456'
        beforeEach(() => {
            cy.viewport('iphone-x')
            cy.visit('http://localhost:8080')

            userName = generate_random_string(8)
        })
    
        it('ID/PW認証 screen', function () {
            cy.get('#toolbar-title').should('have.text', 'ID/PW認証')
        }) 

        it('Handling Action Sign up (userName) - Validate empty ID', function () {
            cy.get('#singupPassword').type(pass, { delay: 100 }).should('have.value', pass)
            cy.get('#singupPasswordConfirm').type(pass, { delay: 100 }).should('have.value', pass)
            cy.get('#first-page').find('ons-button').contains('Sign up').click()
            cy.contains('入力されていない項目があります').should('be.visible')
        })

        it('Handling Action Sign up (userName) - Validate empty password', function () {
            cy.get('#singupUsername').type(userName, { delay: 100 }).should('have.value', userName)
            cy.get('#singupPasswordConfirm').type(pass, { delay: 100 }).should('have.value', pass)
            cy.get('#first-page').find('ons-button').contains('Sign up').click()
            cy.contains('入力されていない項目があります').should('be.visible')
        })

        it('Handling Action Sign up (userName) - Validate empty confirm password', function () {
            cy.get('#singupUsername').type(userName, { delay: 100 }).should('have.value', userName)
            cy.get('#singupPassword').type(pass, { delay: 100 }).should('have.value', pass)
            cy.get('#first-page').find('ons-button').contains('Sign up').click()
            cy.contains('入力されていない項目があります').should('be.visible')
        })

        it('Handling Action Sign up (userName) - Validate password and confirm password not match', function () {
            cy.get('#singupUsername').type(userName, { delay: 100 }).should('have.value', userName)
            cy.get('#singupPassword').type(pass, { delay: 100 }).should('have.value', pass)
            var confirm_pass = generate_random_string(8)
            cy.get('#singupPasswordConfirm').type(confirm_pass, { delay: 100 }).should('have.value', confirm_pass)
            cy.get('#first-page').find('ons-button').contains('Sign up').click()
            cy.contains('パスワードが不一致です').should('be.visible')
        })

        it('Handling Action Sign up (userName) - Sign up successful', function () {
            cy.get('#singupUsername').type(userName, { delay: 100 }).should('have.value', userName)
            cy.get('#singupPassword').type(pass, { delay: 100 }).should('have.value', pass)
            cy.get('#singupPasswordConfirm').type(pass, { delay: 100 }).should('have.value', pass)
            cy.get('#first-page').find('ons-button').contains('Sign up').click()
            cy.wait(1000)
            cy.contains('【ID/PW認証】ログイン成功:').should('be.visible')
        })
    })

    describe('ID/PW認証 - Handling Action Sign in (userName)', function () {
        var userName = 'user_test1'
        var pass = '123456'
        beforeEach(() => {
            cy.viewport('iphone-x')
            cy.visit('http://localhost:8080')
        })

        it('Handling Action Sign-in (userName) - Validate empty ID', function () {
            cy.get('#singinPassword').type(pass, { delay: 100 }).should('have.value', pass)
            cy.get('#first-page').find('ons-button').contains('Sign in').click()
            cy.contains('入力されていない項目があります').should('be.visible')
        })

        it('Handling Action Sign in (userName) - Validate empty password', function () {
            cy.get('#singinUsername').type(userName, { delay: 100 }).should('have.value', userName)
            cy.get('#first-page').find('ons-button').contains('Sign in').click()
            cy.contains('入力されていない項目があります').should('be.visible')
        })

        it('Handling Action Sign in (userName) - Sign up successful', function () {
            cy.get('#singinUsername').type(userName, { delay: 100 }).should('have.value', userName)
            cy.get('#singinPassword').type(pass, { delay: 100 }).should('have.value', pass)
            cy.get('#first-page').find('ons-button').contains('Sign in').click()
            cy.wait(5000)
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