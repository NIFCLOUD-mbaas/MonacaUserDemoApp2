import TestFilters from '../support/filterTests.js'

TestFilters([], () => {
    describe('匿名認証 - Handling Action Sign in', function () {
        beforeEach(() => {
            cy.viewport('iphone-x')
            cy.visit('http://localhost:8080')
            cy.wait(1000)
            cy.get('ons-tab[label="匿名"]').click()
            cy.wait(1000)
        })
    
        it('Email/PW認証 screen', function () {
            cy.get('#toolbar-title').should('have.text', '匿名認証')
        }) 

        it('Handling Action Sign in - Validate empty email', function () {
            cy.get('#third-page').find('ons-button').contains('Sign in').click()
            cy.contains('【匿名認証】ログイン成功:').should('be.visible')
        })
    })
})