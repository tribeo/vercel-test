import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import styles from "./nav-bar.module.css";
import headerMenu from "../public/header_menu.svg";
import headerMenuClose from "../public/header_menu_close.svg";
import sgedLogo from "../public/sged_logo.png";
import logoSmall from "../public/logo_small@2x.png";

export default function NavBar({ categories, resourcePage, slugQuery }) {
  const [toggleMenu, setToogleMenu] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);

  const handleToggleClick = () => {
    setToogleMenu(!toggleMenu);
  };

  const handleMenuClick = (index) => {
    setActiveMenu(index);
  };

  return (
    <div>
      <nav className={`${styles["categories-nav-box"]} w-full`}>
        <div className={`${styles["nav-header"]} flex`}>
          <div className={styles["nav-logo"]}>
            <div className={styles["sged-logo"]}>
              <Image src={sgedLogo} alt="Sony Global Education logo" />
            </div>
            {resourcePage === "sub-page" ? (
              <Link href={`/column`}>
                <a className={styles["small-logo"]}>
                  <Image src={logoSmall} alt="" />
                </a>
              </Link>
            ) : null}
          </div>
          <div className="mobile-only">
            <button className="flex" onClick={handleToggleClick}>
              <span className={`${toggleMenu ? "close" : "open"} flex`}>
                <Image src={headerMenu} alt="" width={58} height={54} />
              </span>
              <span className={`${toggleMenu ? "open" : "close"} flex`}>
                <Image src={headerMenuClose} alt="" width={58} height={54} />
              </span>
            </button>
          </div>
        </div>
        <div className={`${styles["nav-container"]} ${styles[resourcePage]}`}>
          <div
            className={`${styles["nav-wrapper"]} ${
              toggleMenu ? styles["open"] : ""
            } w-full flex ${styles[resourcePage]}`}
          >
            {categories.edges.length > 0 ? (
              <div className={`${styles["nav-inner"]} flex justify-center`}>
                {categories.edges.map((category, index) => (
                  <Link href={`/column/${category.node.slug}`} key={index}>
                    <a
                      className={`${styles["category-nav-item"]} flex ${
                        ((activeMenu && activeMenu === index) ||
                          category.node.slug === slugQuery) &&
                        slugQuery &&
                        !Number.isInteger(Number(slugQuery))
                          ? styles["active"]
                          : styles["disabled"]
                      }`}
                      dangerouslySetInnerHTML={{ __html: category.node.name }}
                      onClick={() => handleMenuClick(index)}
                    ></a>
                  </Link>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </nav>
    </div>
  );
}
