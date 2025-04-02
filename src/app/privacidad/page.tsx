import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidad | TecnoFácil",
  description: "Transparencia sobre el uso de datos en TecnoFácil"
};

export default function PrivacyPage() {
  return (
    <main className="max-w-3xl mx-auto p-6 flex-grow">
      <h1 className="text-3xl font-bold mb-6">Política de Privacidad</h1>
      
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">1. Recopilación de Datos</h2>
        <p className="text-gray-700 mb-4">
          <strong>TecnoFácil no recopila ningún dato personal de sus visitantes.</strong> Este sitio:
        </p>
        <ul className="list-disc pl-5 space-y-2 mb-4">
          <li>No utiliza cookies de seguimiento</li>
          <li>No implementa Google Analytics ni herramientas similares</li>
          <li>No requiere registro ni formularios de contacto</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">2. Enlaces Externos</h2>
        <p className="text-gray-700">
          Algunos enlaces son parte del programa de afiliados de Amazon. 
          Estos enlaces no instalan cookies en tu dispositivo hasta que decides visitar Amazon.
        </p>
      </section>
    </main>
  );
}