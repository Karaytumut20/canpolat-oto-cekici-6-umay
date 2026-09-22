import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2, Clock, Phone, PhoneCall, Shield, Wrench } from "lucide-react";
import { BrandLogo } from "@/components/brand-logo";
import { MobileMenu } from "@/components/mobile-menu";
import { siteConfig } from "@/lib/site-config";
import { servicesData, findServiceBySlug } from "@/lib/services-data";
import { findLocationBySlug } from "@/lib/locations-data";
import { generateLocalBusinessSchema, generateBreadcrumbSchema, generateFaqSchema } from "@/lib/seo-schema";

export function generateStaticParams() { return servicesData.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = findServiceBySlug(slug);
  if (!service) return {};
  const url = `${siteConfig.domain}/hizmetler/${service.slug}`;
  return { title: service.title, description: service.description, alternates: { canonical: url }, openGraph: { type: "website", locale: "tr_TR", url, siteName: siteConfig.name, title: service.title, description: service.description }, twitter: { card: "summary", title: service.title, description: service.description } };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = findServiceBySlug(slug);
  if (!service) notFound();
  const pageUrl = `${siteConfig.domain}/hizmetler/${service.slug}`;
  const relatedLocations = service.recommendedLocations.map(findLocationBySlug).filter((item): item is NonNullable<typeof item> => Boolean(item));
  return <main className="area-page">
    <header className="site-header"><Link href="/" className="brand" aria-label="Umay Oto Kurtarıcı ana sayfa"><BrandLogo variant="horizontal" /></Link><nav><Link href="/hizmetler">Hizmetler</Link><Link href="/hizmet-bolgeleri">Bölgeler</Link><Link href="/sancaktepe-oto-cekici">Sancaktepe</Link><Link href="/sarigazi-oto-cekici">Sarıgazi</Link><Link href="/iletisim">İletişim</Link></nav><a className="header-call" href={`tel:${siteConfig.phone}`}><Phone size={18} /> {siteConfig.phoneDisplay}</a><MobileMenu links={[{ href: "/hizmetler", label: "Hizmetler" }, { href: "/hizmet-bolgeleri", label: "Hizmet Bölgeleri" }, { href: "/sancaktepe-oto-cekici", label: "Sancaktepe" }, { href: "/sarigazi-oto-cekici", label: "Sarıgazi" }, { href: "/iletisim", label: "İletişim" }]} /></header>
    <section className="area-hero"><div className="area-crumb"><Link href="/">Ana Sayfa</Link><span>/</span><Link href="/hizmetler">Hizmetler</Link><span>/</span><span>{service.name}</span></div><div className="area-hero-copy"><div className="eyebrow"><span /> {service.heroKicker}</div><h1>{service.h1}</h1><p>{service.summary}</p><div className="area-hero-actions"><a className="primary-cta" href={`tel:${siteConfig.phone}`}><PhoneCall size={18} /> HEMEN ARA: {siteConfig.phoneDisplay}</a><a className="secondary-cta" href={siteConfig.whatsapp} target="_blank" rel="noreferrer">WHATSAPP İLE KONUM AT</a></div></div><div className="area-status"><span className="live-dot" /> 7/24 ÇAĞRI HATTI<div><Clock size={20} /><b>Gece · Gündüz</b><small>Konumunuza göre yönlendirme</small></div></div></section>
    <section className="area-content section-pad"><article><small>HİZMET KAPSAMI</small><h2>{service.shortTitle}<br /><em>Nasıl Uygulanır?</em></h2>{service.contentSections.map((section) => <section key={section.heading}><h3>{section.heading}</h3><p>{section.body}</p></section>)}<h3>Süreç nasıl ilerler?</h3><div className="service-process">{service.processSteps.map((step) => <div key={step.step}><b>{step.step}</b><span><strong>{step.title}</strong>{step.desc}</span></div>)}</div><div className="faq-list service-faq"><h3>Sık sorulanlar</h3>{service.faqs.map((faq, index) => <details key={faq.q}><summary><span>0{index + 1}</span>{faq.q}<b>+</b></summary><p>{faq.a}</p></details>)}</div></article><aside><h3><Shield size={18} /> BU HİZMETTE DİKKAT ETTİKLERİMİZ</h3><ul>{service.features.map((feature) => <li key={feature}><CheckCircle2 size={16} /> {feature}</li>)}</ul><div className="sidebar-call"><small>Acil destek hattı</small><a href={`tel:${siteConfig.phone}`}>{siteConfig.phoneDisplay}</a><span>Konum ve araç fotoğrafını hazır bulundurun.</span></div></aside></section>
    {relatedLocations.length > 0 && <section className="nearby section-pad"><small>BU HİZMETİN VERİLDİĞİ BÖLGELER</small><h2>Size Yakın<br /><em>Hizmet Sayfaları.</em></h2><div>{relatedLocations.map((location) => <Link href={`/${location.slug}`} key={location.slug}><span>{location.name}</span><ArrowRight size={16} /></Link>)}</div></section>}
    <section className="area-callout"><div><small>ARAÇ DURUMUNU TELEFONDA NETLEŞTİRELİM</small><h2>{service.name} için konum gönderin.</h2><p>Doğru ekipmanı ve tahmini varış bilgisini paylaşalım.</p></div><a href={`tel:${siteConfig.phone}`}><Phone size={18} /> {siteConfig.phoneDisplay}</a></section>
    <footer className="footer"><div className="brand"><BrandLogo footer /></div><div className="footer-name"><b>{siteConfig.name}</b><span>{siteConfig.slogan}</span></div><address>{siteConfig.address}<a href={siteConfig.mapsUrl} target="_blank" rel="noreferrer">Google Haritalar'da yol tarifi</a></address><div><a href={`tel:${siteConfig.phone}`}>{siteConfig.phoneDisplay}</a><small>7 gün 24 saat açık</small></div></footer>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateLocalBusinessSchema(pageUrl)) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbSchema([{ name: "Ana Sayfa", url: siteConfig.domain }, { name: "Hizmetler", url: `${siteConfig.domain}/hizmetler` }, { name: service.name, url: pageUrl }])) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFaqSchema(service.faqs)) }} />
  </main>;
}
