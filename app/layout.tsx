import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const siteUrl =
  process.env.VERCEL_URL != null
    ? `https://${process.env.VERCEL_URL}`
    : process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

const pageTitle =
  "Head of AI Products | Charley Forey · CBRE conversation";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: pageTitle,
    template: "%s · Charley Forey",
  },
  description:
    "Conversation with CBRE on Head of AI Products: live demos of conversational AI and workflow automation, plus background on experience in enterprise AI product delivery.",
  openGraph: {
    title: pageTitle,
    description:
      "Live demos and context for the Head of AI Products conversation at CBRE.",
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description:
      "Live demos and context for the Head of AI Products conversation at CBRE.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body className="min-h-screen font-sans antialiased">{children}</body>
    </html>
  );
}
