# Karenli Mutfak

Ümraniye ve Ataşehir çevresine hizmet veren Karenli Mutfak için mobil öncelikli, statik Next.js tanıtım sitesi.

## Yerelde çalıştırma

```bash
npm install
npm run dev
```

Site `http://localhost:3000` adresinde açılır. Yayın çıktısı için `npm run build` komutunu çalıştırın; statik dosyalar `out/` klasörüne yazılır.

## İçerik güncelleme

- Ürün adları, açıklamaları, kategorileri ve satış birimleri: `src/data/products.ts`
- Fiyatlar: Şimdilik tüm ürünlerde 1.000 TL gösteriliyor. `src/app/page.tsx` içindeki `price` sabiti hem görünür fiyatı hem SEO verisini besler.
- Ürün fotoğrafları: Kaynaklar `fotograflar/`, sitede kullanılan WebP dosyaları `public/images/`. Kaynak fotoğraflar değiştiğinde `node scripts/prepare-images.cjs` ile web görsellerini yeniden üretin.
- Logo: `public/logo-small.jpeg`; kaynak dosya `logo/logo.jpeg`
- WhatsApp bağlantısı: `src/app/page.tsx` içindeki `whatsapp` sabiti

Mevcut 12 fotoğrafa karşılık 12 ürün eklenmiştir. Instagram ve TikTok bağlantıları `src/app/page.tsx` içindedir.

## Vercel yayını

GitHub deposu `ihsanerben/karenlimutfak-app-web`, Vercel projesi `karenlimutfak-app-web` ile bağlıdır. Bu depo uygulamanın kendisini içerdiği için Vercel Root Directory değeri `.` olmalıdır. `main` dalına gönderilen değişiklikler otomatik olarak üretime yayınlanır. `npm run build` statik `out/` çıktısını üretir.

Canlı adres: https://karenlimutfak.com
