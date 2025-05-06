// "use client"
// import Link from 'next/link';
import { getSortedPostsData } from '@/lib/posts';
// import Head from 'next/head';
// import Image from 'next/image';
import { Metadata } from "next";
// import { motion } from "framer-motion";
import AnimatedCard from '@/components/AnimatedCard';

export const metadata: Metadata = {
  title: "Mi Blog - Productos recomendados",
  description: "Encuentra productos recomendados y reseñas detalladas en nuestro blog.",
  openGraph: {
    title: "Mi Blog - Productos recomendados",
    description: "Explora nuestras recomendaciones de productos tecnológicos.",
    url: "https://tecno-facil-eight.vercel.app",
    type: "website",
    images: [
      {
        url: "https://tecno-facil-eight.vercel.app/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Mi Blog - Productos recomendados",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mi Blog - Productos recomendados",
    description: "Explora nuestras recomendaciones de productos tecnológicos.",
    images: ["https://tecno-facil-eight.vercel.app/images/og-image.jpg"],
  },
  alternates: {
    canonical: "https://tecno-facil-eight.vercel.app",
  },
};

export default function Home() {
  const allPostsData = getSortedPostsData();

  return (

    <main className="container mx-auto px-4 py-8 flex-grow">
      <h1 className="text-4xl font-bold mb-4 text-center">Bienvenido a TecnoFácil</h1>
      <p className="text-lg mb-8 text-center text-gray-600">
        Explora nuestras recomendaciones de productos tecnológicos.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {allPostsData.map((post) => (
          <AnimatedCard key={post.slug} {...post} />
        ))}
      </div>

    </main>
    // </>
  );
}




