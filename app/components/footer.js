import Container from "./container";
import Image from "next/image";
import styles from "./footer.module.css";
import sgedLogo from "../public/sged_logo.png";

export default function Footer() {
  return (
    <footer className={styles["main-footer"]}>
      <Container>
        <div className="kov-inner">
          <div
            className={`${styles["footer-menu-container"]} flex justify-center`}
          >
            <div className={styles["menu-category"]}>
              <div className={styles["menu-header"]}>
                プログラミング教育コラム
              </div>
              <div className={styles["menu-item"]}>
                <a href="#" className="menu-item-link">
                  プログラミング教育コラムトップ
                </a>
              </div>
              <div className={styles["menu-item"]}>
                <a href="#" className="menu-item-link">
                  プログラミング
                </a>
              </div>
              <div className={styles["menu-item"]}>
                <a href="#" className="menu-item-link">
                  ロボット
                </a>
              </div>
              <div className={styles["menu-item"]}>
                <a href="#" className="menu-item-link">
                  教育・習い事
                </a>
              </div>
              <div className={styles["menu-item"]}>
                <a href="#" className="menu-item-link">
                  IT
                </a>
              </div>
              <div className={styles["menu-item"]}>
                <a href="#" className="menu-item-link">
                  コンテスト
                </a>
              </div>
              <div className={styles["menu-item"]}>
                <a href="#" className="menu-item-link">
                  その他
                </a>
              </div>
            </div>
            <div className={styles["menu-category"]}>
              <div className={styles["menu-header"]}>サイト情報</div>
              <div className={styles["menu-item"]}>
                <a href="#" className="menu-item-link">
                  プライバシーポリシー
                </a>
              </div>
              <div className={styles["menu-item"]}>
                <a href="#" className="menu-item-link">
                  サービス利用規約
                </a>
              </div>
              <div className={styles["menu-item"]}>
                <a href="#" className="menu-item-link">
                  運営会社
                </a>
              </div>
            </div>
            <div className={styles["menu-category"]}>
              <div className={styles["menu-header"]}>関連サイト</div>

              <div className={styles["menu-item"]}>
                <a href="#" className="menu-item-link">
                  KOOVパートナープログラミング教室
                </a>
              </div>
              <div className={styles["menu-item"]}>
                <a href="#" className="menu-item-link">
                  ソニー・グローバルエデュケーション
                </a>
              </div>
              <div className={styles["menu-item"]}>
                <a href="#" className="menu-item-link">
                  ソニーグループ
                </a>
              </div>
            </div>
          </div>

          <div className={styles["footer-logo-container"]}>
            <div className={styles["logo"]}>
              <Image
                src={sgedLogo}
                alt="Sony Global Education"
                className="image"
              />
            </div>
            <div className={styles["copyright"]}>
              ©2017-2020 Sony Global Education, Inc.
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
