describe("Navigation Test", function(){

    it("Navigation", function(){

        cy.visit("https://www.w3schools.com/")
        cy.wait(5000)
        cy.xpath("//body/div[@id='subtopnav']/a[1]").click()
        cy.wait(5000)
        cy.xpath("//body/div[@id='subtopnav']/a[2]").click()
        cy.wait(5000)
        cy.go('back')
        cy.wait(5000)
        cy.go('forward')
        cy.wait(5000)
        cy.reload()
        cy.wait(5000)
    })
})