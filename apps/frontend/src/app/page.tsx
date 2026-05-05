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
      <section className="bg-gradient-to-br from-primary-600 to-primary-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Conecta tu creatividad con el mundo
            </h1>
            <p className="text-xl text-primary-100 mb-8">
              El marketplace que une artistas, artesanos y creativos con
              clientes que valoran lo único. Marketing + Exhibición + Ventas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-accent-500 hover:bg-accent-600 text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors">
                Soy Creador
              </button>
              <button className="bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors">
                Busco Creativos
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Explora Categorías
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((cat) => (
              <div
                key={cat.name}
                className="card text-center cursor-pointer hover:border-primary-200"
              >
                <span className="text-4xl block mb-2">{cat.icon}</span>
                <h3 className="font-semibold text-gray-800">{cat.name}</h3>
                <p className="text-sm text-gray-500">{cat.count} creativos</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            ¿Cómo funciona?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="card">
                <span className="text-4xl block mb-4">{feature.icon}</span>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            ¿Tienes un espacio comercial?
          </h2>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            Decora tu restaurante, café u oficina con arte local. Tus clientes
            pueden comprar escaneando un QR. Mejora la estética + genera
            ingresos extra.
          </p>
          <button className="btn-primary text-lg py-3 px-8">
            Registra tu Espacio
          </button>
        </div>
      </section>
    </div>
  );
}
