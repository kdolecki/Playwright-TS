# Playwright Automation Project

---

## Description

This project contains automated tests for the PrestaShop demo site using Playwright. The tests are designed to validate the purchase flow on the PrestaShop platform.

---

## Features

- **Framework and Configuration Setup**: Implemented the Page Object Model and managed test settings via a configuration file for base URLs, wait timeouts, browser drivers, and instances.
- **Custom Functionality and Browser Configuration**: Developed custom functions for assertions and UI interactions and customized browser settings, including window size.
- **Test Lifecycle Management**: Utilized Before and After annotations/hooks for setup and cleanup.
- **Cross-Browser Compatibility and Test Suites**: Ensured tests are compatible with at least Chrome and Firefox browsers. Organized test suites for both positive and negative testing scenarios. Created test scripts that allow tests to be run on different browsers and test suites.

---

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

Step-by-step instructions to get a local copy running on your machine:

1. Clone the repo

   ```sh
   git clone git@github.com:kdolecki/Playwright-TS.git
   cd Playwright-TS
   ```

2. Install NPM packages

   ```sh
   npm install
   ```


---

## Running Tests

### Run all tests

```sh
npm test
```

Run tests in headed mode
 ```sh
npm run test:headed
```
Run tests in a specific browser
Chrome
 ```sh
npm run test:chrome
```
Firefox
 ```sh
npm run test:firefox
```

