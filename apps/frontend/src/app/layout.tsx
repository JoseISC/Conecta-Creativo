import type { Metadata } from 'next';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'Conecta-Creativo | Marketplace Creativo',
  description:
    'Conecta con artistas, artesanos y creativos en LATAM. Marketplace + Agencia de marketing para la industria creativa.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="min-h-screen">
        <header className="bg-white border-b border-gray-200">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16 items-center">
              <div className="flex items-center space-x-2">
                <span className="text-2xl">🎨</span>
                <span className="font-bold text-xl text-primary-700">
                  Conecta-Creativo
                </span>
              </div>
              <div className="hidden md:flex items-center space-x-8">
                <a
                  href="/"
                  className="text-gray-700 hover:text-primary-600 transition-colors"
                >
                  Inicio
                </a>
                <a
                  href="/marketplace"
                  className="text-gray-700 hover:text-primary-600 transition-colors"
                >
                  Marketplace
                </a>
                <a
                  href="/creadores"
                  className="text-gray-700 hover:text-primary-600 transition-colors"
                >
                  Creadores
                </a>
                <a
                  href="/espacios"
                  className="text-gray-700 hover:text-primary-600 transition-colors"
                >
                  Espacios
                </a>
              </div>
              <div className="flex items-center space-x-4">
                <button className="btn-primary text-sm">Únete</button>
              </div>
            </div>
          </nav>
        </header>
        <main>{children}</main>
        <footer className="bg-gray-900 text-gray-300 py-12 mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-white font-bold text-lg mb-4">
                  Conecta-Creativo
                </h3>
                <p className="text-sm">
                  El marketplace que conecta la industria creativa con el mundo.
                </p>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-4">Plataforma</h4>
                <ul className="space-y-2 text-sm">
                  <li>Marketplace</li>
                  <li>Para Creadores</li>
                  <li>Para Espacios</li>
                  <li>Marketing</li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-4">Contacto</h4>
                <ul className="space-y-2 text-sm">
                  <li>hola@conecta-creativo.cl</li>
                  <li>Santiago, Chile</li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm">
              © 2024 Conecta-Creativo. Todos los derechos reservados.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
