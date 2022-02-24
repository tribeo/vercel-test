import { useState } from "react";
import styles from "./partners-section.module.css";
import { JAPAN_AREA_PREFECTURES } from "../lib/constants";

export default function PartnersSection() {
  const [activeIndex, setActiveIndex] = useState([]);

  const handleAreaClick = (index) => {
    setActiveIndex(
      activeIndex.includes(index)
        ? activeIndex.filter((item) => item !== index)
        : [...activeIndex, index]
    );
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
                className={`${styles["area-name-partner"]} flex items-center ${
                  activeIndex.length > 0 && activeIndex.includes(a_index)
                    ? styles["active"]
                    : ""
                }`}
                onClick={() => handleAreaClick(a_index)}
              >
                <span>{area}</span>
                <i className={`${styles["icon-plus"]} icon-accordion-plus`}></i>
                <i
                  className={`${styles["icon-minus"]} icon-accordion-minus`}
                ></i>
              </div>
              <div
                className={`${styles["list-prefectures"]} flex ${
                  activeIndex.length > 0 && activeIndex.includes(a_index)
                    ? styles["open"]
                    : ""
                }`}
              >
                {JAPAN_AREA_PREFECTURES[area].map((prefecture, p_index) => (
                  <div
                    className={`${styles["prefecture-name"]} flex items-center`}
                    key={`prefecture-${a_index}-${p_index}`}
                  >
                    <a href="#" className={`${styles["kov-link"]} flex w-full`}>
                      <span>{prefecture}</span>
                      <i
                        className={`${styles["icon-arrow-right"]} icon-arrow-right`}
                      ></i>
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
