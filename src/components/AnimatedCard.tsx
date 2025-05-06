"use client";
import { motion } from "framer-motion";
import Link from 'next/link';
import Image from 'next/image';

export default function AnimatedCard({ slug, date, title }: { slug: string; date: string; title: string }) {
    return (
        <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.02 }}
            className="border p-4 rounded-lg shadow-lg hover:shadow-2xl transition-all"
        >
            <Link href={`/post/${slug}`} className="block">
                <Image
                    src={`/images/${slug}.jpg`}
                    alt={`Imagen de ${title}`}
                    width={600}
                    height={400}
                    className="w-full h-40 object-cover rounded-md"
                    unoptimized
                />
                <h2 className="text-2xl font-semibold mt-4 hover:text-blue-600">{title}</h2>
            </Link>
            <p className="text-sm text-gray-500">{date}</p>
        </motion.article>
    );
}