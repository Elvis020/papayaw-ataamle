import type { Metadata } from "next";
import { Fraunces, DM_Sans } from "next/font/google";
import "./globals.css";
import LayoutWrapper from "./components/LayoutWrapper";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://papayawataamle.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Papa Yaw Ataamle - Stand-Up Comedian from Ghana",
    template: "%s | Papa Yaw Ataamle",
  },
  description:
    "Professional Ghanaian stand-up comedian bringing laughs to stages worldwide. Book shows, watch comedy clips, and catch Papa Yaw live on TV and radio!",
  keywords: [
    "Papa Yaw Ataamle",
    "Ghana comedian",
    "stand-up comedy",
    "African comedian",
    "comedy shows Ghana",
    "Ghanaian entertainer",
    "live comedy",
    "comedy booking",
    "Accra comedy",
  ],
  authors: [{ name: "Papa Yaw Ataamle" }],
  creator: "Papa Yaw Ataamle",
  publisher: "Papa Yaw Ataamle",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Papa Yaw Ataamle",
    title: "Papa Yaw Ataamle - Stand-Up Comedian from Ghana",
    description:
      "Professional Ghanaian stand-up comedian bringing laughs to stages worldwide. Book shows, watch comedy clips, and catch Papa Yaw live!",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Papa Yaw Ataamle - Stand-Up Comedian",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Papa Yaw Ataamle - Stand-Up Comedian from Ghana",
    description:
      "Professional Ghanaian stand-up comedian bringing laughs to stages worldwide.",
    images: ["/images/og-image.png"],
    creator: "@papayawataamle",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

// JSON-LD Structured Data (static content, safe to use)
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Papa Yaw Ataamle",
      description: "Official website of Papa Yaw Ataamle, Ghanaian stand-up comedian",
      publisher: { "@id": `${siteUrl}/#person` },
    },
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: "Papa Yaw Ataamle",
      url: siteUrl,
      image: `${siteUrl}/images/og-image.png`,
      description: "Professional Ghanaian stand-up comedian bringing laughs to stages worldwide.",
      jobTitle: "Stand-Up Comedian",
      nationality: {
        "@type": "Country",
        name: "Ghana",
      },
      sameAs: [
        "https://youtube.com/@papayawataamle",
        "https://www.tiktok.com/@papayawataamle",
        "https://www.instagram.com/papayawataamle",
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="YMnXZw_emmlrmCYNu_4ZjVl5mtDPjZmZjMjRn404yjw" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#c1512e" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${fraunces.variable} ${dmSans.variable} antialiased`}
      >
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
