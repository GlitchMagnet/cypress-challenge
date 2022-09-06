import './commands'

Cypress.on('uncaught:exception', (err, runnable) => {

    // we expect a 3rd party library error with message 'grecaptcha is not defined'
    // and don't want to fail the tests so we return false
    // we still want to ensure there are no other unexpected
    // errors, so wrap with conditional

    if (err.message.includes('grecaptcha is not defined')) {
      return false
    }

  })