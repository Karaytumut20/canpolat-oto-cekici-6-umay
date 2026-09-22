import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  Compass,
  MapPin,
  Phone,
  PhoneCall,
  Shield,
  Truck,
  Wrench,
  AlertTriangle,
} from "lucide-react";
import { BrandLogo } from "@/components/brand-logo";
import { MobileMenu } from "@/components/mobile-menu";
import { siteConfig } from "@/lib/site-config";
import { locationPages, findLocationBySlug } from "@/lib/locations-data";
import { servicesData } from "@/lib/services-data";
import { blogPosts } from "@/lib/blog-data";
import {
  generateLocalBusinessSchema,
  generateBreadcrumbSchema,
  generateFaqSchema,
} from "@/lib/seo-schema";

export async function generateStaticParams() {
  return locationPages.map((loc) => ({ slug: loc.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const loc = findLocationBySlug(slug);
  if (!loc) return {};

  const url = `${siteConfig.domain}/${loc.slug}`;

  return {
    title: loc.title,
    description: loc.description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: "tr_TR",
      url,
      siteName: siteConfig.name,
      title: loc.title,
      description: loc.description,
      images: [
        {
          url: `${siteConfig.domain}${siteConfig.hero}`,
          width: 1200,
          height: 675,
          alt: `${loc.name} Umay Oto Kurtarıcı`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: loc.title,
      description: loc.description,
      images: [`${siteConfig.domain}${siteConfig.hero}`],
    },
  };
}

export default async function LocationPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const loc = findLocationBySlug(slug);

  if (!loc) {
    notFound();
  }

  const pageUrl = `${siteConfig.domain}/${loc.slug}`;
  const localBusinessJsonLd = generateLocalBusinessSchema(pageUrl);
  const breadcrumbJsonLd = generateBreadcrumbSchema([
    { name: "Ana Sayfa", url: siteConfig.domain },
    { name: "Hizmet Bölgeleri", url: `${siteConfig.domain}/hizmet-bolgeleri` },
    { name: loc.name, url: pageUrl },
  ]);
  const faqJsonLd = generateFaqSchema(loc.faqs);

  const nearbyLocations = loc.nearbySlugs
    .map((s) => findLocationBySlug(s))
    .filter((item): item is NonNullable<typeof item> => Boolean(item));

  return (
    <main className="area-page">
      {/* Header */}
      <header className="site-header">
        <Link href="/" className="brand" aria-label="Umay Oto Kurtarıcı Ana Sayfa">
          <BrandLogo variant="horizontal" />
        </Link>
        <nav aria-label="Navigasyon">
          <Link href="/#hizmetler">Hizmetler</Link>
          <Link href="/#bolgeler">Bölgeler</Link>
          <Link href="/sancaktepe-oto-cekici">Sancaktepe</Link>
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

      {/* Hero Banner */}
      <section className="area-hero">
        <div className="area-crumb">
          <Link href="/">Ana Sayfa</Link>
          <span>/</span>
          <Link href="/hizmet-bolgeleri">Bölgeler</Link>
          <span>/</span>
          <span className="text-white">{loc.name}</span>
        </div>
        <div className="area-hero-copy">
          <div className="eyebrow">
            <span /> {loc.heroKicker}
          </div>
          <h1>{loc.h1}</h1>
          <p>{loc.description}</p>
          <div className="area-hero-actions">
            <a
              className="primary-cta"
              href={`tel:${siteConfig.phone}`}
              aria-label={`${siteConfig.phoneDisplay} ara`}
            >
              <PhoneCall size={18} /> HEMEN ARA: {siteConfig.phoneDisplay}
            </a>
            <a
              className="secondary-cta"
              href={siteConfig.whatsapp}
              target="_blank"
              rel="noreferrer"
            >
              WHATSAPP İLE KONUM AT
            </a>
          </div>
        </div>
        <div className="area-status">
          <span className="live-dot" />
          <span>7/24 ÇAĞRI HATTI</span>
          <div>
            <Clock size={20} />
            <b>Konuma göre</b>
            <small>Tahmini süre telefonda paylaşılır</small>
          </div>
        </div>
      </section>

      {/* Main Content Body */}
      <section className="area-content section-pad">
        <article>
          <small>{loc.district.toUpperCase()} BÖLGE REHBERİ</small>
          <h2>
            {loc.name} Güvenli ve<br />
            <em>Hızlı Araç Kurtarma.</em>
          </h2>

          {loc.localGuide.map((item, idx) => (
            <div key={idx} className="mb-8">
              <h3 className="text-xl font-bold mb-3 tracking-tight">
                {item.heading}
              </h3>
              <p>{item.text}</p>
            </div>
          ))}

          {/* Regional Roads and Specific Context */}
          <div className="p-6 rounded-lg bg-slate-900/70 border border-slate-800 my-8">
            <h4 className="text-sm font-bold text-amber-500 uppercase tracking-wider flex items-center gap-2 mb-3">
              <Compass size={18} /> {loc.name} Bağlantı Yolları ve Arterler
            </h4>
            <div className="flex flex-wrap gap-2 mb-4">
              {loc.roads.map((road) => (
                <span
                  key={road}
                  className="px-3 py-1 rounded bg-slate-800 text-slate-300 text-xs font-semibold"
                >
                  {road}
                </span>
              ))}
            </div>
            <p className="text-slate-400 text-xs leading-relaxed m-0">
              Bu güzergahlarda meydana gelen akü bitmesi, lastik yarılması, kaza veya motor arızalarında
                  ekibimiz konum ve trafik durumunu kontrol ederek uygun ulaşım planını oluşturur.
            </p>
          </div>

          {/* Emergency Step Checklist */}
          <div className="my-8">
            <h3 className="text-xl font-bold mb-3">
              {loc.name} Çevresinde Yolda Kalınca Ne Yapmalısınız?
            </h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3 p-4 rounded-md bg-slate-900/50 border border-slate-800">
                <AlertTriangle className="text-amber-500 shrink-0 mt-0.5" size={20} />
                <div className="text-sm text-slate-300">
                  <strong className="text-white block mb-1">1. Can Güvenliğini Sağlayın</strong>
                  Aracı mümkünse emniyet şeridine çekin, dörtlüleri yakın ve araçta beklemeyin. Yol kenarındaki
                  bariyerlerin arkasına geçin.
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-md bg-slate-900/50 border border-slate-800">
                <Compass className="text-amber-500 shrink-0 mt-0.5" size={20} />
                <div className="text-sm text-slate-300">
                  <strong className="text-white block mb-1">2. Canlı Konumunuzu Paylaşın</strong>
                  WhatsApp üzerinden tek tıkla konum paylaşarak ekibimizin tam yerinizi navigasyonda görmesini sağlayın.
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-md bg-slate-900/50 border border-slate-800">
                <Truck className="text-amber-500 shrink-0 mt-0.5" size={20} />
                <div className="text-sm text-slate-300">
                  <strong className="text-white block mb-1">3. Güvenli Yükleme ve Nakil</strong>
                  Aracınız hidrolik kayar kasa çekicimize çelik tambur ve takozlarla hasarsız sabitlenerek istediğiniz
                  servise taşınır.
                </div>
              </div>
            </div>
          </div>

          {/* Service FAQs */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-6">
              {loc.name} Hakkında Sıkça Sorulanlar
            </h3>
            <div className="faq-list">
              {loc.faqs.map((faq, i) => (
                <details key={faq.q} className="border-b border-slate-800">
                  <summary className="cursor-pointer py-4 flex items-center justify-between text-base font-bold">
                    <span>0{i + 1}. {faq.q}</span>
                    <span className="text-amber-500 text-xl font-mono">+</span>
                  </summary>
                  <p className="text-slate-400 text-sm pb-4 pl-6 leading-relaxed m-0">
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </article>

        {/* Sidebar */}
        <aside>
          <h3 className="text-amber-500 font-bold mb-4 uppercase tracking-wider text-sm flex items-center gap-2">
            <Shield size={18} /> {loc.name} Hizmet Standartlarımız
          </h3>
          <ul className="space-y-2 mb-8">
            <li>
              <CheckCircle2 size={16} /> 7/24 Kesintisiz Nöbetçi Çekici
            </li>
            <li>
              <CheckCircle2 size={16} /> Araç Tipine Uygun Yükleme Planı
            </li>
            <li>
              <CheckCircle2 size={16} /> İşlem Öncesi Net Fiyat Bilgisi
            </li>
            <li>
              <CheckCircle2 size={16} /> Otomatik Vites &amp; Kilitli Tekerlek Aparatı
            </li>
            <li>
              <CheckCircle2 size={16} /> Yerinde Akü Takviye ve Lastik Desteği
            </li>
            <li>
              <CheckCircle2 size={16} /> Sanayi ve Yetkili Servislere Doğrudan Teslim
            </li>
          </ul>

          <div className="p-4 rounded-lg bg-slate-900 border border-slate-800 text-center mb-6">
            <div className="text-xs text-slate-400 mb-1">Acil Destek Hattı</div>
            <a
              href={`tel:${siteConfig.phone}`}
              className="font-extrabold text-xl text-amber-500 hover:text-amber-400 block tracking-tight"
            >
              {siteConfig.phoneDisplay}
            </a>
            <div className="text-[11px] text-slate-500 mt-1">
              {loc.name} ve çevresine anında çıkış
            </div>
          </div>

          <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
            Popüler Hizmetler
          </h4>
          <div className="flex flex-col gap-2">
            {servicesData.slice(0, 5).map((svc) => (
              <Link
                key={svc.slug}
                href={`/hizmetler/${svc.slug}`}
                className="text-xs text-slate-300 hover:text-amber-500 flex items-center justify-between p-2.5 rounded bg-slate-900/60 border border-slate-800/80 transition-colors"
              >
                <span>{svc.name}</span>
                <ArrowRight size={14} />
              </Link>
            ))}
          </div>
        </aside>
      </section>

      {/* Nearby Regional Internal Links */}
      {nearbyLocations.length > 0 && (
        <section className="nearby section-pad">
          <small>YAKIN BÖLGELER &amp; MAHALLELER</small>
          <h2>
            {loc.name} Çevresindeki<br />
            <em>Diğer Hizmet Noktalarımız.</em>
          </h2>
          <div>
            {nearbyLocations.map((nearby) => (
              <Link href={`/${nearby.slug}`} key={nearby.slug}>
                <span>{nearby.name}</span>
                <ArrowRight size={16} />
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Callout */}
      <section className="area-callout">
        <div>
          <small className="font-bold text-xs tracking-wider uppercase text-slate-900">
            {loc.name.toUpperCase()} İÇİN EN HIZLI ÇEKİCİ
          </small>
          <h2>Yolda Beklemeyin, Hemen Arayın.</h2>
          <p>Operatörümüz aramanızı anında karşılar, tahmini varış süresini bildirir.</p>
        </div>
        <a href={`tel:${siteConfig.phone}`}>
          <Phone size={18} /> {siteConfig.phoneDisplay}
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
          <small>{loc.name} ve İstanbul Anadolu Yakası 7/24</small>
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

      {/* JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </main>
  );
}
