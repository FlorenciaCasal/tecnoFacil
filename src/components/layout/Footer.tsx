import Link from "next/link";
import { EnvelopeIcon, ShieldCheckIcon, DocumentTextIcon } from '@heroicons/react/24/outline';

interface FooterProps {
    className?: string;
}
const Footer: React.FC<FooterProps> = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 py-6 border-t border-gray-700">
            <div className="max-w-6xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    {/* Columna 1 - Logo y derechos */}
                    <div className="flex flex-col items-center md:items-start space-y-2">
                        <h3 className="text-lg font-bold text-white">TecnoFácil</h3>
                        <p className="text-xs text-gray-500">
                            &copy; {new Date().getFullYear()} TecnoFácil. Todos los derechos reservados.
                        </p>
                    </div>

                    {/* Columna 2 - Legal */}
                    <div className="flex flex-col items-center md:items-start space-y-1">
                        <div className="flex flex-col space-y-1 text-sm">
                            <Link href="/privacidad" className="hover:text-white transition-colors flex items-start">
                                <ShieldCheckIcon className="w-4 h-4 mr-1 mt-0.5" />
                                Política de Privacidad
                            </Link>
                            <Link href="/terminos" className="hover:text-white transition-colors flex items-start">
                                <DocumentTextIcon className="w-4 h-4 mr-1 mt-0.5" />
                                Términos
                            </Link>
                        </div>
                    </div>

                    {/* Columna 3 - Contacto */}
                    <div className="flex flex-col items-center md:items-start space-y-1">
                        <h4 className="text-sm font-semibold text-white mb-1">Contacto</h4>
                        <a
                            href="mailto:contacto@tecnofacil.ar"
                            className="text-blue-400 hover:text-blue-300 transition-colors text-sm flex items-center"
                        >
                            <EnvelopeIcon className="w-4 h-4 mr-1" />
                            contacto@tecnofacil.ar
                        </a>
                    </div>

                    {/* Columna 4 - Aviso de Afiliados */}
                    <div className="flex flex-col items-center md:items-start">
                        <div className="text-xs text-gray-500 text-center md:text-left">
                            <p className="leading-tight">
                                TecnoFácil participa en el Programa de Afiliados de Amazon, un sistema de publicidad para afiliados diseñado para que sitios web obtengan comisiones por publicidad.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;