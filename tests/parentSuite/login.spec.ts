import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";

test.describe("Auth Suite", () => {
  test("Login with valid credentials", async ({ page }) => {
    const loginPage = new LoginPage(page);

    // Przejście do strony logowania
    await loginPage.navigateTo("https://huntd-app-url.com/login");

    // Logowanie przy użyciu przykładowych danych
    await loginPage.login("testuser", "Password123");

    // Sprawdzenie, czy po zalogowaniu URL zawiera 'dashboard'
    await expect(page).toHaveURL(/dashboard/);
  });
});
