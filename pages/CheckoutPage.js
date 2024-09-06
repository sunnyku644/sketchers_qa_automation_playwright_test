class CheckoutPage {
    constructor(page) {
        this.page = page;
        this.commentTextArea = page.locator('textarea[name="message"]');
        this.placeOrderButton = page.locator('a[href="/payment"]');
        this.nameOnCardInput = page.locator('input[name="name_on_card"]');
        this.cardNumberInput = page.locator('input[name="card_number"]');
        this.cvcInput = page.locator('input[name="cvc"]');
        this.expiryMonthInput = page.locator('input[name="expiry_month"]');
        this.expiryYearInput = page.locator('input[name="expiry_year"]');

    }

    async reviewAddressDetailsAndOrder() {
        await this.page.waitForSelector("//div[@class='step-one']//h2[text()='Address Details']");
        await this.page.waitForSelector("//div[@class='step-one']//h2[text()='Review Your Order']");
    }

    async enterDescriptionInComment(text) {
        await this.commentTextArea.fill(text);
    }

    async clickPlaceOrder() {
        await this.placeOrderButton.click();
    }

    async enterPaymentDetails(name, cardNumber, cvc, expiryMonth, expiryYear) {
        await this.nameOnCardInput.fill(name);
        await this.cardNumberInput.fill(cardNumber);
        await this.cvcInput.fill(cvc);
        await this.expiryMonthInput.fill(expiryMonth);
        await this.expiryYearInput.fill(expiryYear);
    }

    async clickPayAndConfirmOrder() {
        await this.page.locator('button:has-text("Pay and Confirm Order")').click();
    }
}

module.exports = CheckoutPage;
