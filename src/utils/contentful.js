// import { createClient } from "contentful";

// const client = createClient({
//   space: process.env.CONTENTFUL_SPACE_ID,
//   accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
// });

// console.log("Space ID:", process.env.CONTENTFUL_SPACE_ID);
// console.log("Access Token:", process.env.CONTENTFUL_ACCESS_TOKEN);

// // Retrieve the list of blog posts from Contentful
// const getNews = async () => {
//   console.log("client");
//   const response = await client.getEntries({
//     content_type: "news",
//   });
//   console.log("Response:", response);
//   return response.items;
// };

// export default getNews;

import { createClient } from "contentful";

export const createContentClient = () => {
  return createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });
};
const client = createContentClient();

export const getEntriesByType = async (type) => {
  const response = await client.getEntries({
    content_type: type,
  });

  return response.items;
};

export const getBlogPosts = async () => {
  const results = await getEntriesByType("news");
  const blogPosts = results.map((blog) => blog.fields);
  return blogPosts;
};

export const getEntryBySlug = async (slug, type) => {
  const queryOptions = {
    content_type: type,
    "fields.slug[match]": slug,
  };
  const queryResult = await client.getEntries(queryOptions);
  return queryResult.items[0];
};
