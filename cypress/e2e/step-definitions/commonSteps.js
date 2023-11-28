const { Given } = require("@badeball/cypress-cucumber-preprocessor");


Given(/^the user is on "([^"]*)"$/, (url) => {
	cy.visit(url)
});
