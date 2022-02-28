import Link from "next/link";
import styles from "./category-tags.module.css";

export default function CategoryTags({ categories }) {
  return (
    <>
      {categories.length > 0 ? (
        <div className={`${styles["post-categories"]} category-tags-container`}>
          {categories.map((category, index) => (
            <Link href={`/column/${category.node.slug}`} key={index}>
              <a
                className={`${styles["post-category-item"]} ${
                  styles[category.node.slug]
                }`}
                dangerouslySetInnerHTML={{ __html: category.node.name }}
              ></a>
            </Link>
          ))}
        </div>
      ) : null}
    </>
  );
}
