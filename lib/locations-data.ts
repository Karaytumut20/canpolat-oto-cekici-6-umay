export type LocationPageData = {
  slug: string;
  name: string;
  district: "Sancaktepe" | "Çekmeköy" | "Sultanbeyli" | "Pendik" | "Bağlantı Yolu" | "Özel Arama";
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

type Seed = {
  slug: string;
  label: string;
  district?: LocationPageData["district"];
  landmark: string;
  roads: string[];
  nearby: string[];
};

const seeds: Seed[] = [
  // ==========================================
  // 1. SANCAKTEPE (ANA MERKEZ & MAHALLELER)
  // ==========================================
  {
    slug: "sancaktepe-oto-cekici",
    label: "Sancaktepe",
    district: "Sancaktepe",
    landmark: "Sancaktepe Meydanı, Şehir Hastanesi ve TEM bağlantısı",
    roads: ["Ankara Caddesi", "Atatürk Caddesi", "TEM Samandıra Bağlantısı"],
    nearby: ["sarigazi-oto-cekici", "samandira-oto-cekici", "yenidogan-oto-cekici", "pasakoy-oto-cekici"],
  },
  {
    slug: "pasakoy-oto-cekici",
    label: "Paşaköy",
    district: "Sancaktepe",
    landmark: "Lokman Sokak, Paşaköy merkez garajımız ve Kuzey Marmara bağlantısı",
    roads: ["Paşaköy Yolu", "Lokman Sokak", "Kuzey Marmara Bağlantısı"],
    nearby: ["sancaktepe-oto-cekici", "yenidogan-oto-cekici", "samandira-oto-cekici", "resadiye-oto-cekici"],
  },
  {
    slug: "sarigazi-oto-cekici",
    label: "Sarıgazi",
    district: "Sancaktepe",
    landmark: "Sarıgazi Meydanı ve Demokrasi Caddesi",
    roads: ["Demokrasi Caddesi", "Ankara Caddesi", "Atatürk Caddesi"],
    nearby: ["meclis-mahallesi-oto-cekici", "inonu-mahallesi-oto-cekici", "sancaktepe-oto-cekici", "madenler-oto-cekici"],
  },
  {
    slug: "samandira-oto-cekici",
    label: "Samandıra",
    district: "Sancaktepe",
    landmark: "Samandıra merkez, TEM gişeleri ve sanayi hattı",
    roads: ["Eyüp Sultan Caddesi", "Samandıra Kartal Bağlantısı", "TEM Otoyolu"],
    nearby: ["eyup-sultan-mahallesi-oto-cekici", "abdurrahmangazi-oto-cekici", "sancaktepe-oto-cekici", "tem-samandira-cekici"],
  },
  {
    slug: "yenidogan-oto-cekici",
    label: "Yenidoğan",
    district: "Sancaktepe",
    landmark: "Yenidoğan merkez ve Baraj Yolu çevresi",
    roads: ["Baraj Yolu", "Yenidoğan Caddesi", "Sultanbeyli Bağlantısı"],
    nearby: ["hilal-mahallesi-oto-cekici", "safa-mahallesi-oto-cekici", "pasakoy-oto-cekici", "merve-mahallesi-oto-cekici"],
  },
  {
    slug: "abdurrahmangazi-oto-cekici",
    label: "Abdurrahmangazi Mahallesi",
    district: "Sancaktepe",
    landmark: "Abdurrahmangazi merkezi ve Samandıra geçişi",
    roads: ["Ebubekir Caddesi", "Samandıra Caddesi", "TEM Bağlantısı"],
    nearby: ["eyup-sultan-mahallesi-oto-cekici", "emek-mahallesi-oto-cekici", "samandira-oto-cekici"],
  },
  {
    slug: "akpinar-mahallesi-oto-cekici",
    label: "Akpınar Mahallesi",
    district: "Sancaktepe",
    landmark: "Akpınar konutları ve Şile Yolu bağlantısı",
    roads: ["Akpınar Caddesi", "Alemdağ Caddesi", "Çekmeköy Bağlantısı"],
    nearby: ["sancaktepe-oto-cekici", "cekmekoy-oto-cekici", "inonu-mahallesi-oto-cekici", "tasdelen-oto-cekici"],
  },
  {
    slug: "ataturk-mahallesi-oto-cekici",
    label: "Atatürk Mahallesi",
    district: "Sancaktepe",
    landmark: "Atatürk Caddesi ve belediye çevresi",
    roads: ["Atatürk Caddesi", "Ankara Caddesi", "Sarıgazi Geçişi"],
    nearby: ["sarigazi-oto-cekici", "meclis-mahallesi-oto-cekici", "sancaktepe-oto-cekici"],
  },
  {
    slug: "emek-mahallesi-oto-cekici",
    label: "Emek Mahallesi",
    district: "Sancaktepe",
    landmark: "Emek yerleşimi ve Samandıra sanayi hattı",
    roads: ["Emek Caddesi", "Samandıra Caddesi", "Kartal Bağlantısı"],
    nearby: ["abdurrahmangazi-oto-cekici", "eyup-sultan-mahallesi-oto-cekici", "samandira-oto-cekici"],
  },
  {
    slug: "eyup-sultan-mahallesi-oto-cekici",
    label: "Eyüp Sultan Mahallesi",
    district: "Sancaktepe",
    landmark: "Eyüp Sultan Caddesi ve TEM gişeleri",
    roads: ["Eyüp Sultan Caddesi", "TEM Otoyolu", "Samandıra Geçişi"],
    nearby: ["samandira-oto-cekici", "abdurrahmangazi-oto-cekici", "fatih-mahallesi-oto-cekici"],
  },
  {
    slug: "fatih-mahallesi-oto-cekici",
    label: "Fatih Mahallesi",
    district: "Sancaktepe",
    landmark: "Fatih Mahallesi merkezi ve Sultanbeyli sınırı",
    roads: ["Fatih Caddesi", "Petrol Yolu", "TEM Yan Yol"],
    nearby: ["eyup-sultan-mahallesi-oto-cekici", "sultanbeyli-oto-cekici", "samandira-oto-cekici"],
  },
  {
    slug: "hilal-mahallesi-oto-cekici",
    label: "Hilal Mahallesi",
    district: "Sancaktepe",
    landmark: "Hilal merkezi ve Yenidoğan bağlantısı",
    roads: ["Hilal Caddesi", "Baraj Yolu", "Yenidoğan Yolu"],
    nearby: ["yenidogan-oto-cekici", "safa-mahallesi-oto-cekici", "merve-mahallesi-oto-cekici"],
  },
  {
    slug: "inonu-mahallesi-oto-cekici",
    label: "İnönü Mahallesi",
    district: "Sancaktepe",
    landmark: "İnönü Mahallesi ve Sarıgazi geçişi",
    roads: ["İnönü Caddesi", "Demokrasi Caddesi", "Alemdağ Bağlantısı"],
    nearby: ["sarigazi-oto-cekici", "akpinar-mahallesi-oto-cekici", "meclis-mahallesi-oto-cekici"],
  },
  {
    slug: "kemal-turkler-mahallesi-oto-cekici",
    label: "Kemal Türkler Mahallesi",
    district: "Sancaktepe",
    landmark: "Kemal Türkler merkezi ve metro hattı çevresi",
    roads: ["Uysal Caddesi", "Demokrasi Caddesi", "Madenler Bağlantısı"],
    nearby: ["meclis-mahallesi-oto-cekici", "sarigazi-oto-cekici", "madenler-oto-cekici"],
  },
  {
    slug: "meclis-mahallesi-oto-cekici",
    label: "Meclis Mahallesi",
    district: "Sancaktepe",
    landmark: "Meclis Mahallesi ve metro istasyonu çevresi",
    roads: ["Ankara Caddesi", "Meclis Caddesi", "Üsküdar-Çekmeköy-Sancaktepe Metro Hattı"],
    nearby: ["sarigazi-oto-cekici", "kemal-turkler-mahallesi-oto-cekici", "ataturk-mahallesi-oto-cekici"],
  },
  {
    slug: "merve-mahallesi-oto-cekici",
    label: "Merve Mahallesi",
    district: "Sancaktepe",
    landmark: "Merve Mahallesi ve Yenidoğan yolu",
    roads: ["Merve Caddesi", "Baraj Yolu", "Paşaköy Bağlantısı"],
    nearby: ["yenidogan-oto-cekici", "hilal-mahallesi-oto-cekici", "pasakoy-oto-cekici"],
  },
  {
    slug: "mevlana-mahallesi-oto-cekici",
    label: "Mevlana Mahallesi",
    district: "Sancaktepe",
    landmark: "Mevlana yerleşimi ve Veysel Karani sınırı",
    roads: ["Mevlana Caddesi", "Veysel Karani Caddesi", "Samandıra Yolu"],
    nearby: ["veysel-karani-mahallesi-oto-cekici", "samandira-oto-cekici", "sancaktepe-oto-cekici"],
  },
  {
    slug: "osmangazi-mahallesi-oto-cekici",
    label: "Osmangazi Mahallesi",
    district: "Sancaktepe",
    landmark: "Osmangazi merkezi ve Sultanbeyli geçişi",
    roads: ["Osmangazi Caddesi", "Petrol Yolu", "TEM Yan Yol"],
    nearby: ["sultanbeyli-oto-cekici", "fatih-mahallesi-oto-cekici", "sancaktepe-oto-cekici"],
  },
  {
    slug: "safa-mahallesi-oto-cekici",
    label: "Safa Mahallesi",
    district: "Sancaktepe",
    landmark: "Safa yerleşimi ve Yenidoğan merkez",
    roads: ["Safa Caddesi", "Yenidoğan Caddesi", "Baraj Yolu"],
    nearby: ["yenidogan-oto-cekici", "hilal-mahallesi-oto-cekici", "yunus-emre-mahallesi-oto-cekici"],
  },
  {
    slug: "veysel-karani-mahallesi-oto-cekici",
    label: "Veysel Karani Mahallesi",
    district: "Sancaktepe",
    landmark: "Veysel Karani merkezi ve TEM hattı",
    roads: ["Veysel Karani Caddesi", "TEM Yan Yol", "Sultanbeyli Bağlantısı"],
    nearby: ["sultanbeyli-oto-cekici", "osmangazi-mahallesi-oto-cekici", "samandira-oto-cekici"],
  },
  {
    slug: "yunus-emre-mahallesi-oto-cekici",
    label: "Yunus Emre Mahallesi",
    district: "Sancaktepe",
    landmark: "Yunus Emre merkezi ve Baraj Yolu",
    roads: ["Yunus Emre Caddesi", "Baraj Yolu", "Sarıgazi Bağlantısı"],
    nearby: ["safa-mahallesi-oto-cekici", "yenidogan-oto-cekici", "sarigazi-oto-cekici"],
  },

  // ==========================================
  // 2. ÇEKMEKÖY (EN ÇOK ARANAN MAHALLELER)
  // ==========================================
  {
    slug: "cekmekoy-oto-cekici",
    label: "Çekmeköy",
    district: "Çekmeköy",
    landmark: "Çekmeköy merkez, Şile Otoyolu ve Madenler Kavşağı",
    roads: ["Şile Otoyolu", "Alemdağ Caddesi", "Madenler Kavşağı"],
    nearby: ["tasdelen-oto-cekici", "alemdag-oto-cekici", "madenler-oto-cekici", "sancaktepe-oto-cekici"],
  },
  {
    slug: "tasdelen-oto-cekici",
    label: "Taşdelen",
    district: "Çekmeköy",
    landmark: "Taşdelen merkezi, Turgut Özal Caddesi ve Şile Yolu bağlantısı",
    roads: ["Turgut Özal Caddesi", "Şile Otoyolu", "Alemdağ Caddesi"],
    nearby: ["cekmekoy-oto-cekici", "alemdag-oto-cekici", "sancaktepe-oto-cekici", "akpinar-mahallesi-oto-cekici"],
  },
  {
    slug: "alemdag-oto-cekici",
    label: "Alemdağ",
    district: "Çekmeköy",
    landmark: "Alemdağ merkezi, 130. Sokak, Şile Otoyolu ve orman geçişi",
    roads: ["Alemdağ Caddesi", "Şile Otoyolu", "Reşadiye Bağlantı Yolu"],
    nearby: ["tasdelen-oto-cekici", "nisantepe-oto-cekici", "resadiye-oto-cekici", "cekmekoy-oto-cekici"],
  },
  {
    slug: "madenler-oto-cekici",
    label: "Madenler",
    district: "Çekmeköy",
    landmark: "Madenler Meydanı, Şile Yolu köprülü kavşağı ve metro son durağı",
    roads: ["Şile Otoyolu", "Alemdağ Caddesi", "Baraj Yolu Kavşağı"],
    nearby: ["cekmekoy-oto-cekici", "sarigazi-oto-cekici", "cekmekoy-mehmet-akif-oto-cekici", "tasdelen-oto-cekici"],
  },
  {
    slug: "cekmekoy-mehmet-akif-oto-cekici",
    label: "Mehmet Akif Mahallesi",
    district: "Çekmeköy",
    landmark: "Mehmet Akif yerleşimi, Madenler geçişi ve Necip Fazıl sınırı",
    roads: ["Alemdağ Caddesi", "Ulubatlı Hasan Caddesi", "Şile Yan Yol"],
    nearby: ["madenler-oto-cekici", "cekmekoy-camlik-oto-cekici", "sarigazi-oto-cekici"],
  },
  {
    slug: "cekmekoy-hamidiye-oto-cekici",
    label: "Hamidiye Mahallesi",
    district: "Çekmeköy",
    landmark: "Hamidiye merkezi, Barış Yolu Caddesi ve Ulus Pazarı çevresi",
    roads: ["Barış Yolu Caddesi", "Gürsel Sokak", "Çekmeköy Merkez Yolu"],
    nearby: ["cekmekoy-oto-cekici", "cekmekoy-mimar-sinan-oto-cekici", "madenler-oto-cekici"],
  },
  {
    slug: "cekmekoy-camlik-oto-cekici",
    label: "Çamlık Mahallesi",
    district: "Çekmeköy",
    landmark: "Çamlık yerleşimi, Şahinbey Caddesi ve Doğa Parkı çevresi",
    roads: ["Şahinbey Caddesi", "Mimar Sinan Caddesi", "Köprülü Kavşak"],
    nearby: ["cekmekoy-oto-cekici", "cekmekoy-mehmet-akif-oto-cekici", "tasdelen-oto-cekici"],
  },
  {
    slug: "cekmekoy-mimar-sinan-oto-cekici",
    label: "Mimar Sinan Mahallesi",
    district: "Çekmeköy",
    landmark: "Mimar Sinan Caddesi, Çekmeköy Sanayi Sitesi ve bağlantı arterleri",
    roads: ["Mimar Sinan Caddesi", "Çavuşbaşı Caddesi", "Sanayi Yolu"],
    nearby: ["cekmekoy-hamidiye-oto-cekici", "cekmekoy-oto-cekici", "tasdelen-oto-cekici"],
  },
  {
    slug: "nisantepe-oto-cekici",
    label: "Nişantepe",
    district: "Çekmeköy",
    landmark: "Özyeğin Üniversitesi kampüsü çevresi, Orman Yolu ve Kuzey Marmara çıkışı",
    roads: ["Orman Caddesi", "Şile Otoyolu Nişantepe Çıkışı", "Kuzey Marmara Bağlantısı"],
    nearby: ["alemdag-oto-cekici", "omerli-oto-cekici", "pasakoy-oto-cekici", "tasdelen-oto-cekici"],
  },
  {
    slug: "omerli-oto-cekici",
    label: "Ömerli",
    district: "Çekmeköy",
    landmark: "Ömerli Baraj havzası, Şile Otoyolu geçişi ve villa siteleri",
    roads: ["Şile Otoyolu", "Ömerli Caddesi", "Baraj Yolu"],
    nearby: ["nisantepe-oto-cekici", "alemdag-oto-cekici", "resadiye-oto-cekici"],
  },
  {
    slug: "resadiye-oto-cekici",
    label: "Reşadiye",
    district: "Çekmeköy",
    landmark: "Reşadiye Kavşağı, Kuzey Marmara Otoyolu bağlantısı ve Paşaköy geçişi",
    roads: ["Reşadiye Caddesi", "Kuzey Marmara Otoyolu", "Paşaköy Bağlantısı"],
    nearby: ["pasakoy-oto-cekici", "alemdag-oto-cekici", "omerli-oto-cekici", "kuzey-marmara-pasakoy-cekici"],
  },
  {
    slug: "eksioglu-oto-cekici",
    label: "Ekşioğlu Mahallesi",
    district: "Çekmeköy",
    landmark: "Ekşioğlu konut bölgesi, Taşdelen ile Alemdağ arası ana arter",
    roads: ["Saray Caddesi", "Alemdağ Caddesi", "Şile Otoyolu Yan Yol"],
    nearby: ["tasdelen-oto-cekici", "alemdag-oto-cekici", "sultanciftligi-oto-cekici"],
  },
  {
    slug: "sultanciftligi-oto-cekici",
    label: "Sultançiftliği Mahallesi",
    district: "Çekmeköy",
    landmark: "Sultançiftliği merkezi, Taşdelen geçişi ve Turgut Özal Bulvarı çevresi",
    roads: ["Turgut Özal Bulvarı", "Ordu Caddesi", "Şile Otoyolu"],
    nearby: ["tasdelen-oto-cekici", "eksioglu-oto-cekici", "sancaktepe-oto-cekici"],
  },

  // ==========================================
  // 3. SULTANBEYLİ (EN ÇOK ARANAN MAHALLELER)
  // ==========================================
  {
    slug: "sultanbeyli-oto-cekici",
    label: "Sultanbeyli",
    district: "Sultanbeyli",
    landmark: "Sultanbeyli merkez, Fatih Bulvarı, sanayi ve TEM gişeleri",
    roads: ["Fatih Bulvarı", "TEM Otoyolu", "Petrol Yolu"],
    nearby: ["battalgazi-oto-cekici", "hasanpasa-oto-cekici", "sancaktepe-oto-cekici", "kurtkoy-oto-cekici"],
  },
  {
    slug: "battalgazi-oto-cekici",
    label: "Battalgazi Mahallesi",
    district: "Sultanbeyli",
    landmark: "Battalgazi yerleşimi, Kubilay Caddesi ve sanayi dükkanları çevresi",
    roads: ["Kubilay Caddesi", "Selçukhan Caddesi", "Fatih Bulvarı Geçişi"],
    nearby: ["sultanbeyli-oto-cekici", "hasanpasa-oto-cekici", "ahmet-yesevi-oto-cekici"],
  },
  {
    slug: "hasanpasa-oto-cekici",
    label: "Hasanpaşa Mahallesi",
    district: "Sultanbeyli",
    landmark: "Hasanpaşa TEM gişeleri, Sanayi bölgesi ve Fatih Bulvarı girişi",
    roads: ["Fatih Bulvarı", "TEM Sultanbeyli Gişeleri", "Sanayi Caddesi"],
    nearby: ["sultanbeyli-oto-cekici", "battalgazi-oto-cekici", "samandira-oto-cekici", "tem-sultanbeyli-kurtkoy-cekici"],
  },
  {
    slug: "sultanbeyli-abdurrahmangazi-oto-cekici",
    label: "Abdurrahmangazi (Sultanbeyli)",
    district: "Sultanbeyli",
    landmark: "Sultanbeyli Belediyesi, Kent Meydanı ve Fatih Bulvarı ana omurgası",
    roads: ["Fatih Bulvarı", "Belediye Caddesi", "Petrol Yolu"],
    nearby: ["sultanbeyli-oto-cekici", "hasanpasa-oto-cekici", "turgut-reis-oto-cekici"],
  },
  {
    slug: "aksemsettin-oto-cekici",
    label: "Akşemsettin Mahallesi",
    district: "Sultanbeyli",
    landmark: "Akşemsettin yerleşimi, Bosna Bulvarı ve Fatih Bulvarı kesişimi",
    roads: ["Bosna Bulvarı", "Fatih Bulvarı", "Petrol Yolu Caddesi"],
    nearby: ["sultanbeyli-oto-cekici", "battalgazi-oto-cekici", "sultanbeyli-fatih-oto-cekici"],
  },
  {
    slug: "sultanbeyli-fatih-oto-cekici",
    label: "Fatih Mahallesi (Sultanbeyli)",
    district: "Sultanbeyli",
    landmark: "Fatih Mahallesi sanayi hattı, Petrol Yolu ve TEM kuzey yan yolu",
    roads: ["Petrol Yolu Caddesi", "TEM Yan Yol", "Fatih Bulvarı"],
    nearby: ["sultanbeyli-oto-cekici", "aksemsettin-oto-cekici", "osmangazi-mahallesi-oto-cekici"],
  },
  {
    slug: "sultanbeyli-mehmet-akif-oto-cekici",
    label: "Mehmet Akif Mahallesi (Sultanbeyli)",
    district: "Sultanbeyli",
    landmark: "Mehmet Akif merkezi, Ziya-ül Hak Caddesi ve Şanlıurfa Caddesi",
    roads: ["Ziya-ül Hak Caddesi", "Şanlıurfa Caddesi", "Fatih Bulvarı"],
    nearby: ["sultanbeyli-oto-cekici", "turgut-reis-oto-cekici", "hasanpasa-oto-cekici"],
  },
  {
    slug: "turgut-reis-oto-cekici",
    label: "Turgut Reis Mahallesi",
    district: "Sultanbeyli",
    landmark: "Turgut Reis yerleşimi, Eyyubi Caddesi ve Fatih Bulvarı",
    roads: ["Eyyubi Caddesi", "Fatih Bulvarı", "Kuran Kursu Caddesi"],
    nearby: ["sultanbeyli-abdurrahmangazi-oto-cekici", "sultanbeyli-mehmet-akif-oto-cekici", "ahmet-yesevi-oto-cekici"],
  },
  {
    slug: "ahmet-yesevi-oto-cekici",
    label: "Ahmet Yesevi Mahallesi",
    district: "Sultanbeyli",
    landmark: "Ahmet Yesevi yerleşimi, Kaptanı Derya Caddesi ve Kurtköy geçiş hattı",
    roads: ["Kaptanı Derya Caddesi", "Mimar Sinan Caddesi", "Kurtköy Bağlantısı"],
    nearby: ["battalgazi-oto-cekici", "kurtkoy-oto-cekici", "sultanbeyli-oto-cekici"],
  },
  {
    slug: "mecidiye-oto-cekici",
    label: "Mecidiye Mahallesi",
    district: "Sultanbeyli",
    landmark: "Mecidiye köprüsü, Demokrasi Caddesi ve TEM viyadük çevresi",
    roads: ["Demokrasi Caddesi", "Fatih Bulvarı", "TEM Yan Yol"],
    nearby: ["hasanpasa-oto-cekici", "sultanbeyli-oto-cekici", "battalgazi-oto-cekici"],
  },
  {
    slug: "orhangazi-oto-cekici",
    label: "Orhangazi Mahallesi",
    district: "Sultanbeyli",
    landmark: "Orhangazi yerleşimi, Cahit Zarifoğlu Caddesi ve Kurtköy sınırı",
    roads: ["Cahit Zarifoğlu Caddesi", "Fatih Bulvarı", "Kurtköy Sanayi Geçişi"],
    nearby: ["ahmet-yesevi-oto-cekici", "kurtkoy-oto-cekici", "sultanbeyli-oto-cekici"],
  },
  {
    slug: "adil-mahallesi-oto-cekici",
    label: "Adil Mahallesi",
    district: "Sultanbeyli",
    landmark: "Adil Mahallesi, Bosna Caddesi ve Sancaktepe Yenidoğan sınırı",
    roads: ["Bosna Caddesi", "Polonez Caddesi", "Yenidoğan Yolu"],
    nearby: ["yenidogan-oto-cekici", "sultanbeyli-fatih-oto-cekici", "sultanbeyli-oto-cekici"],
  },
  {
    slug: "necip-fazil-oto-cekici",
    label: "Necip Fazıl Mahallesi",
    district: "Sultanbeyli",
    landmark: "Necip Fazıl yerleşimi, Antalya Caddesi ve TEM kuzey hattı",
    roads: ["Antalya Caddesi", "TEM Yan Yol", "Fatih Bulvarı"],
    nearby: ["hasanpasa-oto-cekici", "sultanbeyli-abdurrahmangazi-oto-cekici", "mecidiye-oto-cekici"],
  },

  // ==========================================
  // 4. PENDİK (EN ÇOK ARANAN MAHALLELER)
  // ==========================================
  {
    slug: "pendik-oto-cekici",
    label: "Pendik",
    district: "Pendik",
    landmark: "Pendik merkez, Sahil Yolu, D-100 (E-5) Karayolu ve Marina çevresi",
    roads: ["D-100 (E-5) Karayolu", "Sahil Bulvarı", "Ankara Caddesi"],
    nearby: ["kurtkoy-oto-cekici", "kaynarca-oto-cekici", "guzelyali-oto-cekici", "yenisehir-oto-cekici"],
  },
  {
    slug: "kurtkoy-oto-cekici",
    label: "Kurtköy",
    district: "Pendik",
    landmark: "Kurtköy merkezi, Viaport AVM, Sabiha Gökçen Havalimanı ve TEM gişeleri",
    roads: ["Ankara Caddesi", "TEM Otoyolu Kurtköy Gişeleri", "Havalimanı Bağlantı Yolu"],
    nearby: ["yenisehir-oto-cekici", "seyhli-oto-cekici", "harmandere-oto-cekici", "sultanbeyli-oto-cekici", "sabiha-gokcen-yolu-cekici"],
  },
  {
    slug: "yenisehir-oto-cekici",
    label: "Yenişehir Mahallesi",
    district: "Pendik",
    landmark: "Yenişehir siteler bölgesi, Bakü Caddesi, Millet Caddesi ve Atlantis AVM",
    roads: ["Bakü Caddesi", "Millet Caddesi", "Osmanlı Bulvarı"],
    nearby: ["kurtkoy-oto-cekici", "pendik-camlik-oto-cekici", "harmandere-oto-cekici"],
  },
  {
    slug: "pendik-camlik-oto-cekici",
    label: "Çamlık Mahallesi (Pendik)",
    district: "Pendik",
    landmark: "Semerkand Bulvarı, Yahya Kemal Beyatlı Caddesi ve Kurtköy geçişi",
    roads: ["Semerkand Bulvarı", "Yahya Kemal Beyatlı Caddesi", "Gözdağı Yolu"],
    nearby: ["yenisehir-oto-cekici", "kurtkoy-oto-cekici", "velibaba-oto-cekici"],
  },
  {
    slug: "seyhli-oto-cekici",
    label: "Şeyhli Mahallesi",
    district: "Pendik",
    landmark: "Şeyhli sanayi bölgesi, Ankara Caddesi ve Hilal Konutları çevresi",
    roads: ["Ankara Caddesi", "Molla Gürani Caddesi", "Kurtköy Yolu"],
    nearby: ["kurtkoy-oto-cekici", "ramazanoglu-oto-cekici", "yayalar-oto-cekici", "fevzi-cakmak-oto-cekici"],
  },
  {
    slug: "guzelyali-oto-cekici",
    label: "Güzelyalı Mahallesi",
    district: "Pendik",
    landmark: "Güzelyalı D-100 E-5 hattı, Tersane köprüsü ve Sahil Bulvarı",
    roads: ["D-100 Karayolu", "Sahil Bulvarı", "Tersane Bağlantısı"],
    nearby: ["kaynarca-oto-cekici", "esenyali-oto-cekici", "pendik-oto-cekici"],
  },
  {
    slug: "kaynarca-oto-cekici",
    label: "Kaynarca Mahallesi",
    district: "Pendik",
    landmark: "Marmara Eğitim Araştırma Hastanesi, D-100 E-5 Yan Yol ve Kaynarca köprüsü",
    roads: ["D-100 Yan Yol", "Aydınlı Yolu Caddesi", "Fevzi Çakmak Caddesi"],
    nearby: ["pendik-oto-cekici", "guzelyali-oto-cekici", "fevzi-cakmak-oto-cekici"],
  },
  {
    slug: "fevzi-cakmak-oto-cekici",
    label: "Fevzi Çakmak Mahallesi",
    district: "Pendik",
    landmark: "Marmara Üniversitesi Hastanesi çevresi, metro durağı ve D-100 bağlantısı",
    roads: ["Mimar Sinan Caddesi", "D-100 Köprülü Kavşağı", "Çamçeşme Yolu"],
    nearby: ["kaynarca-oto-cekici", "pendik-oto-cekici", "seyhli-oto-cekici"],
  },
  {
    slug: "velibaba-oto-cekici",
    label: "Velibaba Mahallesi",
    district: "Pendik",
    landmark: "Velibaba yerleşimi, Mimar Sinan Caddesi, Aydos Ormanı ve Kartal bağlantısı",
    roads: ["Mimar Sinan Caddesi", "Ankara Caddesi", "Aydos Yolu"],
    nearby: ["pendik-camlik-oto-cekici", "seyhli-oto-cekici", "pendik-oto-cekici", "samandira-oto-cekici"],
  },
  {
    slug: "esenyali-oto-cekici",
    label: "Esenyalı Mahallesi",
    district: "Pendik",
    landmark: "Esenyalı merkezi, Necmettin Erbakan Caddesi, D-100 ve Tuzla sınırı",
    roads: ["Necmettin Erbakan Caddesi", "D-100 Karayolu", "Aydınlı Yolu"],
    nearby: ["guzelyali-oto-cekici", "kaynarca-oto-cekici", "kurtkoy-oto-cekici"],
  },
  {
    slug: "harmandere-oto-cekici",
    label: "Harmandere Mahallesi",
    district: "Pendik",
    landmark: "Dedepaşa Caddesi, Sabiha Gökçen Kargo Bölgesi ve TEM otoyol hattı",
    roads: ["Dedepaşa Caddesi", "Havalimanı Çevre Yolu", "TEM Yan Yol"],
    nearby: ["kurtkoy-oto-cekici", "yenisehir-oto-cekici", "sabiha-gokcen-yolu-cekici"],
  },
  {
    slug: "gullu-baglar-oto-cekici",
    label: "Güllü Bağlar Mahallesi",
    district: "Pendik",
    landmark: "Güllü Bağlar yerleşimi, Muhsin Yazıcıoğlu Caddesi ve Tandoğan Caddesi",
    roads: ["Muhsin Yazıcıoğlu Caddesi", "Tandoğan Caddesi", "Ankara Caddesi"],
    nearby: ["seyhli-oto-cekici", "velibaba-oto-cekici", "kaynarca-oto-cekici"],
  },
  {
    slug: "pendik-sanayi-oto-cekici",
    label: "Pendik Sanayi Sitesi",
    district: "Pendik",
    landmark: "Ramazanoğlu ve Sanayi Mahallesi oto sanayi siteleri, D-100 ve E-5 bağlantısı",
    roads: ["Sanayi Caddesi", "D-100 Yan Yol", "Ankara Caddesi"],
    nearby: ["seyhli-oto-cekici", "kurtkoy-oto-cekici", "kaynarca-oto-cekici"],
  },

  // ==========================================
  // 5. BAĞLANTI YOLLARI VE OTOYOLLAR
  // ==========================================
  {
    slug: "tem-samandira-cekici",
    label: "TEM Samandıra Çekici",
    district: "Bağlantı Yolu",
    landmark: "TEM Samandıra gişeleri, Kartal bağlantı kolları ve dinlenme tesisi",
    roads: ["O-4 TEM Otoyolu", "Samandıra Gişeleri", "Kartal Bağlantısı"],
    nearby: ["samandira-oto-cekici", "sancaktepe-oto-cekici", "hasanpasa-oto-cekici", "tem-sultanbeyli-kurtkoy-cekici"],
  },
  {
    slug: "tem-sultanbeyli-kurtkoy-cekici",
    label: "TEM Sultanbeyli & Kurtköy Çekici",
    district: "Bağlantı Yolu",
    landmark: "O-4 TEM Otoyolu Sultanbeyli gişeleri, viyadükler ve Kurtköy çıkışı",
    roads: ["O-4 TEM Otoyolu", "Sultanbeyli Gişeleri", "Kurtköy Gişeleri"],
    nearby: ["sultanbeyli-oto-cekici", "kurtkoy-oto-cekici", "hasanpasa-oto-cekici", "tem-samandira-cekici"],
  },
  {
    slug: "kuzey-marmara-pasakoy-cekici",
    label: "Kuzey Marmara Paşaköy Çekici",
    district: "Bağlantı Yolu",
    landmark: "O-7 Kuzey Marmara Otoyolu Paşaköy Kavşağı ve Reşadiye bağlantısı",
    roads: ["O-7 Kuzey Marmara Otoyolu", "Paşaköy Kavşağı", "Reşadiye Bağlantısı"],
    nearby: ["pasakoy-oto-cekici", "resadiye-oto-cekici", "nisantepe-oto-cekici", "sancaktepe-oto-cekici"],
  },
  {
    slug: "sile-otoyolu-cekmekoy-cekici",
    label: "Şile Otoyolu Çekmeköy Çekici",
    district: "Bağlantı Yolu",
    landmark: "Şile Otoyolu Madenler, Taşdelen ve Alemdağ tünel geçişleri",
    roads: ["Şile Otoyolu", "Madenler Köprüsü", "Taşdelen Tünelleri"],
    nearby: ["tasdelen-oto-cekici", "madenler-oto-cekici", "cekmekoy-oto-cekici", "alemdag-oto-cekici"],
  },
  {
    slug: "pendik-d100-e5-cekici",
    label: "Pendik D-100 (E-5) Çekici",
    district: "Bağlantı Yolu",
    landmark: "D-100 E-5 Karayolu Pendik Köprüsü, Kaynarca ve Tersane mevkii",
    roads: ["D-100 (E-5) Karayolu", "Pendik Köprüsü", "Kaynarca Yan Yol"],
    nearby: ["pendik-oto-cekici", "kaynarca-oto-cekici", "guzelyali-oto-cekici"],
  },
  {
    slug: "sabiha-gokcen-yolu-cekici",
    label: "Sabiha Gökçen Havalimanı Yolu Çekici",
    district: "Bağlantı Yolu",
    landmark: "Sabiha Gökçen Havalimanı bağlantı yolu, Kurtköy kavşağı ve Viaport çevresi",
    roads: ["Havalimanı Bağlantı Yolu", "Ankara Caddesi", "TEM Kurtköy Çıkışı"],
    nearby: ["kurtkoy-oto-cekici", "harmandere-oto-cekici", "yenisehir-oto-cekici"],
  },

  // ==========================================
  // 6. ÖZEL VE ACİL ARAMA SAYFALARI
  // ==========================================
  {
    slug: "en-yakin-oto-cekici",
    label: "En Yakın Oto Çekici",
    district: "Özel Arama",
    landmark: "Sancaktepe merkezimiz, Çekmeköy, Sultanbeyli ve Pendik nöbetçi ekipleri",
    roads: ["Sancaktepe", "Çekmeköy", "Sultanbeyli", "Pendik"],
    nearby: ["sancaktepe-oto-cekici", "tasdelen-oto-cekici", "sultanbeyli-oto-cekici", "kurtkoy-oto-cekici", "acil-cekici"],
  },
  {
    slug: "acil-cekici",
    label: "Acil Çekici",
    district: "Özel Arama",
    landmark: "TEM, Kuzey Marmara, D-100 E-5 ve Şile Otoyolu acil müdahale koridorları",
    roads: ["TEM Otoyolu", "Kuzey Marmara", "D-100 (E-5)", "Şile Otoyolu"],
    nearby: ["en-yakin-oto-cekici", "7-24-cekici", "tem-samandira-cekici", "tem-sultanbeyli-kurtkoy-cekici"],
  },
  {
    slug: "7-24-cekici",
    label: "7/24 Çekici",
    district: "Özel Arama",
    landmark: "Sancaktepe, Çekmeköy, Sultanbeyli ve Pendik gece-gündüz nöbetçi çekici hattı",
    roads: ["Sancaktepe Geneli", "Çekmeköy", "Sultanbeyli", "Pendik"],
    nearby: ["gece-acik-cekici", "acil-cekici", "sancaktepe-oto-cekici", "en-yakin-oto-cekici"],
  },
  {
    slug: "gece-acik-cekici",
    label: "Gece Açık Çekici",
    district: "Özel Arama",
    landmark: "Gece, hafta sonu ve resmi tatillerde açık acil yol yardım ve çekici hattı",
    roads: ["Sancaktepe", "Çekmeköy", "Sultanbeyli", "Pendik"],
    nearby: ["7-24-cekici", "acil-cekici", "en-yakin-oto-cekici", "pasakoy-oto-cekici"],
  },
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
    responseTime: "Konuma göre (15-30 dk)",
    roads: seed.roads,
    serviceTypes: ["7/24 Oto Çekici", "Kayar Kasa Araç Taşıma", "Akü ve Lastik Yol Yardımı"],
    faqs: [
      {
        q: `${simpleName} bölgesine gece çekici geliyor mu?`,
        a: `Evet. ${seed.label} ve yakın bağlantı yolları için 7 gün 24 saat çağrı alıyoruz. Canlı konum paylaştığınızda trafik ve ekip durumuna göre tahmini varış süresini anında iletiyoruz.`,
      },
      {
        q: "Çekici ücreti neye göre belirleniyor?",
        a: "Alış ve teslim noktası, aracın tipi, tekerleklerin dönüp dönmediği ve yükleme koşulları ücreti belirler. İşleme başlamadan önce fiyat bilgisini netleştiririz.",
      },
      {
        q: "Sancaktepe merkezden bu bölgeye varış ne kadar sürer?",
        a: "Sancaktepe Paşaköy merkez istasyonumuz ve çevre ilçelerdeki hazır ekiplerimiz sayesinde konuma göre genellikle 15 ile 30 dakika arasında ulaşım sağlanır.",
      },
    ],
    localGuide: [
      {
        heading: `${seed.label} için doğru çekici planı`,
        text: `${seed.landmark} çevresinde arızalı, kazalı veya çalışmayan araçlar için konumu ve araç durumunu kontrol ederiz. Dar sokak, kapalı otopark, kilitli tekerlek veya alçak şasi gibi ayrıntılara göre uygun yükleme ekipmanı seçilir.`,
      },
      {
        heading: "Konumdan servise kontrollü taşıma",
        text: "Aracın fotoğrafı ve teslim adresi paylaşıldığında rota ile yükleme yöntemi önceden planlanır. Araç platforma dört noktadan sabitlenir ve seçtiğiniz servis, otopark veya adrese güvenle taşınır.",
      },
    ],
    nearbySlugs: seed.nearby,
  };
});

export const findLocationBySlug = (slug: string) =>
  locationPages.find((location) => location.slug === slug);
