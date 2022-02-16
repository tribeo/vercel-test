import Date from "./date";
import CoverImage from "./cover-image";
import Link from "next/link";
import styles from "./posts-preview.module.css";

export default function PostsPreview({
  title,
  coverImage,
  date,
  slug,
  categories,
}) {
  return (
    <div className={styles["post-preview-box"]}>
      {coverImage && (
        <CoverImage title={title} coverImage={coverImage} slug={slug} />
      )}
      <h3 className={styles["post-title"]}>
        <Link href={`/posts/${slug}`}>
          <a
            className="hover:underline"
            dangerouslySetInnerHTML={{ __html: title }}
          ></a>
        </Link>
      </h3>
      <div className={styles["post-date"]}>
        <Date dateString={date} />
      </div>

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
