import { getPostData, getSortedPostsData } from '@/lib/posts';
import { Metadata } from "next";
// import { Params } from '@/types/Params';
import Link from 'next/link';
import Image from 'next/image';

type PageProps = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  const posts = getSortedPostsData();
  return posts.map((post) => ({ slug: post.slug })) as { slug: string }[];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  if (!params?.slug) return {};
  const postData = getPostData(params.slug);

  return {
    title: `${postData.title} - Mi Blog`,
    description: `Lee sobre ${postData.title}. Reseñas y recomendaciones de productos.`,
    openGraph: {
      title: postData.title,
      description: `Descubrí más sobre ${postData.title}.`,
      url: `https://tublog.com/post/${params.slug}`,
      type: "article",
      images: [
        {
          url: "https://tublog.com/images/default-thumbnail.jpg",
          width: 1200,
          height: 630,
          alt: postData.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: postData.title,
      description: `Lee sobre ${postData.title}.`,
      images: ["https://tublog.com/images/default-thumbnail.jpg"],
    },
    alternates: {
      canonical: `https://tublog.com/post/${params.slug}`,
    },
  };
}


export default async function Post({ params }:  PageProps) {
  if (!params?.slug) return <p>Error: No se encontró el post</p>;
  const postData = getPostData(params.slug);

  return (

    <section className="py-8 flex-grow">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-4">{postData.title}</h1>
        <p className="text-sm text-gray-500 mb-4">{postData.date}</p>
        <div className="prose mb-8">
          <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </div>
        <div className="mt-8">
          <h3 className="text-xl font-semibold">Productos recomendados:</h3>
          <div className="flex flex-wrap justify-around gap-8">
            <Link href="https://amzn.to/4iMIZWc" target="_blank" className="text-blue-600 hover:underline" rel="nofollow noopener noreferrer">
              <div className="flex flex-col items-center text-center">
                Teclado inalámbrico mecánico
                <Image src="https://m.media-amazon.com/images/I/71oooMQxjLL._AC_SL1500_.jpg"
                  alt="Teclado inalámbrico mecánico"
                  width={200}
                  height={100}
                  unoptimized
                />
              </div>
            </Link>
            <Link href="https://amzn.to/4iOX2KN" target="_blank" className="text-blue-600 hover:underline" rel="nofollow noopener noreferrer">
              <div className="flex flex-col items-center text-center">
                Mouse inalámbrico ergonómico
                <Image src="https://m.media-amazon.com/images/I/71tqvuHgIlL._AC_SL1500_.jpg"
                  alt="Mouse inalámbrico ergonómico"
                  width={200}
                  height={100}
                  unoptimized
                />
              </div>
            </Link>
            <Link href="https://amzn.to/3FSnk0o" target="_blank" className="text-blue-600 hover:underline" rel="nofollow noopener noreferrer">
              <div className="flex flex-col items-center text-center">
                Auriculares bluethoot
                <Image src="https://m.media-amazon.com/images/I/713bfTZ2mrL._AC_SL1500_.jpg"
                  alt="Auriculares bluethoot"
                  width={200}
                  height={100}
                  unoptimized
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>

  );
}

