import type { Metadata } from "next";
import Link from "next/link";
import {
  Clock,
  ExternalLink,
  Mail,
  MapPin,
  MessageSquare,
  Navigation,
  Phone,
  PhoneCall,
  Shield,
} from "lucide-react";
import { BrandLogo } from "@/components/brand-logo";
import { MobileMenu } from "@/components/mobile-menu";
import { siteConfig } from "@/lib/site-config";
import {
  generateLocalBusinessSchema,
  generateBreadcrumbSchema,
} from "@/lib/seo-schema";

export const metadata: Metadata = {
  title: "İletişim & Konum | Umay Oto Kurtarıcı - Sancaktepe Paşaköy",
  description:
    "Umay Oto Kurtarıcı iletişim bilgileri. Adres: Paşaköy, Lokman Sokak No:4 Sancaktepe / İstanbul. 7/24 Telefon: 0530 955 94 52.",
  alternates: { canonical: `${siteConfig.domain}/iletisim` },
  openGraph: {
    title: "İletişim & Konum | Umay Oto Kurtarıcı",
    description:
      "Sancaktepe Paşaköy merkezli oto çekici ofisimiz, Google Haritalar konumu ve 7/24 telefon numaramız.",
    url: `${siteConfig.domain}/iletisim`,
    siteName: siteConfig.name,
    images: [{ url: `${siteConfig.domain}${siteConfig.hero}` }],
  },
};

export default function ContactPage() {
  const localBusinessJsonLd = generateLocalBusinessSchema(
    `${siteConfig.domain}/iletisim`
  );
  const breadcrumbJsonLd = generateBreadcrumbSchema([
    { name: "Ana Sayfa", url: siteConfig.domain },
    { name: "İletişim", url: `${siteConfig.domain}/iletisim` },
  ]);

  return (
    <main className="seo-page">
      {/* Header */}
      <header className="site-header">
        <Link href="/" className="brand" aria-label="Umay Oto Kurtarıcı Ana Sayfa">
          <BrandLogo variant="horizontal" />
        </Link>
        <nav aria-label="Navigasyon">
          <Link href="/#hizmetler">Hizmetler</Link>
          <Link href="/#bolgeler">Bölgeler</Link>
          <Link href="/blog">Rehber</Link>
          <Link href="/hakkimizda">Hakkımızda</Link>
          <Link href="/iletisim">İletişim</Link>
        </nav>
        <a className="header-call" href={`tel:${siteConfig.phone}`}>
          <Phone size={18} /> {siteConfig.phoneDisplay}
        </a>
        <MobileMenu
          links={[
            { href: "/#hizmetler", label: "Hizmetlerimiz" },
            { href: "/#bolgeler", label: "Hizmet Bölgeleri" },
            { href: "/blog", label: "Bilgi Rehberi" },
            { href: "/hakkimizda", label: "Hakkımızda" },
            { href: "/iletisim", label: "İletişim & Harita" },
          ]}
        />
      </header>

      {/* Hero */}
      <section className="area-hero">
        <div className="area-crumb">
          <Link href="/">Ana Sayfa</Link>
          <span>/</span>
          <span className="text-white">İletişim &amp; Konum</span>
        </div>
        <div className="area-hero-copy">
          <div className="eyebrow">
            <span /> 7/24 KESİNTİSİZ ÇAĞRI VE DESTEK HATTI
          </div>
          <h1>İletişim ve Google Haritalar Konumu</h1>
          <p>
            Sancaktepe Paşaköy merkezli ofisimiz, 7/24 aktif nöbetçi telefonumuz ve anında canlı
            konum alabileceğiniz WhatsApp hattımız ile bir tık uzağınızdayız.
          </p>
          <div className="area-hero-actions">
            <a className="primary-cta" href={`tel:${siteConfig.phone}`}>
              <PhoneCall size={18} /> {siteConfig.phoneDisplay}
            </a>
            <a
              className="secondary-cta"
              href={siteConfig.whatsapp}
              target="_blank"
              rel="noreferrer"
            >
              WHATSAPP İLE KONUM GÖNDER
            </a>
          </div>
        </div>
      </section>

      {/* Contact Details & Map */}
      <section className="section-pad bg-slate-950">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info Cards */}
          <div>
            <small className="text-amber-500 font-bold uppercase tracking-wider text-xs">
              İŞLETME VE ULAŞIM BİLGİLERİ
            </small>
            <h2 className="text-3xl font-extrabold text-white mt-2 mb-6 tracking-tight">
              Bize Nasıl Ulaşabilirsiniz?
            </h2>

            <div className="space-y-4">
              <div className="p-5 rounded-lg bg-slate-900 border border-slate-800 flex items-start gap-4">
                <Phone className="text-amber-500 shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="text-white font-bold text-sm">7/24 Acil Çağrı Merkezi</h4>
                  <a
                    href={`tel:${siteConfig.phone}`}
                    className="text-xl font-extrabold text-amber-500 hover:text-amber-400 block my-1"
                  >
                    {siteConfig.phoneDisplay}
                  </a>
                  <p className="text-slate-400 text-xs m-0">
                    Günün 24 saati bizzat nöbetçi kurtarma operatörümüz yanıt verir.
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-lg bg-slate-900 border border-slate-800 flex items-start gap-4">
                <MessageSquare className="text-green-500 shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="text-white font-bold text-sm">WhatsApp Canlı Konum Hattı</h4>
                  <a
                    href={siteConfig.whatsapp}
                    target="_blank"
                    rel="noreferrer"
                    className="text-base font-bold text-green-400 hover:text-green-300 block my-1 flex items-center gap-1.5"
                  >
                    Canlı Konum Gönder <ExternalLink size={14} />
                  </a>
                  <p className="text-slate-400 text-xs m-0">
                    Konumunuzu gönderin, en yakın ekibimiz anında rota oluştursun.
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-lg bg-slate-900 border border-slate-800 flex items-start gap-4">
                <MapPin className="text-amber-500 shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="text-white font-bold text-sm">Resmi İşletme ve Garaj Adresi</h4>
                  <p className="text-slate-200 text-sm font-semibold my-1">
                    {siteConfig.officialName}
                  </p>
                  <p className="text-slate-400 text-xs m-0 leading-relaxed">
                    {siteConfig.address}
                  </p>
                  <a
                    href={siteConfig.mapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-amber-500 font-bold mt-2 hover:underline"
                  >
                    Google Haritalar&apos;da Aç <ExternalLink size={12} />
                  </a>
                </div>
              </div>

              <div className="p-5 rounded-lg bg-slate-900 border border-slate-800 flex items-start gap-4">
                <Clock className="text-amber-500 shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="text-white font-bold text-sm">Çalışma ve Hizmet Saatleri</h4>
                  <p className="text-slate-200 text-sm font-semibold my-1">
                    Pazartesi - Pazar: 7 Gün 24 Saat Açık
                  </p>
                  <p className="text-slate-400 text-xs m-0">
                    Resmi tatiller, bayramlar ve hafta sonları dahil kesintisiz nöbetçi araçlar.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Responsive Map Embed */}
          <div>
            <small className="text-amber-500 font-bold uppercase tracking-wider text-xs">
              CANLI HARİTA KONUMU
            </small>
            <h3 className="text-2xl font-extrabold text-white mt-2 mb-4 tracking-tight">
              Sancaktepe Paşaköy İstasyonumuz
            </h3>
            <div className="map-frame rounded-xl overflow-hidden border-2 border-slate-800 shadow-2xl">
              <iframe
                src={siteConfig.mapsEmbed}
                width="100%"
                height="480"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Sancaktepe Çekici Umay Oto Kurtarıcı Harita Konumu"
              />
            </div>
            <div className="mt-4 flex items-center justify-between p-4 rounded-lg bg-slate-900 border border-slate-800">
              <span className="text-xs text-slate-400">
                Konumumuza navigasyonla ulaşmak için:
              </span>
              <a
                href={siteConfig.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="text-xs font-bold text-amber-500 hover:text-amber-400 flex items-center gap-1"
              >
                Yol Tarifi Al <Navigation size={13} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="brand">
          <BrandLogo footer />
        </div>
        <div className="footer-name">
          <b>{siteConfig.name}</b>
          <span>{siteConfig.slogan}</span>
          <small>7 Gün 24 Saat Kesintisiz Hizmet</small>
        </div>
        <address>
          <strong>Merkez Ofis:</strong>
          <br />
          {siteConfig.address}
          <a href={siteConfig.mapsUrl} target="_blank" rel="noreferrer">
            Google Haritalar&apos;da Yol Tarifi
          </a>
        </address>
        <div>
          <a href={`tel:${siteConfig.phone}`}>{siteConfig.phoneDisplay}</a>
          <small>Hemen Arayın veya WhatsApp&apos;tan Konum Atın</small>
        </div>
      </footer>

      {/* Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
    </main>
  );
}
