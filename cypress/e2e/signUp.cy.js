import SignUp from '../pageObjects/SignUp.page'

describe('Sign Up Test Suite', () => {
    
    beforeEach(() => 
    {
        cy.visit("/signup")
    })

    after(() =>
    {
        cy.visit('https://share.getcloudapp.com/logout')
    })

    it('Validate Initial State of Sign Up Page', () => {
        
        SignUp.cloudAppLogo().should('be.visible')
                             .and('have.attr', 'href', 'https://getcloudapp.com')
        SignUp.pageTitle().should('contain', 'Get started')
        SignUp.googleLoginButton().should('contain', 'Sign up with Google')
        SignUp.appleLoginButton().should('contain', 'Sign up with Apple')
        SignUp.dividerLabel().should('contain', 'or sign up with email')
        SignUp.emailLabel().should('contain', 'Email')
        SignUp.passwordLabel().should('contain', 'Password')
        SignUp.passwordRequirements().should('contain', 'Must be at least 8 characters long, contain uppercase letters and a number.')
        SignUp.submitButton().should('contain', 'Sign up')
                             .and('have.css', 'background-color', 'rgb(0, 122, 255)')
        SignUp.SSOLink().should('contain', 'Sign up with SSO')
                        .and('have.attr', 'href', '/sso/new')
        SignUp.signInLink().should('contain', 'Sign in')
                           .and('have.attr', 'href', '/login')
        SignUp.signInLink().parent().should('contain', 'Have an account?')

        // TODO: Refactor this with visual regression

    })

    it('Validate Error on Invalid Email w/ Valid Password', () => {

        SignUp.emailInput().type('x@y')
        SignUp.passwordInput().type('Passw0rd!')
        SignUp.submitButton().click()
        SignUp.toast().should('not.exist')
        SignUp.alertDanger().should('contain', 'Validation failed: Email is invalid')

    })

    it('Validate Error on Valid Email w/ Invalid Password', () => {

        SignUp.emailInput().type('x@y.z')
        SignUp.passwordInput().type('!')
        SignUp.submitButton().click()
        SignUp.toast().should('not.exist')
        SignUp.alertDanger().should('contain', 'Validation failed: Password must be at least 8 characters long, contain uppercase and lowercase letters and a number.')

    })

    it('Validate Error on Invalid Email w/ Invalid Password', () => {

        SignUp.emailInput().type('x@y')
        SignUp.passwordInput().type('T3st!')
        SignUp.submitButton().click()
        SignUp.toast().should('not.exist')
        SignUp.alertDanger().should('contain', 'Validation failed: Password must be at least 8 characters long, contain uppercase and lowercase letters and a number., Email is invalid')

    })

    it('Validate Error when Email Already Taken', () => {

        SignUp.emailInput().type(Cypress.env('username'))
        SignUp.passwordInput().type(Cypress.env('password'))
        SignUp.submitButton().click()
        SignUp.toast().should('not.exist')
        SignUp.alertDanger().should('contain', 'Validation failed: Email has already been taken')

    })

    it('Validate Error on Blank Input', () => {

        SignUp.submitButton().click()
        SignUp.toast().should('not.exist')

    })

    it('Validate Successful Sign Up', () => {

        cy.generateRandomEmail()
          .then(randomEmail => {
                SignUp.emailInput().type(randomEmail)
        })

        SignUp.passwordInput().type('Passw0rd')
        SignUp.submitButton().click()
        SignUp.toast().should('contain', 'Account created successfully')

    })

    // TODO: Validate the /onboarding/downloads page

})