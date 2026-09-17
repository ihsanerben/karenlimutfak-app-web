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
    description: "Ümraniye ve Ataşehir’de günlük hazırlanan poğaça, börek ve tatlılar. Lezzetleri ve fiyatları keşfedin.",
    images: [{ url: "/og-share.png", width: 1200, height: 630, type: "image/png", alt: "Karenli Mutfak logosu ve ev yapımı poğaçalar" }],
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
