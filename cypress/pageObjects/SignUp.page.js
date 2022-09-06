class SignUp {

    // TODO: Refactor common elements into parent page object class

    loginButton()
    {
        return cy.get('#login-dblue')
    }

    cloudAppLogo()
    {
        return cy.get('[data-testid="link-login-getcloudapp"]')
    }

    pageTitle()
    {
        return cy.get('h1')
    }

    googleLoginButton()
    {
        return cy.get('.google-login-button')
    }

    appleLoginButton()
    {
        return cy.get('.apple-login-button')
    }

    dividerLabel()
    {
        return cy.get('.divider-label')
    }

    dividerLabel()
    {
        return cy.get('.divider-label')
    }

    emailLabel()
    {
        return cy.get('[for="email"]')
    }

    passwordLabel()
    {
        return cy.get('[for="password"]')
    }

    passwordRequirements()
    {
        return cy.get('#text-password-requirements')
    }
    
    emailInput()
    {
        return cy.get('#email')
    }

    passwordInput()
    {
        return cy.get('#password')
    }

    submitButton()
    {
        return cy.get('[data-testid="regular-signup-submit"]')
    }

    SSOLink()
    {
        return cy.get('a[href="/sso/new"]')
    }

    signInLink()
    {
        return cy.get('a[href="/login"]')
    }

    signUpLink()
    {
        return cy.get('a[href="/signup"]')
    }

    toast()
    {
        return cy.get('.toast-body')
    }

    alertDanger()
    {
        return cy.get('.alert-danger')
    }

}

export default new SignUp();