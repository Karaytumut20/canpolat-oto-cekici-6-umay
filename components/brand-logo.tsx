import Image from "next/image";
import { siteConfig } from "@/lib/site-config";

export function BrandLogo({
  footer = false,
  variant,
}: {
  footer?: boolean;
  variant?: "horizontal";
}) {
  if (variant === "horizontal") {
    return <span className="brand-lockup">
      <Image className="brand-lockup-mark" src={siteConfig.logo} alt="" width={1672} height={944} priority />
      <span className="brand-lockup-type"><b>UMAY</b><strong>OTO KURTARICI</strong><small>SANCAKTEPE · 7/24</small></span>
    </span>;
  }
  return (
    <Image
      className={`brand-logo${footer ? " brand-logo-footer" : ""}`}
      src={siteConfig.logo}
      alt="Sancaktepe Çekici Umay Oto Kurtarıcı"
      width={1672}
      height={944}
      priority={!footer}
    />
  );
}
