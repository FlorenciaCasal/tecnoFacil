import { Metadata } from "next";
import { EnvelopeIcon } from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: "Contacto | TecnoFácil",
  description: "Cómo ponerte en contacto con el equipo de TecnoFácil"
};

export default function ContactPage() {
  return (
    <main className="max-w-3xl mx-auto p-6 flex-grow">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Contacto</h1>
        <p className="text-gray-600">¿Tenés consultas o sugerencias? Escribinos.</p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 max-w-md mx-auto">
        <div className="flex flex-col items-center">
          <div className="bg-blue-100 p-4 rounded-full mb-4">
            <EnvelopeIcon className="h-8 w-8 text-blue-600" />
          </div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Contacto por email</h2>
          <p className="text-gray-600 mb-4 text-center">
            Para consultas generales, colaboraciones o feedback sobre el blog.
          </p>
          <p
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors flex items-center"
          >
            <EnvelopeIcon className="h-5 w-5 mr-2" />
            contacto@tecnofacil.ar
          </p>
          <p className="mt-3 text-sm text-gray-500">
            Respondemos en menos de 48 horas.
          </p>
        </div>
      </div>

    </main>
  );
}