import Hero from "@/components/Hero";
import Menu from "@/components/Menu";

import Link from "next/link";
import { getBlogPosts } from "../../utils/contentful";

async function archive() {
  const blogs = await getBlogPosts();
  return (
    <main className="w-full min-h-screen">
      <Hero />
      {blogs.map((blog) => (
        <div key={blog.slug}>
          <Link href={`${blog.slug}`}> {blog.title}</Link>
        </div>
      ))}
    </main>
  );
}

export default archive;
