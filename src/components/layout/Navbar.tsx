import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
    return (
        <header className="bg-gradient-to-r from-blue-700 to-blue-600 text-white py-2">
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/" className="flex items-center">
                    <Image 
                        src="/images/logo.jpg" // Ruta a tu logo en public/
                        alt="TecnoFácil - Tecnología Accesible"
                        width={360} // Ajusta según necesidad
                        height={80}
                        className="h-14 w-auto" // Control adicional con Tailwind
                    />
                </Link>
                <nav>
                    <ul className="flex space-x-8">
                        <li><Link href="/" className="hover:underline">Inicio</Link></li>
                        <li><Link href="/about" className="hover:underline">Acerca de</Link></li>
                        <li><Link href="/contacto" className="hover:underline">Contacto</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Navbar;