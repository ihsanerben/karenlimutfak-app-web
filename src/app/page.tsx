import Image from "next/image";
import { categories, categoryId, products } from "@/data/products";

const whatsapp = "https://wa.me/905305529337?text=Merhaba%2C%20sipari%C5%9F%20vermek%20istiyorum.";
const price = 1000;
const formattedPrice = new Intl.NumberFormat("tr-TR").format(price);

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return <svg aria-hidden="true" viewBox="0 0 24 24" fill="none"><path d={diagonal ? "M6 18 18 6M6 6h12v12" : "M4 12h16m-6-6 6 6-6 6"} stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

function WhatsAppIcon() {
  return <svg aria-hidden="true" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 3a13 13 0 0 0-11 20l-2 6 6-2A13 13 0 1 0 16 3Z" /><path d="M10.5 9.5c-.7.6-1 1.5-.8 2.6.7 4.4 5 8.7 9.3 9.5 1.2.2 2.1-.1 2.8-.9l.8-1.2-3.2-1.6-1.2 1.3c-2.1-.7-4-2.5-4.8-4.7l1.2-1.2-1.7-3.1-1.2.3Z" /></svg>;
}

function InstagramIcon() {
  return <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" /></svg>;
}

function TikTokIcon() {
  return <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14 3v11.8a4.2 4.2 0 1 1-3.2-4.1" /><path d="M14 3c.6 3.2 2.6 5 6 5.2" /></svg>;
}

function Sprig() {
  return <svg className="sprig" aria-hidden="true" viewBox="0 0 100 120" fill="none"><path d="M20 109C43 86 54 56 71 12" stroke="currentColor" strokeWidth="1.5" /><path d="M42 83C15 82 13 64 15 58c16 1 29 9 27 25ZM54 59C31 55 30 38 33 31c15 6 25 15 21 28ZM64 37C50 29 54 11 60 6c11 8 13 21 4 31ZM34 95c25 10 38-3 42-13-19-6-33-2-42 13ZM49 69c26 6 36-8 38-18-19-3-32 4-38 18ZM60 45c22 0 30-15 29-24-17 0-26 10-29 24Z" stroke="currentColor" strokeWidth="1.3" /></svg>;
}

const questions = [
  { title: "Nasıl sipariş verebilirim?", answer: "Beğendiğiniz lezzetleri seçip WhatsApp üzerinden bize yazmanız yeterli. Ürün, miktar ve teslimat detaylarını birlikte netleştiriyoruz. Telefonla da ulaşabilirsiniz." },
  { title: "Ne kadar önceden haber vermeliyim?", answer: "Siparişinizi en az bir gün önceden vermenizi rica ediyoruz. Böylece her şeyi sizin için taze taze hazırlayabiliyoruz." },
  { title: "Teslimat ve elden alma nasıl oluyor?", answer: "Ümraniye ve Ataşehir çevresinde teslimat yapıyoruz; elden alma seçeneğimiz de var. Etkinlikler ve işletmeler için erken saatlerde teslimatı birlikte planlayabiliriz. Adres ve teslimat detaylarını sipariş sırasında konuşuyoruz." },
  { title: "Toplu sipariş ve ödeme seçenekleri neler?", answer: "Davetler, etkinlikler ve işletmeler için toplu sipariş alıyoruz. Nakit, havale/EFT ve teslimatta ödeme seçeneklerini sipariş sırasında netleştirebiliriz." },
];

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org", "@type": "Bakery", name: "Karenli Mutfak",
    url: "https://karenlimutfak.com", image: "https://karenlimutfak.com/og-cropped.jpg",
    telephone: "+90 530 552 93 37",
    sameAs: ["https://www.instagram.com/karenlimutfak", "https://www.tiktok.com/@karenlimutfak"],
    description: "Ümraniye ve Ataşehir çevresine günlük, ev yapımı poğaça, börek, tatlı ve kurabiye.",
    areaServed: ["Ümraniye, İstanbul", "Ataşehir, İstanbul"],
    hasOfferCatalog: {
      "@type": "OfferCatalog", name: "Ev yapımı lezzetler",
      itemListElement: products.map((product) => ({
        "@type": "Offer", price, priceCurrency: "TRY",
        itemOffered: { "@type": "Product", name: product.name, description: product.description, image: `https://karenlimutfak.com/images/${product.image.replace(".jpeg", ".webp")}` },
      })),
    },
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <a className="skip-link" href="#urunler">Ürünlere geç</a>
      <div className="announcement"><span className="location-dot" /> İstanbul · Ümraniye & Ataşehir</div>
      <header className="site-header">
        <div className="container header-inner">
          <a className="brand" href="#ust" aria-label="Karenli Mutfak ana sayfa">
            <span className="brand-mark"><Image src="/logo-small.jpeg" alt="" width={56} height={56} priority /></span><span>Karenli Mutfak</span>
          </a>
          <nav className="main-nav" aria-label="Ana menü"><a href="#urunler">Lezzetlerimiz</a><a href="#hikayemiz">Bizim mutfak</a><a href="#sss">Merak edilenler</a></nav>
          <div className="header-actions">
            <nav className="header-social" aria-label="Sosyal medya">
              <a href="https://www.instagram.com/karenlimutfak" target="_blank" rel="noopener noreferrer" aria-label="Karenli Mutfak Instagram hesabı"><InstagramIcon /></a>
              <a href="https://www.tiktok.com/@karenlimutfak" target="_blank" rel="noopener noreferrer" aria-label="Karenli Mutfak TikTok hesabı"><TikTokIcon /></a>
            </nav>
            <a className="header-contact" href={whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp üzerinden bize yazın"><WhatsAppIcon /><span>Bize yazın</span><Arrow diagonal /></a>
          </div>
        </div>
      </header>
      <main id="ust">
        <section className="hero container" aria-labelledby="hero-title">
          <div className="hero-copy">
            <h1 id="hero-title">Biraz emek,<br />bir tutam sevgi.<br /><em>Bolca lezzet.</em></h1>
            <p className="hero-description">Fırından çıkan o tanıdık koku, çayın yanına ayrılan son dilim… Evimizin lezzetlerini sizin sofranıza hazırlıyoruz.</p>
            <a className="button" href="#urunler">Mutfağı keşfet <Arrow /></a>
          </div>
          <div className="hero-visual">
            <div className="hero-photo"><Image src="/images/pogaca-hero.webp" alt="Susamlı kaşarlı poğaçalarımız, fırın tepsisinde" fill priority sizes="(max-width: 700px) 90vw, 48vw" /></div>
            <div className="hero-stamp"><span>EV YAPIMI</span><Sprig /><span>SEVGİYLE</span></div>
            <figure className="hero-inset"><div><Image src="/images/ev-baklavasi.webp" alt="Tepsiyle hazırlanan ev baklavamız" fill sizes="(max-width: 700px) 36vw, 220px" /></div><figcaption>Tatlı bir molaya… <span>♡</span></figcaption></figure>
            <span className="hero-caption">KARENLİ MUTFAK'TAN, SOFRANIZA.</span>
          </div>
        </section>
        <section className="catalog container" id="urunler" aria-labelledby="catalog-title">
          <div className="section-heading"><div><h2 id="catalog-title">Sofrada yer <em>açın.</em></h2></div><p className="section-description">Kahvaltıya, çay saatine, kalabalık sofralara.<br />Canınızın çektiği bütün ev lezzetleri burada.</p></div>
          <nav className="category-nav" aria-label="Ürün kategorileri">{categories.map((category, index) => <a key={category} href={`#${categoryId(category)}`}><span className="category-number">0{index + 1}</span>{category}</a>)}</nav>
          <div className="product-grid">
            {products.map((product, index) => {
              const firstInCategory = index === 0 || products[index - 1].category !== product.category;
              const productWhatsApp = `https://wa.me/905305529337?text=${encodeURIComponent(`Merhaba, ${product.name} için sipariş vermek istiyorum.`)}`;
              return <article className="product-card" key={product.name} id={firstInCategory ? categoryId(product.category) : undefined}>
                <a className="product-card-link" href={productWhatsApp} target="_blank" rel="noopener noreferrer">
                  <div className="product-photo"><Image src={`/images/${product.image.replace(".jpeg", ".webp")}`} alt={product.name} fill sizes="(max-width: 700px) 46vw, (max-width: 1000px) 45vw, 30vw" /><span className="product-category">{product.category}</span></div>
                  <div className="product-content">
                    <h3>{product.name}</h3>
                    <p>{product.description}</p>
                    <span className="product-price">{formattedPrice} TL/{product.unit}</span>
                  </div>
                </a>
              </article>;
            })}
          </div>
          <div className="catalog-note"><span>Bir davetiniz mi var?</span> Kalabalık sofralar için toplu sipariş de hazırlıyoruz. <a href="#siparis">Birlikte planlayalım <Arrow diagonal /></a></div>
        </section>
        <section className="story" id="hikayemiz" aria-labelledby="story-title"><div className="container story-inner">
          <div className="story-heading"><Sprig /><p className="eyebrow">BİZİM MUTFAK</p><h2 id="story-title">Adı Karen,<br />tadı <em>evden.</em></h2></div>
          <div className="story-copy"><p className="story-lead">Bazı lezzetler insanı hemen evinde hissettirir.</p><p>Bizim mutfağımızda da her şey bu hisle başlıyor. Sabahın poğaçasını, çayın kurabiyesini, birlikte oturulan sofraların böreğini özenle hazırlıyoruz.</p><p>Adını Karen&apos;den alan küçük mutfağımızdan; Ümraniye ve Ataşehir&apos;deki sofralara, günlük ve ev yapımı lezzetler ulaştırıyoruz.</p><span className="story-signature">Sevgiyle, Karenli Mutfak</span></div>
        </div></section>
        <section className="order-section container" id="siparis" aria-labelledby="order-title"><div className="order-panel">
          <div className="order-intro"><p className="eyebrow">SOFRANIZ İÇİN HAZIRLAYALIM</p><h2 id="order-title">Siz seçin,<br /><em>biz hazırlayalım.</em></h2><p>İster bir tepsi börek, ister bütün bir davet sofrası. Siparişinizi birlikte planlayalım.</p><a className="button button-cream" href={whatsapp} target="_blank" rel="noopener noreferrer"><WhatsAppIcon /> WhatsApp&apos;tan yazın <Arrow diagonal /></a><a className="phone-link" href="tel:+905305529337">veya arayın: 0530 552 93 37</a></div>
          <ol className="order-steps"><li><span>01</span><div><h3>Canınızın çektiğini seçin</h3><p>Ürünleri inceleyin; miktarı ve günü bize yazın.</p></div></li><li><span>02</span><div><h3>Bir gün önce haber verin</h3><p>Her şeyi siparişiniz için günlük hazırlayalım.</p></div></li><li><span>03</span><div><h3>Sofrada buluşalım</h3><p>Ümraniye & Ataşehir çevresine teslim edelim ya da elden alın.</p></div></li></ol>
        </div></section>
        <section className="faq container" id="sss" aria-labelledby="faq-title"><div><p className="eyebrow">AKLINIZDA KALMASIN</p><h2 id="faq-title">Merak <em>edilenler.</em></h2><p>Başka bir sorunuz varsa<br />bir mesaj kadar yakınız.</p></div><div className="faq-list">{questions.map((question) => <details key={question.title}><summary>{question.title}<span className="faq-plus" aria-hidden="true" /></summary><p>{question.answer}</p></details>)}</div></section>
      </main>
      <footer className="site-footer">
        <div className="container footer-main">
          <a className="brand footer-brand" href="#ust" aria-label="Karenli Mutfak ana sayfa"><span className="brand-mark"><Image src="/logo-small.jpeg" alt="" width={48} height={48} /></span><span>Karenli Mutfak</span></a>
          <nav className="social-links" aria-label="Sosyal medya ve WhatsApp">
            <a href="https://www.instagram.com/karenlimutfak" target="_blank" rel="noopener noreferrer" aria-label="Karenli Mutfak Instagram hesabı"><InstagramIcon /></a>
            <a href="https://www.tiktok.com/@karenlimutfak" target="_blank" rel="noopener noreferrer" aria-label="Karenli Mutfak TikTok hesabı"><TikTokIcon /></a>
            <a href={whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp üzerinden bize yazın"><WhatsAppIcon /></a>
          </nav>
        </div>
      </footer>
      <a className="floating-whatsapp" href={whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp üzerinden Karenli Mutfak'a yazın"><WhatsAppIcon /><span>Bize yazın</span></a>
    </>
  );
}
