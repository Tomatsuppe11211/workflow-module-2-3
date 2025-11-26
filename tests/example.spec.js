// @ts-check
import { test, expect } from "@playwright/test";


//opening https://example.com
test("Checking if we can open example.com", async ({ page }) => {
  await page.goto("https://example.com")
  //waiting for example.com to be loaded then checking its content
  await expect(page.getByRole('heading')).toBeVisible()
  await expect(page).toHaveTitle('Example Domain')
  await expect(page).toHaveURL('https://example.com/')
})








//Default tests
/*
test("has title", async ({ page }) => {
  await page.goto("https://playwright.dev/");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test("get started link", async ({ page }) => {
  await page.goto("https://playwright.dev/");

  // Click the get started link.
  await page.getByRole("link", { name: "Get started" }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(
    page.getByRole("heading", { name: "Installation" }),
  ).toBeVisible();
});
*/