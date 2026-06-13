import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/lib/cart";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AnnouncementBar from "@/components/layout/AnnouncementBar";
import CartDrawer from "@/components/layout/CartDrawer";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://origenza.co.nz"),
  title: {
    default: "Origenza — New Zealand Mānuka Honey",
    template: "%s | Origenza New Zealand",
  },
  description:
    "Premium New Zealand Mānuka honey, thoughtfully sourced from the heart of Aotearoa. Independently tested, batch traceable, and selected for purity and potency.",
  keywords: ["Mānuka honey", "New Zealand honey", "MGO honey", "UMF honey", "Origenza"],
  icons: {
    icon:     [{ url: "/logo/icon-dark.png", type: "image/png" }],
    apple:    [{ url: "/logo/icon-dark.png", type: "image/png" }],
    shortcut: [{ url: "/logo/icon-dark.png" }],
  },
  openGraph: {
    type: "website",
    locale: "en_NZ",
    siteName: "Origenza New Zealand",
    images: [{ url: "/logo/wordmark-dark.png", width: 1999, height: 441, alt: "Origenza New Zealand" }],
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en-NZ"
      className={`${cormorant.variable} ${inter.variable}`}
    >
      <body className="flex flex-col min-h-screen antialiased">
        <CartProvider>
          <AnnouncementBar />
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}
