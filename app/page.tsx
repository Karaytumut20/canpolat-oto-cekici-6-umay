import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight, ArrowUpRight, BatteryCharging, CarFront, Clock3, MapPin, Navigation, Phone, PhoneCall, ShieldCheck, Truck, Wrench } from "lucide-react";
import { BrandLogo } from "@/components/brand-logo";
import { MobileMenu } from "@/components/mobile-menu";
import { locationPages } from "@/lib/locations-data";
import { servicesData } from "@/lib/services-data";
import { generateFaqSchema, generateLocalBusinessSchema } from "@/lib/seo-schema";
import { siteConfig } from "@/lib/site-config";

const icons = [Truck, CarFront, Clock3, ShieldCheck, BatteryCharging, Wrench, Navigation, MapPin];
const faqs = [
  { q: "Sancaktepe'de çekici ne kadar sürede gelir?", a: "Varış süresi bulunduğunuz nokta, trafik ve aktif ekibin konumuna göre değişir. Canlı konum gönderdiğinizde tahmini süreyi telefonda paylaşırız." },
  { q: "Çekici fiyatını aramadan önce öğrenebilir miyim?", a: "Konum, teslim adresi, araç tipi ve tekerleklerin durumunu öğrendikten sonra işlem başlamadan fiyat bilgisini netleştiririz." },
  { q: "Gece veya resmi tatilde çekici geliyor mu?", a: "Evet. Telefon hattımız 7 gün 24 saat açıktır; gece, hafta sonu ve resmi tatillerde uygun ekip konuma göre yönlendirilir." },
  { q: "WhatsApp'tan hangi bilgileri göndermeliyim?", a: "Canlı konum, araç marka-modeli, arızanın kısa tarifi ve mümkünse aracın bulunduğu alanı gösteren fotoğraf gönderin. Kapalı otoparktaysanız kat ve tavan yüksekliğini de belirtin." },
];

const sancaktepeAreas = locationPages.filter((item) => item.district === "Sancaktepe").slice(0, 18);

export default function Home() {
  return <main>
    <header className="site-header">
      <Link className="brand" href="/" aria-label="Umay Oto Kurtarıcı ana sayfa"><BrandLogo variant="horizontal" /></Link>
      <nav aria-label="Ana menü"><Link href="/#hizmetler">Hizmetler</Link><Link href="/hizmet-bolgeleri">Hizmet Bölgeleri</Link><Link href="/sancaktepe-oto-cekici">Sancaktepe</Link><Link href="/hakkimizda">Hakkımızda</Link><Link href="/iletisim">İletişim</Link></nav>
      <a className="header-call" href={`tel:${siteConfig.phone}`}><Phone size={18} /><span><small>7/24 AÇIK</small>{siteConfig.phoneDisplay}</span></a>
      <MobileMenu links={[{ href: "/#hizmetler", label: "Hizmetler" }, { href: "/hizmet-bolgeleri", label: "Hizmet Bölgeleri" }, { href: "/sancaktepe-oto-cekici", label: "Sancaktepe Oto Çekici" }, { href: "/hakkimizda", label: "Hakkımızda" }, { href: "/iletisim", label: "İletişim & Harita" }]} />
    </header>

    <section className="hero" id="anasayfa">
      <Image className="hero-image" src={siteConfig.hero} alt="Sancaktepe'de kayar kasa oto çekici ile araç taşıma" fill priority sizes="100vw" />
      <div className="hero-overlay" />
      <div className="hero-stamp" aria-hidden="true">SANCAKTEPE / 24</div>
      <div className="hero-content">
        <div className="hero-kicker"><span>UMAY SAHA HATTI</span><b>7 GÜN / 24 SAAT</b></div>
        <h1>YOLDA KALDIYSANIZ<br /><em>KONUMU GÖNDERİN.</em></h1>
        <p className="hero-lead">Sancaktepe, Sarıgazi, Samandıra, Yenidoğan ve çevre yollarda arızalı ya da kazalı aracınız için doğru ekipmanı planlayalım.</p>
        <div className="hero-actions">
          <a className="hero-primary-call" href={`tel:${siteConfig.phone}`}><PhoneCall /><span><small>ŞİMDİ ARA</small>{siteConfig.phoneDisplay}</span></a>
          <a className="hero-whatsapp-btn" href={siteConfig.whatsapp} target="_blank" rel="noreferrer"><span className="whatsapp-dot" /><span><small>WHATSAPP</small>Canlı Konum Gönder</span></a>
        </div>
        <div className="trust-row"><span><Clock3 /> 24 saat açık</span><span><ShieldCheck /> Kontrollü yükleme</span><span><MapPin /> Paşaköy merkez</span></div>
      </div>
      <aside className="hero-dispatch">
        <div className="dispatch-code"><span>ÇAĞRI</span><strong>7/24</strong></div>
        <Image src={siteConfig.logo} alt="Umay Oto Kurtarıcı logosu" width={1672} height={944} priority />
        <div className="dispatch-address"><MapPin /><span><small>MERKEZ</small>Paşaköy · Lokman Sokak No:4</span></div>
        <a href={siteConfig.mapsUrl} target="_blank" rel="noreferrer">YOL TARİFİ AL <ArrowUpRight /></a>
      </aside>
      <a className="scroll-cue" href="#hizmetler"><span>HİZMETLER</span><ArrowDownRight /></a>
    </section>

    <section className="proof-strip" aria-label="Hizmet bilgileri"><span>01 / 7-24 TELEFON</span><span>02 / CANLI KONUM</span><span>03 / UYGUN EKİPMAN</span><span>04 / NET TESLİM ADRESİ</span></section>

    <section className="services section-pad" id="hizmetler">
      <div className="section-heading"><div><small>SAHA SERVİSLERİ</small><h2>HER DURUM İÇİN<br /><em>AYNI ÇEKİCİ GELMEZ.</em></h2></div><p>Aracın bulunduğu zemin, vites durumu, tekerlekleri ve teslim noktası doğru ekipmanı belirler. Konumu ve bir fotoğrafı paylaşmanız yeterli.</p></div>
      <div className="service-grid">{servicesData.map((service, index) => { const Icon = icons[index] ?? Truck; return <article className="service-card" key={service.slug}><div className="service-card-top"><span>0{index + 1}</span><Icon /></div><h3>{service.name}</h3><p>{service.summary}</p><Link href={`/hizmetler/${service.slug}`}>DETAYI AÇ <ArrowUpRight /></Link></article>; })}</div>
    </section>

    <section className="dispatch section-pad">
      <div className="dispatch-copy"><small>ÇAĞRIDAN TESLİME</small><h2>ÜÇ NET<br /><em>ADIM.</em></h2><p>Belirsizliği azaltan kısa bir akış: nerede olduğunuzu söyleyin, aracın durumunu gösterin, teslim noktasını seçin.</p></div>
      <ol className="dispatch-steps"><li><b>01</b><span><strong>Konumu işaretleyin</strong>Canlı konum, yol yönü ve varsa kat bilgisini gönderin.</span></li><li><b>02</b><span><strong>Aracı gösterin</strong>Marka-model, arıza ve tekerlek durumunu kısa bir fotoğrafla iletin.</span></li><li><b>03</b><span><strong>Rotayı netleştirin</strong>Fiyat ve tahmini süre paylaşıldıktan sonra ekip yola çıkar.</span></li></ol>
    </section>

    <section className="areas section-pad" id="bolgeler">
      <div className="section-heading"><div><small>SANCAKTEPE SAHA HARİTASI</small><h2>MAHALLE MAHALLE<br /><em>HİZMET SAYFALARI.</em></h2></div><p>Aradığınız bölgeyi seçin; o mahalleye yakın ana yollar, bağlantılar ve çekici çağırırken paylaşmanız gereken bilgileri görün.</p></div>
      <div className="area-board"><div className="area-board-head"><span>BÖLGE / MAHALLE</span><span>DURUM</span></div>{sancaktepeAreas.map((area, index) => <Link href={`/${area.slug}`} key={area.slug}><b>{String(index + 1).padStart(2, "0")}</b><span>{area.name}</span><small>7/24 ÇAĞRI</small><ArrowUpRight /></Link>)}</div>
      <Link className="text-link" href="/hizmet-bolgeleri">TÜM BÖLGELERİ GÖR <ArrowUpRight /></Link>
    </section>

    <section className="location-section section-pad" id="iletisim">
      <div className="location-copy"><small>PAŞAKÖY MERKEZ</small><h2>HARİTADA AÇIN.<br /><em>ROTAYI BAŞLATIN.</em></h2><p>{siteConfig.address}</p><div className="map-nap"><span><b>Telefon</b><a href={`tel:${siteConfig.phone}`}>{siteConfig.phoneDisplay}</a></span><span><b>Çalışma</b>7 gün 24 saat</span><span><b>Harita puanı</b>Google Haritalar · 19 değerlendirme</span></div><a className="map-directions" href={siteConfig.mapsUrl} target="_blank" rel="noreferrer"><Navigation /> GOOGLE HARİTALAR'DA YOL TARİFİ <ArrowUpRight /></a></div>
      <div className="map-frame"><iframe src={siteConfig.mapsEmbed} width="600" height="450" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="strict-origin-when-cross-origin" title="Sancaktepe Çekici Umay Oto Kurtarıcı konumu" /></div>
    </section>

    <section className="faq-section section-pad"><div className="section-heading"><div><small>ARAMADAN ÖNCE</small><h2>SIK SORULAN<br /><em>DÖRT SORU.</em></h2></div><p>Konum, araç tipi ve teslim adresi hazırsa doğru ekip ve fiyat daha hızlı netleşir.</p></div><div className="faq-list">{faqs.map((faq, index) => <details key={faq.q}><summary><span>0{index + 1}</span>{faq.q}<b>+</b></summary><p>{faq.a}</p></details>)}</div></section>

    <section className="final-cta"><div><small>UMAY OTO KURTARICI</small><h2>YOL AÇIK.<br /><em>HAT AÇIK.</em></h2></div><a href={`tel:${siteConfig.phone}`}><PhoneCall /> {siteConfig.phoneDisplay}<ArrowUpRight /></a></section>
    <footer className="footer"><div className="brand"><BrandLogo footer /></div><div className="footer-name"><b>{siteConfig.name}</b><span>{siteConfig.slogan}</span><small>7 gün 24 saat açık</small></div><address>{siteConfig.address}<a href={siteConfig.mapsUrl} target="_blank" rel="noreferrer">Google Haritalar'da yol tarifi</a></address><div><a href={`tel:${siteConfig.phone}`}>{siteConfig.phoneDisplay}</a><small>Telefon veya WhatsApp ile ulaşın</small><Link href="/hizmet-bolgeleri">Hizmet bölgeleri</Link></div></footer>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateLocalBusinessSchema(siteConfig.domain)) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFaqSchema(faqs)) }} />
  </main>;
}
