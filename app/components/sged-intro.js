import styles from "./sged-intro.module.css";

export default function SgedIntro() {
  return (
    <section className={styles["sged-intro-box"]}>
      <div className={`inner ${styles.inner}`}>
        <h2 className={styles["intro-box-header"]}>WHO WE ARE</h2>
        <h3 className={styles["intro-box-question"]}>
          ソニー・グローバルエデュケーションとは
        </h3>
        <div className={styles["intro-box-answer"]}>
          ソニーグループの教育事業会社として教育分野におけるプロダクト、サービス、データの領域で幅広くプラットフォームを提供し、グローバルな事業展開を行っています。
        </div>
      </div>
    </section>
  );
}
