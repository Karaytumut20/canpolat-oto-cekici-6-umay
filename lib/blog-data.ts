export type BlogPostData = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  heroKicker: string;
  publishDate: string;
  readTime: string;
  category: string;
  summary: string;
  sections: { heading: string; paragraphs: string[]; checklist?: string[] }[];
  faqs: { q: string; a: string }[];
  relatedServices: string[];
  relatedLocations: string[];
};

export const blogPosts: BlogPostData[] = [
  {
    slug: "yolda-kalinca-ne-yapilmali",
    title: "Yolda Kalınca Ne Yapılmalı?",
    metaTitle: "Yolda Kalınca Ne Yapılmalı? | Umay Yol Yardım Rehberi",
    metaDescription: "Arıza veya kaza anında aracı güvenli alana alma, reflektör yerleştirme ve çekici çağırma adımları.",
    h1: "Yolda Kalınca Uygulanacak Güvenlik Adımları",
    heroKicker: "SÜRÜCÜ GÜVENLİĞİ · ACİL DURUM",
    publishDate: "2026-09-22",
    readTime: "4 dk okuma",
    category: "Güvenlik",
    summary: "Sancaktepe ve çevre yollarda arıza ya da kaza anında önce can güvenliğini sağlayıp doğru konumu paylaşmak için kısa rehber.",
    sections: [
      { heading: "Aracı güvenli alana alın", paragraphs: ["Dörtlü ikazları yakın ve mümkünse aracın mevcut hareketini kullanarak yolun sağındaki güvenli bölgeye geçin. Hızlı yolda ani fren yapmayın.", "Araç emniyet şeridindeyse yolcuları sağ kapılardan indirip bariyer arkasında bekletin."], checklist: ["Dörtlüleri yakın", "Reflektörü görünür mesafeye koyun", "Hızlı yolda araç içinde beklemeyin"] },
      { heading: "Konumu ve yol yönünü paylaşın", paragraphs: ["Canlı konum tek başına bazen yeterli olmaz. TEM Samandıra yönü, en yakın çıkış veya karşı şerit bilgisini de iletin.", "Umay Oto Kurtarıcı'yı 0530 955 94 52 numarasından arayıp araç marka-modeli ve arıza belirtisini paylaşın."] },
    ],
    faqs: [{ q: "Otoyolda araç içinde beklemek güvenli mi?", a: "Hayır. Mümkünse bariyer arkasında, trafikten uzak bir noktada bekleyin." }],
    relatedServices: ["acil-cekici", "oto-cekici"],
    relatedLocations: ["sancaktepe-oto-cekici", "tem-samandira-cekici"],
  },
  {
    slug: "cekici-cagirirken-hangi-bilgiler-gerekir",
    title: "Çekici Çağırırken Hangi Bilgiler Gerekir?",
    metaTitle: "Çekici Çağırırken Gerekli Bilgiler | Umay Oto Kurtarıcı",
    metaDescription: "Doğru çekicinin gelmesi için konum, araç tipi, tekerlek ve teslim adresi bilgilerinin nasıl paylaşılacağını öğrenin.",
    h1: "Doğru Çekicinin Gelmesi İçin Paylaşmanız Gerekenler",
    heroKicker: "PRATİK REHBER · DOĞRU EKİPMAN",
    publishDate: "2026-09-22",
    readTime: "3 dk okuma",
    category: "Pratik Bilgi",
    summary: "Konum, araç tipi ve tekerlek durumu doğru ekipman seçimini hızlandırır ve fiyatın işlem öncesi netleşmesini sağlar.",
    sections: [
      { heading: "Tam konum ve bulunduğunuz alan", paragraphs: ["Sadece mahalle adı yerine WhatsApp canlı konumu gönderin. Kapalı otopark, dar sokak veya eğimli zemin varsa mutlaka belirtin."] },
      { heading: "Araç ve hasar durumu", paragraphs: ["Marka-model, otomatik ya da manuel vites, tekerleklerin dönüp dönmediği ve varsa kaza hasarı doğru platform ile aparatı belirler."] },
      { heading: "Teslim adresi", paragraphs: ["Servis, sanayi, otopark veya ev adresini önceden paylaşmak mesafe ve fiyat hesabını netleştirir."] },
    ],
    faqs: [{ q: "Fotoğraf göndermek gerekli mi?", a: "Zorunlu değildir; ancak kaza, kilitli tekerlek, dar alan veya kapalı otopark durumunda doğru ekipmanı seçmeyi kolaylaştırır." }],
    relatedServices: ["oto-cekici", "arizali-arac-cekme"],
    relatedLocations: ["pasakoy-oto-cekici", "sarigazi-oto-cekici"],
  },
  {
    slug: "cekici-fiyati-nasil-belirlenir",
    title: "Çekici Fiyatı Nasıl Belirlenir?",
    metaTitle: "Çekici Fiyatı Nasıl Belirlenir? | Sancaktepe Umay",
    metaDescription: "Çekici ücretini etkileyen mesafe, araç tipi, yükleme koşulu ve teslim noktası hakkında şeffaf rehber.",
    h1: "Çekici Ücretini Belirleyen Dört Temel Bilgi",
    heroKicker: "FİYATLANDIRMA · ŞEFFAF SÜREÇ",
    publishDate: "2026-09-22",
    readTime: "4 dk okuma",
    category: "Fiyatlandırma",
    summary: "Mesafe tek başına yeterli değildir; araç ağırlığı, tekerlek ve vites durumu ile bulunduğu alan da yükleme sürecini değiştirir.",
    sections: [
      { heading: "Alış ve teslim mesafesi", paragraphs: ["Başlangıç ile teslim noktası arasındaki rota temel maliyet kalemidir. Otoyol geçişleri ve uzun mesafe ayrıca değerlendirilir."] },
      { heading: "Araç tipi ve yürürlük durumu", paragraphs: ["Binek, SUV veya hafif ticari araçların ağırlıkları farklıdır. Kilitli tekerlek ya da aks hasarı ek aparat gerektirebilir."] },
      { heading: "Umay'da işlem öncesi bilgi", paragraphs: ["Konum ve araç durumu netleştiğinde işlem başlamadan önce fiyat bilgisi paylaşılır. Teslim noktası sonradan değişirse rota yeniden hesaplanır."] },
    ],
    faqs: [{ q: "Gece ücreti farklı mı?", a: "Fiyat konum, mesafe ve yükleme koşuluna göre değerlendirilir. Arama sırasında tüm kalemleri sorabilir ve işlem öncesi netleştirebilirsiniz." }],
    relatedServices: ["oto-cekici", "sehir-ici-arac-tasima"],
    relatedLocations: ["sancaktepe-oto-cekici", "samandira-oto-cekici"],
  },
];

export const findBlogPostBySlug = (slug: string) => blogPosts.find((post) => post.slug === slug);
