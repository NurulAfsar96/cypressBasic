/// <reference types="cypress" />
/// Use "cy.fixture" to read data

describe('Fixtures', function () {

    it('should type username and password', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  
      cy.fixture('orangehrm').then(function(data){
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(data.username)
        cy.wait(3000)
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(data.password)
        cy.wait(3000)
        cy.get('.oxd-button').click()
        cy.wait(3000)
      })
    })
  })