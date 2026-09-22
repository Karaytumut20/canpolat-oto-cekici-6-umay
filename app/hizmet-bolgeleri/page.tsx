import type { Metadata } from "next";
import { SeoDirectory } from "@/components/seo-directory";
import { locationPages } from "@/lib/locations-data";
import { siteConfig } from "@/lib/site-config";
export const metadata:Metadata={title:"Sancaktepe Oto Çekici Hizmet Bölgeleri",description:"Sancaktepe mahalleleri ve yakın ilçelerde Umay Oto Kurtarıcı'nın 7/24 oto çekici, oto kurtarma ve yol yardım hizmet noktaları.",alternates:{canonical:`${siteConfig.domain}/hizmet-bolgeleri`}};
export default function Page(){const order=["Sancaktepe","Yakın İlçe","Bağlantı Yolu","Özel Arama"] as const;return <SeoDirectory eyebrow="SANCAKTEPE · PAŞAKÖY · ANADOLU YAKASI" title="OTO ÇEKİCİ HİZMET BÖLGELERİ" intro="Her bölge sayfasında mahalleye özgü yollar, bağlantılar ve çekici çağırırken paylaşmanız gereken bilgiler yer alır. Konumunuz listede yoksa telefonla arayın; uygun ekibi kontrol edelim." groups={order.map(district=>({title:district==="Özel Arama"?"Acil durum ve arama sayfaları":`${district} hizmet noktaları`,links:locationPages.filter(x=>x.district===district).map(x=>({name:x.name,href:`/${x.slug}`,detail:x.description}))})).filter(group=>group.links.length>0)}/>} 
