describe('Dropdown Test', ()=>{
    
    beforeEach(function(){
        //cy.viewport(1020, 780)
        cy.visit('https://register.rediff.com/register/register.php')
    })

    it('Test', function(){
        //cy.get('[width="200"] > input').type('Test User')
        //cy.get('[valign="bottom"] > [type="text"]').type('12575521757')
        cy.xpath("//select[@id='country']").select('17')
        cy.wait(5000)
    })
    
})