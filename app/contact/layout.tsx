import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Salterra Enterprises",
  description:
    "Schedule a consultation or send a message to discuss your strategy, operations, brand, and growth goals with Amber Zeigler.",
  openGraph: {
    title: "Contact Salterra Enterprises",
    description:
      "Schedule a consultation or send a message to discuss your strategy, operations, brand, and growth goals with Amber Zeigler.",
    url: "https://www.salterraenterprises.com/contact",
    siteName: "Salterra Enterprises",
    images: [
      {
        url: "/salterra-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Salterra Enterprises",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Salterra Enterprises",
    description:
      "Schedule a consultation or send a message to discuss your strategy, operations, brand, and growth goals with Amber Zeigler.",
    images: ["/salterra-hero.jpg"],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
