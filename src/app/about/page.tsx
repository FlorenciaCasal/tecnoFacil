import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Acerca de TecnoFácil | Tecnología Simplificada",
    description: "Conoce la misión y valores de TecnoFácil. Blog especializado en recomendaciones tecnológicas honestas y guías prácticas.",
    keywords: ["tecnología", "reseñas", "blog tecnológico", "consejos tech"],
};

export default function About() {
    return (
        <main className="max-w-3xl mx-auto p-6 flex-grow flex flex-col items-center text-center">
            <h1 className="text-4xl font-bold mb-6 text-gray-800">Bienvenidos a TecnoFácil</h1>
            <Image
                src="/images/about.jpg"
                alt="Sobre el blog"
                width={800}
                height={400}
                className="rounded-lg shadow-lg mb-6"
                unoptimized
            />
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Fundado en 2025, TecnoFácil nació para <span className="bg-blue-100 px-1">simplificar la tecnología</span> y brindarte información útil y recomendaciones honestas sobre productos que pueden hacer tu vida más fácil.
            </p>
            <div className="mt-8">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">Nuestra Misión</h2>
                <ul className="list-disc list-inside text-lg text-gray-600 space-y-2">
                    <li>Analizar productos tecnológicos con honestidad</li>
                    <li>Crear guías prácticas para usuarios reales</li>
                    <li>Ser tu fuente confiable de recomendaciones</li>
                </ul>
            </div>

            <div className="mt-8 bg-blue-50 p-4 rounded-lg">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">Conéctate con nosotros</h2>
                <p className="text-lg text-gray-600 mb-2">
                    ¿Preguntas o colaboraciones? Escríbenos a:
                </p>
                <a
                    href="mailto:tecnofacilblogweb@gmail.com"
                    className="text-blue-600 font-medium hover:text-blue-800 hover:underline text-xl"
                >
                    tecnofacilblogweb@gmail.com
                </a>
                <p className="text-sm text-gray-500 mt-2">
                    Responderemos dentro de las 48 horas.
                </p>
            </div>
        </main>
    );
}

