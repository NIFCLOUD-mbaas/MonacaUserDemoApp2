import TestFilters from '../support/filterTests.js'

TestFilters([], () => {
    describe('Email/PW認証 - Handling Action Sign up', function () {
        var email = ''
        beforeEach(() => {
            cy.viewport('iphone-x')
            cy.visit('http://localhost:8080')
            email = generate_random_string(8) + '@gmail.com'

            cy.wait(1000)
            cy.get('ons-tab[label="Email/PW"]').click()
            cy.wait(1000)
        })
    
        it('Email/PW認証 screen', function () {
            cy.get('#toolbar-title').should('have.text', 'Email/PW認証')
        }) 

        it('Handling Action Sign up - Validate empty email', function () {
            cy.get('#second-page').find('ons-button').contains('Sign up').click()
            cy.contains('メールアドレスが入力されていません').should('be.visible')
        })

        it('Handling Action Sign up - Sign up successful', function () {
            cy.get('#singupEmailAddress').type(email, { delay: 100 }).should('have.value', email)
            cy.get('#second-page').find('ons-button').contains('Sign up').click()
            cy.wait(1000)
            cy.contains('【Email/PW認証】新規登録メール配信完了').should('be.visible')
        })
    })

    describe('Email/PW認証 - Handling Action Sign in', function () {
        var email = 'mail_test@gmail.com'
        var pass = '123456'
        beforeEach(() => {
            cy.viewport('iphone-x')
            cy.visit('http://localhost:8080')
            cy.wait(1000)
            cy.get('ons-tab[label="Email/PW"]').click()
            cy.wait(1000)
        })

        it('Handling Action Sign in - Validate empty ID', function () {
            cy.get('#singinEmailAddressPW').type(pass, { delay: 100 }).should('have.value', pass)
            cy.get('#second-page').find('ons-button').contains('Sign in').click()
            cy.contains('入力されていない項目があります').should('be.visible')
        })

        it('Handling Action Sign up - Validate empty password', function () {
            cy.get('#singinEmailAddress').type(email, { delay: 100 }).should('have.value', email)
            cy.get('#second-page').find('ons-button').contains('Sign in').click()
            cy.contains('入力されていない項目があります').should('be.visible')
        })

        it('Handling Action Sign up - Sign up successful', function () {
            cy.get('#singinEmailAddress').type(email, { delay: 100 }).should('have.value', email)
            cy.get('#singinEmailAddressPW').type(pass, { delay: 100 }).should('have.value', pass)
            cy.get('#second-page').find('ons-button').contains('Sign in').click()
            cy.wait(1000)
            cy.contains('【Email/PW認証】ログイン成功:').should('be.visible')
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