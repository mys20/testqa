describe('template spec', () => {
  beforeEach(() => {
    cy.visit('https://demowebshop.tricentis.com/register')
  })

  it('Failed Register - Empty Field', () => {
    cy.get('#register-button').click()
    cy.get(':nth-child(2) > .form-fields > :nth-child(2) > .field-validation-error > span').should ('contain', 'First name is required.')
    cy.get(':nth-child(3) > .field-validation-error > span').should ('contain', 'Last name is required.')
    cy.get(':nth-child(4) > .field-validation-error > span').should ('contain', 'Email is required.')
    cy.get(':nth-child(1) > .field-validation-error > span').should ('contain', 'Password is required.')
    cy.get(':nth-child(3) > .form-fields > :nth-child(2) > .field-validation-error > span').should ('contain', 'Password is required.')
  })

  it('Failed Register - Email Already Registered', () => {
    cy.get('#gender-male').check()
    cy.get('#FirstName').type('Ahmad')
    cy.get('#LastName').type('Burhan')
    cy.get('#Email').type('ahmadburhan1@gmail.com')
    cy.get('#Password').type('123321')
    cy.get('#ConfirmPassword').type('123321')
    cy.get('#register-button').click()
    cy.get('.validation-summary-errors > ul > li').should ('contain', 'The specified email already exist')
  })

  it('Success Login', () => {
    cy.get('#gender-male').check()
    cy.get('#FirstName').type('Ahmad')
    cy.get('#LastName').type('Burhan')
    cy.get('#Email').type('ahmadburhan4@gmail.com')
    cy.get('#Password').type('123321')
    cy.get('#ConfirmPassword').type('123321')
    cy.get('#register-button').click()
    cy.url().should('contain','registerresult')
  })
  
})