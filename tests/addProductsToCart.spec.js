const { test } = require('@playwright/test');
const HomePage = require('../pages/homePage');
const ProductsPage = require('../pages/productsPage');
const CartPage = require('../pages/cartPage');

test.describe('Add Products to Cart', () => {
    let homePage, productsPage, cartPage;

    test.beforeAll(async ({ browser }) => {
        const page = await browser.newPage();
        homePage = new HomePage(page);
        productsPage = new ProductsPage(page);
        cartPage = new CartPage(page);
    });

    test('should add products to cart and verify details', async () => {
        // Step 2: Navigate to the URL
        await homePage.navigate();

        // Step 3: Verify home page is visible
        await homePage.verifyHomePageVisible();

        // Step 4: Click 'Products' button
        await homePage.clickProductsButton();

        // Step 5: Hover over first product and click 'Add to cart'
        await productsPage.hoverAndAddFirstProductToCart();

        // Step 6: Click 'Continue Shopping' button
        await productsPage.clickContinueShopping();

        // Step 7: Hover over second product and click 'Add to cart'
        await productsPage.hoverAndAddSecondProductToCart();

        // Step 8: Click 'View Cart' button
        await productsPage.clickViewCart();

        // Step 9: Verify both products are added to the cart
        await cartPage.verifyNumberOfProducts(2);

        // Step 10: Verify their prices, quantity, and total price
        await cartPage.verifyProductDetails();
    });
});
