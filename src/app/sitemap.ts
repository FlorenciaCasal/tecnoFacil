import { getSortedPostsData } from "@/lib/posts";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = getSortedPostsData(); // Obtiene los posts desde Markdown

  const staticPages = [
    { url: "https://tecno-facil-eight.vercel.app/", lastModified: "2025-03-26" },
    { url: "https://tecno-facil-eight.vercel.app/about", lastModified: "2025-03-26" },
    { url: "https://tecno-facil-eight.vercel.app/contacto", lastModified: "2025-03-26" },
    { url: "https://tecno-facil-eight.vercel.app/privacidad", lastModified: "2025-04-02" },
    { url: "https://tecno-facil-eight.vercel.app/terminos", lastModified: "2025-04-02" },
  ];

  const postPages = posts.map((post) => ({
    url: `https://tecno-facil-eight.vercel.app/post/${post.slug}`,
    lastModified: post.date, // Usa la fecha de cada post
  }));

  return [...staticPages, ...postPages];
}
