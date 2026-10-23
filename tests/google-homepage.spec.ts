import { test, expect } from '@playwright/test';
import { GoogleHomePage } from './google-homepage.page';

test.describe('Google Homepage Functional Tests', () => {
  test('Homepage load and core UI elements', async ({ page }) => {
    const homePage = new GoogleHomePage(page);

    // 1. Navigate to https://www.google.com/
    await homePage.goto();

    // 2. Verify the page title contains "Google"
    // 3. Verify the Google logo is visible
    // 4. Verify the search input is visible
    // 5. Verify the "Google Search" button is visible
    // 6. Verify the "I'm Feeling Lucky" button is visible
    await homePage.expectHomepageVisible();
  });

  test('Search query returns results', async ({ page }) => {
    const homePage = new GoogleHomePage(page);

    // 1. Navigate to https://www.google.com/
    await homePage.goto();

    // 2. Enter "Playwright" into the Google search input
    await homePage.enterSearchQuery('Playwright');

    // 3. Click the "Google Search" button
    await homePage.clickSearch();

    // 4. Verify the URL contains "/search"
    await expect(page).toHaveURL(/\/search/);

    // 5. Verify results are visible
    await expect(page.getByRole('heading', { name: /Playwright|Search results/i }).first()).toBeVisible();

    // 6. Verify at least one result contains "Playwright"
    await expect(page.locator('text=Playwright').first()).toBeVisible();
  });

  test("I'm Feeling Lucky navigation", async ({ page }) => {
    const homePage = new GoogleHomePage(page);

    // 1. Navigate to https://www.google.com/
    await homePage.goto();

    // 2. Enter "Playwright" into the Google search input
    await homePage.enterSearchQuery('Playwright');

    // 3. Click the "I'm Feeling Lucky" button
    await homePage.clickFeelingLucky();

    // 4. Verify the browser navigates away from the homepage
    await expect(page).not.toHaveURL('https://www.google.com/');
  });

  test('Top navigation links open expected pages', async ({ page }) => {
    const homePage = new GoogleHomePage(page);

    // 1. Navigate to https://www.google.com/
    await homePage.goto();

    // 2. Click the "Gmail" link
    await homePage.clickGmail();

    // 3. Verify the URL contains "mail.google.com"
    await expect(page).toHaveURL(/mail\.google\.com/);

    // 4. Navigate back to Google homepage
    await page.goBack();
    await expect(page).toHaveURL('https://www.google.com/');

    // 5. Click the "Search for Images" link
    await homePage.clickImages();

    // 6. Verify the URL contains "/imghp"
    await expect(page).toHaveURL(/\/imghp/);
  });

  test('Footer privacy and terms links', async ({ page }) => {
    const homePage = new GoogleHomePage(page);

    // 1. Navigate to https://www.google.com/
    await homePage.goto();

    // 2. Scroll to the footer and click "Privacy"
    await homePage.clickPrivacy();

    // 3. Verify the URL contains "policies.google.com/privacy"
    await expect(page).toHaveURL(/policies\.google\.com\/privacy/);

    // 4. Navigate back
    await page.goBack();
    await expect(page).toHaveURL('https://www.google.com/');

    // 5. Click the "Terms" link
    await homePage.clickTerms();

    // 6. Verify the URL contains "policies.google.com/terms"
    await expect(page).toHaveURL(/policies\.google\.com\/terms/);
  });
});
