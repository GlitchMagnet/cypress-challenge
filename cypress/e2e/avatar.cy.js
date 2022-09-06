import Settings from '../pageObjects/Settings.page'

describe('Settings Test Suite', () => {

    before(() =>
    {
        cy.visit("/")
        cy.login()
        Settings.mainMenu().click()
        Settings.settingsDropdown().click()
        Settings.profileSettings().click()
    })

    beforeEach(() =>
    {
        Cypress.Cookies.preserveOnce('_session_id') // TODO: Refactor with cy.session()
    })

    after(() =>
    {
        cy.visit('https://share.getcloudapp.com/logout')
    })

    it('Validate Initial State of Profile Page', () => {
        
        Settings.profileHeader().should('contain', 'Your profile')
        Settings.avatarLabel().should('contain', 'Avatar')
        Settings.avatarLarge().should('be.visible')
        Settings.avatarInput().should('be.visible')
        Settings.maxSizeLabel().should('contain', 'Max size is 500x500')
        Settings.usernameLabel().should('contain', 'Your full name')
        Settings.usernameInput().should('be.visible')
                                .and('have.attr', 'placeholder', 'Name')
        Settings.companyLabel().should('contain', 'Company')
        Settings.companyInput().should('be.visible')
                                .and('have.attr', 'placeholder', 'ex: Apple Inc.')
        Settings.roleLabel().should('contain', 'Role')
        Settings.roleInput().should('be.visible')
        Settings.submitButton().should('be.visible')

        // TODO: Refactor this with visual regression

    })

    it('Validate Invalid File Type', () => {
        
        Settings.avatarInput().attachFile('miyazaki_small_txt.txt')
        Settings.submitButton().click()
        Settings.alertDanger().should('contain', 'Avatar must be an image')
        
    })

    it('Validate Error on JPEG Too Large', () => {
        
        Settings.avatarInput().attachFile('miyazaki_large_jpeg.jpeg')
        Settings.submitButton().click()
        Settings.alertDanger().should('contain', 'Avatar Max size is 500x500px')
        
    })

    it('Validate Success JPEG', () => {
        
        Settings.avatarInput().attachFile('miyazaki_small_jpeg.jpeg')
        Settings.submitButton().click()
        Settings.alertSuccess().should('contain', 'Account updated successfully')
        
    })

    it('Validate Error on PNG Too Large', () => {
        
        Settings.avatarInput().attachFile('miyazaki_large_png.png')
        Settings.submitButton().click()
        Settings.alertDanger().should('contain', 'Avatar Max size is 500x500px')
        
    })

    it('Validate Success PNG', () => {
        
        Settings.avatarInput().attachFile('miyazaki_small_png.png')
        Settings.submitButton().click()
        Settings.alertSuccess().should('contain', 'Account updated successfully')
        
    })

})