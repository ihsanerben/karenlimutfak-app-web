import Image from "next/image";
import { categories, categoryId, products } from "@/data/products";

const whatsapp = "https://wa.me/905305529337?text=Merhaba%2C%20sipari%C5%9F%20vermek%20istiyorum.";

function ArrowIcon() {
  return <svg aria-hidden="true" viewBox="0 0 24 24" fill="none"><path d="M4 12h15m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>;
}

function WhatsAppIcon() {
  return <svg aria-hidden="true" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M16 3a13 13 0 0 0-11 20l-2 6 6-2A13 13 0 1 0 16 3Z"/><path d="M10.5 9.5c-.7.6-1 1.5-.8 2.6.7 4.4 5 8.7 9.3 9.5 1.2.2 2.1-.1 2.8-.9l.8-1.2-3.2-1.6-1.2 1.3c-2.1-.7-4-2.5-4.8-4.7l1.2-1.2-1.7-3.1-1.2.3Z"/></svg>;
}

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Bakery",
    name: "Karenli Mutfak",
    url: "https://karenlimutfak.com",
    image: "https://karenlimutfak.com/og-cropped.jpg",
    telephone: "+90 530 552 93 37",
    description: "Ümraniye ve Ataşehir çevresine ev yapımı poğaça, börek, tatlı ve kurabiye.",
    areaServed: [{ "@type": "Place", name: "Ümraniye, İstanbul" }, { "@type": "Place", name: "Ataşehir, İstanbul" }],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Karenli Mutfak Ürünleri",
      itemListElement: products.map((product) => ({
        "@type": "OfferCatalog",
        name: product.name,
        itemListElement: [{ "@type": "Offer", price: "1000", priceCurrency: "TRY", itemOffered: { "@type": "Product", name: product.name } }],
      })),
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <div className="announcement">Ümraniye & Ataşehir çevresine ev yapımı lezzetler</div>
      <header className="site-header">
        <div className="container header-inner">
          <a className="brand" href="#ust" aria-label="Karenli Mutfak ana sayfa">
            <div className="brand-mark"><Image src="/logo-small.jpeg" alt="" width={56} height={56} priority /></div>
            <span className="brand-name">Karenli Mutfak</span>
          </a>
          <nav aria-label="Ana menü"><a href="#urunler">Ürünlerimiz</a><a href="#hikayemiz">Hikâyemiz</a><a href="#sss">Sık sorulanlar</a></nav>
          <a className="header-order" href={whatsapp} target="_blank" rel="noopener noreferrer">Sipariş ver <ArrowIcon /></a>
        </div>
      </header>

      <main id="ust">
        <section className="hero container" aria-labelledby="hero-title">
          <div className="hero-copy">
            <div className="eyebrow"><span className="eyebrow-line"/>GÜNLÜK · EV YAPIMI · LEZZETLİ</div>
            <h1 id="hero-title">Evden gelen<br/><em>en güzel</em> lezzetler.</h1>
            <p>Mis gibi kokan poğaçalar, özenle hazırlanan börekler ve çay saatini güzelleştiren tatlılar. Hepsi Karenli Mutfak&apos;ta, sizin için.</p>
            <div className="hero-actions"><a className="button button-primary" href="#urunler">Lezzetleri keşfet <ArrowIcon /></a><a className="text-link" href={whatsapp} target="_blank" rel="noopener noreferrer">WhatsApp&apos;tan yazın</a></div>
            <div className="hero-note"><span className="note-mark">✳</span><span>Ümraniye&apos;den sofranıza<br/><strong>sevgiyle hazırlanır.</strong></span></div>
          </div>
          <div className="hero-visual">
            <div className="hero-image"><Image src="/fotograflar/su-boregi.jpeg" alt="Karenli Mutfak'ta hazırlanmış tepsi su böreği" fill priority sizes="(max-width: 800px) 100vw, 50vw" /></div>
            <div className="hero-sticker"><span>✦</span> BİR TUTAM<br/>SEVGİYLE<br/>HAZIRLANDI</div>
            <div className="hero-image-caption">Ev yapımı, tam kıvamında.</div>
          </div>
        </section>

        <section className="promise-strip" aria-label="Karenli Mutfak özellikleri"><div className="container promise-inner"><span>✳ &nbsp; Her gün taze hazırlanır</span><span>✳ &nbsp; Ev mutfağından çıkar</span><span>✳ &nbsp; Toplu sipariş alınır</span></div></section>

        <section className="products-section container" id="urunler" aria-labelledby="products-title">
          <div className="section-heading"><div><span className="section-kicker">KARENLİ MUTFAK&apos;TAN</span><h2 id="products-title">Sofranıza <em>gelsin.</em></h2><p>Canınız ne çekerse, evde yapılmış gibi.</p></div><span className="section-count">{products.length} LEZZET</span></div>
          <nav className="category-nav" aria-label="Ürün kategorileri">
            <span className="category-label">Kategoriler</span>
            <div className="category-links">
              {categories.map((category) => <a key={category} href={`#${categoryId(category)}`}>{category}</a>)}
            </div>
          </nav>
          {categories.map((category) => (
            <section className="category-section" id={categoryId(category)} key={category} aria-labelledby={`${categoryId(category)}-title`}>
              <div className="category-heading"><h3 id={`${categoryId(category)}-title`}>{category}</h3><span>{products.filter((product) => product.category === category).length} ürün</span></div>
              <div className="product-grid">
                {products.filter((product) => product.category === category).map((product) => (
                  <article className="product-card" key={product.name}>
                    <div className="product-photo"><Image src={`/fotograflar/${product.image}`} alt={product.name} fill sizes="(max-width: 600px) 50vw, (max-width: 900px) 33vw, 25vw" /></div>
                    <div className="product-info">
                      <h4>{product.name}</h4>
                      <p>{product.description}</p>
                      <div className="product-bottom"><span><strong>₺1.000</strong><small> / {product.unit}</small></span></div>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          ))}
          <p className="price-note">Siparişiniz ve teslimat detayları için WhatsApp&apos;tan bize yazabilirsiniz.</p>
        </section>

        <section className="story-section" id="hikayemiz"><div className="container story-inner"><div className="story-image"><Image src="/fotograflar/koy-ekmegi.jpeg" alt="Karenli Mutfak ev yapımı köy ekmeği" fill sizes="(max-width: 800px) 100vw, 45vw" /></div><div className="story-copy"><span className="section-kicker">BİZİM MUTFAĞIN HİKÂYESİ</span><h2>Bir ev mutfağından,<br/><em>sizin sofranıza.</em></h2><p>Karenli Mutfak&apos;ta her lezzet ev sıcaklığıyla hazırlanır. Günlük yapılan poğaçalardan paylaşmalık tepsi böreklerine kadar sofranıza tazelik ve özen taşımayı seviyoruz.</p><p>Ümraniye ve Ataşehir çevresinde bireysel ve toplu siparişleriniz için bize yazabilirsiniz.</p><a className="button button-light" href={whatsapp} target="_blank" rel="noopener noreferrer">Bize WhatsApp&apos;tan yazın <ArrowIcon /></a></div></div></section>

        <section className="faq-section container" id="sss"><div className="faq-intro"><span className="section-kicker">MERAK ETTİKLERİNİZ</span><h2>Sık sorulan<br/><em>sorular.</em></h2></div><div className="faq-list"><details><summary>Nasıl sipariş verebilirim?<span>+</span></summary><p>Ürünlerimizi inceleyip WhatsApp üzerinden bize yazmanız yeterli. Sipariş detaylarını birlikte netleştiriyoruz.</p></details><details><summary>Ne kadar önceden haber vermeliyim?<span>+</span></summary><p>Siparişiniz için en az bir gün önceden haber vermenizi rica ediyoruz.</p></details><details><summary>Teslimat ve elden alma mümkün mü?<span>+</span></summary><p>Evet. Ümraniye ve Ataşehir çevresinde teslimat veya elden alma seçeneklerini sipariş sırasında konuşabiliriz. Erken saatli etkinlik ve toplu siparişler için de bize yazabilirsiniz.</p></details><details><summary>Toplu sipariş verebilir miyim?<span>+</span></summary><p>Evet, etkinlikler ve işletmeler için toplu sipariş alıyoruz. Miktar ve teslimat saatini WhatsApp üzerinden planlayabiliriz.</p></details><details><summary>Ödeme seçenekleri nelerdir?<span>+</span></summary><p>Nakit ve havale/EFT ile ödeme yapabilirsiniz. Teslimatta ödeme detaylarını sipariş sırasında netleştirebiliriz.</p></details></div></section>

        <section className="closing-section"><div className="container closing-inner"><span className="section-kicker">SOFRANIZDA YER AÇIN</span><h2>Bugün ne hazırlayalım?</h2><p>Sevdiğiniz lezzet için bize yazın, siparişinizi birlikte planlayalım.</p><a className="button button-primary" href={whatsapp} target="_blank" rel="noopener noreferrer"><WhatsAppIcon /> WhatsApp&apos;tan sipariş ver</a></div></section>
      </main>
      <footer className="site-footer"><div className="container footer-inner"><div><strong>Karenli Mutfak</strong><p>Ev yapımı lezzetler, sevgiyle.</p></div><div className="footer-links"><a href="#urunler">Ürünler</a><a href="#hikayemiz">Hikâyemiz</a><a href="#sss">SSS</a></div><span>© {new Date().getFullYear()} Karenli Mutfak</span></div></footer>
      <a className="floating-whatsapp" href={whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp üzerinden sipariş için yazın"><WhatsAppIcon /></a>
    </>
  );
}
