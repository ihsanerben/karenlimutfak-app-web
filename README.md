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
- Fiyatlar: Şu anda tüm ürünlerde örnek olarak ₺1.000 gösteriliyor. Gerçek fiyatlar geldiğinde `src/app/page.tsx` içindeki görünen fiyatları ve yapılandırılmış verideki `price` alanını birlikte güncelleyin.
- Ürün fotoğrafları: `public/fotograflar/`
- Logo: `public/logo-small.jpeg`; kaynak dosya `logo/logo.jpeg`
- WhatsApp bağlantısı: `src/app/page.tsx` içindeki `whatsapp` sabiti

Mevcut 12 fotoğrafa karşılık 12 ürün eklenmiştir. Sosyal medya bağlantıları paylaşılınca siteye eklenebilir.

## Vercel yayını

Vercel projesinin kök dizini `karenlimutfak-app-web` olmalı. Vercel, Next.js projesini otomatik tanır; `npm run build` komutu statik `out/` çıktısını üretir. Yayından sonra `karenlimutfak.com` alan adını projenin Domains bölümünden bağlayın. Bu sipariş alan ticari site için Vercel Pro planı gerekir.
