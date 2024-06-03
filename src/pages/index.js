import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Menu from "@/components/Menu";
import News from "@/components/News";
import Image from "next/image";
// import getNews from "../utils";

import * as contentful from "contentful";

var client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export default function Home(props) {
  return (
    <main className="w-full min-h-screen">
      {/* <Nav /> */}
      <Hero />
      <News news={props.news} />
      <Menu />
      <Footer />
    </main>
  );
}
export async function getStaticProps() {
  const result = await client.getEntries({ content_type: "news" });
  let news = result.items;
  return {
    props: {
      // title: result.fields.newsTitle || "",
      // text: result.fields.newsText || "",
      // date: result.fields.newsDate || "",
      // image: result.fields.newsImg || "",
      result: result,
      news: result.items,
    },
  };
}
