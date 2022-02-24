import { useRouter } from "next/router";
import ErrorPage from "next/error";
import { Fragment } from "react/cjs/react.production.min";
import Container from "../../components/container";
import Layout from "../../components/layout";
import {
  getAllPostsForHome,
  getAllPostsWithSlug,
  getAllCategories,
  getAllPostsOfCategory,
  getPostById,
} from "../../lib/api";
import PostTitle from "../../components/post-title";
import SonyHeader from "../../components/sony-header";
import NavBar from "../../components/nav-bar";
import SgedIntro from "../../components/sged-intro";
import SgedProgrammingEducation from "../../components/sged-programming-education";
import PartnersSection from "../../components/partners-section";
import ScrollUp from "../../components/scroll-up";
import PostsOfCategory from "../../components/posts-of-category";
import PostDetail from "../../components/post-detail";
import TopPosts from "../../components/top-posts";

export default function Post({
  allCategories,
  category,
  post,
  preview,
  isId,
  popularPosts,
}) {
  const router = useRouter();
  if (
    !router.isFallback &&
    ((isId && !post?.databaseId) || (!isId && !category?.slug))
  ) {
    return <ErrorPage statusCode={404} />;
  }

  const allPosts = category?.posts?.edges;

  return (
    <Layout>
      <Container>
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <SonyHeader />
            <NavBar
              categories={allCategories}
              resourcePage="sub-page"
              slugQuery={router.query?.slug}
            />

            {isId ? (
              <Fragment>
                <PostDetail post={post} />

                {popularPosts.length > 0 && (
                  <TopPosts
                    posts={popularPosts}
                    jpTitle="人気の記事"
                    enTitle="Popular"
                    isViewMore={false}
                    type="popular-detail"
                    size="single-row"
                  />
                )}
              </Fragment>
            ) : (
              <Fragment>
                <PostsOfCategory
                  allPosts={allPosts}
                  categoryName={category.name}
                />
                <SgedIntro />
              </Fragment>
            )}

            <SgedProgrammingEducation />
            <PartnersSection />

            <ScrollUp />
          </>
        )}
      </Container>
    </Layout>
  );
}

export async function getStaticProps({ params, preview = false, previewData }) {
  const allCategories = await getAllCategories();
  const isId = Number.isInteger(Number(params.slug));

  const allPosts = await getAllPostsForHome();

  if (isId) {
    const post = await getPostById(params.slug, preview);
    return {
      props: {
        post: post,
        allCategories: allCategories,
        preview: preview,
        isId: isId,
        popularPosts: allPosts?.edges.slice(0, 6),
      },
    };
  } else {
    const category = await getAllPostsOfCategory(params.slug, preview);
    return {
      props: {
        category: category,
        allCategories: allCategories,
        preview: preview,
        isId: isId,
      },
    };
  }
}

export async function getStaticPaths() {
  const allPosts = await getAllPostsWithSlug();
  const allCategories = await getAllCategories();
  const allPostPaths = allPosts.edges.map(({ node }) => ({
    params: {
      slug: node.databaseId.toString(),
    },
  }));
  const allCatPaths = allCategories.edges.map(({ node }) => ({
    params: {
      slug: node.slug,
    },
  }));

  return {
    paths: allPostPaths.concat(allCatPaths) || [],
    fallback: true,
  };
}
