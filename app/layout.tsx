import type { Metadata } from "next";
import { LanguageProvider } from "@/lib/i18n-context";
import { Toaster } from "sonner";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://rezpage.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Rezpage - Modern Financial Intelligence & Treasury Operations Platform",
  description:
    "Autonomous financial operations for modern businesses. Unify treasury accounts, automate corporate card spend, and forecast cash runway in real time with bank-grade security.",
  keywords: [
    "Financial Operations",
    "Treasury Management",
    "Cash Flow Forecasting",
    "Corporate Cards",
    "Automated Expense Management",
    "Rezpage",
    "Fintech SaaS",
  ],
  openGraph: {
    title: "Rezpage - Modern Financial Intelligence Platform",
    description:
      "Unify treasury, automate corporate spend controls, and predict cash runway with real-time financial intelligence.",
    url: siteUrl,
    siteName: "Rezpage",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <LanguageProvider>
          <ErrorBoundary>{children}</ErrorBoundary>
          <Toaster />
        </LanguageProvider>
      </body>
    </html>
  );
}
