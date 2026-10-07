# Rezpage Landing Page

Landing page modern dan responsif untuk platform **Rezpage (Rencana Pembelajaran Mendalam / RPM AI Kurikulum Merdeka)**.

Dibangun dengan arsitektur static export Next.js yang siap dideploy secara instan ke **GitHub Pages**.

---

## 🚀 Fitur Utama

- **Bilingual (ID & EN):** Beralih bahasa secara instan tanpa reload halaman.
- **Folio F4 Authentic Document Preview:** Pratinjau interaktif dokumen RPM berstandar format baku 54 baris × 15 kolom Folio (215 × 330 mm).
- **Download Dokumen Word Asli:** Tautan langsung unduh berkas `.docx` siap pakai.
- **Desain Modern & Interaktif:** Dilengkapi animasi scroll reveal, progress bar, island capsule navbar responsif, dan layout aesthetic obsidian/lime.
- **Zero-Backend / Static Export:** Berjalan sepenuhnya di sisi klien tanpa dependensi database server atau layanan pihak ketiga berbayar.

---

## 🛠️ Tech Stack

- **Framework:** [Next.js 16 (App Router)](https://nextjs.org/)
- **UI & State:** [React 19](https://react.dev/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Komponen:** Radix UI primitives & Lucide Icons
- **Notifikasi:** Sonner
- **Testing:** Playwright E2E

---

## 💻 Panduan Instalasi Lokal

### Kebutuhan Sistem

- **Node.js:** Versi 20+
- **pnpm:** Versi 10+ (atau gunakan `npm` / `yarn`)

### Langkah-langkah

1. **Pasang Dependensi:**
   ```bash
   pnpm install
   ```

2. **Jalankan Server Development:**
   ```bash
   pnpm dev
   ```
   Buka browser di [http://localhost:3000](http://localhost:3000).

3. **Uji Build Static Export:**
   ```bash
   pnpm run build
   ```
   Hasil file HTML/CSS/JS statis akan dihasilkan di direktori `./out`.

---

## 🌐 Panduan Deploy ke GitHub Pages

Repositori ini telah dilengkapi dengan alur otomatisasi **GitHub Actions** (`.github/workflows/deploy.yml`).

### Cara Mengaktifkan di GitHub:

1. Buat repositori baru di GitHub dan lakukan push kode:
   ```bash
   git init
   git add .
   git commit -m "feat: initial commit for github pages deployment"
   git branch -M main
   git remote add origin https://github.com/<USERNAME>/<REPO_NAME>.git
   git push -u origin main
   ```

2. Buka halaman repositori di browser:
   - Masuk ke tab **Settings** -> **Pages**.
   - Pada bagian **Build and deployment** > **Source**, pilih opsi **GitHub Actions**.

3. Begitu Anda melakukan push ke branch `main`, GitHub Actions akan otomatis membangun website dan mempublikasikannya ke:
   `https://<USERNAME>.github.io/<REPO_NAME>/`

*(Catatan: Konfigurasi `next.config.ts` otomatis menyesuaikan `basePath` sesuai nama repositori GitHub).*

---

## 📄 Lisensi

Proyek ini dilisensikan di bawah lisensi MIT.
