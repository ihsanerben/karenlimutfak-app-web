export type Product = {
  name: string;
  category: string;
  image: string;
  description: string;
  unit: string;
};

export const products: Product[] = [
  { name: "Kaşarlı Poğaça", category: "Poğaça & Hamur İşi", image: "kasarli-pogaca.jpeg", description: "Kaşar peynirli, yumuşacık ev yapımı poğaça.", unit: "tepsi" },
  { name: "Sebzeli Poğaça", category: "Poğaça & Hamur İşi", image: "sebzeli-pogaca.jpeg", description: "Sebzelerle hazırlanan doyurucu ve taze poğaça.", unit: "tepsi" },
  { name: "Kaşarlı Sucuklu Poğaça", category: "Poğaça & Hamur İşi", image: "kasarli-sucuklu-pogaca.jpeg", description: "Kaşar ve sucukla hazırlanan bol lezzetli poğaça.", unit: "tepsi" },
  { name: "Su Böreği", category: "Börekler", image: "su-boregi.jpeg", description: "Kat kat açılmış hamuruyla klasik ev yapımı su böreği.", unit: "tepsi" },
  { name: "Ev Baklavası", category: "Tatlılar", image: "ev-baklavasi.jpeg", description: "İncecik katlarıyla özel günlere yakışan ev baklavası.", unit: "tepsi" },
  { name: "Limonlu Cheesecake", category: "Tatlılar", image: "limonlu-cheesecake.jpeg", description: "Ferah limon aromalı, kremamsı cheesecake.", unit: "adet" },
  { name: "Çikolatalı Kek", category: "Tatlılar", image: "cikolatali-kek.jpeg", description: "Çikolata sevenlere ev yapımı yumuşak kek.", unit: "adet" },
  { name: "Yuvarlak Kurabiye", category: "Kurabiyeler", image: "yuvarlak-kurabiye.jpeg", description: "Çay saatine eşlik eden ev yapımı kurabiye.", unit: "kg" },
  { name: "Ev Kurabiyesi", category: "Kurabiyeler", image: "kurabiye.jpeg", description: "Günlük hazırlanan, ev tadında kurabiye.", unit: "kg" },
  { name: "Kare Kurabiye", category: "Kurabiyeler", image: "kare-kurabiye.jpeg", description: "Kıtır dokulu, çay yanında keyifle yenilen kurabiye.", unit: "kg" },
  { name: "Ev Yapımı Pizza", category: "Diğer Lezzetler", image: "pizza.jpeg", description: "Paylaşmalık, bol malzemeli ev pizzası.", unit: "adet" },
  { name: "Köy Ekmeği", category: "Diğer Lezzetler", image: "koy-ekmegi.jpeg", description: "Sofralar için günlük hazırlanan ev ekmeği.", unit: "adet" },
];

export const categories = ["Poğaça & Hamur İşi", "Börekler", "Tatlılar", "Kurabiyeler", "Diğer Lezzetler"];

export function categoryId(category: string) {
  return category
    .toLocaleLowerCase("tr-TR")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/ı/g, "i")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}
