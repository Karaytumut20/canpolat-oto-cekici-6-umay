import { istanbulNeighborhoods } from "./istanbul-neighborhoods";

export type ServiceArea = { name: string; slug: string; type: "mahalle" | "ilce"; district?: string };

const slugify = (value: string) =>
  value
    .toLocaleLowerCase("tr-TR")
    .replaceAll("ı", "i")
    .replaceAll("ğ", "g")
    .replaceAll("ü", "u")
    .replaceAll("ş", "s")
    .replaceAll("ö", "o")
    .replaceAll("ç", "c")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

// Yalnızca Umay Oto Kurtarıcı'nın aktif hizmet verdiği 4 bölge (Sancaktepe merkezli)
const allowedDistricts = ["Sancaktepe", "Çekmeköy", "Sultanbeyli", "Pendik"];

export const serviceAreas: ServiceArea[] = [
  ...istanbulNeighborhoods
    .filter((area) => allowedDistricts.includes(area.district))
    .map((area) => ({
      name: area.name.replace(/\s+Mah\.$/, ""),
      slug: `${area.districtSlug}-${area.slug}-oto-cekici`,
      type: "mahalle" as const,
      district: area.district,
    })),
  ...allowedDistricts.map((name) => ({
    name,
    slug: `${slugify(name)}-oto-cekici`,
    type: "ilce" as const,
  })),
];

export const priorityAreas = serviceAreas.filter(
  (area) => allowedDistricts.includes(area.name) && area.type === "ilce"
);

export const findArea = (slug: string) => serviceAreas.find((area) => area.slug === slug);
