
class ProductsPage {
    constructor(page) {
        this.page = page;
        this.allProductsHeader = page.locator('h2:has-text("All Products")'); 
        this.searchInput = page.locator('input#search_product'); 
        this.searchButton = page.locator('button#submit_search'); 
        this.searchedProductsHeader = page.locator('h2:has-text("Searched Products")'); 
        this.productList = page.locator('.productinfo'); 

        this.firstProduct = this.page.locator('//html/body/section[2]/div/div/div[2]/div/div[2]/div/div[1]/div[1]/img'); 
        this.secondProduct = this.page.locator('//html/body/section[2]/div/div/div[2]/div/div[3]/div/div[1]/div[1]/img'); 
        this.addToCartButton = this.page.locator('.overlay-content > .btn'); 
        this.addToCartButton2 = this.page.locator('.overlay-content > [data-product-id="2"]'); 
        this.continueShoppingButton = page.locator('button:has-text("Continue Shopping")'); 
        this.viewCartButton = page.locator('.modal-body a[href="/view_cart"]'); 
    
    }

    async verifyAllProductsPage() {
        await this.allProductsHeader.waitFor();
    }

    async searchProduct(productName) {
        await this.searchInput.fill(productName);
        await this.searchButton.click();
    }

    async verifySearchedProductsVisible() {
        await this.searchedProductsHeader.waitFor();
        const productCount = await this.productList.count();
        if (productCount === 0) {
            throw new Error('No products found for the search');
        }
    }

    async hoverAndAddFirstProductToCart() {
        await this.firstProduct.hover();
        await this.addToCartButton.first().click(); 
    }

    async hoverAndAddSecondProductToCart() {
        await this.secondProduct.hover();
        await this.addToCartButton2.first().click(); 
    }

    async clickContinueShopping() {
        await this.continueShoppingButton.click();
    }

    async clickViewCart() {
        await this.viewCartButton.click();
    }

}

module.exports = ProductsPage;
