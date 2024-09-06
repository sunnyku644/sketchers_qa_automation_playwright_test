const { test, expect } = require('@playwright/test');
const HomePage = require('../pages/homePage');

test('Verify Scroll Up and Scroll Down functionality', async ({ page }) => {
    const homePage = new HomePage(page);

    // Step 1: Navigate to home page
    await homePage.navigate();
    
    // Step 2: Verify that the home page is visible successfully
    await homePage.verifyHomePage();

    // Step 3: Scroll down to the bottom of the page
    await homePage.scrollToBottom();
    
    // Step 4: Verify 'SUBSCRIPTION' section is visible
    await homePage.verifySubscriptionVisible();

    // Step 5: Click on the arrow button to scroll up
    await homePage.clickScrollUpButton();
    
    // Step 6: Verify that the page has scrolled up and top banner text is visible
    await homePage.verifyTopBannerTextVisible();
});
