import { test, expect } from '@playwright/test';
import { RegistrationPage } from '../pageObjects/RegistrationPage';
import { LoginPage } from '../pageObjects/LoginPage';
import { HomePage } from '../pageObjects/HomePage';
import { SearchPage } from '../pageObjects/SearchPage';
import { ProductPage } from '../pageObjects/ProductPage';
import { CartPage } from '../pageObjects/CartPage';

test.describe('Demo Prestashop Test', () => {
  test('User Registration and Login', async ({ page }) => {
    const registrationPage = new RegistrationPage(page);
    const loginPage = new LoginPage(page);

    // Navigate to registration page
    await registrationPage.navigate('https://demo.prestashop.com/register');

    // Register new user
    await registrationPage.register('user', 'user@example.com', 'password123');

    // Verify registration and navigate to login
    await expect(page).toHaveURL('https://demo.prestashop.com/login');

    // Login with new user credentials
    await loginPage.login('user@example.com', 'password123');

    // Verify login success
    await expect(page).toHaveURL('https://demo.prestashop.com/home');
  });

  test('Product Search and Filter', async ({ page }) => {
    const homePage = new HomePage(page);
    const searchPage = new SearchPage(page);

    // Navigate to homepage
    await homePage.navigate('https://demo.prestashop.com');

    // Search for products
    await homePage.search('electronics');

    // Apply filters
    await searchPage.applyFilter('Price: Low to High');

    // Verify search results
    const results = await searchPage.getResults();
    expect(results.length).toBeGreaterThan(0);
    expect(results.every(result => result.includes('electronics'))).toBe(true);
  });

  test('Adding Items to Cart', async ({ page }) => {
    const homePage = new HomePage(page);
    const searchPage = new SearchPage(page);
    const productPage = new ProductPage(page);
    const cartPage = new CartPage(page);

    // Navigate to homepage
    await homePage.navigate('https://demo.prestashop.com');

    // Search for products
    await homePage.search('electronics');

    // Select product from results
    await searchPage.applyFilter('Price: Low to High');
    await page.click('.product:first-of-type a');  // Click on the first product

    // Add product to cart
    await productPage.addToCart();

    // Verify cart updates
    await page.click('a.cart');
    const cartItems = await cartPage.getCartItems();
    expect(cartItems.length).toBe(1);
  });
});
