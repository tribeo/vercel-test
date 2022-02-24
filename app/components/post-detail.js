import PostHeader from "./post-header";
import PostBody from "./post-body";
import PostAuthor from "./post-author";
import { Fragment } from "react/cjs/react.production.min";

export default function PostDetail({ post }) {
  return (
    <Fragment>
      <div className="post-detail-container">
        <PostHeader
          title={post.title}
          date={post.date}
          categories={post.categories}
          slug={post.slug}
          coverImage={post.featuredImage?.node}
          databaseId={post.databaseId}
        />

        <PostBody content={post.content} />
      </div>
      <PostAuthor author={post.author?.node} />
    </Fragment>
  );
}
