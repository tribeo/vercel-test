import styles from "./category-tags.module.css";

export default function CategoryTags({ categories }) {
  return (
    <div className="category-tags">
      {categories.length > 0 ? (
        <div className={styles["post-categories"]}>
          {categories.map((category, index) => (
            <div
              key={index}
              className={`${styles["post-category-item"]} ${
                styles[category.node.slug]
              }`}
              dangerouslySetInnerHTML={{ __html: category.node.name }}
            ></div>
          ))}
        </div>
      ) : null}
    </div>
  );
}
