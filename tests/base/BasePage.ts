import { Page, Locator } from "@playwright/test";

export class BasePage {
  constructor(protected page: Page) {}

  async navigateTo(url: string) {
    await this.page.goto(url);
  }

  async getPageTitle(): Promise<string> {
    return this.page.title();
  }

  // ✅ nowe metody dla Page Objectów
  async fillField(locator: Locator, value: string) {
    await locator.fill(value);
  }

  async clickElement(locator: Locator) {
    await locator.click();
  }
}
