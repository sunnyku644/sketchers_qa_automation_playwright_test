# 💎 QA Automation Exercise - Automated GUI Testing

## 💠 Automation of Test Cases Using Page Object Model with Playwright (JavaScript)

### Project Overview
This project automates several test cases from the website(https://automationexercise.com/) using the **Page Object Model (POM)** and **Playwright** with **JavaScript**. The POM structure improves the organization, maintainability, and reusability of the test code by separating the UI elements from the test scripts.

### Automated Test Cases
 #### The following test cases have been automated as part of this project:

1. **Test Case 1**: Register User
2. **Test Case 2**: Login User with correct email and password
3. **Test Case 9**: Search Product
4. **Test Case 11**: Verify Subscription in Cart page
5. **Test Case 12**: Add Products in Cart
6. **Test Case 24**: Download Invoice after purchase order
7. **Test Case 25**: Verify Scroll Up using 'Arrow' button and Scroll Down functionality

### Technologies Used
- **Playwright**: A Node.js library for browser automation.
- **JavaScript (Node.js)**: The programming language used for writing the test scripts.
- **Page Object Model (POM)**: A design pattern to improve test structure by separating the page elements and actions from test logic.

### Project Structure
The project follows a modular structure based on the Page Object Model:


``` bash 
/project-root
    /pages
        accountPage.js
        cartPage.js
        checkoutPage.js
        homePage.js
        loginPage.js
        OrderConfirmationPage.js
        productPage.js
        signupPage.js
    /tests
        addProductsToCart.spec.js
        downloadInvoiceAfterOrder.spec.js
        loginUser.spec.js
        registerUser.spec.js
        scrollUpDown.spec.js
        searchProduct.spec.js
        verifySubscription.spec.js
    /utils
        helpers.js (optional)
    playwright.config.js
    package.json
```


- **`pages/`**: Contains the Page Object classes for each page of the application.
- **`tests/`**: Contains the test cases that interact with the Page Object classes.
- **`utils/`**: (Optional) For utility functions or reusable code snippets.
- **`playwright.config.js`**: Configuration file for Playwright.

### Setup and Installation

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd <repository-directory>  

### Install Dependencies: 
##### Ensure you have Node.js installed, then install the required packages, including Playwright.

``` npm install ```

### Install Playwright Browsers: Playwright requires browser binaries to be downloaded before running the tests.
``` npx playwright install ```

### Running Tests
1. #### To run all tests:

    ````npx playwright test ````
2. #### To run a specific test:

    ``` npx playwright test tests/<test-file>.spec.js ```
3. #### You can also run tests in a headed mode (with browser UI):

    ``` npx playwright test --headed ```
### Key Components
- Page Object Model: Each web page is represented as a class with methods that perform actions on that page. The structure makes the code reusable across multiple tests.

- Test Scripts: The test cases are written in tests/ and they interact with the Page Object classes.

- Selectors: The UI elements are selected using CSS selectors, XPath, and Playwright-specific locators.

## Troubleshooting
- Timeout Errors: Increase test timeout in case of slow network or page load times by setting a higher timeout in playwright.config.js.
- Element Not Found: Use Playwright’s debugging options (`--headed, --slow-mo`) to visually inspect element locators.
## Contributing
1. Fork the repository.
2. Create a new branch: 
    ``` git checkout -b feature-branch.```
3. Commit your changes 
    ``` git commit -m 'Add feature.```
4. Push to the branch 
    ``` git push origin feature-branch.```
5. Open a Pull Request.