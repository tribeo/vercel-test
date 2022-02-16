import { useState } from "react";
import styles from "./partners-section.module.css";
import { JAPAN_AREA_PREFECTURES } from "../lib/constants";

export default function PartnersSection() {
  const [active, setActive] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);

  const handleAreaClick = (index) => {
    setActive(!active);
    setActiveIndex(index);
  };

  return (
    <section className={styles["partners-section"]}>
      <div className={`inner ${styles.inner}`}>
        <h2 className={`${styles["partners-section-header"]} section-header`}>
          プログラミング教室を 都道府県から探す
        </h2>

        <div className={styles["prefectures-content"]}>
          {Object.keys(JAPAN_AREA_PREFECTURES).map((area, a_index) => (
            <div
              className={`${styles["prefectures-wrapper"]} flex`}
              key={`area-${a_index}`}
            >
              <div
                className={`${styles["area-name-partner"]} flex items-center`}
                onClick={() => handleAreaClick(a_index)}
              >
                <span>{area}</span>
                <i className="icon-accordion_plus"></i>
                <i className="icon-accordion_minus"></i>
              </div>
              <div
                className={`${styles["list-prefectures"]} flex ${
                  active && activeIndex === a_index ? "open" : ""
                }`}
              >
                {JAPAN_AREA_PREFECTURES[area].map((prefecture, p_index) => (
                  <div
                    className={`${styles["prefecture-name"]} flex items-center`}
                    key={`prefecture-${a_index}-${p_index}`}
                  >
                    <a href="#" className="kov-link">
                      <span>{prefecture}</span>
                      <i className="icon-arrow-pagetop"></i>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
