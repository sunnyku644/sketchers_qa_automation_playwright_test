const { test, expect } = require('@playwright/test');
const HomePage = require('../pages/homePage');
const SignupPage = require('../pages/signupPage');
const AccountPage = require('../pages/accountPage');

test.describe('Register User Test', () => {
    let homePage, signupPage, accountPage;

    test.beforeAll(async ({ browser }) => {
        const page = await browser.newPage();
        homePage = new HomePage(page);
        signupPage = new SignupPage(page);
        accountPage = new AccountPage(page);
    });

    test('should register a new user', async () => {
        await homePage.navigate();
        await homePage.verifyHomePage();

        await homePage.clickSignupLogin();
        await signupPage.verifyNewUserSignupIsVisible();

        await signupPage.enterNameAndEmail('Raj singh', 'xeja8013@janfab.com');
        await signupPage.clickSignupButton();
        await signupPage.verifyAccountInformationIsVisible();

        const accountDetails = {
            title: 'Mr',
            password: 'test@123#',
            birthDay: '10',
            birthMonth: 'January',
            birthYear: '1990',
            firstName: 'John',
            lastName: 'Doe',
            company: 'Doe Inc.',
            address1: '123 Main St',
            address2: 'Apt 4B',
            country: 'United States',
            state: 'California',
            city: 'Los Angeles',
            zipcode: '90001',
            mobileNumber: '5555555555'
        };

        await signupPage.fillAccountInformation(accountDetails);
        await signupPage.fillAddressInformation(accountDetails);
        await signupPage.clickCreateAccount();

        await accountPage.verifyAccountCreatedIsVisible();
        await accountPage.clickContinueButton();
        await accountPage.verifyLoggedInAs('Raj singh');

        await accountPage.clickDeleteAccountButton();
        await accountPage.verifyAccountDeletedIsVisible();
        await accountPage.clickContinueButton();
    });
});
