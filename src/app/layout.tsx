import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://karenlimutfak.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Karenli Mutfak | Ümraniye'de Ev Yapımı Lezzetler",
  description:
    "Karenli Mutfak'ta günlük hazırlanan ev yapımı poğaça, börek, kurabiye, tatlı ve daha fazlasını keşfedin. Ümraniye ve Ataşehir çevresinde WhatsApp ile sipariş verin.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: siteUrl,
    siteName: "Karenli Mutfak",
    title: "Karenli Mutfak | Ev Yapımı Lezzetler",
    description: "Ümraniye ve Ataşehir çevresine günlük, ev yapımı lezzetler.",
    images: [{ url: "/og-cropped.jpg", width: 1200, height: 630, alt: "Karenli Mutfak ev yapımı lezzetler" }],
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}
