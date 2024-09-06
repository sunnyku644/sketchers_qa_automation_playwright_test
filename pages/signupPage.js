
class SignupPage {
    constructor(page) {
        this.page = page;
        this.newUserSignupText = page.locator('h2:has-text("New User Signup!")'); 
        this.nameInput = page.locator('input[name="name"]'); 
        this.emailInput = page.locator('input[data-qa="signup-email"]'); 
        this.signupButton = page.locator('button[data-qa="signup-button"]'); 
        this.accountInfoText = page.locator('h2:has-text("Enter Account Information")'); 
    }

    async verifyNewUserSignupIsVisible() {
        await this.newUserSignupText.waitFor();
    }

    async enterNameAndEmail(name, email) {
        await this.nameInput.fill(name);
        await this.emailInput.fill(email);
    }

    async clickSignupButton() {
        await this.signupButton.click();
    }

    async verifyAccountInformationIsVisible() {
        await this.accountInfoText.waitFor();
    }

    async fillAccountInformation(details) {
        await this.page.locator('input[name="title"][value="' + details.title + '"]').click();
        await this.page.locator('input[name="password"]').fill(details.password);
        await this.page.selectOption('select[name="days"]', details.birthDay);
        await this.page.selectOption('select[name="months"]', details.birthMonth);
        await this.page.selectOption('select[name="years"]', details.birthYear);
        await this.page.locator('input[name="newsletter"]').check();
        await this.page.locator('input[name="optin"]').check();
    }

    async fillAddressInformation(details) {
        await this.page.locator('input[name="first_name"]').fill(details.firstName);
        await this.page.locator('input[name="last_name"]').fill(details.lastName);
        await this.page.locator('input[name="company"]').fill(details.company);
        await this.page.locator('input[name="address1"]').fill(details.address1);
        await this.page.locator('input[name="address2"]').fill(details.address2);
        await this.page.selectOption('select[name="country"]', details.country);
        await this.page.locator('input[name="state"]').fill(details.state);
        await this.page.locator('input[name="city"]').fill(details.city);
        await this.page.locator('input[name="zipcode"]').fill(details.zipcode);
        await this.page.locator('input[name="mobile_number"]').fill(details.mobileNumber);
    }

    async clickCreateAccount() {
        await this.page.locator('button[data-qa="create-account"]').click(); 
    }

    async fillSignupForm(name, email) {
        await this.nameInput.fill(name);
        await this.emailInput.fill(email);
        await this.signupButton.click();
    }

    async verifyAccountCreated() {
        await this.page.waitForSelector('text=ACCOUNT CREATED!', { state: 'visible' });
    }

    async clickContinue() {
        await this.page.locator('text=Continue').click();
    }
}

module.exports = SignupPage;
