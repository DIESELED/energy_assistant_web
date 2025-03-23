import Link from 'next/link'

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-primary py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Energie sparen leicht gemacht
            </h1>
            <p className="text-xl mb-8">
              Entdecken Sie personalisierte Energiespartipps mit unserem intelligenten Telegram-Bot
            </p>
            <Link href="https://t.me/energy_assistant_bot" className="btn-primary">
              Jetzt Bot starten
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="card">
              <div className="text-accent text-4xl mb-4">
                💡
              </div>
              <h3 className="text-xl font-bold mb-4">
                Clevere Tipps
              </h3>
              <p className="text-gray-600">
                Erhalten Sie maßgeschneiderte Empfehlungen für Ihren Haushalt
              </p>
            </div>

            {/* Feature 2 */}
            <div className="card">
              <div className="text-accent text-4xl mb-4">
                💰
              </div>
              <h3 className="text-xl font-bold mb-4">
                Kosten sparen
              </h3>
              <p className="text-gray-600">
                Reduzieren Sie Ihre Energiekosten durch effiziente Maßnahmen
              </p>
            </div>

            {/* Feature 3 */}
            <div className="card">
              <div className="text-accent text-4xl mb-4">
                🌍
              </div>
              <h3 className="text-xl font-bold mb-4">
                Umwelt schützen
              </h3>
              <p className="text-gray-600">
                Leisten Sie einen Beitrag zum Klimaschutz
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-accent py-20">
        <div className="container text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Bereit zum Energie sparen?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Starten Sie jetzt mit unserem Telegram-Bot und erhalten Sie personalisierte Energiespartipps
          </p>
          <Link href="https://t.me/energy_assistant_bot" className="inline-block px-6 py-3 bg-white text-accent font-semibold rounded-full hover:bg-gray-100 transition-colors">
            Zum Telegram-Bot
          </Link>
        </div>
      </section>
    </main>
  )
}
