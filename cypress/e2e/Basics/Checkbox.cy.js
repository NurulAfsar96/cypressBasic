describe("CheckBox Handling", function(){
beforeEach(function(){
    cy.visit("https://codenboxautomationlab.com/practice/")
})
    let chbox1_xpath ="//input[@id='checkBoxOption1']"
    let chbox2_xpath ="//input[@id='checkBoxOption2']"
    let chbox3_xpath ="//input[@id='checkBoxOption3']"
    
    let chbox1_value = "option1"
    let chbox2_value = "option2"
    let chbox3_value = "option3"

    //Single option checked
    cy.xpath(chbox1_xpath).check().should('be.enabled').and('have.value', option1)
    cy.xpath(chbox2_xpath).check().should('be.enabled').and('have.value', option2)
    cy.xpath(chbox3_xpath).check().should('be.enabled').and('have.value', option3)

    //Wait
    cy.wait(5000)

    //Single option unchecked
    cy.xpath(chbox1_xpath ).uncheck()
    cy.xpath(chbox2_xpath ).uncheck()
    cy.xpath(chbox3_xpath ).uncheck()

      //Wait
      cy.wait(5000)

    //Multiple Check
    cy.get('input[type=checkbox]').check([chbox1_xpath, chbox3_xpath])
    cy.wait(5000)

        //Multiple UnCheck
        cy.get('input[type=checkbox]').uncheck([chbox1_xpath, chbox3_xpath])
        cy.wait(5000)

})