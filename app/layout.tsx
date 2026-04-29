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

const siteUrlRaw =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL != null ? `https://${process.env.VERCEL_URL}` : null);

const siteUrl = siteUrlRaw ?? "http://localhost:3000";

const pageTitle =
  "Head Of AI Products | Charley Forey · CBRE Conversation";

const description =
  "Conversation with CBRE on Head Of AI Products: live demos of conversational AI and workflow automation, role alignment, and enterprise AI product delivery background.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: pageTitle,
    template: "%s · Charley Forey",
  },
  description,
  openGraph: {
    title: pageTitle,
    description,
    url: "/",
    siteName: "Charley Forey",
    images: [
      {
        url: "/og-cbre-conversation.png",
        width: 1200,
        height: 630,
        alt: "Head Of AI Products | Charley Forey | Live demos and role conversation",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description,
    images: ["/og-cbre-conversation.png"],
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
