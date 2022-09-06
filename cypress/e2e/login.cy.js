import Login from '../pageObjects/Login.page'

describe('Login Test Suite', () => {

    beforeEach(() => 
    {
        cy.visit("/login")
    })

    after(() =>
    {
        cy.visit('https://share.getcloudapp.com/logout')
    })

    it('Validate Initial State of Login Page', () => {
        
        Login.cloudAppLogo().should('be.visible')
                             .and('have.attr', 'href', 'https://getcloudapp.com')
        Login.pageTitle().should('contain', 'Welcome back')
        Login.googleLoginButton().should('contain', 'Sign in with Google')
        Login.appleLoginButton().should('contain', 'Sign in with Apple')
        Login.dividerLabel().should('contain', 'or sign in with email')
        Login.emailLabel().should('contain', 'Email')
        Login.passwordLabel().should('contain', 'Password')
        Login.forgotPassword().should('contain', 'Forgot password?')
                              .and('have.attr', 'href', '/forgot_password')
        Login.submitButton().should('contain', 'Sign in')
                             .and('have.css', 'background-color', 'rgb(0, 122, 255)')
        Login.SSOLink().should('contain', 'Sign in with SSO')
                       .and('have.attr', 'href', '/sso/new')
        Login.signUpLink().should('contain', 'Sign up for free')
                          .and('have.attr', 'href', '/signup')
        Login.signUpLink().parent().should('contain', 'New to CloudApp?')

        // TODO: Refactor this with visual regression

    })

    it('Validate Error on Invalid Email', () => {

        Login.emailInput().type('x@y')
        Login.passwordInput().type('Passw0rd')
        Login.submitButton().click()
        Login.toast().should('not.exist')
        Login.alertDanger().should('contain', 'Invalid email / password combination')

    })

    it('Validate Error on Invalid Password', () => {

        Login.emailInput().type('x@y.z')
        Login.passwordInput().type('!')
        Login.submitButton().click()
        Login.toast().should('not.exist')
        Login.alertDanger().should('contain', 'Invalid email / password combination')

    })

    it('Validate Error on Blank Input', () => {

        Login.submitButton().click()
        Login.toast().should('not.exist')

    })

    it('Validate Successful Login', () => {

        Login.emailInput().type(Cypress.env('username'))
        Login.passwordInput().type(Cypress.env('password'))
        Login.submitButton().click()
        Login.alertMessage().should('contain', 'Welcome back!')
        cy.url().should('contain', '/dashboard')

    })

    // TODO: Validate the /dashboard page

})