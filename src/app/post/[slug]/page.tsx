import Link from 'next/link';
import Image from 'next/image';
import { getPostData } from "@/lib/posts";
import { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params; // Esperar que params se resuelva
  if (!resolvedParams.slug) {
    return {
      title: "Post no encontrado",
      description: "Este post no existe o hubo un error.",
    };
  }
  const post = await getPostData(resolvedParams.slug);
  return {
    title: post.title,
    description: `Artículo publicado el ${new Date(post.date).toLocaleDateString()}`,
  };
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params; // Esperar que params se resuelva
  if (!resolvedParams.slug) {
    return <p className="text-center text-red-500">Error: Post no encontrado</p>;
  }
  const post = await getPostData(resolvedParams.slug);
  return (

    <section className="py-8 flex-grow">
      <div className="container mx-auto px-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>
        <p className="text-sm text-gray-500 mb-4">{post.date}</p>
        <div className="prose mb-8">
          {post.contentHtml && (
            <div dangerouslySetInnerHTML={{ __html: post.contentHtml || "" }} />
          )}
        </div>

        <div className="mt-8">
          <h3 className="text-xl font-semibold">Productos recomendados:</h3>
          <div className="flex flex-wrap justify-around gap-8">
            <Link href="https://amzn.to/4iMIZWc" target="_blank" className="text-blue-600 hover:underline hover:scale-105 transition-transform" rel="nofollow noopener noreferrer">
              <div className="flex flex-col items-center text-center">
                Teclado inalámbrico mecánico
                <Image
                  src="https://m.media-amazon.com/images/I/71oooMQxjLL._AC_SL1500_.jpg"
                  alt="Teclado inalámbrico mecánico"
                  width={150}
                  height={150}
                  className="object-contain max-h-36 w-auto"
                  unoptimized
                />
              </div>
            </Link>

            <Link href="https://amzn.to/4iOX2KN" target="_blank" className="text-blue-600 hover:underline hover:scale-105 transition-transform" rel="nofollow noopener noreferrer">
              <div className="flex flex-col items-center text-center">
                Mouse inalámbrico ergonómico
                <Image
                  src="https://m.media-amazon.com/images/I/71tqvuHgIlL._AC_SL1500_.jpg"
                  alt="Mouse inalámbrico ergonómico"
                  width={150}
                  height={150}
                  className="object-contain max-h-36 w-auto"
                  unoptimized
                />
              </div>
            </Link>

            <Link href="https://amzn.to/3FSnk0o" target="_blank" className="text-blue-600 hover:underline hover:scale-105 transition-transform" rel="nofollow noopener noreferrer">
              <div className="flex flex-col items-center text-center">
                Auriculares bluethoot
                <Image
                  src="https://m.media-amazon.com/images/I/713bfTZ2mrL._AC_SL1500_.jpg"
                  alt="Auriculares bluethoot"
                  width={150}
                  height={150}
                  className="object-contain max-h-36 w-auto"
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

