export type LocationPageData = {
  slug: string;
  name: string;
  district: "Sancaktepe" | "Yakın İlçe" | "Bağlantı Yolu" | "Özel Arama";
  districtSlug: string;
  title: string;
  description: string;
  h1: string;
  heroKicker: string;
  landmark: string;
  responseTime: string;
  roads: string[];
  serviceTypes: string[];
  faqs: { q: string; a: string }[];
  localGuide: { heading: string; text: string }[];
  nearbySlugs: string[];
};

type Seed = { slug: string; label: string; district?: LocationPageData["district"]; landmark: string; roads: string[]; nearby: string[] };

const seeds: Seed[] = [
  { slug: "sancaktepe-oto-cekici", label: "Sancaktepe", landmark: "Sancaktepe Meydanı, Şehir Hastanesi ve TEM bağlantısı", roads: ["Ankara Caddesi", "Atatürk Caddesi", "TEM Samandıra Bağlantısı"], nearby: ["sarigazi-oto-cekici", "samandira-oto-cekici", "yenidogan-oto-cekici", "pasakoy-oto-cekici"] },
  { slug: "pasakoy-oto-cekici", label: "Paşaköy", landmark: "Lokman Sokak, Paşaköy merkezi ve Kuzey Marmara bağlantısı", roads: ["Paşaköy Yolu", "Lokman Sokak", "Kuzey Marmara Bağlantısı"], nearby: ["sancaktepe-oto-cekici", "yenidogan-oto-cekici", "samandira-oto-cekici"] },
  { slug: "sarigazi-oto-cekici", label: "Sarıgazi", landmark: "Sarıgazi Meydanı ve Demokrasi Caddesi", roads: ["Demokrasi Caddesi", "Ankara Caddesi", "Atatürk Caddesi"], nearby: ["meclis-mahallesi-oto-cekici", "inonu-mahallesi-oto-cekici", "sancaktepe-oto-cekici"] },
  { slug: "samandira-oto-cekici", label: "Samandıra", landmark: "Samandıra merkez, TEM gişeleri ve sanayi hattı", roads: ["Eyüp Sultan Caddesi", "Samandıra Kartal Bağlantısı", "TEM Otoyolu"], nearby: ["eyup-sultan-mahallesi-oto-cekici", "abdurrahmangazi-oto-cekici", "sancaktepe-oto-cekici"] },
  { slug: "yenidogan-oto-cekici", label: "Yenidoğan", landmark: "Yenidoğan merkez ve Baraj Yolu çevresi", roads: ["Baraj Yolu", "Yenidoğan Caddesi", "Sultanbeyli Bağlantısı"], nearby: ["hilal-mahallesi-oto-cekici", "safa-mahallesi-oto-cekici", "pasakoy-oto-cekici"] },
  { slug: "abdurrahmangazi-oto-cekici", label: "Abdurrahmangazi Mahallesi", landmark: "Abdurrahmangazi merkezi ve Samandıra geçişi", roads: ["Ebubekir Caddesi", "Samandıra Caddesi", "TEM Bağlantısı"], nearby: ["eyup-sultan-mahallesi-oto-cekici", "emek-mahallesi-oto-cekici", "samandira-oto-cekici"] },
  { slug: "akpinar-mahallesi-oto-cekici", label: "Akpınar Mahallesi", landmark: "Akpınar konutları ve Şile Yolu bağlantısı", roads: ["Akpınar Caddesi", "Alemdağ Caddesi", "Çekmeköy Bağlantısı"], nearby: ["sancaktepe-oto-cekici", "cekmekoy-oto-cekici", "inonu-mahallesi-oto-cekici"] },
  { slug: "ataturk-mahallesi-oto-cekici", label: "Atatürk Mahallesi", landmark: "Atatürk Caddesi ve belediye çevresi", roads: ["Atatürk Caddesi", "Ankara Caddesi", "Sarıgazi Geçişi"], nearby: ["sarigazi-oto-cekici", "meclis-mahallesi-oto-cekici", "sancaktepe-oto-cekici"] },
  { slug: "emek-mahallesi-oto-cekici", label: "Emek Mahallesi", landmark: "Emek yerleşimi ve Samandıra sanayi hattı", roads: ["Emek Caddesi", "Samandıra Caddesi", "Kartal Bağlantısı"], nearby: ["abdurrahmangazi-oto-cekici", "eyup-sultan-mahallesi-oto-cekici", "samandira-oto-cekici"] },
  { slug: "eyup-sultan-mahallesi-oto-cekici", label: "Eyüp Sultan Mahallesi", landmark: "Eyüp Sultan Caddesi ve TEM gişeleri", roads: ["Eyüp Sultan Caddesi", "TEM Otoyolu", "Samandıra Geçişi"], nearby: ["samandira-oto-cekici", "abdurrahmangazi-oto-cekici", "fatih-mahallesi-oto-cekici"] },
  { slug: "fatih-mahallesi-oto-cekici", label: "Fatih Mahallesi", landmark: "Fatih Mahallesi merkezi ve Sultanbeyli sınırı", roads: ["Fatih Caddesi", "Petrol Yolu", "TEM Yan Yol"], nearby: ["eyup-sultan-mahallesi-oto-cekici", "sultanbeyli-oto-cekici", "samandira-oto-cekici"] },
  { slug: "hilal-mahallesi-oto-cekici", label: "Hilal Mahallesi", landmark: "Hilal merkezi ve Yenidoğan bağlantısı", roads: ["Hilal Caddesi", "Baraj Yolu", "Yenidoğan Yolu"], nearby: ["yenidogan-oto-cekici", "safa-mahallesi-oto-cekici", "merve-mahallesi-oto-cekici"] },
  { slug: "inonu-mahallesi-oto-cekici", label: "İnönü Mahallesi", landmark: "İnönü Mahallesi ve Sarıgazi geçişi", roads: ["İnönü Caddesi", "Demokrasi Caddesi", "Alemdağ Bağlantısı"], nearby: ["sarigazi-oto-cekici", "akpinar-mahallesi-oto-cekici", "meclis-mahallesi-oto-cekici"] },
  { slug: "kemal-turkler-mahallesi-oto-cekici", label: "Kemal Türkler Mahallesi", landmark: "Kemal Türkler merkezi ve metro hattı çevresi", roads: ["Uysal Caddesi", "Demokrasi Caddesi", "Ümraniye Bağlantısı"], nearby: ["meclis-mahallesi-oto-cekici", "sarigazi-oto-cekici", "umraniye-oto-cekici"] },
  { slug: "meclis-mahallesi-oto-cekici", label: "Meclis Mahallesi", landmark: "Meclis Mahallesi ve metro istasyonu çevresi", roads: ["Ankara Caddesi", "Meclis Caddesi", "Üsküdar-Çekmeköy Metro Hattı"], nearby: ["sarigazi-oto-cekici", "kemal-turkler-mahallesi-oto-cekici", "ataturk-mahallesi-oto-cekici"] },
  { slug: "merve-mahallesi-oto-cekici", label: "Merve Mahallesi", landmark: "Merve Mahallesi ve Yenidoğan yolu", roads: ["Merve Caddesi", "Baraj Yolu", "Paşaköy Bağlantısı"], nearby: ["yenidogan-oto-cekici", "hilal-mahallesi-oto-cekici", "pasakoy-oto-cekici"] },
  { slug: "osmangazi-mahallesi-oto-cekici", label: "Osmangazi Mahallesi", landmark: "Osmangazi merkezi ve Sultanbeyli geçişi", roads: ["Osmangazi Caddesi", "Petrol Yolu", "TEM Yan Yol"], nearby: ["sultanbeyli-oto-cekici", "fatih-mahallesi-oto-cekici", "sancaktepe-oto-cekici"] },
  { slug: "safa-mahallesi-oto-cekici", label: "Safa Mahallesi", landmark: "Safa yerleşimi ve Yenidoğan merkez", roads: ["Safa Caddesi", "Yenidoğan Caddesi", "Baraj Yolu"], nearby: ["yenidogan-oto-cekici", "hilal-mahallesi-oto-cekici", "yunus-emre-mahallesi-oto-cekici"] },
  { slug: "veysel-karani-mahallesi-oto-cekici", label: "Veysel Karani Mahallesi", landmark: "Veysel Karani merkezi ve TEM hattı", roads: ["Veysel Karani Caddesi", "TEM Yan Yol", "Sultanbeyli Bağlantısı"], nearby: ["sultanbeyli-oto-cekici", "osmangazi-mahallesi-oto-cekici", "samandira-oto-cekici"] },
  { slug: "yunus-emre-mahallesi-oto-cekici", label: "Yunus Emre Mahallesi", landmark: "Yunus Emre merkezi ve Baraj Yolu", roads: ["Yunus Emre Caddesi", "Baraj Yolu", "Sarıgazi Bağlantısı"], nearby: ["safa-mahallesi-oto-cekici", "yenidogan-oto-cekici", "sarigazi-oto-cekici"] },
  { slug: "cekmekoy-oto-cekici", label: "Çekmeköy", district: "Yakın İlçe", landmark: "Çekmeköy merkez ve Şile Yolu", roads: ["Şile Otoyolu", "Alemdağ Caddesi", "Madenler Kavşağı"], nearby: ["sancaktepe-oto-cekici", "akpinar-mahallesi-oto-cekici", "umraniye-oto-cekici"] },
  { slug: "umraniye-oto-cekici", label: "Ümraniye", district: "Yakın İlçe", landmark: "Dudullu, Şerifali ve Ümraniye sanayi hattı", roads: ["Alemdağ Caddesi", "TEM Ümraniye Çıkışı", "Dudullu Caddesi"], nearby: ["sancaktepe-oto-cekici", "kemal-turkler-mahallesi-oto-cekici", "cekmekoy-oto-cekici"] },
  { slug: "sultanbeyli-oto-cekici", label: "Sultanbeyli", district: "Yakın İlçe", landmark: "Sultanbeyli merkez, sanayi ve TEM gişeleri", roads: ["Fatih Bulvarı", "TEM Otoyolu", "Petrol Yolu"], nearby: ["sancaktepe-oto-cekici", "osmangazi-mahallesi-oto-cekici", "samandira-oto-cekici"] },
  { slug: "pendik-kurtkoy-oto-cekici", label: "Pendik Kurtköy", district: "Yakın İlçe", landmark: "Kurtköy merkezi ve Sabiha Gökçen çevresi", roads: ["D-100", "TEM Kurtköy Bağlantısı", "Havalimanı Yolu"], nearby: ["sancaktepe-oto-cekici", "sultanbeyli-oto-cekici", "samandira-oto-cekici"] },
  { slug: "tem-samandira-cekici", label: "TEM Samandıra Çekici", district: "Bağlantı Yolu", landmark: "TEM Samandıra gişeleri ve bağlantı kolları", roads: ["O-4 TEM", "Samandıra Gişeleri", "Kartal Bağlantısı"], nearby: ["samandira-oto-cekici", "sancaktepe-oto-cekici", "sultanbeyli-oto-cekici"] },
  { slug: "kuzey-marmara-pasakoy-cekici", label: "Kuzey Marmara Paşaköy Çekici", district: "Bağlantı Yolu", landmark: "Kuzey Marmara Paşaköy bağlantısı", roads: ["O-7 Kuzey Marmara", "Paşaköy Kavşağı", "Reşadiye Bağlantısı"], nearby: ["pasakoy-oto-cekici", "sancaktepe-oto-cekici", "cekmekoy-oto-cekici"] },
  { slug: "en-yakin-oto-cekici", label: "En Yakın Oto Çekici", district: "Özel Arama", landmark: "Sancaktepe ve çevresindeki aktif ekip noktaları", roads: ["Sancaktepe", "Samandıra", "Sarıgazi", "Yenidoğan"], nearby: ["sancaktepe-oto-cekici", "acil-cekici", "7-24-cekici"] },
  { slug: "acil-cekici", label: "Acil Çekici", district: "Özel Arama", landmark: "Otoyol, kavşak ve yoğun trafik noktaları", roads: ["TEM", "Kuzey Marmara", "Şile Yolu"], nearby: ["en-yakin-oto-cekici", "7-24-cekici", "tem-samandira-cekici"] },
  { slug: "7-24-cekici", label: "7/24 Çekici", district: "Özel Arama", landmark: "Sancaktepe gece-gündüz nöbetçi çekici hattı", roads: ["Sancaktepe Geneli", "TEM", "Kuzey Marmara"], nearby: ["gece-acik-cekici", "acil-cekici", "sancaktepe-oto-cekici"] },
  { slug: "gece-acik-cekici", label: "Gece Açık Çekici", district: "Özel Arama", landmark: "Gece ve resmi tatillerde açık yol yardım hattı", roads: ["Sancaktepe Geneli", "Samandıra", "Sarıgazi"], nearby: ["7-24-cekici", "acil-cekici", "en-yakin-oto-cekici"] },
];

export const locationPages: LocationPageData[] = seeds.map((seed) => {
  const district = seed.district ?? "Sancaktepe";
  const simpleName = seed.label.replace(" Mahallesi", "");
  const displayName = seed.label.includes("Çekici") ? seed.label : `${seed.label} Oto Çekici`;
  return {
    slug: seed.slug,
    name: displayName,
    district,
    districtSlug: district.toLocaleLowerCase("tr-TR").replaceAll(" ", "-"),
    title: `${displayName} | 7/24 Umay Oto Kurtarıcı`,
    description: `${seed.label} bölgesinde 7/24 oto çekici, oto kurtarma, akü takviye ve yol yardım. Konum paylaşın, uygun ekip yönlendirilsin: 0530 955 94 52.`,
    h1: `${seed.label} Oto Çekici ve Yol Yardım`,
    heroKicker: `${seed.landmark.toLocaleUpperCase("tr-TR")} · 7/24 AÇIK`,
    landmark: seed.landmark,
    responseTime: "Konuma göre",
    roads: seed.roads,
    serviceTypes: ["7/24 Oto Çekici", "Kayar Kasa Araç Taşıma", "Akü ve Lastik Yol Yardımı"],
    faqs: [
      { q: `${simpleName} bölgesine gece çekici geliyor mu?`, a: `Evet. ${seed.label} ve yakın yollar için 7 gün 24 saat çağrı alıyoruz. Canlı konumu paylaştığınızda trafik ve ekip durumuna göre tahmini varış bilgisini telefonda iletiyoruz.` },
      { q: "Çekici ücreti neye göre belirleniyor?", a: "Alış ve teslim noktası, aracın tipi, tekerleklerin dönüp dönmediği ve yükleme koşulları ücreti belirler. İşleme başlamadan önce fiyat bilgisini netleştiririz." },
    ],
    localGuide: [
      { heading: `${seed.label} için doğru çekici planı`, text: `${seed.landmark} çevresinde arızalı, kazalı veya çalışmayan araçlar için konumu ve araç durumunu kontrol ederiz. Dar sokak, kapalı otopark, kilitli tekerlek veya alçak şasi gibi ayrıntılara göre uygun yükleme ekipmanı seçilir.` },
      { heading: "Konumdan servise kontrollü taşıma", text: "Aracın fotoğrafı ve teslim adresi paylaşıldığında rota ile yükleme yöntemi önceden planlanır. Araç platforma dört noktadan sabitlenir ve seçtiğiniz servis, otopark veya adrese taşınır." },
    ],
    nearbySlugs: seed.nearby,
  };
});

export const findLocationBySlug = (slug: string) => locationPages.find((location) => location.slug === slug);
