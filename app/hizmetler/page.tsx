import type { Metadata } from "next";
import { SeoDirectory } from "@/components/seo-directory";
import { servicesData } from "@/lib/services-data";
import { locationPages } from "@/lib/locations-data";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Oto Çekici ve Yol Yardım Hizmetleri | Umay Oto Kurtarıcı",
  description:
    "Sancaktepe, Çekmeköy, Sultanbeyli ve Pendik'te Umay Oto Kurtarıcı'nın 7/24 sunduğu oto çekici, oto kurtarma, acil çekici, akü takviye ve araç taşıma hizmetleri.",
  alternates: { canonical: `${siteConfig.domain}/hizmetler` },
};

export default function Page() {
  const priorityHubSlugs = [
    "sancaktepe-oto-cekici",
    "pasakoy-oto-cekici",
    "sarigazi-oto-cekici",
    "samandira-oto-cekici",
    "cekmekoy-oto-cekici",
    "tasdelen-oto-cekici",
    "alemdag-oto-cekici",
    "sultanbeyli-oto-cekici",
    "battalgazi-oto-cekici",
    "hasanpasa-oto-cekici",
    "pendik-oto-cekici",
    "kurtkoy-oto-cekici",
  ];

  return (
    <SeoDirectory
      eyebrow="SANCAKTEPE · ÇEKMEKÖY · SULTANBEYLİ · PENDİK"
      title="OTO ÇEKİCİ VE YOL YARDIM HİZMETLERİ"
      intro="Aracın bulunduğu yer, yürür durumda olup olmadığı ve ulaşılacak adres doğru ekipmanı belirler. İhtiyacınıza uygun hizmetin kapsamını inceleyin; emin değilseniz konum ve fotoğraf gönderin."
      groups={[
        {
          title: "Araç kurtarma ve yol yardım hizmetleri",
          links: servicesData.map((x) => ({
            name: x.name,
            href: `/hizmetler/${x.slug}`,
            detail: x.description,
          })),
        },
        {
          title: "Öncelikli 4 bölge ve ana merkezler",
          links: priorityHubSlugs
            .map((slug) => locationPages.find((p) => p.slug === slug))
            .filter((x): x is NonNullable<typeof x> => Boolean(x))
            .map((x) => ({
              name: x.name,
              href: `/${x.slug}`,
              detail: x.description,
            })),
        },
      ]}
    />
  );
}
