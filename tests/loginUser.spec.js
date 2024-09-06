const { test } = require('@playwright/test');
const HomePage = require('../pages/homePage');
const LoginPage = require('../pages/loginPage');
const AccountPage = require('../pages/accountPage');

test.describe('Login User Test', () => {
    let homePage, loginPage, accountPage;

    test.beforeAll(async ({ browser }) => {
        const page = await browser.newPage();
        homePage = new HomePage(page);
        loginPage = new LoginPage(page);
        accountPage = new AccountPage(page);
    });

    test('should log in a user with correct email and password', async () => {
        await homePage.navigate();
        await homePage.verifyHomePage();

        await homePage.clickSignupLogin();
        await loginPage.verifyLoginToYourAccountIsVisible();

        await loginPage.login('rajsingh644@yopmail.com', 'test@123#'); 

        await loginPage.verifyLoggedInAs('demo');

        await accountPage.clickDeleteAccountButton();
        await accountPage.verifyAccountDeletedIsVisible();
    });
});
