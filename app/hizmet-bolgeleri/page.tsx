import type { Metadata } from "next";
import { SeoDirectory } from "@/components/seo-directory";
import { locationPages } from "@/lib/locations-data";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Hizmet Bölgeleri | Sancaktepe, Çekmeköy, Sultanbeyli, Pendik Çekici",
  description:
    "Umay Oto Kurtarıcı'nın Sancaktepe merkezli olarak yalnızca Sancaktepe, Çekmeköy, Sultanbeyli ve Pendik ilçelerinde sunduğu 7/24 oto çekici ve yol yardım hizmet noktaları.",
  alternates: { canonical: `${siteConfig.domain}/hizmet-bolgeleri` },
};

export default function Page() {
  const order = [
    "Sancaktepe",
    "Çekmeköy",
    "Sultanbeyli",
    "Pendik",
    "Bağlantı Yolu",
    "Özel Arama",
  ] as const;

  const groupTitles: Record<(typeof order)[number], string> = {
    "Sancaktepe": "Sancaktepe (Ana Merkez) Hizmet Noktaları",
    "Çekmeköy": "Çekmeköy Hizmet Noktaları",
    "Sultanbeyli": "Sultanbeyli Hizmet Noktaları",
    "Pendik": "Pendik Hizmet Noktaları",
    "Bağlantı Yolu": "Otoyol & Stratejik Bağlantı Güzergahları",
    "Özel Arama": "Acil Durum ve Nöbetçi Çekici Hatları",
  };

  return (
    <SeoDirectory
      eyebrow="SANCAKTEPE (MERKEZ) · ÇEKMEKÖY · SULTANBEYLİ · PENDİK"
      title="OTO ÇEKİCİ HİZMET BÖLGELERİ"
      intro="Umay Oto Kurtarıcı, Paşaköy merkez garajından yalnızca Sancaktepe, Çekmeköy, Sultanbeyli ve Pendik ilçelerine odaklanarak 7/24 kesintisiz çekici ve yol yardım hizmeti verir. Mahallenizi seçerek o bölgeye ait güzergahları ve anlık varış sürelerini inceleyin."
      groups={order
        .map((district) => ({
          title: groupTitles[district],
          links: locationPages
            .filter((x) => x.district === district)
            .map((x) => ({
              name: x.name,
              href: `/${x.slug}`,
              detail: x.description,
            })),
        }))
        .filter((group) => group.links.length > 0)}
    />
  );
}
