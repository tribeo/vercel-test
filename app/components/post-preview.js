import Date from "./date";
import CoverImage from "./cover-image";
import Link from "next/link";
import CategoryTags from "./category-tags";
import styles from "./post-preview.module.css";

export default function PostPreview({
  databaseId,
  title,
  coverImage,
  date,
  slug,
  categories,
}) {
  return (
    <div className={styles["post-preview-box"]}>
      {coverImage && (
        <CoverImage title={title} coverImage={coverImage} slug={slug} databaseId={databaseId}/>
      )}
      <h3 className={styles["post-title"]}>
        <Link href={`/column/${databaseId}`}>
          <a
            className="hover:underline"
            dangerouslySetInnerHTML={{ __html: title }}
          ></a>
        </Link>
      </h3>
      <div className={styles["post-date"]}>
        <Date dateString={date} />
      </div>

      <CategoryTags categories={categories} />
    </div>
  );
}
