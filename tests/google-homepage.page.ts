import { expect, Locator, Page } from '@playwright/test';

export class GoogleHomePage {
  readonly page: Page;
  readonly logo: Locator;
  readonly searchInput: Locator;
  readonly searchButton: Locator;
  readonly feelingLuckyButton: Locator;
  readonly gmailLink: Locator;
  readonly imagesLink: Locator;
  readonly privacyLink: Locator;
  readonly termsLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.logo = page.getByAltText('Google');
    this.searchInput = page.getByRole('combobox', { name: /Search/i });
    this.searchButton = page.getByRole('button', { name: 'Google Search' });
    this.feelingLuckyButton = page.getByRole('button', { name: "I'm Feeling Lucky" });
    this.gmailLink = page.getByRole('link', { name: 'Gmail' });
    this.imagesLink = page.getByRole('link', { name: 'Search for Images' });
    this.privacyLink = page.getByRole('link', { name: 'Privacy' });
    this.termsLink = page.getByRole('link', { name: 'Terms' });
  }

  async goto() {
    await this.page.goto('https://www.google.com/');
  }

  async expectHomepageVisible() {
    await expect(this.page).toHaveTitle(/Google/);
    await expect(this.logo).toBeVisible();
    await expect(this.searchInput).toBeVisible();
    await expect(this.searchButton).toBeVisible();
    await expect(this.feelingLuckyButton).toBeVisible();
  }

  async enterSearchQuery(query: string) {
    await this.searchInput.fill(query);
  }

  async clickSearch() {
    await this.searchButton.click();
  }

  async clickFeelingLucky() {
    await this.feelingLuckyButton.click();
  }

  async clickGmail() {
    await this.gmailLink.click();
  }

  async clickImages() {
    await this.imagesLink.click();
  }

  async clickPrivacy() {
    await this.privacyLink.scrollIntoViewIfNeeded();
    await this.privacyLink.click();
  }

  async clickTerms() {
    await this.termsLink.scrollIntoViewIfNeeded();
    await this.termsLink.click();
  }
}
