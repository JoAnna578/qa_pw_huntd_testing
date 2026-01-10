import { defineConfig, devices } from "@playwright/test";

/**
 * Playwright Test Configuration
 * Ustawienia zgodne z wytycznymi dla Huntd Automation Framework
 */
export default defineConfig({
  testDir: "./tests",

  // Uruchamiaj testy w plikach równolegle
  fullyParallel: true,

  // Fail build, jeśli zostanie pozostawione test.only
  forbidOnly: !!process.env.CI,

  // Retry tylko na CI
  retries: process.env.CI ? 2 : 0,

  // Praca w jednym wątku na CI
  workers: process.env.CI ? 1 : undefined,

  // Reporter — HTML + Allure
  reporter: [
    ["html"], // standardowy HTML
    ["allure-playwright"], // Allure reporter
  ],

  use: {
    // headless domyślnie
    headless: true,

    // Screenshot tylko przy niepowodzeniu
    screenshot: "only-on-failure",

    // Video tylko przy niepowodzeniu
    video: "retain-on-failure",

    // Trace na pierwszym retry
    trace: "on-first-retry",
  },

  // Projekty dla głównych przeglądarek
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
    {
      name: "firefox",
      use: { ...devices["Desktop Firefox"] },
    },
    {
      name: "webkit",
      use: { ...devices["Desktop Safari"] },
    },
  ],

  /* Run your local dev server before starting the tests — opcjonalnie */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
