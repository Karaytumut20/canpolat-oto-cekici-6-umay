import { siteConfig } from "./site-config";

export function generateLocalBusinessSchema(pageUrl?: string) {
  return {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    "@id": `${siteConfig.domain}/#business`,
    name: siteConfig.name,
    alternateName: siteConfig.officialName,
    legalName: siteConfig.officialName,
    url: pageUrl || siteConfig.domain,
    logo: `${siteConfig.domain}${siteConfig.logo}`,
    image: `${siteConfig.domain}${siteConfig.hero}`,
    telephone: siteConfig.phone,
    priceRange: "₺₺",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
    ],
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.latitude,
      longitude: siteConfig.longitude,
    },
    hasMap: siteConfig.mapsUrl,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Paşaköy, Lokman Sokak No:4",
      addressLocality: "Sancaktepe",
      addressRegion: "İstanbul",
      postalCode: siteConfig.postalCode,
      addressCountry: "TR",
    },
    areaServed: [
      { "@type": "AdministrativeArea", name: "Sancaktepe" },
      { "@type": "AdministrativeArea", name: "Çekmeköy" },
      { "@type": "AdministrativeArea", name: "Sultanbeyli" },
      { "@type": "AdministrativeArea", name: "Pendik" },
      { "@type": "AdministrativeArea", name: "Paşaköy" },
      { "@type": "AdministrativeArea", name: "Sarıgazi" },
      { "@type": "AdministrativeArea", name: "Samandıra" },
      { "@type": "AdministrativeArea", name: "Yenidoğan" },
      { "@type": "AdministrativeArea", name: "Taşdelen" },
      { "@type": "AdministrativeArea", name: "Alemdağ" },
      { "@type": "AdministrativeArea", name: "Kurtköy" },
      { "@type": "AdministrativeArea", name: "Battalgazi" },
      { "@type": "AdministrativeArea", name: "Kaynarca" },
      { "@type": "AdministrativeArea", name: "İstanbul Anadolu Yakası" },
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: siteConfig.phone,
      contactType: "emergency",
      availableLanguage: "Turkish",
      areaServed: "TR",
    },
    currenciesAccepted: "TRY",
    paymentAccepted: "Cash, Credit Card, Bank Transfer",
  };
}

export function generateBreadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function generateFaqSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };
}

export function generateArticleSchema(article: {
  title: string;
  description: string;
  url: string;
  publishDate: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    url: article.url,
    datePublished: article.publishDate,
    dateModified: article.publishDate,
    image: article.image || `${siteConfig.domain}${siteConfig.hero}`,
    author: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.domain,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.domain}${siteConfig.logo}`,
      },
    },
  };
}
