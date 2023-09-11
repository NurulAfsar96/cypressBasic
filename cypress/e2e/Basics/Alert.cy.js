describe("Alert Handling", function(){
    beforeEach(function(){
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
    })
    let jsAlert = "//button[contains(text(),'Click for JS Alert')]"
    let jsConfirm = "//button[contains(text(),'Click for JS Confirm')]"
    let jsPrompt = "//button[contains(text(),'Click for JS Prompt')]"
    let result = "//p[@id='result']"


    it("JS Alert", function(){
        cy.xpath(jsAlert).click()
        cy.wait(3000)
        cy.xpath(result).should("have.text", "You successfully clicked an alert")
        cy.wait(3000)
    })
    it("JS Confirm", function(){
        cy.on('window:confirm', function(){
            return true
        })
        cy.xpath(jsConfirm).click()
        cy.xpath(result).should("have.text", "You clicked: Ok")
        cy.wait(3000)
    })
    it("JS Prompt", function(){
        cy.window().then(function($win){
            cy.stub($win, 'prompt').returns('Hello Prompt')
            cy.xpath(jsPrompt).click()
            cy.xpath(result).should("have.text", "You entered: Hello Prompt")
            
        })

        })

    })
