class OrderConfirmationPage {
    constructor(page) {
        this.page = page;
        this.downloadInvoiceButton = page.locator('a:has-text("Download Invoice")');
        this.successMessage = page.locator('text=Your order has been placed successfully!');
    }

    async verifyOrderPlaced() {
        await this.successMessage.isVisible();
    }

    async clickDownloadInvoice() {
        await this.downloadInvoiceButton.click();
    }

    async clickContinue() {
        await this.page.locator('a[data-qa="continue-button"]').click();
    }
}

module.exports = OrderConfirmationPage;
