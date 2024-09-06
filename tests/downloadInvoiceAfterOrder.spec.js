const { test, expect } = require('@playwright/test');
const HomePage = require('../pages/homePage');
const ProductsPage = require('../pages/productsPage');
const CartPage = require('../pages/cartPage');
const SignupPage = require('../pages/signupPage');
const CheckoutPage = require('../pages/CheckoutPage');
const OrderConfirmationPage = require('../pages/OrderConfirmationPage');

test('Download Invoice after Purchase Order', async ({ page }) => {
    const homePage = new HomePage(page);
    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);
    const signupPage = new SignupPage(page);
    const checkoutPage = new CheckoutPage(page);
    const orderConfirmationPage = new OrderConfirmationPage(page);

    // Step 1: Navigate to home page
    await homePage.navigate();
    await homePage.verifyHomePageVisible();

    // Step 2: Add product to cart
    await homePage.clickProductsButton();
    // Step 3: Add steps for adding a product (assuming product is added)
    await productsPage.hoverAndAddFirstProductToCart();
    // Step 4: Go to Cart and Checkout
    await productsPage.clickViewCart();
    await cartPage.verifyCartPageVisible();
    await cartPage.clickProceedToCheckout();

    // Step 5: Register a new account
    await homePage.clickSignupLoginButton();
    await signupPage.fillSignupForm('knoae', 'koh4teawa13@rogtat.com');
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
    await signupPage.verifyAccountCreated();
    await signupPage.clickContinue();

    // Step 6: Proceed to checkout and enter payment details
    await homePage.clickCartButton();
    await cartPage.clickProceedToCheckout();
    await checkoutPage.reviewAddressDetailsAndOrder();
    await checkoutPage.enterDescriptionInComment('Please handle with care');
    await checkoutPage.clickPlaceOrder();
    await checkoutPage.enterPaymentDetails('John Doe', '1234567890123456', '123', '12', '2025');
    await checkoutPage.clickPayAndConfirmOrder();

    // Step 7: Verify order confirmation and download invoice
    await orderConfirmationPage.verifyOrderPlaced();
    await orderConfirmationPage.clickDownloadInvoice();

    // Step 8: Click continue and delete account
    await orderConfirmationPage.clickContinue();
    await page.locator('a[href="/delete_account"]').click();
    await page.waitForSelector('h2:has-text("Account Deleted!")', { state: 'visible' });
});
