import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import styles from "./nav-bar.module.css";
import headerMenu from "../public/header_menu.svg";
import headerMenuClose from "../public/header_menu_close.svg";
import sgedLogo from "../public/sged_logo.png";

export default function NavBar({ categories }) {
  const [toggleMenu, setToogleMenu] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);

  const handleToggleClick = () => {
    setToogleMenu(!toggleMenu);
  };

  const handleMenuClick = (index) => {
    setActiveMenu(index);
  };

  return (
    <nav className={`${styles["categories-nav-box"]} w-full`}>
      <div className={`${styles["nav-header"]} flex`}>
        <div className={styles["nav-logo"]}>
          <Image
            src={sgedLogo}
            alt="Sony Global Education logo"
            layout="responsive"
          />
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
      <div
        className={`${styles["nav-wrapper"]} ${
          toggleMenu ? styles["open"] : ""
        } w-full flex `}
      >
        {categories.edges.length > 0 ? (
          <div className={`${styles["nav-inner"]} flex justify-center`}>
            {categories.edges.map((category, index) => (
              <Link href={`/posts/${category.node.slug}`} key={index}>
                <a
                  className={`${styles["category-nav-item"]} flex ${
                    activeMenu && activeMenu === index ? "active" : ""
                  }`}
                  dangerouslySetInnerHTML={{ __html: category.node.name }}
                  onClick={() => handleMenuClick(index)}
                ></a>
              </Link>
            ))}
          </div>
        ) : null}
      </div>
    </nav>
  );
}
