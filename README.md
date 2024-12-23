# **Playwright Test Automation**

## This repository contains automated tests using Playwright and TypeScript for testing a web application. The tests cover various scenarios, including API calls and UI interactions.

```bash
.
├── locators/
│   ├── locators.ts          # Common locators for the application
│   └── walletLocators.ts    # Locators for wallet-related elements
├── node_modules/            # Dependencies installed via npm
├── pages/
│   ├── portfolioPage.ts     # Page object for portfolio-related actions
│   └── walletPage.ts        # Page object for wallet-related actions
├── test-results/            # Folder for storing test results (ignored by git)
├── tests/
│   ├── api/
│   │   └── apiTokenDetails.spec.ts  # API tests for token details
│   ├── addWallet.spec.ts    # Test for adding a wallet
│   ├── portfolioExample.spec.ts  # Test for portfolio interactions
│   ├── test.setup.ts        # Global test setup
├── utils/
│   └── apiHelpers.ts        # Helper functions for API testing
├── .env                     # Environment variables (ignored by git)
├── .eslintrc.js             # ESLint configuration
├── .gitignore               # Git ignore configuration
├── package-lock.json        # npm lock file
├── package.json             # Project dependencies and scripts
├── playwright.config.js     # Playwright configuration
└── tsconfig.json            # TypeScript configuration
```

## Prerequisites
Before running the tests, ensure you have the following installed:

**Node.js (v14 or higher)**
**npm (or yarn)**

## Installation

1. Clone the repository:
```bash
git clone https://github.com/LuizFernandoBMoragas/playwright-qa-test.git
Install dependencies:
```
3. Install dependecies:
```bash
npm install
```
Set up environment variables in the .env file (refer to .env.example if available).

## Running the Tests
To run the tests, use the following command:
```bash
npx playwright test
```
To run specific tests (e.g., addWallet.spec.ts):
```bash
npx playwright test tests/addWallet.spec.ts
```

## Test results will be stored in the test-results/ folder.

**Test Setup**
### Global Setup: The tests are set up to run with a global configuration, including environment setup, API helpers, and locators.
### Page Objects: Tests use the Page Object Model (POM) pattern. Page objects are located in the pages/ folder.
### Locators: Element locators are stored in the locators/ folder, segregating general and wallet-specific locators.

## ESLint
To ensure code quality, ESLint is set up with the .eslintrc.js configuration. You can run linting with:
```bash
npx eslint .
```

## **Notes**
The .env file is ignored by Git to keep sensitive information safe.
Test results are stored in the test-results/ folder, which is also ignored by Git.
