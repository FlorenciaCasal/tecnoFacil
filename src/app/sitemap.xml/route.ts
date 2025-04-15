import { getSortedPostsData } from "@/lib/posts";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://tecnofacil.ar";
  const posts = getSortedPostsData(); // Obtiene los posts desde Markdown

  const staticPages = [
    { url: `${baseUrl}/`, lastModified: "2025-03-26" },
    { url: `${baseUrl}/about`, lastModified: "2025-03-26" },
    { url: `${baseUrl}/contacto`, lastModified: "2025-03-26" },
    { url: `${baseUrl}/privacidad`, lastModified: "2025-04-02" },
    { url: `${baseUrl}/terminos`, lastModified: "2025-04-02" },
  ];

  const postPages = posts.map((post) => ({
    url: `${baseUrl}/post/${post.slug}`,
    lastModified: post.date, // Usa la fecha de cada post
  }));

  return [...staticPages, ...postPages];
}
