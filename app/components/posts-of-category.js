import PostsList from "./posts-list";
import styles from "./top-posts.module.css";
import { CURRENT_PAGE, PER_PAGE } from "../lib/constants";

export default function PostsOfCategory({ allPosts, categoryName, subHeader }) {
  const type = "popular";
  const size = "multiple-rows";

  return (
    <section className="top-posts-container">
      <div
        className={`inner ${styles["top-posts-inner"]} ${styles[type]} ${styles[size]}`}
      >
        <h2 className={styles["top-posts-container-header"]}>{categoryName}</h2>
        <h3 className={styles["top-posts-container-sub-header"]}>{`${
          subHeader ? subHeader : "記事一覧"
        } `}</h3>
        <PostsList
          resourceName="post"
          totalResources={allPosts}
          currentPage={CURRENT_PAGE}
          perPage={PER_PAGE}
        />
      </div>
    </section>
  );
}
