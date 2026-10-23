import { test, expect } from '@playwright/test';

test.describe('Infosys Homepage Navigation Tests', () => {
  test('Homepage Load and Title', async ({ page }) => {
    // 1. Navigate to https://www.infosys.com/
    await page.goto('https://www.infosys.com/');

    // 2. Verify the page title contains "Infosys"
    await expect(page).toHaveTitle(/Infosys/i);

    // 3. Verify the heading text "Navigate your next" is visible
    await expect(page.getByText('Navigate your next')).toBeVisible();
  });

  test('Navigate to Careers', async ({ page }) => {
    // 1. Navigate to https://www.infosys.com/
    await page.goto('https://www.infosys.com/');

    // 2. Click the "Careers" link in the top navigation
    const careersLink = page.locator('nav a.nav-link', { hasText: 'Careers' }).first();
    await expect(careersLink).toBeVisible();
    await careersLink.click();

    // 3. Verify the URL contains "/careers"
    await expect(page).toHaveURL(/\/careers/);

    // 4. Verify the page has visible text "Careers" or "Join Infosys"
    await expect(page.getByText(/Careers|Join Infosys/i)).toBeVisible();
  });

  test('Navigate to Newsroom', async ({ page }) => {
    // 1. Navigate to https://www.infosys.com/
    await page.goto('https://www.infosys.com/');

    // 2. Click the "Newsroom" link in the top navigation
    const newsroomLink = page.locator('nav a', { hasText: 'Newsroom' }).first();
    await expect(newsroomLink).toBeVisible();
    await newsroomLink.click();

    // 3. Verify the URL contains "/newsroom"
    await expect(page).toHaveURL(/\/newsroom/);

    // 4. Verify the page has visible text "Newsroom"
    await expect(page.getByText(/Newsroom/i)).toBeVisible();
  });

  test('Verify Privacy Statement footer link', async ({ page }) => {
    // 1. Navigate to https://www.infosys.com/
    await page.goto('https://www.infosys.com/');

    // 2. Scroll to footer and click the "Privacy Statement" link
    const privacyLink = page.getByRole('link', { name: 'Privacy Statement' });
    await privacyLink.scrollIntoViewIfNeeded();
    await expect(privacyLink).toBeVisible();
    await privacyLink.click();

    // 3. Verify the URL contains "/privacy-statement"
    await expect(page).toHaveURL(/\/privacy-statement/);

    // 4. Verify the page title contains "Privacy Statement"
    await expect(page).toHaveTitle(/Privacy Statement/i);
  });
});
