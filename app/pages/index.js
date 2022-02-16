import Head from "next/head";
import Container from "../components/container";
import Layout from "../components/layout";
import { getAllPostsForHome, getAllCategories } from "../lib/api";
import NavBar from "../components/nav-bar";
import TopPosts from "../components/top-posts";
import SgedIntro from "../components/sged-intro";
import SgedProgrammingEducation from "../components/sged-programming-education";
import SonyHeader from "../components/sony-header";
import TopHeader from "../components/top-header";
import PartnersSection from "../components/partners-section";
import ScrollUp from "../components/scroll-up";

export default function Index({ allPosts: { edges }, allCategories }) {
  const heroPost = edges[0]?.node;
  const previewPosts = edges.slice(0, 3);

  console.log(previewPosts);

  return (
    <>
      <Layout>
        <Head>
          <title>{heroPost.title}</title>
        </Head>
        <Container>
          <SonyHeader />
          <NavBar categories={allCategories} />
          <TopHeader />

          {previewPosts.length > 0 && (
            <TopPosts
              posts={previewPosts}
              jpTitle="人気の記事"
              enTitle="Popular"
              isViewMore={false}
              type="popular"
            />
          )}

          {previewPosts.length > 0 && (
            <TopPosts
              posts={previewPosts}
              jpTitle="新着記事"
              enTitle="News"
              isViewMore={true}
              type="news"
            />
          )}

          <SgedIntro />
          <SgedProgrammingEducation />
          <PartnersSection />

          <ScrollUp />
        </Container>
      </Layout>
    </>
  );
}

export async function getStaticProps({ preview = false }) {
  const allPosts = await getAllPostsForHome(preview);
  const allCategories = await getAllCategories();
  return {
    props: { allPosts, allCategories },
  };
}
