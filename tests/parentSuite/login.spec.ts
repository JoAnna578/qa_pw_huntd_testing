import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { UserFactory } from "../data/UserFactory";

test.describe("Auth Suite", () => {
  test("Login with valid credentials", async ({ page }) => {
    const loginPage = new LoginPage(page);
    const user = UserFactory.validUser();

    await loginPage.navigateTo("/login");
    await loginPage.login(user.username, user.password);

    await expect(page).toHaveURL(/dashboard/);
  });

  test("Login with invalid password", async ({ page }) => {
    const loginPage = new LoginPage(page);
    const user = UserFactory.validUser();

    await loginPage.navigateTo("/login");
    await loginPage.login(user.username, "WrongPassword");

    await expect(page.locator(".error-message")).toBeVisible();
  });

  test("Login with invalid username", async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.navigateTo("/login");
    await loginPage.login("wronguser", "Password123");

    await expect(page.locator(".error-message")).toBeVisible();
  });

  test("Empty credentials validation", async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.navigateTo("/login");
    await loginPage.login("", "");

    await expect(page.locator(".error-message")).toBeVisible();
  });

  test("Password field is required", async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.navigateTo("/login");
    await loginPage.login("testuser", "");

    await expect(page.locator(".error-message")).toBeVisible();
  });
});
