import Link from 'next/link';
import { getSortedPostsData } from '@/lib/posts';
// import Head from 'next/head';
import Image from 'next/image';
import { Metadata } from "next";
import { motion } from "framer-motion";

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
        {allPostsData.map(({ slug, date, title }) => (
          // <article key={slug} className="border p-4 rounded-lg shadow-lg hover:shadow-2xl transition-shadow">
          <motion.article
            key={slug}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.02 }}
            // className="border p-4 rounded-lg shadow-lg hover:shadow-2xl transition-shadow">
            className="border p-4 rounded-lg shadow-lg hover:shadow-2xl transition-all">
            <Link href={`/post/${slug}`} className="block">
              {/* Imagen opcional */}
              <Image
                src={`/images/${slug}.jpg`} // Ajusta según tus imágenes
                alt={`Imagen representativa de ${title}`}
                width={600}
                height={400}
                className="w-full h-40 object-cover rounded-md"
                unoptimized
              />
              <h2 className="text-2xl font-semibold mt-4 hover:text-blue-600">{title}</h2>
            </Link>
            <p className="text-sm text-gray-500">{date}</p>
            {/* </article> */}
          </motion.article>
        ))}
      </div>
    </main>
    // </>
  );
}




