import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Salterra Enterprises | Business Consulting & Operational Excellence",
  description:
    "Salterra Enterprises helps organizations improve operations, streamline workflows, optimize customer experiences, and execute strategic initiatives through practical consulting and operational support.",
  keywords: [
    "Salterra Enterprises",
    "business consulting",
    "operations consulting",
    "workflow optimization",
    "project management",
    "product management",
    "customer experience",
    "financial services operations",
    "business operations support",
    "Amber Zeigler",
  ],
  authors: [{ name: "Salterra Enterprises, LLC" }],
  creator: "Salterra Enterprises, LLC",
  publisher: "Salterra Enterprises, LLC",
  metadataBase: new URL("https://www.salterraenterprises.com"),
  openGraph: {
    title: "Salterra Enterprises | Business Consulting & Operational Excellence",
    description:
      "Practical consulting, workflow optimization, operations support, and project leadership for growing organizations.",
    url: "https://www.salterraenterprises.com",
    siteName: "Salterra Enterprises",
    images: [
      {
        url: "/salterra-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Salterra Enterprises",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Salterra Enterprises | Business Consulting & Operational Excellence",
    description:
      "Helping organizations simplify operations, improve workflows, and execute strategic initiatives with confidence.",
    images: ["/salterra-hero.jpg"],
  },
  icons: {
    icon: [
      {
        url: "/salterra-nav-icon.png",
        type: "image/png",
        sizes: "32x32",
      },
    ],
    shortcut: "/salterra-nav-icon.png",
    apple: "/salterra-nav-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}