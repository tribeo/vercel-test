import TopPosts from "./top-posts";

export default function PostsOfCategory({ allPosts, categoryName }) {
  return (
    <>
      {allPosts.length > 0 ? (
        <TopPosts
          posts={allPosts}
          jpTitle={categoryName}
          enTitle="記事一覧"
          isViewMore={false}
          type="popular"
          size="multiple-rows"
        />
      ) : (
        <div className="empty-posts">Empty posts</div>
      )}
    </>
  );
}
