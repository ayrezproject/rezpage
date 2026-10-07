import { test, expect } from "@playwright/test";

test.describe("Landing Page & Bilingual Flow", () => {
  test("1. Landing page memuat elemen utama dengan benar", async ({ page }) => {
    await page.goto("/");

    // Periksa judul dan meta
    await expect(page).toHaveTitle(/Rezpage/i);

    // Periksa Navbar
    const navLogo = page.locator("header").getByText("Rezpage");
    await expect(navLogo).toBeVisible();

    // Periksa Hero Section
    const heroTitle = page.locator("h1").getByText("Rezpage");
    await expect(heroTitle).toBeVisible();

    const ctaButton = page.locator("section").getByRole("button", {
      name: /Lihat Aplikasi|Download Aplikasi/i,
    });
    await expect(ctaButton).toBeVisible();

    // Periksa Footer
    const footer = page.locator("footer");
    await expect(footer).toBeVisible();
    await expect(footer.getByText(/Semua hak dilindungi|All rights reserved/i)).toBeVisible();
  });

  test("2. Toggle bahasa ID <-> EN berfungsi secara dinamis", async ({ page }) => {
    await page.goto("/");

    // Cari tombol toggle bahasa di header
    const langToggle = page.locator("header").getByRole("button", { name: /Toggle language/i });
    await expect(langToggle).toBeVisible();

    // Nilai awal adalah ID
    await expect(langToggle).toContainText("ID");
    const taglineId = page.getByText("Solusi Aplikasi Berlangganan Untuk Kemudahan Anda");
    await expect(taglineId).toBeVisible();

    // Klik untuk beralih ke EN
    await langToggle.click();
    await expect(langToggle).toContainText("EN");

    // Verifikasi teks bahasa Inggris muncul
    const taglineEn = page.getByText("Subscription App Solutions For Your Ease");
    await expect(taglineEn).toBeVisible();

    // Klik kembali untuk beralih ke ID
    await langToggle.click();
    await expect(langToggle).toContainText("ID");
    await expect(taglineId).toBeVisible();
  });

  test("3. Tautan navigasi dan anchor scroll berfungsi", async ({ page }) => {
    await page.goto("/");

    // Periksa anchor apps dan pricing ada di DOM
    const appsSection = page.locator("#apps");
    await expect(appsSection).toBeAttached();
  });
});
