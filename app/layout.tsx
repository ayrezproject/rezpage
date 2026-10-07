import type { Metadata } from "next";
import { LanguageProvider } from "@/lib/i18n-context";
import { Toaster } from "sonner";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://rezpage.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Rezpage - Rencana Pembelajaran Mendalam (RPM) AI Kurikulum Merdeka",
  description:
    "Aplikasi web penyusun Rencana Pelaksanaan Pembelajaran Mendalam (RPM) otomatis berbasis AI standar Kurikulum Merdeka RI. Lengkap dengan matriks diferensiasi 54 baris, asesmen, dan ekspor dokumen resmi.",
  keywords: [
    "RPM",
    "Rencana Pembelajaran Mendalam",
    "Kurikulum Merdeka",
    "Perangkat Ajar AI",
    "Guru SMK",
    "Rezpage",
  ],
  openGraph: {
    title: "Rezpage - RPM AI Kurikulum Merdeka",
    description:
      "Susun Rencana Pelaksanaan Pembelajaran Mendalam (RPM) otomatis berbasis AI sesuai standar Kurikulum Merdeka dalam hitungan menit.",
    url: siteUrl,
    siteName: "Rezpage",
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body>
        <LanguageProvider>
          <ErrorBoundary>{children}</ErrorBoundary>
          <Toaster />
        </LanguageProvider>
      </body>
    </html>
  );
}
