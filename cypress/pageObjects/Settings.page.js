class Settings {

    // TODO: Refactor common elements into parent page object class

    mainMenu()
    {
        return cy.get('#main-menu')
    }

    settingsDropdown()
    {
        return cy.get('[data-testid="dropdown-link-settings"]')
    }

    profileSettings()
    {
        return cy.get('[data-testid="profile-settings"]')
    }

    alertMessage()
    {
        return cy.get('.alert-message')
    }

    profileHeader()
    {
        return cy.get('#profile h3')
    }

    avatarLabel()
    {
        return cy.get('[for="user_avatar"]')
    }

    avatarLarge()
    {
        return cy.get('#avatar.lg')
    }

    avatarInput()
    {
        return cy.get('#user_avatar')
    }

    maxSizeLabel()
    {
        return cy.get('#profile .text-left')
    }

    usernameLabel()
    {
        return cy.get('[for="user_name"]')
    }

    usernameInput()
    {
        return cy.get('[data-testid="settings-about-you-name-field"]')
    }

    companyLabel()
    {
        return cy.get('[for="user_company"]')
    }

    companyInput()
    {
        return cy.get('[data-testid="settings-about-you-company-field"]')
    }

    roleLabel()
    {
        return cy.get('[for="user_profile"]')
    }

    roleInput()
    {
        return cy.get('[data-testid="settings-about-you-profile-field"]')
    }

    submitButton()
    {
        return cy.get('[data-testid="onboarding-submit-about-you-form"]')
    }

    alertDanger()
    {
        return cy.get('.alert-danger')
    }

    alertSuccess()
    {
        return cy.get('.alert-success')
    }

}

export default new Settings();