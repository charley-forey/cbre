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

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "CBRE × AI — Charley Forey",
  description:
    "Conversation with CBRE on Head of AI Products: live demos of conversational AI and workflow automation, plus background on experience in enterprise AI product delivery.",
  openGraph: {
    title: "CBRE × AI — Charley Forey",
    description:
      "Live demos and context for the Head of AI Products conversation at CBRE.",
  },
  twitter: {
    card: "summary_large_image",
    title: "CBRE × AI — Charley Forey",
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
