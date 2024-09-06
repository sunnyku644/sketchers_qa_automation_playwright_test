
class LoginPage {
    constructor(page) {
        this.page = page;
        this.loginText = page.locator('h2:has-text("Login to your account")'); 
        this.loginEmailInput = page.locator('input[data-qa="login-email"]'); 
        this.loginPasswordInput = page.locator('input[data-qa="login-password"]'); 
        this.loginButton = page.locator('button:has-text("Login")'); 
        this.loggedInAsText = page.locator('a:has-text("Logged in as")'); 
    }

    async verifyLoginToYourAccountIsVisible() {
        await this.loginText.waitFor();
    }

    async login(email, password) {
        await this.loginEmailInput.fill(email);
        await this.loginPasswordInput.fill(password);
        await this.loginButton.click();
    }

    async verifyLoggedInAs(username) {
        await this.loggedInAsText.waitFor();
        const loggedInText = await this.loggedInAsText.textContent();
        if (!loggedInText.includes(username)) {
            throw new Error(`Expected username ${username} to be logged in, but found ${loggedInText}`);
        }
    }
}

module.exports = LoginPage;
