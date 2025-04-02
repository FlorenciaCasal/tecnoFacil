import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Términos de Servicio | TecnoFácil",
  description: "Condiciones de uso del blog TecnoFácil"
};

export default function TermsPage() {
  return (
    <main className="max-w-3xl mx-auto p-6 flex-grow">
      <h1 className="text-3xl font-bold mb-6">Términos de Servicio</h1>
      
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">1. Propósito del Sitio</h2>
        <p className="text-gray-700 mb-4">
          TecnoFácil es un blog informativo con recomendaciones tecnológicas. 
          El contenido se basa en investigación y opiniones personales.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">2. Programa de Afiliados</h2>
        <p className="text-gray-700 mb-4">
          Participamos en el <strong>Programa de Afiliados de Amazon</strong>. 
          Esto significa que:
        </p>
        <ul className="list-disc pl-5 space-y-2 mb-4">
          <li>Algunos enlaces llevan a productos en Amazon</li>
          <li>Si realizas una compra a través de estos enlaces, recibimos una pequeña comisión</li>
          <li>Esto no afecta el precio que pagas</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">3. Exención de Responsabilidad</h2>
        <p className="text-gray-700">
          Las especificaciones de los productos pueden cambiar. Siempre verifica la información directamente con el fabricante antes de comprar.
        </p>
      </section>
    </main>
  );
}