describe('File upload in cypress', function () {
    before(function () {
        cy.visit('https://the-internet.herokuapp.com/upload')
    })

    it('File Upload using selectFile', function() {
        cy.wait(2000)
        cy.get('#file-upload').selectFile('cypress/pictures/flower.jpg')
        cy.wait(2000)
        cy.get('#file-submit').click()
        cy.get('#uploaded-files').contains('flower.jpg')
        cy.screenshot()
      })
})