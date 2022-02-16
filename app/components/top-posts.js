import PostsPreview from "./posts-preview";
import styles from "./top-posts.module.css";

export default function TopPosts({
  posts,
  jpTitle,
  enTitle,
  isViewMore,
  type,
}) {
  return (
    <section className="top-posts-container">
      <div
        className={`inner ${styles["top-posts-inner"]} ${styles[type]}`}
      >
        <h2 className={styles["top-posts-container-header"]}>{jpTitle}</h2>
        <h3 className={styles["top-posts-container-sub-header"]}>{enTitle}</h3>
        <div className={styles["top-posts-box"]}>
          {posts.map(({ node }) => (
            <PostsPreview
              key={node.slug}
              title={node.title}
              coverImage={node.featuredImage?.node}
              date={node.date}
              author={node.author?.node}
              slug={node.slug}
              excerpt={node.excerpt}
              categories={node.categories.edges}
              isViewMore={isViewMore}
            />
          ))}
        </div>
        {isViewMore ? (
          <div className={`kov-btn ${styles["view-more-btn"]}`}>もっと見る</div>
        ) : null}
      </div>
    </section>
  );
}
