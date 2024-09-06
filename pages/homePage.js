
class HomePage {
    constructor(page) {
        this.page = page;
        this.signupLoginButton = page.locator('a[href="/login"]'); 
        this.signupLoginButtonb = page.locator('.modal-body a[href="/login"]'); 

        this.productsButton = page.locator('a[href="/products"]'); 
        this.cartButton = page.locator('.shop-menu a[href="/view_cart"]'); 

        this.subscriptionSection = page.locator('h2:has-text("Subscription")');
        this.scrollUpButton = page.locator('#scrollUp'); 
        this.topBannerText = page.locator("//div[@class='carousel-inner']//div[@class='item active']//h2[text()='Full-Fledged practice website for Automation Engineers']");
    
    }

    async navigate() {
        await this.page.goto('http://automationexercise.com');
    }


    async verifyHomePage() {
        await this.page.waitForSelector('#slider'); 
    }

    async clickSignupLogin() {
        await this.signupLoginButton.click();
    }

    async clickSignupLoginButton() {
        await this.signupLoginButtonb.click();
    }

    async verifyHomePageVisible() {
        await this.page.waitForSelector('#slider'); // Home page loaded successfully
    }

    async clickProductsButton() {
        await this.productsButton.click();
    }

    async clickCartButton() {
        await this.cartButton.click();
    }
    
    //test case 25
    async scrollToBottom() {
        await this.page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    }

    async verifySubscriptionVisible() {
        await this.subscriptionSection.waitFor();
    }

    async clickScrollUpButton() {
        await this.scrollUpButton.click();
    }

    async verifyTopBannerTextVisible() {
        await this.topBannerText.waitFor();
    }

}

module.exports = HomePage;
