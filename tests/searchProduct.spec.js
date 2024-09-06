const { test } = require('@playwright/test');
const HomePage = require('../pages/homePage');
const ProductsPage = require('../pages/productsPage');

test.describe('Search Product Test', () => {
    let homePage, productsPage;

    test.beforeAll(async ({ browser }) => {
        const page = await browser.newPage();
        homePage = new HomePage(page);
        productsPage = new ProductsPage(page);
    });

    test('should search for a product and verify the results', async () => {
        // Step 2: Navigate to URL
        await homePage.navigate();

        // Step 3: Verify that the home page is visible
        await homePage.verifyHomePageVisible();

        // Step 4: Click on 'Products' button
        await homePage.clickProductsButton();

        // Step 5: Verify user is navigated to ALL PRODUCTS page successfully
        await productsPage.verifyAllProductsPage();

        // Step 6: Enter product name in search input and click search button
        await productsPage.searchProduct('Dress'); // Replace with desired product name

        // Step 7: Verify 'SEARCHED PRODUCTS' is visible
        await productsPage.verifySearchedProductsVisible();
    });
});
