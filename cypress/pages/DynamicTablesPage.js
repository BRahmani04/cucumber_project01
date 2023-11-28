class DynamicTablesPage {
    getHeading(){
        return cy.get(".is-size-3")
    }
    getTablesHeader(){
        return cy.get('#product_table tr > th')
    }
    getTableRows(){
        return cy.get('#product_table tbody > tr > td')
    }
    getAddProductButton(){
        return cy.get('#add_product_btn')
    }
    getLabels(){
        return cy.get('.field > label')
    }
    getInputs(){
        return cy.get('.input')
    }
    getTotalAmount(){
        return cy.get('#total_amount')
    }

    getModalCard(){
        return cy.get('.modal-card')
    }

    getCloseButton(){
        return cy.get('.delete')
    }
    getSubmitButton(){
        return cy.get('#submit')
    }

    clickAddProductButton(){
        this.getAddProductButton().click()
    }

    clickCloseProductButton(){
        this.getCloseButton().click()
    }
    getLastRow(){
        return cy.get('tr:nth-child(4) > td')
      }
      getButtonByLabel(label){
        switch(label) {
            case 'Submit': 
                return this.getSubmitButton()
            case 'X': 
                return this.clickCloseProductButton()
        }
    }
}

module.exports = DynamicTablesPage
