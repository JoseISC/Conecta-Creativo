export default function HomePage() {
  const categories = [
    { name: 'Artesanía', icon: '🏺', count: 120 },
    { name: 'Música', icon: '🎵', count: 85 },
    { name: 'Performance', icon: '🎭', count: 45 },
    { name: 'Decoración', icon: '🖼️', count: 92 },
    { name: 'Diseño', icon: '✏️', count: 156 },
    { name: 'Gastronomía', icon: '🍽️', count: 67 },
  ];

  const features = [
    {
      title: 'Exhibe y Vende',
      description:
        'Coloca tus productos en espacios físicos con códigos QR. Los clientes escanean y compran directamente.',
      icon: '📱',
    },
    {
      title: 'Marketing Automatizado',
      description:
        'La plataforma actúa como tu agencia de marketing: posicionamiento, redes sociales y analytics.',
      icon: '📈',
    },
    {
      title: 'Matching Inteligente',
      description:
        'Conectamos creativos con clientes ideales usando IA. Más visibilidad, más ventas.',
      icon: '🤝',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Conecta tu creatividad con el mundo
            </h1>
            <p className="text-xl text-primary-100 mb-10 leading-relaxed">
              El marketplace que une artistas, artesanos y creativos con
              clientes que valoran lo único. Marketing + Exhibición + Ventas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-secondary text-lg py-3 px-8 font-bold">
                Soy Creador
              </button>
              <button className="bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white">
                Busco Creativos
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Explora Categorías
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((cat) => (
              <button
                key={cat.name}
                type="button"
                className="card text-center hover:border-primary-300 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 transition-all"
                aria-label={`Ver categoría ${cat.name}: ${cat.count} creativos`}
              >
                <span className="text-4xl block mb-2" aria-hidden="true">
                  {cat.icon}
                </span>
                <h3 className="font-semibold text-gray-800">{cat.name}</h3>
                <p className="text-sm text-gray-500 mt-0.5">{cat.count} creativos</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            ¿Cómo funciona?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="card">
                <span
                  className="text-4xl block mb-4"
                  aria-hidden="true"
                >
                  {feature.icon}
                </span>
                <h3 className="text-xl font-bold mb-2 text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — Spaces */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">
            ¿Tienes un espacio comercial?
          </h2>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
            Decora tu restaurante, café u oficina con arte local. Tus clientes
            pueden comprar escaneando un QR. Mejora la estética y genera
            ingresos extra.
          </p>
          <button className="btn-primary text-lg py-3 px-8 font-semibold">
            Registra tu Espacio
          </button>
        </div>
      </section>
    </div>
  );
}
