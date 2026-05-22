// app/layout.tsx
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.salterraenterprises.com"),
  title: {
    default: "Salterra Enterprises | Business Consulting & Operational Excellence",
    template: "%s | Salterra Enterprises",
  },
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
  openGraph: {
    siteName: "Salterra Enterprises",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/salterra-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Salterra Enterprises",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
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

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Salterra Enterprises, LLC",
  url: "https://www.salterraenterprises.com",
  founder: {
    "@type": "Person",
    name: "Amber Zeigler",
  },
  description:
    "Salterra Enterprises helps organizations improve operations, streamline workflows, optimize customer experiences, and execute strategic initiatives through practical consulting and operational support.",
  areaServed: "United States",
  email: "amber@salterraenterprises.com",
  sameAs: [],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
