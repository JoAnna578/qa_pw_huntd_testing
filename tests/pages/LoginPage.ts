import { Locator } from "@playwright/test";
import { BasePage } from "../base/BasePage";

/**
 * Page Object for Huntd Login Page
 * Implements login functionality using Page Object Pattern
 */
export class LoginPage extends BasePage {
  private usernameInput: Locator;
  private passwordInput: Locator;
  private loginButton: Locator;

  constructor(page: any) {
    super(page);
    // Definiujemy selektory elementów na stronie logowania
    this.usernameInput = this.page.locator("#username");
    this.passwordInput = this.page.locator("#password");
    this.loginButton = this.page.locator("#login-button");
  }

  /**
   * Log in using provided credentials
   * @param username string
   * @param password string
   */
  async login(username: string, password: string) {
    await this.fillField(this.usernameInput, username);
    await this.fillField(this.passwordInput, password);
    await this.clickElement(this.loginButton);
  }

  /**
   * Optional helper method to check if login was successful
   */
  async isLoggedIn(): Promise<boolean> {
    return await this.page.locator("#logout-button").isVisible();
  }
}
