import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  /* Enable tests to run in full parallel mode */
  fullyParallel: true,
  /* Ensures no test.only when CI is true */
  forbidOnly: !!process.env.CI,
  /* Set retries depending on CI environment */
  retries: process.env.CI ? 2 : 0,
  /* Adjust number of workers based on CI */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter configuration */
  reporter: [['list'], ['json', { outputFile: 'results.json' }]],
  /* Global settings for all tests */
  use: {
    /* Base URL for simplifying navigation commands */
    baseURL: 'https://demo.prestashop.com',
    /* Run tests in headless mode or not */
    headless: false,
    /* Define viewport dimensions */
    viewport: { width: 1280, height: 720 },
    /* Ignore HTTPS errors during navigation */
    ignoreHTTPSErrors: true,
    /* Collect trace when retrying the failed test */
    trace: 'on-first-retry',
  },

  /* Specific projects for different browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
    // Examples of mobile and branded browser configurations:
    /*
    {
      name: 'Mobile Chrome',
      use: { ...devices['Pixel 5'] },
    },
    {
      name: 'Mobile Safari',
      use: { ...devices['iPhone 12'] },
    },
    {
      name: 'Microsoft Edge',
      use: { ...devices['Desktop Edge'], channel: 'msedge' },
    },
    {
      name: 'Google Chrome',
      use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    },
    */
  ],

  // Optionally start a web server before running the tests
  // Useful for local development or CI environments
  /*
  webServer: {
    command: 'npm run start',
    url: 'http://127.0.0.1:3000',
    reuseExistingServer: !process.env.CI,
  },
  */
});
