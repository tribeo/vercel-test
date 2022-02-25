import Container from "../../components/container";
import Layout from "../../components/layout";
import { getAllPostsForHome, getAllCategories } from "../../lib/api";
import SonyHeader from "../../components/sony-header";
import NavBar from "../../components/nav-bar";
import SgedIntro from "../../components/sged-intro";
import SgedProgrammingEducation from "../../components/sged-programming-education";
import PartnersSection from "../../components/partners-section";
import ScrollUp from "../../components/scroll-up";
import PostsOfCategory from "../../components/posts-of-category";

export default function News({ allPosts: { edges }, allCategories }) {
  return (
    <Layout>
      <Container>
        <SonyHeader />
        <NavBar
          categories={allCategories}
          resourcePage="sub-page"
        />

        <PostsOfCategory
          allPosts={edges}
          categoryName="新着記事"
          subHeader="News"
        />
        <SgedIntro />

        <SgedProgrammingEducation />
        <PartnersSection />

        <ScrollUp />
      </Container>
    </Layout>
  );
}

export async function getStaticProps({ preview = false }) {
  const allPosts = await getAllPostsForHome(preview);
  const allCategories = await getAllCategories();
  return {
    props: { allPosts, allCategories },
  };
}
