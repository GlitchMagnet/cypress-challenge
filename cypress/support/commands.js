import 'cypress-file-upload'
import Login from '../pageObjects/Login.page'


Cypress.Commands.add('generateRandomEmail', () => {
  
    return `${Date.now()}@x.y`

})

Cypress.Commands.add('login', () => {
  
    cy.visit("/login")
    Login.emailInput().type(Cypress.env('username'))
    Login.passwordInput().type(Cypress.env('password'))
    Login.submitButton().click()

})