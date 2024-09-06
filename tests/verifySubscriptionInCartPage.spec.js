const { test } = require('@playwright/test');
const HomePage = require('../pages/homePage');
const CartPage = require('../pages/cartPage');

test.describe('Verify Subscription in Cart Page', () => {
    let homePage, cartPage;

    test.beforeAll(async ({ browser }) => {
        const page = await browser.newPage();
        homePage = new HomePage(page);
        cartPage = new CartPage(page);
    });

    test('should verify subscription in cart page', async () => {
        // Step 2: Navigate to URL
        await homePage.navigate();

        // Step 3: Verify home page is visible
        await homePage.verifyHomePageVisible();

        // Step 4: Click 'Cart' button
        await homePage.clickCartButton();

        // Step 5: Scroll down to footer
        await cartPage.scrollToFooter();

        // Step 6: Verify 'SUBSCRIPTION' text is visible
        await cartPage.verifySubscriptionText();

        // Step 7: Enter email address and click arrow button
        await cartPage.enterEmailAndSubscribe('demoassignment@example.com'); 

        // Step 8: Verify success message is visible
        await cartPage.verifySuccessMessage();
    });
});
