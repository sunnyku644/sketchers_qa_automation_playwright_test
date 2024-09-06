
class AccountPage {
    constructor(page) {
        this.page = page;
        this.accountCreatedText = page.locator('h2:has-text("Account Created!")'); 
        this.continueButton = page.locator('a:has-text("Continue")'); 
        this.loggedInAsText = page.locator('a:has-text("Logged in as")'); 
        this.deleteAccountButton = page.locator('a:has-text("Delete Account")'); 
        this.accountDeletedText = page.locator('h2:has-text("Account Deleted!")');
    }

    async verifyAccountCreatedIsVisible() {
        await this.accountCreatedText.waitFor();
    }

    async clickContinueButton() {
        await this.continueButton.click();
    }

    async verifyLoggedInAs(username) {
        await this.loggedInAsText.waitFor();
        const loggedInText = await this.loggedInAsText.textContent();
        if (!loggedInText.includes(username)) {
            throw new Error(`Expected username ${username} to be logged in, but found ${loggedInText}`);
        }
    }

    async clickDeleteAccountButton() {
        await this.deleteAccountButton.click();
    }

    async verifyAccountDeletedIsVisible() {
        await this.accountDeletedText.waitFor();
    }
}

module.exports = AccountPage;
