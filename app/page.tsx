import Image from "next/image";
import Link from "next/link";
import {
  ArrowDownRight,
  ArrowUpRight,
  BatteryCharging,
  CarFront,
  Clock3,
  MapPin,
  Navigation,
  Phone,
  PhoneCall,
  ShieldCheck,
  Truck,
  Wrench,
  CheckCircle2,
} from "lucide-react";
import { BrandLogo } from "@/components/brand-logo";
import { MobileMenu } from "@/components/mobile-menu";
import { locationPages } from "@/lib/locations-data";
import { servicesData } from "@/lib/services-data";
import { generateFaqSchema, generateLocalBusinessSchema } from "@/lib/seo-schema";
import { siteConfig } from "@/lib/site-config";

const icons = [Truck, CarFront, Clock3, ShieldCheck, BatteryCharging, Wrench, Navigation, MapPin];

const faqs = [
  {
    q: "Hangi bölgelerde aktif çekici hizmeti veriyorsunuz?",
    a: "Umay Oto Kurtarıcı; Sancaktepe Paşaköy merkez istasyonundan yönetilmekte olup yalnızca Sancaktepe, Çekmeköy, Sultanbeyli ve Pendik ilçeleri ile bu bölgeleri birbirine bağlayan TEM Otoyolu, Kuzey Marmara, Şile Otoyolu ve D-100 (E-5) hatlarında 7/24 kesintisiz hizmet vermektedir.",
  },
  {
    q: "Sancaktepe, Çekmeköy, Sultanbeyli veya Pendik'e çekici ne kadar sürede gelir?",
    a: "Paşaköy ana garajımız ve bu 4 ilçede hazır bekleyen nöbetçi kayar kasa araçlarımız sayesinde konuma ve trafik yoğunluğuna göre ortalama 15 ile 30 dakika arasında adresinize ulaşılır.",
  },
  {
    q: "Çekici fiyatını işlem başlamadan önce öğrenebilir miyim?",
    a: "Evet. WhatsApp'tan canlı konum, araç tipi (binek, SUV, ticari), tekerleklerin ve şanzımanın durumunu ilettiğinizde mesafe hesaplanır ve ödenecek net ücret yola çıkılmadan önce paylaşılır.",
  },
  {
    q: "Gece veya resmi tatillerde nöbetçi çekici var mı?",
    a: "Evet. Telefon ve WhatsApp hattımız 7 gün 24 saat kesintisiz açıktır. Gece saatlerinde, pazar günleri ve resmi tatillerde aynı titizlikle hizmet sağlanır.",
  },
  {
    q: "WhatsApp'tan hangi bilgileri göndermeliyim?",
    a: "Canlı konum, aracın marka ve modeli, yolda kalma nedeni (kaza, şanzıman kilidi, akü, lastik) ve aracın fotoğrafı yeterlidir. Kapalı otoparktaysanız kat ve tavan yüksekliği bilgisini de ekleyiniz.",
  },
];

// 4 İlçeden en çok aranan ve kritik konumlar
const featuredAreaSlugs = [
  "sancaktepe-oto-cekici",
  "pasakoy-oto-cekici",
  "sarigazi-oto-cekici",
  "samandira-oto-cekici",
  "yenidogan-oto-cekici",
  "cekmekoy-oto-cekici",
  "tasdelen-oto-cekici",
  "alemdag-oto-cekici",
  "madenler-oto-cekici",
  "sultanbeyli-oto-cekici",
  "battalgazi-oto-cekici",
  "hasanpasa-oto-cekici",
  "pendik-oto-cekici",
  "kurtkoy-oto-cekici",
  "yenisehir-oto-cekici",
  "kaynarca-oto-cekici",
];

const featuredAreas = featuredAreaSlugs
  .map((slug) => locationPages.find((loc) => loc.slug === slug))
  .filter((item): item is NonNullable<typeof item> => Boolean(item));

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <Link className="brand" href="/" aria-label="Umay Oto Kurtarıcı ana sayfa">
          <BrandLogo variant="horizontal" />
        </Link>
        <nav aria-label="Ana menü">
          <Link href="/#hizmetler">Hizmetler</Link>
          <Link href="/hizmet-bolgeleri">Hizmet Bölgeleri</Link>
          <Link href="/sancaktepe-oto-cekici">Sancaktepe</Link>
          <Link href="/cekmekoy-oto-cekici">Çekmeköy</Link>
          <Link href="/sultanbeyli-oto-cekici">Sultanbeyli</Link>
          <Link href="/pendik-oto-cekici">Pendik</Link>
          <Link href="/hakkimizda">Hakkımızda</Link>
          <Link href="/iletisim">İletişim</Link>
        </nav>
        <a className="header-call" href={`tel:${siteConfig.phone}`}>
          <Phone size={18} />
          <span>
            <small>7/24 AÇIK</small>
            {siteConfig.phoneDisplay}
          </span>
        </a>
        <MobileMenu
          links={[
            { href: "/#hizmetler", label: "Hizmetlerimiz" },
            { href: "/hizmet-bolgeleri", label: "Hizmet Bölgeleri" },
            { href: "/sancaktepe-oto-cekici", label: "Sancaktepe Çekici" },
            { href: "/cekmekoy-oto-cekici", label: "Çekmeköy Çekici" },
            { href: "/sultanbeyli-oto-cekici", label: "Sultanbeyli Çekici" },
            { href: "/pendik-oto-cekici", label: "Pendik Çekici" },
            { href: "/hakkimizda", label: "Hakkımızda" },
            { href: "/iletisim", label: "İletişim & Harita" },
          ]}
        />
      </header>

      {/* Hero Section */}
      <section className="hero" id="anasayfa">
        <Image
          className="hero-image"
          src={siteConfig.hero}
          alt="Sancaktepe, Çekmeköy, Sultanbeyli ve Pendik'te kayar kasa oto çekici"
          fill
          priority
          sizes="100vw"
        />
        <div className="hero-overlay" />
        <div className="hero-stamp" aria-hidden="true">
          SANCAKTEPE · 4 İLÇE / 24
        </div>
        <div className="hero-content">
          <div className="hero-kicker">
            <span>SANCAKTEPE MERKEZLİ FİLO</span>
            <b>7 GÜN / 24 SAAT</b>
          </div>
          <h1>
            YOLDA KALDIYSANIZ<br />
            <em>KONUMU GÖNDERİN.</em>
          </h1>
          <p className="hero-lead">
            Sancaktepe merkez garajımızdan; Çekmeköy, Sultanbeyli, Pendik ve bağlantı otoyollarında arızalı ya da kazalı aracınız için doğru ekipmanı yönlendiriyoruz.
          </p>
          <div className="hero-actions">
            <a className="hero-primary-call" href={`tel:${siteConfig.phone}`}>
              <PhoneCall />
              <span>
                <small>ŞİMDİ ARA</small>
                {siteConfig.phoneDisplay}
              </span>
            </a>
            <a
              className="hero-whatsapp-btn"
              href={siteConfig.whatsapp}
              target="_blank"
              rel="noreferrer"
            >
              <span className="whatsapp-dot" />
              <span>
                <small>WHATSAPP</small>Canlı Konum Gönder
              </span>
            </a>
          </div>
          <div className="trust-row">
            <span>
              <Clock3 /> 24 Saat Açık
            </span>
            <span>
              <MapPin /> Paşaköy Merkez Garaj
            </span>
            <span>
              <ShieldCheck /> 4 İlçede Hazır Ekip
            </span>
          </div>
        </div>
        <aside className="hero-dispatch">
          <div className="dispatch-code">
            <span>ÇAĞRI</span>
            <strong>7/24</strong>
          </div>
          <Image
            src={siteConfig.logo}
            alt="Umay Oto Kurtarıcı logosu"
            width={1672}
            height={944}
            priority
          />
          <div className="dispatch-address">
            <MapPin />
            <span>
              <small>MERKEZ OFİS &amp; İSTASYON</small>Paşaköy · Lokman Sokak No:4
            </span>
          </div>
          <a href={siteConfig.mapsUrl} target="_blank" rel="noreferrer">
            YOL TARİFİ AL <ArrowUpRight />
          </a>
        </aside>
        <a className="scroll-cue" href="#hizmetler">
          <span>HİZMETLER</span>
          <ArrowDownRight />
        </a>
      </section>

      {/* Proof Strip */}
      <section className="proof-strip" aria-label="Hizmet bilgileri">
        <span>01 / SANCAKTEPE (MERKEZ)</span>
        <span>02 / ÇEKMEKÖY</span>
        <span>03 / SULTANBEYLİ</span>
        <span>04 / PENDİK</span>
      </section>

      {/* Services Section */}
      <section className="services section-pad" id="hizmetler">
        <div className="section-heading">
          <div>
            <small>SAHA SERVİSLERİ</small>
            <h2>
              HER DURUM İÇİN<br />
              <em>AYNI ÇEKİCİ GELMEZ.</em>
            </h2>
          </div>
          <p>
            Aracın bulunduğu zemin, vites durumu, tekerlekleri ve teslim noktası doğru ekipmanı belirler. Konumu ve bir fotoğrafı WhatsApp&apos;tan paylaşmanız yeterlidir.
          </p>
        </div>
        <div className="service-grid">
          {servicesData.map((service, index) => {
            const Icon = icons[index] ?? Truck;
            return (
              <article className="service-card" key={service.slug}>
                <div className="service-card-top">
                  <span>0{index + 1}</span>
                  <Icon />
                </div>
                <h3>{service.name}</h3>
                <p>{service.summary}</p>
                <Link href={`/hizmetler/${service.slug}`}>
                  DETAYI AÇ <ArrowUpRight />
                </Link>
              </article>
            );
          })}
        </div>
      </section>

      {/* Dispatch Steps */}
      <section className="dispatch section-pad">
        <div className="dispatch-copy">
          <small>ÇAĞRIDAN TESLİME</small>
          <h2>
            ÜÇ NET<br />
            <em>ADIM.</em>
          </h2>
          <p>
            Belirsizliği ortadan kaldıran şeffaf süreç: nerede olduğunuzu bildirin, araç durumunu iletin, sabit fiyatla yola çıkalım.
          </p>
        </div>
        <ol className="dispatch-steps">
          <li>
            <b>01</b>
            <span>
              <strong>Konumu işaretleyin</strong>
              Canlı konum, yol yönü ve varsa kat ya da kapalı otopark bilgisini gönderin.
            </span>
          </li>
          <li>
            <b>02</b>
            <span>
              <strong>Aracı gösterin</strong>
              Marka-model, arıza ve tekerlek durumunu kısa bir fotoğrafla WhatsApp&apos;tan iletin.
            </span>
          </li>
          <li>
            <b>03</b>
            <span>
              <strong>Rotayı netleştirin</strong>
              Net fiyat ve tahmini varış süresi paylaşıldıktan sonra en yakın ekip hareket eder.
            </span>
          </li>
        </ol>
      </section>

      {/* 4 Targeted Districts Overview & Board */}
      <section className="areas section-pad" id="bolgeler">
        <div className="section-heading">
          <div>
            <small>YALNIZCA 4 BÖLGE ODAKLI HİZMET</small>
            <h2>
              SANCAKTEPE MERKEZLİ<br />
              <em>4 İLÇEDE 7/24 SAHADAYIZ.</em>
            </h2>
          </div>
          <p>
            Umay Oto Kurtarıcı; operasyon gücünü dağıtmaz. Paşaköy merkez istasyonundan Sancaktepe, Çekmeköy, Sultanbeyli ve Pendik ilçelerine odaklanarak ortalama 15-30 dakikada en hızlı müdahaleyi sağlar.
          </p>
        </div>

        {/* 4 District Highlight Cards */}
        <div className="district-grid">
          <Link href="/sancaktepe-oto-cekici" className="district-card">
            <div>
              <span className="district-card-badge">★ ANA MERKEZ BÖLGE</span>
              <h3>Sancaktepe</h3>
              <p>
                Paşaköy merkez garajımız, Sarıgazi, Samandıra, Yenidoğan ve Şehir Hastanesi çevresi 7/24 aktif.
              </p>
            </div>
            <div className="district-card-meta">
              <span><CheckCircle2 size={14} /> 10-20 dk Varış</span>
              <ArrowUpRight size={16} />
            </div>
          </Link>

          <Link href="/cekmekoy-oto-cekici" className="district-card">
            <div>
              <span className="district-card-badge">KOMŞU İLÇE HATTI</span>
              <h3>Çekmeköy</h3>
              <p>
                Taşdelen, Alemdağ, Madenler, Şile Otoyolu ve orman geçiş güzergahlarında hazır nöbetçi platform.
              </p>
            </div>
            <div className="district-card-meta">
              <span><CheckCircle2 size={14} /> 15-25 dk Varış</span>
              <ArrowUpRight size={16} />
            </div>
          </Link>

          <Link href="/sultanbeyli-oto-cekici" className="district-card">
            <div>
              <span className="district-card-badge">KOMŞU İLÇE HATTI</span>
              <h3>Sultanbeyli</h3>
              <p>
                Battalgazi, Hasanpaşa, Fatih Bulvarı, Sanayi Sitesi ve TEM Sultanbeyli gişelerinde anında çıkış.
              </p>
            </div>
            <div className="district-card-meta">
              <span><CheckCircle2 size={14} /> 15-25 dk Varış</span>
              <ArrowUpRight size={16} />
            </div>
          </Link>

          <Link href="/pendik-oto-cekici" className="district-card">
            <div>
              <span className="district-card-badge">KOMŞU İLÇE HATTI</span>
              <h3>Pendik</h3>
              <p>
                Kurtköy, Yenişehir, Kaynarca, Sabiha Gökçen Havalimanı Yolu ve D-100 E-5 hattında 7/24 kayar kasa.
              </p>
            </div>
            <div className="district-card-meta">
              <span><CheckCircle2 size={14} /> 15-30 dk Varış</span>
              <ArrowUpRight size={16} />
            </div>
          </Link>
        </div>

        {/* Featured Neighborhoods List */}
        <div className="area-board">
          <div className="area-board-head">
            <span>EN ÇOK ARANAN MAHALLELER &amp; NOKTALAR</span>
            <span>DURUM</span>
          </div>
          {featuredAreas.map((area, index) => (
            <Link href={`/${area.slug}`} key={area.slug}>
              <b>{String(index + 1).padStart(2, "0")}</b>
              <span>{area.name}</span>
              <small>7/24 ÇAĞRI</small>
              <ArrowUpRight />
            </Link>
          ))}
        </div>

        <Link className="text-link" href="/hizmet-bolgeleri">
          TÜM MAHALLELERİ VE OTOYOL HATLARI GÖR <ArrowUpRight />
        </Link>
      </section>

      {/* Location & Map Section */}
      <section className="location-section section-pad" id="iletisim">
        <div className="location-copy">
          <small>PAŞAKÖY MERKEZ İSTASYON</small>
          <h2>
            HARİTADA AÇIN.<br />
            <em>ROTAYI BAŞLATIN.</em>
          </h2>
          <p>{siteConfig.address}</p>
          <div className="map-nap">
            <span>
              <b>Telefon</b>
              <a href={`tel:${siteConfig.phone}`}>{siteConfig.phoneDisplay}</a>
            </span>
            <span>
              <b>Çalışma</b>7 gün 24 saat kesintisiz
            </span>
            <span>
              <b>Bölgeler</b>Sancaktepe · Çekmeköy · Sultanbeyli · Pendik
            </span>
            <span>
              <b>Harita puanı</b>Google Haritalar · 19 değerlendirme (5.0)
            </span>
          </div>
          <a
            className="map-directions"
            href={siteConfig.mapsUrl}
            target="_blank"
            rel="noreferrer"
          >
            <Navigation /> GOOGLE HARİTALAR&apos;DA YOL TARİFİ <ArrowUpRight />
          </a>
        </div>
        <div className="map-frame">
          <iframe
            src={siteConfig.mapsEmbed}
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            title="Sancaktepe Çekici Umay Oto Kurtarıcı konumu"
          />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section section-pad">
        <div className="section-heading">
          <div>
            <small>ARAMADAN ÖNCE</small>
            <h2>
              SIK SORULAN<br />
              <em>SORULAR.</em>
            </h2>
          </div>
          <p>
            Konum, araç tipi ve teslim adresi hazırsa ekibimiz en kısa sürede yönlendirilir.
          </p>
        </div>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <details key={faq.q}>
              <summary>
                <span>0{index + 1}</span>
                {faq.q}
                <b>+</b>
              </summary>
              <p>{faq.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="final-cta">
        <div>
          <small>UMAY OTO KURTARICI</small>
          <h2>
            YOL AÇIK.<br />
            <em>HAT AÇIK.</em>
          </h2>
        </div>
        <a href={`tel:${siteConfig.phone}`}>
          <PhoneCall /> {siteConfig.phoneDisplay}
          <ArrowUpRight />
        </a>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="brand">
          <BrandLogo footer />
        </div>
        <div className="footer-name">
          <b>{siteConfig.name}</b>
          <span>{siteConfig.slogan}</span>
          <small>Sancaktepe, Çekmeköy, Sultanbeyli, Pendik · 7/24 Açık</small>
        </div>
        <address>
          {siteConfig.address}
          <a href={siteConfig.mapsUrl} target="_blank" rel="noreferrer">
            Google Haritalar&apos;da yol tarifi
          </a>
        </address>
        <div>
          <a href={`tel:${siteConfig.phone}`}>{siteConfig.phoneDisplay}</a>
          <small>Telefon veya WhatsApp ile anında ulaşın</small>
          <Link href="/hizmet-bolgeleri">Tüm Hizmet Bölgeleri</Link>
        </div>
      </footer>

      {/* Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateLocalBusinessSchema(siteConfig.domain)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateFaqSchema(faqs)),
        }}
      />
    </main>
  );
}
