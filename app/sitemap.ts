import type { MetadataRoute } from "next";
import { locationPages } from "@/lib/locations-data";
import { servicesData } from "@/lib/services-data";
import { blogPosts } from "@/lib/blog-data";
import { siteConfig } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const updated = new Date();
  const route = (path: string, priority: number, changeFrequency: "weekly" | "monthly") => ({ url: `${siteConfig.domain}${path}`, lastModified: updated, changeFrequency, priority });
  return [
    route("", 1, "weekly"),
    ...["/hizmetler", "/hizmet-bolgeleri", "/blog", "/hakkimizda", "/iletisim"].map((path) => route(path, .85, "weekly")),
    ...servicesData.map((item) => route(`/hizmetler/${item.slug}`, .85, "monthly")),
    ...locationPages.map((item) => route(`/${item.slug}`, item.district === "Sancaktepe" ? .9 : .75, "monthly")),
    ...blogPosts.map((item) => route(`/blog/${item.slug}`, .72, "monthly")),
  ];
}
