// @ts-check
import { test, expect } from "@playwright/test";

//opening https://example.com
test("Checking if we can open example.com", async ({ page }) => {
  await page.goto("https://example.com");
  //waiting for example.com to be loaded then checking its content
  await expect(page.getByRole("heading")).toBeVisible();
  await expect(page).toHaveTitle("Example Domain");
  await expect(page).toHaveURL("https://example.com/");
  await expect(
    page.getByRole("paragraph").filter({ hasText: "This domain" }),
  ).toContainText("This domain");
  //Successfull test for paragraph. But what if i don't know the content of tha page?
  const linkHref = await page.getByRole("link").getAttribute("href"); //getting the href
  await expect(linkHref).toBe("https://iana.org/domains/example"); //successful checking link href
});

test("Checking if i can find the button on the Noroff website", async ({
  page,
}) => {
  await page.goto("https://noroff.no/en");
  await expect(
    page.locator("#menu").getByRole("button", { name: "Apply now" }),
  ).toBeVisible();
  //test successful!
});

test("checking for sign up button on github", async ({ page }) => {
  await page.goto("https://github.com");
  await expect(page.getByRole("link", { name: "sign up" })).toBeVisible();
  //test successfull!
});

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
