import Image from "next/image";
import Link from "next/link";
import styles from "./sged-programming-education.module.css";
import mediaBannerA from "../public/media_banner_a@2x.png";
import mediaBannerB from "../public/media_banner_b@2x.png";
import { KOOV_URL } from "../lib/constants";

export default function SgedProgrammingEducation() {
  return (
    <section className={styles["sged-programming-education-box"]}>
      <div className="inner">
        <h2 className={`${styles["header"]} section-header`}>
          ソニー・グローバルエデュケーションの プログラミング教育
        </h2>
        <div className={styles["banners-container"]}>
          <Link href={KOOV_URL}>
            <a className={styles["banner-image"]}>
              <Image src={mediaBannerA} alt="Media banner A" />
            </a>
          </Link>
          <Link href={`https://www.zkai.co.jp/z-programming/mirai/`}>
            <a className={styles["banner-image"]} rel="noopener noreferrer" target="_blank">
              <Image src={mediaBannerB} alt="Media banner B" />
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
}
