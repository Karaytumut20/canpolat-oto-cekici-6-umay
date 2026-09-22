export type ServicePageData = {
  slug: string;
  name: string;
  shortTitle: string;
  title: string;
  description: string;
  h1: string;
  heroKicker: string;
  summary: string;
  features: string[];
  processSteps: { step: string; title: string; desc: string }[];
  contentSections: { heading: string; body: string }[];
  faqs: { q: string; a: string }[];
  recommendedLocations: string[];
};

type ServiceSeed = {
  slug: string;
  name: string;
  kicker: string;
  summary: string;
  features: string[];
  sections: { heading: string; body: string }[];
};

const commonSteps = [
  { step: "01", title: "Konumu ve araç durumunu paylaşın", desc: "Telefonla arayın veya WhatsApp üzerinden canlı konum, araç marka-modeli ve mümkünse bir fotoğraf gönderin." },
  { step: "02", title: "Ekipman ve fiyat netleşsin", desc: "Mesafe, araç tipi ve yükleme koşuluna göre uygun ekipman ile işlem öncesi fiyat bilgisi paylaşılır." },
  { step: "03", title: "Araç güvenle teslim edilsin", desc: "Araç kontrollü biçimde platforma alınır, sabitlenir ve seçtiğiniz servis ya da adrese taşınır." },
];

const seeds: ServiceSeed[] = [
  {
    slug: "oto-cekici",
    name: "Oto Çekici",
    kicker: "KAYAR KASA · BİNEK · SUV · HAFİF TİCARİ",
    summary: "Arızalanan veya çalışmayan aracınızı Sancaktepe'den istediğiniz servis, otopark ya da adrese kayar kasa ile taşıyoruz.",
    features: ["Araç tipine uygun platform", "Dört noktadan sabitleme", "Gece-gündüz çağrı hattı", "Teslim adresine doğrudan nakil", "İşlem öncesi fiyat bilgisi"],
    sections: [
      { heading: "Aracın durumuna göre yükleme", body: "Her araç aynı yöntemle çekilmez. Alçak tampon, otomatik şanzıman, kilitli tekerlek veya elektrikli araç gibi ayrıntıları çağrı sırasında değerlendirir; uygun platform ve yardımcı aparatı yönlendiririz." },
      { heading: "Sancaktepe'den kontrollü taşıma", body: "Paşaköy, Sarıgazi, Samandıra, Yenidoğan ve ilçe genelinden İstanbul'un servis ve sanayi bölgelerine araç taşıması yapılır. Alış ile teslim noktası önceden netleştirilir." },
    ],
  },
  {
    slug: "oto-kurtarma",
    name: "Oto Kurtarma",
    kicker: "KAZA · KİLİTLİ TEKERLEK · ZORLU KONUM",
    summary: "Yürüyemeyen, tekerleği kilitlenen veya yol dışına çıkan araçlarda bulunduğu konuma göre kontrollü kurtarma planı oluşturuyoruz.",
    features: ["Fotoğrafla ön değerlendirme", "Kontrollü çekme noktası seçimi", "Güvenli alan oluşturma", "Kayar kasa ile devam taşıması", "Kaza sonrası servis teslimi"],
    sections: [
      { heading: "Kurtarma öncesi doğru tespit", body: "Aracın duruş açısı, zemin, tekerlek ve yürüyen aksam durumu fotoğraf üzerinden değerlendirilir. Ek hasar riskini azaltmak için çekme noktası ve yaklaşma yönü belirlenir." },
      { heading: "Kaza alanından güvenli tahliye", body: "Trafik güvenliği sağlandıktan sonra araç kontrollü biçimde bulunduğu konumdan alınır. Gerekiyorsa doğrudan kaporta servisine, yetkili servise veya otoparka götürülür." },
    ],
  },
  {
    slug: "7-24-yol-yardim",
    name: "7/24 Yol Yardım",
    kicker: "AKÜ · LASTİK · YAKIT · YERİNDE DESTEK",
    summary: "Her arıza çekici gerektirmez. Sancaktepe'de akü, lastik ve basit yol yardım ihtiyaçlarında önce yerinde çözüm seçeneğini değerlendiriyoruz.",
    features: ["Akü takviye desteği", "Stepne değişimi", "Yakıt ulaştırma", "Arıza tespiti sonrası çekici", "7 gün 24 saat erişim"],
    sections: [
      { heading: "Önce sorunu doğru tanımlayın", body: "Marş sesi, gösterge uyarısı, lastik durumu ve aracın bulunduğu alanı tarif etmeniz doğru ekibi seçmemizi sağlar. Sorun yerinde çözülmezse araç taşıma planına geçilir." },
      { heading: "Gereksiz taşıma yapılmaz", body: "Yalnızca akü veya stepne desteğiyle güvenli biçimde yola devam edilebiliyorsa çekici masrafı oluşmadan yerinde destek verilir." },
    ],
  },
  {
    slug: "acil-cekici",
    name: "Acil Çekici",
    kicker: "TEM · KAVŞAK · YOĞUN TRAFİK · ÖNCELİKLİ ÇAĞRI",
    summary: "Trafik akışında risk oluşturan arıza ve kaza çağrılarında konum, yol yönü ve araç durumunu alarak uygun ekibi öncelikli planlıyoruz.",
    features: ["Canlı konumla rota", "Yol yönü teyidi", "Görünür ikaz ekipmanı", "Kaza ve arıza tahliyesi", "Telefonla tahmini varış bilgisi"],
    sections: [
      { heading: "Önce can güvenliği", body: "Dörtlülerinizi yakın, mümkünse aracı emniyetli alana alın ve hızlı yolda araç içinde beklemeyin. Yol adı, istikamet ve en yakın çıkış bilgisini paylaşın." },
      { heading: "Doğru noktaya yaklaşma", body: "Otoyol ve kavşaklarda yanlış yönden yaklaşmak zaman kaybettirir. Canlı konumla birlikte yol yönü bilgisi alınarak ekip rotası netleştirilir." },
    ],
  },
  {
    slug: "kazali-arac-cekme",
    name: "Kazalı Araç Çekme",
    kicker: "KAZA SONRASI · SERVİS · OTOPARK · TESLİM",
    summary: "Kaza sonrası yürüyemeyen aracı mevcut hasarı artırmadan platforma alıp tercih ettiğiniz servise veya otoparka ulaştırıyoruz.",
    features: ["Hasar durumuna göre yükleme", "Kilitli tekerlek aparatı", "Kaporta servisine teslim", "Fotoğraflı durum teyidi", "Kontrollü sabitleme"],
    sections: [
      { heading: "Kaza sonrası yükleme hassasiyeti", body: "Tekerlek, aks, tampon ve yürüyen aksam hasarı kontrol edilir. Aracın platforma alınma açısı mevcut hasarı büyütmeyecek şekilde planlanır." },
      { heading: "Servis veya otoparka teslim", body: "Kaza işlemleri tamamlandıktan sonra araç seçtiğiniz noktaya taşınır. Teslim adresi ve iletişim bilgisi çağrı sırasında netleştirilir." },
    ],
  },
  {
    slug: "arizali-arac-cekme",
    name: "Arızalı Araç Çekme",
    kicker: "MOTOR · ŞANZIMAN · ELEKTRİK · HAREKETSİZ ARAÇ",
    summary: "Motor, şanzıman veya elektrik arızası nedeniyle çalışmayan aracınızı bulunduğu yerden alıp uygun servise taşıyoruz.",
    features: ["Otomatik vites için uygun yükleme", "Elektrikli araç taşıma", "Kapalı otopark durum tespiti", "Servis randevusuna nakil", "Gece-gündüz destek"],
    sections: [
      { heading: "Aracı zorlamadan taşıma", body: "Hararet, yağ basıncı, şanzıman veya elektrik uyarısı varsa aracı tekrar tekrar çalıştırmak hasarı büyütebilir. Belirtiyi paylaşın; gerekiyorsa doğrudan taşıma planlayalım." },
      { heading: "Kilitli tekerlek ve dar alan", body: "Vites boşa alınamıyorsa veya araç kapalı otoparktaysa tavan yüksekliği, kat ve çıkış eğimi bilgisiyle uygun aparat değerlendirilir." },
    ],
  },
  {
    slug: "sehir-ici-arac-tasima",
    name: "Şehir İçi Araç Taşıma",
    kicker: "SERVİS TRANSFERİ · MUAYENE · OTOPARK · ADRESTEN ADRESE",
    summary: "Çalışır veya çalışmaz durumdaki araçlar için Sancaktepe çıkışlı, İstanbul içi planlı taşıma hizmeti sunuyoruz.",
    features: ["Adresten adrese taşıma", "Servis ve sanayi transferi", "Muayene istasyonu nakli", "Klasik araç taşıma", "Randevulu planlama"],
    sections: [
      { heading: "Planlı araç nakli", body: "Arıza dışında bakım, muayene, satış veya otopark değişimi gibi nedenlerle de araç taşıması yapılır. Alış ve teslim saati planlanarak rota oluşturulur." },
      { heading: "Şehir içinde tek araç taşıma", body: "Araç başka yüklerle birleştirilmeden, seçilen noktadan alınıp doğrudan teslim adresine ulaştırılır." },
    ],
  },
  {
    slug: "aku-takviye",
    name: "Akü Takviye",
    kicker: "MARŞ BASMIYOR · YERİNDE TAKVİYE · 12V / 24V",
    summary: "Aküsü biten araçlarda güvenli bir noktadaysanız uygun takviye ekipmanıyla yerinde çalıştırma desteği sağlıyoruz.",
    features: ["Korumalı takviye cihazı", "12V ve 24V desteği", "Yerinde müdahale", "Marş sonrası kontrol", "Gerekirse servise taşıma"],
    sections: [
      { heading: "Güvenli takviye", body: "Rastgele kablo bağlantısı elektronik sistemlere zarar verebilir. Kutup yönü ve voltaj kontrolü yapılarak korumalı cihazla takviye uygulanır." },
      { heading: "Akü dışında arıza ihtimali", body: "Takviye sonrasında araç çalışmıyorsa marş motoru, alternatör veya başka bir elektrik arızası olabilir. Bu durumda servise taşıma seçeneği sunulur." },
    ],
  },
];

export const servicesData: ServicePageData[] = seeds.map((seed) => ({
  slug: seed.slug,
  name: seed.name,
  shortTitle: seed.name,
  title: `${seed.name} | Sancaktepe Umay Oto Kurtarıcı`,
  description: `${seed.name} hizmeti Sancaktepe ve çevresinde 7/24. Konum paylaşın, araç durumuna uygun ekip yönlendirilsin: 0530 955 94 52.`,
  h1: `${seed.name} Hizmeti`,
  heroKicker: seed.kicker,
  summary: seed.summary,
  features: seed.features,
  processSteps: commonSteps,
  contentSections: seed.sections,
  faqs: [
    { q: `${seed.name} ücreti nasıl belirleniyor?`, a: "Alış ve teslim noktası, araç tipi ve yükleme koşulları değerlendirilir. İşleme başlamadan önce fiyat bilgisi paylaşılır." },
    { q: "Gece ve hafta sonu hizmet veriyor musunuz?", a: "Evet. Umay Oto Kurtarıcı 7 gün 24 saat çağrı alır ve uygun ekibi konuma göre yönlendirir." },
  ],
  recommendedLocations: ["sancaktepe-oto-cekici", "sarigazi-oto-cekici", "samandira-oto-cekici", "yenidogan-oto-cekici"],
}));

export const findServiceBySlug = (slug: string) => servicesData.find((service) => service.slug === slug);
