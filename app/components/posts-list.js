import PagenationList from "./pagenation-list";
import PostPreview from "./post-preview";
import styles from "./top-posts.module.css";

export default class PostsList extends PagenationList {
  getResourceName() {
    return "post";
  }

  renderResources() {
    const { resources } = this.state;
    if (resources.length === 0) {
      return <span />;
    }
    const size = "multiple-rows";
    return (
      <div className={`${styles["top-posts-box"]} ${styles[size]}`}>
        {resources.map(({ node }) => (
          <div className={styles["post-box"]} key={node.slug}>
            <PostPreview
              databaseId={node.databaseId}
              title={node.title}
              coverImage={node.featuredImage?.node}
              date={node.date}
              author={node.author?.node}
              slug={node.slug}
              categories={node.categories.edges}
              isViewMore={false}
            />
          </div>
        ))}
      </div>
    );
  }
}
