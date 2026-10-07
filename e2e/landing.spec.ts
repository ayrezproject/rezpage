import { test, expect } from "@playwright/test";

test.describe("Rezpage Modern Landing Page - Bilingual Financial Operations Flow", () => {
  test("1. Landing page loads primary elements and hero", async ({ page }) => {
    await page.goto("/");

    // Check title and brand
    await expect(page).toHaveTitle(/Rezpage/i);

    // Check Navbar
    const navLogo = page.locator("header").getByText("Rezpage");
    await expect(navLogo).toBeVisible();

    // Check Hero Section
    const heroTitle = page.locator("h1").getByText("Rezpage");
    await expect(heroTitle).toBeVisible();

    const ctaButton = page.locator("section").getByRole("button", {
      name: /Explore Platform|Start Free|Mulai Uji Coba/i,
    });
    await expect(ctaButton.first()).toBeVisible();

    // Check Footer
    const footer = page.locator("footer");
    await expect(footer).toBeVisible();
    await expect(footer.getByText(/All rights reserved|Hak cipta dilindungi/i)).toBeVisible();
  });

  test("2. Dynamic Language Toggle (ID <-> EN)", async ({ page }) => {
    await page.goto("/");

    // Find language toggle button
    const langToggle = page.locator("header").getByRole("button", { name: /Toggle language/i });
    await expect(langToggle).toBeVisible();

    // Ensure toggle switches language
    await langToggle.click();
    const taglineEn = page.getByText("Modern Financial Operations & Cash Flow Intelligence");
    await expect(taglineEn).toBeVisible();
  });

  test("3. Navigation anchors & apps placeholder attached", async ({ page }) => {
    await page.goto("/");

    // Check apps anchor
    const appsSection = page.locator("#apps");
    await expect(appsSection).toBeAttached();

    // Check pricing section
    const pricingSection = page.locator("#pricing");
    await expect(pricingSection).toBeAttached();
  });
});
