describe('Cart', function(){
    //beforeEach-> works very first in the program
    beforeEach(function(){
        cy.visit('https://demo.nopcommerce.com/')
    })
    
    it('Add to Cart Title', function(){
        cy.title().should('eq','nopCommerce demo store')
        cy.wait(5000)

        cy.get('#small-searchterms').type("Apple MacBook Pro 13-inch")
        cy.wait(5000)
        cy.xpath("//button[contains(text(),'Search')]").click()
        cy.wait(5000)
        cy.scrollTo('0','1000px')

        cy.xpath("//button[contains(text(),'Add to cart')]").click()
        cy.wait(5000)
        cy.scrollTo('0','400px')
        cy.xpath("//button[@id='add-to-cart-button-4']").click()
        cy.wait(5000)
        cy.xpath("//a[contains(text(),'shopping cart')]").click()
        cy.wait(5000)
        cy.scrollTo('0','400px')
        cy.xpath("//tbody/tr[1]/td[4]/span[1]").contains("$1,800.00")
        cy.xpath("//tbody/tr[1]/td[6]/span[1]").contains("$3,600.00")
        



    })
})