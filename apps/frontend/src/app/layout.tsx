import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/globals.css';
import Header from '@/components/Header';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

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
  const currentYear = new Date().getFullYear();

  return (
    <html lang="es" className={inter.variable}>
      <body className="min-h-screen font-sans">
        <Header />
        <main>{children}</main>
        <footer className="bg-gray-900 text-gray-300 py-12 mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="flex items-center space-x-2 mb-3">
                  <span className="text-xl" aria-hidden="true">
                    🎨
                  </span>
                  <h3 className="text-white font-bold text-lg">
                    Conecta-Creativo
                  </h3>
                </div>
                <p className="text-sm leading-relaxed">
                  El marketplace que conecta la industria creativa con el mundo.
                </p>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-4">Plataforma</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a
                      href="/marketplace"
                      className="hover:text-white transition-colors"
                    >
                      Marketplace
                    </a>
                  </li>
                  <li>
                    <a
                      href="/creadores"
                      className="hover:text-white transition-colors"
                    >
                      Para Creadores
                    </a>
                  </li>
                  <li>
                    <a
                      href="/espacios"
                      className="hover:text-white transition-colors"
                    >
                      Para Espacios
                    </a>
                  </li>
                  <li>
                    <span className="text-gray-400">Marketing</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-4">Contacto</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a
                      href="mailto:hola@conecta-creativo.cl"
                      className="hover:text-white transition-colors"
                    >
                      hola@conecta-creativo.cl
                    </a>
                  </li>
                  <li>Santiago, Chile</li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm">
              © {currentYear} Conecta-Creativo. Todos los derechos reservados.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
