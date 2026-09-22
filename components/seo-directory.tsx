import Link from "next/link";
import { ArrowUpRight, Phone } from "lucide-react";
import { BrandLogo } from "@/components/brand-logo";
import { MobileMenu } from "@/components/mobile-menu";
import { siteConfig } from "@/lib/site-config";

type Group = { title: string; links: { name: string; href: string; detail?: string }[] };

export function SeoDirectory({ eyebrow, title, intro, groups }: { eyebrow: string; title: string; intro: string; groups: Group[] }) {
  return <main className="directory-page">
    <header className="site-header area-header">
      <Link className="brand" href="/"><BrandLogo variant="horizontal" /></Link>
      <nav><Link href="/hizmetler">Hizmetler</Link><Link href="/hizmet-bolgeleri">Bölgeler</Link><Link href="/sancaktepe-oto-cekici">Sancaktepe</Link><Link href="/sarigazi-oto-cekici">Sarıgazi</Link><Link href="/iletisim">İletişim</Link></nav>
      <a className="header-call" href={`tel:${siteConfig.phone}`}><Phone size={18} />{siteConfig.phoneDisplay}</a>
      <MobileMenu links={[{ href: "/hizmetler", label: "Hizmetler" }, { href: "/hizmet-bolgeleri", label: "Hizmet bölgeleri" }, { href: "/sancaktepe-oto-cekici", label: "Sancaktepe Oto Çekici" }, { href: "/sarigazi-oto-cekici", label: "Sarıgazi Oto Çekici" }, { href: "/iletisim", label: "İletişim & Harita" }]} />
    </header>
    <section className="directory-hero"><small>{eyebrow}</small><h1>{title}</h1><p>{intro}</p></section>
    <section className="directory-groups">{groups.map((group) => <article key={group.title}><h2>{group.title}</h2><div>{group.links.map((link) => <Link href={link.href} key={link.href}><span>{link.name}{link.detail && <small>{link.detail}</small>}</span><ArrowUpRight /></Link>)}</div></article>)}</section>
    <footer className="footer"><div className="brand"><BrandLogo footer /></div><div className="footer-name"><b>{siteConfig.shortName}</b><span>{siteConfig.slogan}</span></div><address>{siteConfig.address}<a href={siteConfig.mapsUrl} target="_blank" rel="noreferrer">Google Haritalar'da yol tarifi</a></address><div><a href={`tel:${siteConfig.phone}`}>{siteConfig.phoneDisplay}</a><small>7 gün 24 saat açık</small></div></footer>
  </main>;
}
