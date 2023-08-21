import {
    Given,
    When,
    Then
} from "@badeball/cypress-cucumber-preprocessor"

const loginPage = require("../pages/LoginPage").default;
const reportPage = require("../pages/reporTPage").default;

Given("login in P99 {string} {string}", (organization, user) => {
    loginPage.openWebPage(organization);
    loginPage.login(user);
    loginPage.home();
});
When("the user enter in My Earnings", () => {
    reportPage.myEarning();
    
});
Then("donwload de report", () => {
    reportPage.report();
    
});
