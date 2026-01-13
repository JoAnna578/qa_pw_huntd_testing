import { Page, Locator } from "@playwright/test";
import { BasePage } from "../base/BasePage";

/**
 * Page Object for Huntd Login Page
 * Implements login functionality using Page Object Pattern
 */
export class LoginPage extends BasePage {
  private usernameInput: Locator;
  private passwordInput: Locator;
  private loginButton: Locator;

  constructor(page: Page) {
    super(page);

    // Selectors for login page elements
    this.usernameInput = page.locator("#username");
    this.passwordInput = page.locator("#password");
    this.loginButton = page.locator("#login-button");
  }

  /**
   * Log in using provided credentials
   */
  async login(username: string, password: string): Promise<void> {
    await this.fillField(this.usernameInput, username);
    await this.fillField(this.passwordInput, password);
    await this.clickElement(this.loginButton);
  }

  /**
   * Helper method to verify successful login
   */
  async isLoggedIn(): Promise<boolean> {
    return this.page.locator("#logout-button").isVisible();
  }
}
