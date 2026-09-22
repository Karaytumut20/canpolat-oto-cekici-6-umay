import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Award,
  CheckCircle2,
  Clock3,
  MapPin,
  Phone,
  PhoneCall,
  ShieldCheck,
  Truck,
  Users,
  Wrench,
} from "lucide-react";
import { BrandLogo } from "@/components/brand-logo";
import { MobileMenu } from "@/components/mobile-menu";
import { siteConfig } from "@/lib/site-config";
import {
  generateLocalBusinessSchema,
  generateBreadcrumbSchema,
} from "@/lib/seo-schema";

export const metadata: Metadata = {
  title: "Hakkımızda | Umay Oto Kurtarıcı - Sancaktepe",
  description:
    "Umay Oto Kurtarıcı kurumsal profili. Sancaktepe Paşaköy merkezli kayar kasa araç taşıma ve 7/24 yol yardım hizmetleri.",
  alternates: { canonical: `${siteConfig.domain}/hakkimizda` },
  openGraph: {
    title: "Hakkımızda | Umay Oto Kurtarıcı",
    description:
      "İstanbul Sancaktepe ve çevresinde 7/24 oto çekici, oto kurtarma ve yol yardım hizmeti.",
    url: `${siteConfig.domain}/hakkimizda`,
    siteName: siteConfig.name,
    images: [{ url: `${siteConfig.domain}${siteConfig.hero}` }],
  },
};

export default function AboutPage() {
  const localBusinessJsonLd = generateLocalBusinessSchema(
    `${siteConfig.domain}/hakkimizda`
  );
  const breadcrumbJsonLd = generateBreadcrumbSchema([
    { name: "Ana Sayfa", url: siteConfig.domain },
    { name: "Hakkımızda", url: `${siteConfig.domain}/hakkimizda` },
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
          <span className="text-white">Hakkımızda</span>
        </div>
        <div className="area-hero-copy">
          <div className="eyebrow">
            <span /> KURUMSAL PROFİLİMİZ
          </div>
          <h1>Umay Oto Kurtarıcı - Sancaktepe&apos;nin Yol Yardım Ekibi</h1>
          <p>
            Sancaktepe Paşaköy merkezli istasyonumuzla, yolda kalan her
            sürücüye açık bilgi veren ve aracın durumuna uygun ekipman kullanan bir çekici hizmeti sunuyoruz.
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
              WHATSAPP DANIŞMA
            </a>
          </div>
        </div>
        <div className="area-status">
          <span className="live-dot" />
          <span>RESMİ İŞLETME KAYDI</span>
          <div className="mt-2 text-xs text-slate-300">
            <b>{siteConfig.officialName}</b>
            <small className="block mt-1 text-slate-500">Sancaktepe / İstanbul</small>
          </div>
        </div>
      </section>

      {/* Corporate Content */}
      <section className="section-pad bg-slate-950">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <small className="text-amber-500 font-bold uppercase tracking-wider text-xs">
              BİZ KİMİZ?
            </small>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-white mt-2 mb-6 tracking-tight">
              Sadece Araç Değil, Güven Taşıyoruz.
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed mb-4">
              Umay Oto Kurtarıcı (Resmi Ünvanı: Sancaktepe Çekici Umay Oto Kurtarıcı), İstanbul&apos;un
              Anadolu Yakası&apos;nda otomotiv çekici ve kurtarma sektöründe yaşanan güven ve şeffaflık
              sorunlarını kökten çözme vizyonuyla kurulmuştur.
            </p>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Sürücülerin en zor ve savunmasız anlarında karşılaştıkları abartılı fiyat talepleri, geç
              varışlar veya araca ek hasar veren amatör müdahalelerin aksine; her operasyonumuzu kurumsal
              konum, araç tipi ve teslim adresini önceden konuşur; uygulanacak yöntemi ve fiyat bilgisini işlem başlamadan açıklarız.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded bg-slate-900 border border-slate-800">
                <Truck className="text-amber-500 mb-2" size={28} />
                <h4 className="text-white font-bold text-sm">Modern Kayar Kasa</h4>
                <p className="text-slate-400 text-xs mt-1">
                  Alçak tamponlu ve lüks araçlara uygun sıfır temas yükleme.
                </p>
              </div>
              <div className="p-4 rounded bg-slate-900 border border-slate-800">
                <ShieldCheck className="text-amber-500 mb-2" size={28} />
                <h4 className="text-white font-bold text-sm">Kontrollü Sabitleme</h4>
                <p className="text-slate-400 text-xs mt-1">
                  Araç tipine göre takoz, gergi ve gerektiğinde tekerlek aparatı kullanımı.
                </p>
              </div>
            </div>
          </div>
          <div className="relative rounded-xl overflow-hidden border border-slate-800 shadow-2xl">
            <Image
              src={siteConfig.hero}
              alt="Umay Oto Kurtarıcı hizmet aracı"
              width={800}
              height={500}
              className="w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent flex items-end p-6">
              <div className="text-white">
                <div className="font-extrabold text-lg flex items-center gap-2">
                  <Award className="text-amber-500" size={20} /> Umay Hizmet Standardı
                </div>
                <div className="text-xs text-slate-300 mt-1">
                  7/24 çağrı hattı ve konuma göre ekip yönlendirmesi
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-pad bg-slate-900">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <small className="text-amber-500 font-bold uppercase tracking-wider text-xs">
            HİZMET İLKELERİMİZ
          </small>
          <h2 className="text-3xl font-extrabold text-white mt-2 mb-4 tracking-tight">
            Araç Taşımada Önem Verdiğimiz Dört Konu
          </h2>
          <p className="text-slate-400 text-sm">
            İstanbul trafiğinde ve otoyollarında sunduğumuz her hizmetin arkasında 4 temel ilkemiz vardır.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-lg bg-slate-950 border border-slate-800">
            <Clock3 className="text-amber-500 mb-4" size={32} />
            <h3 className="text-white font-bold text-base mb-2">Konuma Göre Planlama</h3>
            <p className="text-slate-400 text-xs leading-relaxed m-0">
              Canlı konumu ve trafik durumunu kontrol ederek tahmini varış bilgisini telefonda paylaşırız.
            </p>
          </div>
          <div className="p-6 rounded-lg bg-slate-950 border border-slate-800">
            <ShieldCheck className="text-amber-500 mb-4" size={32} />
            <h3 className="text-white font-bold text-base mb-2">İşlem Öncesi Fiyat</h3>
            <p className="text-slate-400 text-xs leading-relaxed m-0">
              Mesafe, araç tipi ve yükleme koşullarını öğrendikten sonra ücreti işlem başlamadan netleştiririz.
            </p>
          </div>
          <div className="p-6 rounded-lg bg-slate-950 border border-slate-800">
            <Wrench className="text-amber-500 mb-4" size={32} />
            <h3 className="text-white font-bold text-base mb-2">Hasarsız Yükleme</h3>
            <p className="text-slate-400 text-xs leading-relaxed m-0">
              Kilitli tekerlek aparatları (dolly) ve kayar kasa platformlarımız ile aracınız çizilmeden
              taşınır.
            </p>
          </div>
          <div className="p-6 rounded-lg bg-slate-950 border border-slate-800">
            <Users className="text-amber-500 mb-4" size={32} />
            <h3 className="text-white font-bold text-base mb-2">Saygılı Operatörler</h3>
            <p className="text-slate-400 text-xs leading-relaxed m-0">
              Ekiplerimiz kriz anında sakinliğini koruyan, eğitimli ve nezaket kurallarına uyan
              uzmanlardan oluşur.
            </p>
          </div>
        </div>
      </section>

      {/* Callout */}
      <section className="area-callout">
        <div>
          <small className="font-bold text-xs tracking-wider uppercase text-slate-900">
            7/24 BİZE ULAŞIN
          </small>
          <h2>Yol Yardım Desteği İçin Hazırız.</h2>
          <p>Sancaktepe, Sarıgazi, Samandıra, Yenidoğan ve çevre ilçelerde dilediğiniz an bizi arayabilirsiniz.</p>
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
