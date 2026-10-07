# Rezpage - Modern Landing Page

A modern, high-performance landing page for **Rezpage - Modern Landing Page** (Enterprise Financial Operations & Cash Flow Intelligence Platform).

Built with Next.js 16 static export architecture, fully optimized for instant, zero-backend deployment to **GitHub Pages**.

---

## 🚀 Key Features

- **Autonomous Financial Intelligence:** Modern hero stage showcasing unified treasury, spend controls, and automated cash flow forecasting.
- **Bilingual Experience (EN & ID):** Instant language switching without page reloads.
- **Interactive Financial Audit Report Preview:** Live high-fidelity Q3 Balance Sheet, Runway Projections, and EBITDA breakdown modal.
- **Bank-Grade Compliance Standards:** Highlights SOC 2 Type II, 256-bit AES encryption, and automated multi-entity reconciliation.
- **Zero-Backend Static Export:** Runs 100% client-side with no server dependencies or database requirements.
- **Automated CI/CD:** Ready-to-use GitHub Actions workflow (`.github/workflows/deploy.yml`) for one-click GitHub Pages hosting.

---

## 🛠️ Tech Stack

- **Framework:** [Next.js 16 (App Router)](https://nextjs.org/)
- **UI & Components:** [React 19](https://react.dev/), Radix UI Primitives, Lucide Icons
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Notifications:** Sonner
- **Testing:** Playwright E2E

---

## 💻 Local Development

### Requirements

- **Node.js:** v20+
- **pnpm:** v10+ (or `npm` / `yarn`)

### Steps

1. **Install Dependencies:**
   ```bash
   pnpm install
   ```

2. **Run Development Server:**
   ```bash
   pnpm dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

3. **Build Static Export:**
   ```bash
   pnpm run build
   ```
   Static HTML/CSS/JS assets will be generated in `./out`.

---
## 📄 License

Licensed under the MIT License.
