"use client";
import { WavyBackgroundDemo } from "@/components/demo";
import Link from 'next/link';
import { TimelineDemo } from "@/components/demo";
import { TestimonialsSectionDemo } from "@/components/demo";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#1a1a1a]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
      {/* Hero Section mit Wellen */}
      <div className="relative">
        <WavyBackgroundDemo />
        <style jsx global>{`
          @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&family=Playfair+Display:wght@400&display=swap');
        `}</style>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-full">
          <h1 className="text-4xl md:text-6xl lg:text-8xl text-white mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
            Enerlytic
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl text-white font-light max-w-3xl mx-auto leading-relaxed">
            Dein smarter Guide für ein nachhaltiges und energieeffizientes Zuhause
          </p>
        </div>
      </div>
      
      {/* Process Section mit Timeline */}
      <TimelineDemo />
      
      {/* CTA Section */}
      <section className="bg-[#1a1a1a] py-12">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Bereit für dein smartes Zuhause?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-300">
            Starte jetzt mit unserem intelligenten Guide und erhalte personalisierte Empfehlungen für dein energieeffizientes Zuhause
          </p>
          <Link 
            href="https://t.me/energy_assistant_bot" 
            className="inline-block px-8 py-4 bg-[#2F4F2F] text-white font-semibold rounded-full hover:bg-[#3A5A40] transition-colors"
          >
            Jetzt starten
          </Link>
        </div>
      </section>
      
      {/* Features Grid */}
      <section className="py-20 px-4 bg-[#1a1a1a]">
        <h2 className="text-3xl text-center text-white font-bold mb-12">
          Deine Chance
        </h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Feature 1 */}
          <div className="bg-[#1B4332] rounded-xl p-8 hover:bg-[#2D6A4F] transition-colors">
            <div className="text-4xl mb-4">💸</div>
            <h3 className="text-xl font-bold mb-4 text-white">
              Maßgeschneiderte Sparstrategien
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Schluss mit generischen Tipps! Unser smarter Guide analysiert deinen individuellen Modernisierungsstand und zeigt dir glasklar, wo du bares Geld sparen kannst – ohne Aufwand, ohne Kompromisse.
            </p>
          </div>

          {/* Feature 2 - Energiezukunft */}
          <div className="bg-[#2D6A4F] rounded-xl p-8 hover:bg-[#40916C] transition-colors">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-bold mb-4 text-white">
              Smarte Energieberatung in Echtzeit
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Kein stundenlanges Googeln mehr. Lass dir in wenigen Minuten genau sagen, was du tun kannst, um dein Zuhause zukunftsfähig und klimafreundlich zu gestalten.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-[#40916C] rounded-xl p-8 hover:bg-[#52B788] transition-colors">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-xl font-bold mb-4 text-white">
              Effizient modernisieren leicht gemacht
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Egal, ob du Anfänger oder Profi bist: Unser Guide zeigt dir, welche Schritte wirklich Sinn machen. Effizient, individuell und in deinem Tempo – damit dein Zuhause immer smarter wird.
            </p>
          </div>

          {/* Feature 4 - Umwelt */}
          <div className="bg-[#52B788] rounded-xl p-8 hover:bg-[#74C69D] transition-colors">
            <div className="text-4xl mb-4">🌍</div>
            <h3 className="text-xl font-bold mb-4 text-white">
              Dein Beitrag für den Planeten
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Deine Klimabilanz verbessern und die Umwelt schützen – ganz ohne kompliziertes Fachchinesisch. Der Guide liefert dir maßgeschneiderte Empfehlungen, die wirklich zu dir passen.
            </p>
          </div>
        </div>
      </section>

      {/* Personas Section */}
      <section className="py-20 px-4 bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl text-center text-white font-bold mb-12">
            Für jeden die passende Lösung
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Persona 1 - Max */}
            <div className="bg-[#1B4332] rounded-xl p-8 hover:bg-[#2D6A4F] transition-colors">
              <div className="w-24 h-24 mx-auto mb-6 bg-[#2D6A4F] rounded-full flex items-center justify-center text-white text-4xl">
                👨🏻
              </div>
              <h3 className="text-xl font-bold mb-4 text-white text-center">
                Max, 21 – Der Sparfuchs
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Max wohnt in einer WG in Berlin-Neukölln und will die Stromkosten für sich und seine Mitbewohner senken, ohne große Investitionen. Unser Guide zeigt ihm direkt umsetzbare Tipps für weniger Verbrauch und mehr Geld im Portemonnaie. So kann er nachhaltig leben, ohne auf Komfort zu verzichten.
              </p>
            </div>

            {/* Persona 2 - Tarek */}
            <div className="bg-[#2D6A4F] rounded-xl p-8 hover:bg-[#40916C] transition-colors">
              <div className="w-24 h-24 mx-auto mb-6 bg-[#40916C] rounded-full flex items-center justify-center text-white text-4xl">
                👨🏽‍💼
              </div>
              <h3 className="text-xl font-bold mb-4 text-white text-center">
                Tarek, 32 – Der Smart-Home-Fan
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Tarek wohnt in einer modernen Stadtwohnung im Münchner Zentrum und liebt es, sein vernetztes Zuhause ständig zu optimieren. Unser Guide liefert ihm datenbasierte Insights, um seine Energieeffizienz noch weiter zu steigern. So wird sein Smart Home nicht nur komfortabel, sondern auch klimafreundlich.
              </p>
            </div>

            {/* Persona 3 - Leyla */}
            <div className="bg-[#40916C] rounded-xl p-8 hover:bg-[#52B788] transition-colors">
              <div className="w-24 h-24 mx-auto mb-6 bg-[#52B788] rounded-full flex items-center justify-center text-white text-4xl">
                👷🏽‍♀️
              </div>
              <h3 className="text-xl font-bold mb-4 text-white text-center">
                Leyla, 45 – Die Anpackerin
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Leyla renoviert mit ihrer Familie ein altes Haus aus den 30er Jahren im ländlichen Brandenburg. Sie möchte die Sanierung nutzen, um ihr Zuhause energetisch fit für die Zukunft zu machen. Mit unserem Guide weiß sie genau, welche Modernisierungen sich wirklich lohnen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-[#1a1a1a]">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-white">
              Dein Weg zu mehr Energieeffizienz beginnt hier
            </h2>
            <Link 
              href="https://t.me/energy_assistant_bot" 
              className="inline-block px-8 py-4 bg-[#2F4F2F] text-white font-semibold rounded-full hover:bg-[#3A5A40] transition-colors"
            >
              Jetzt kostenlos testen
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialsSectionDemo />

      {/* Footer */}
      <footer className="bg-[#1a2e1a] py-8">
        <div className="container mx-auto px-4">
          <div className="flex justify-center space-x-8">
            <Link 
              href="/impressum" 
              className="text-white hover:text-[#3A5A40] transition-colors"
            >
              Impressum
            </Link>
            <Link 
              href="/datenschutz" 
              className="text-white hover:text-[#3A5A40] transition-colors"
            >
              Datenschutz
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
