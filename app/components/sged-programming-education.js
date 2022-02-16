import Image from "next/image";
import styles from "./sged-programming-education.module.css";
import mediaBannerA from "../public/media_banner_a@2x.png";
import mediaBannerB from "../public/media_banner_b@2x.png";

export default function SgedProgrammingEducation() {
  return (
    <section className={styles["sged-programming-education-box"]}>
      <div className="inner">
        <h2 className={`${styles["header"]} section-header`}>
          ソニー・グローバルエデュケーションの プログラミング教育
        </h2>
        <div className={styles["banners-container"]}>
          <div className={styles["banner-image"]}>
            <Image src={mediaBannerA} alt="Media banner A" />
          </div>
          <div className={styles["banner-image"]}>
            <Image src={mediaBannerB} alt="Media banner B" />
          </div>
        </div>
      </div>
    </section>
  );
}
