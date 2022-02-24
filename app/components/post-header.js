import Date from "../components/date";
import PostTitle from "../components/post-title";
import CategoryTags from "./category-tags";
import CoverImage from "./cover-image";

export default function PostHeader({
  title,
  date,
  categories,
  slug,
  coverImage,
  databaseId,
}) {
  return (
    <div className="post-header text-center">
      <PostTitle>{title}</PostTitle>

      <div className="post-date">
        <Date dateString={date} />
      </div>
      <CategoryTags categories={categories?.edges} />
      <div className="post-cover">
        {coverImage && (
          <CoverImage
            title={title}
            coverImage={coverImage}
            slug={slug}
            databaseId={databaseId}
          />
        )}
      </div>
    </div>
  );
}
