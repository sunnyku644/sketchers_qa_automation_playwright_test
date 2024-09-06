// pages/cartPage.js
const { expect } = require('@playwright/test');  // Import expect

class CartPage {
    constructor(page) {
        this.page = page;
        this.subscriptionText = page.locator('h2:has-text("Subscription")'); 
        this.emailInput = page.locator('input#susbscribe_email'); 
        this.submitButton = page.locator('button#subscribe'); // Arrow button for subscription
        this.successMessage = page.locator("//div[@class='alert-success alert' and text()='You have been successfully subscribed!']"); // Success message
        
        this.cartItems = this.page.locator('.cart_items'); // Main cart items section
        this.productRows = this.page.locator('tbody tr');  // Locator for each product row in the cart
        
        this.proceedToCheckoutButton = this.page.locator("//div[@class='col-sm-6']//a[contains(@class, 'check_out') and text()='Proceed To Checkout']");
    }

    async scrollToFooter() {
        await this.page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    }

    async verifySubscriptionText() {
        await this.subscriptionText.waitFor();
    }

    async enterEmailAndSubscribe(email) {
        await this.emailInput.fill(email);
        await this.submitButton.click();
    }

    async verifySuccessMessage() {
        await this.successMessage.waitFor();
    }

    async verifyProductsAddedToCart() {
        await expect(this.cartItems).toBeVisible();
    }

    async verifyNumberOfProducts(expectedCount) {
        const count = await this.productRows.count(); // Await the count of product rows
        if (count !== expectedCount) {
            throw new Error(`Expected ${expectedCount} products, but found ${count}`);
        }
    }

    async verifyProductDetails() {
        // Assuming we have two products to verify
        const firstProductPrice = await this.page.locator('tbody tr:nth-of-type(1) .cart_price p').textContent();
        const firstProductQuantity = await this.page.locator('tbody tr:nth-of-type(1) .cart_quantity button').textContent();
        const firstProductTotal = await this.page.locator('tbody tr:nth-of-type(1) .cart_total p').textContent();

        const secondProductPrice = await this.page.locator('tbody tr:nth-of-type(2) .cart_price p').textContent();
        const secondProductQuantity = await this.page.locator('tbody tr:nth-of-type(2) .cart_quantity button').textContent();
        const secondProductTotal = await this.page.locator('tbody tr:nth-of-type(2) .cart_total p').textContent();

        // Verify the values 
        expect(firstProductPrice).not.toBeNull();
        expect(firstProductQuantity).toBe('1');
        expect(firstProductTotal).not.toBeNull();

        expect(secondProductPrice).not.toBeNull();
        expect(secondProductQuantity).toBe('1');
        expect(secondProductTotal).not.toBeNull();
    }

    async verifyCartPageVisible() {
        await this.page.waitForSelector("//ol[@class='breadcrumb']/li[@class='active' and text()='Shopping Cart']");
    }

    async clickProceedToCheckout() {
        await this.proceedToCheckoutButton.click();
    }
}

module.exports = CartPage;
