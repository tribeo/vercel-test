import Image from "next/image";
import styles from "./top-header.module.css";
import logoLarge from "../public/logo_large@2x.png";
import logoSmall from "../public/logo_small@2x.png";
import bannerLarge from "../public/partner_top_pc@2x.jpg";
import bannerSmall from "../public/partner_top_mobile@2x.jpg";

export default function TopHeader() {
  return (
    <header className="top-header flex flex-col items-center">
      <div className={`pc-only ${styles["large-logo"]}`}>
        <Image
          src={logoLarge}
          className="top-header-image image-contain"
          width={409}
          height={176}
        />
      </div>
      <div className="mobile-only">
        <Image
          src={logoSmall}
          className="top-header-image image-contain"
          width={261}
          height={113}
        />
      </div>
      <div className={`${styles["top-header-text"]} `}>
        STEAM教育・プログラミング教育・グローバル教育などの最新情報を発信していきます
      </div>
      <div className={`pc-only ${styles["large-banner"]}`}>
        <Image src={bannerLarge} className="top-header-banner image-cover" />
      </div>
      <div className={`mobile-only ${styles["small-banner"]}`}>
        <Image src={bannerSmall} className="top-header-banner image-cover" />
      </div>
    </header>
  );
}
