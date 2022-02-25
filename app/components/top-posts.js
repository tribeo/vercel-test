import Link from "next/link";
import PostPreview from "./post-preview";
import styles from "./top-posts.module.css";

export default function TopPosts({
  posts,
  jpTitle,
  enTitle,
  isViewMore,
  type,
  size,
}) {
  return (
    <section className="top-posts-container">
      <div
        className={`inner ${styles["top-posts-inner"]} ${styles[type]} ${styles[size]}`}
      >
        <h2 className={styles["top-posts-container-header"]}>{jpTitle}</h2>
        <h3 className={styles["top-posts-container-sub-header"]}>{enTitle}</h3>
        <div className={`${styles["top-posts-box"]} ${styles[size]}`}>
          {posts.map(({ node }) => (
            <div className={styles["post-box"]} key={node.slug}>
              <PostPreview
                databaseId={node.databaseId}
                title={node.title}
                coverImage={node.featuredImage?.node}
                date={node.date}
                author={node.author?.node}
                slug={node.slug}
                categories={node.categories.edges}
                isViewMore={isViewMore}
              />
            </div>
          ))}
        </div>
        {isViewMore ? (
          <Link href={`/column/news`}>
            <a className={`kov-btn ${styles["view-more-btn"]}`}>もっと見る</a>
          </Link>
        ) : null}
      </div>
    </section>
  );
}
