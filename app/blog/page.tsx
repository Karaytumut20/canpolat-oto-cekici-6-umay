import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, Calendar, Clock, Phone, PhoneCall } from "lucide-react";
import { BrandLogo } from "@/components/brand-logo";
import { MobileMenu } from "@/components/mobile-menu";
import { siteConfig } from "@/lib/site-config";
import { blogPosts } from "@/lib/blog-data";
import {
  generateLocalBusinessSchema,
  generateBreadcrumbSchema,
} from "@/lib/seo-schema";

export const metadata: Metadata = {
  title: "Yol Yardım & Oto Kurtarma Bilgi Rehberi | Umay Oto Kurtarıcı",
  description:
    "Yolda kaldığınızda yapmanız gerekenler, kaza tutanağı doldurma, akü takviyesi, lastik patlaması ve oto çekici fiyatları hakkında uzman rehberler.",
  alternates: { canonical: `${siteConfig.domain}/blog` },
  openGraph: {
    title: "Yol Yardım & Oto Kurtarma Bilgi Rehberi | Umay Oto Kurtarıcı",
    description:
      "Sürücüler için hayat kurtaran pratik bilgiler, kaza sonrası süreçler ve çekici çağırma kılavuzları.",
    url: `${siteConfig.domain}/blog`,
    siteName: siteConfig.name,
    images: [{ url: `${siteConfig.domain}${siteConfig.hero}` }],
  },
};

export default function BlogIndexPage() {
  const localBusinessJsonLd = generateLocalBusinessSchema(`${siteConfig.domain}/blog`);
  const breadcrumbJsonLd = generateBreadcrumbSchema([
    { name: "Ana Sayfa", url: siteConfig.domain },
    { name: "Bilgi Rehberi", url: `${siteConfig.domain}/blog` },
  ]);

  return (
    <main className="blog-page">
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
          <span className="text-white">Bilgi Rehberi</span>
        </div>
        <div className="area-hero-copy">
          <div className="eyebrow">
            <span /> SÜRÜCÜ BİLGİ MERKEZİ &amp; YOL REHBERİ
          </div>
          <h1>Yolda Kalınca İhtiyacınız Olan Tüm Bilgiler</h1>
          <p>
            Kaza tutanağından akü takviyesine, çekici fiyat hesaplamasından otoyol emniyet kurallarına
            kadar Umay Oto Kurtarıcı ekibinin hazırladığı rehber içerikler.
          </p>
          <div className="area-hero-actions">
            <a className="primary-cta" href={`tel:${siteConfig.phone}`}>
              <PhoneCall size={18} /> ACİL ÇEKİCİ: {siteConfig.phoneDisplay}
            </a>
            <a
              className="secondary-cta"
              href={siteConfig.whatsapp}
              target="_blank"
              rel="noreferrer"
            >
              WHATSAPP DANIŞMA
            </a>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="section-pad">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              className="bg-slate-900 border border-slate-800 hover:border-amber-500/50 rounded-lg p-6 flex flex-col justify-between transition-all hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-slate-400 mb-3">
                  <span className="text-amber-500 font-bold uppercase tracking-wider">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={13} /> {post.readTime}
                  </span>
                </div>
                <h2 className="text-lg font-bold text-white mb-2 tracking-tight line-clamp-2">
                  {post.title}
                </h2>
                <p className="text-slate-400 text-xs leading-relaxed mb-4 line-clamp-3">
                  {post.summary}
                </p>
              </div>
              <Link
                href={`/blog/${post.slug}`}
                className="text-amber-500 hover:text-amber-400 text-xs font-extrabold uppercase tracking-wider flex items-center justify-between pt-3 border-t border-slate-800"
              >
                <span>Rehberi Oku</span>
                <ArrowRight size={16} />
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* Callout */}
      <section className="area-callout">
        <div>
          <small className="font-bold text-xs tracking-wider uppercase text-slate-900">
            HER ZAMAN YANINIZDAYIZ
          </small>
          <h2>Acil Durumda Sorularınız mı Var?</h2>
          <p>Operatörlerimiz 7/24 telefonda arıza tespiti ve en uygun çözümü sunmak için hazır.</p>
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
