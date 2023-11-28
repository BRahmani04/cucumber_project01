const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");
const DynamicTablesPage = require("../../pages/DynamicTablesPage");


const dynamicTables = new DynamicTablesPage()


Then(/^the user should see the "([^"]*)" heading$/, (name) => {
	dynamicTables.getHeading().should('have.text', name)
})


Then(/^the user should see the table with the headers below$/, (data) => {
    const arr = data.rawTable.flat()

    dynamicTables.getTablesHeader().each((el, index) => {
        cy.wrap(el).should('have.text', arr[index])
})
})


Then(/^the user should see the table with the rows below$/, (dataTable) => {
    const row = dataTable.rawTable.flat()

    dynamicTables.getTableRows().each((el, index) => {
        cy.wrap(el).should('have.text', row[index])
    })
})


Then(/^the user should see the “ADD PRODUCT” button is enabled$/, () => {
	dynamicTables.getAddProductButton().should('be.enabled')
})


Then(/^the user should see the "([^"]*)" text displayed$/, (amount) => {
        dynamicTables.getTotalAmount().should('have.text', amount)
});


When(/^the user clicks on the “ADD PRODUCT” button$/, () => {
	dynamicTables.clickAddProductButton()
});


Then(/^the user should see the “Add New Product” modal with its heading$/, () => {
	dynamicTables.getModalCard().should('be.visible')
});


Then(/^the user should see the “X” button is enabled$/, () => {
	dynamicTables.getCloseButton().should('be.enabled')
});


Then(/^the user should see the label$/, (dataTable) => {
    const labels = dataTable.rawTable.flat()

    dynamicTables.getLabels().each((el, index) => {
        cy.wrap(el).should('contain', labels[index])
    })
})


Then(/^the user should see the input box is enabled$/, (dataTable) => {
    const inputs = dataTable.rawTable.flat()

    dynamicTables.getInputs().each((el, index) => {
        cy.wrap(el).should('be.enabled', inputs[index])
    })
})


Then(/^the user should see the “SUBMIT” button is enabled$/, () => {
	dynamicTables.getSubmitButton().should('be.enabled')
});


When(/^the user clicks on the “X” button$/, () => {
	    dynamicTables.clickCloseProductButton()
});


Then(/^the user should not see the “Add New Product” modal$/, () => {
	dynamicTables.getModalCard().should('not.exist')
});


Then(/^the user enters the following inputs$/, (dataTable) => {
    const arr = dataTable.rawTable.flat()

	dynamicTables.getInputs().each((el,index) => {
		cy.wrap(el).type(arr[index])
	})
})
    
Then(/^the user clicks on the “SUBMIT” button$/, () => {
	dynamicTables.getSubmitButton().click()
});


Then(/^the user should see the table with the new row below$/, (dataTable) => {
    const row  = dataTable.rawTable.flat()

    dynamicTables.getLastRow().each((el, index) =>  {
        cy.wrap(el).should('have.text',row[index])
    })
});



















