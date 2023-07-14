import {
    Given,
    When,
    Then
} from "@badeball/cypress-cucumber-preprocessor"

const loginPage = require("../pages/LoginPage").default;

Given("login {string}", (organization) => {
    loginPage.openWebPage(organization);
});
When("credentials {string}", (user) => {
    loginPage.login(user);
});
Then("home page", () => {
    loginPage.home()
});
