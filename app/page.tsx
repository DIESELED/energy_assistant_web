"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { WavyBackgroundDemo } from "@/components/demo";
import { TimelineDemo } from "@/components/demo";
import { TestimonialsSectionDemo } from "@/components/demo";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { FeaturesSectionWithHoverEffects } from "@/components/blocks/feature-section-with-hover-effects";

type Locale = 'de' | 'en';

type TranslationKeys = 'users' | 'title' | 'subtitle' | 'cta' | 'about' | 'language';

type Translations = {
  [K in Locale]: {
    [T in TranslationKeys]: string;
  };
};

const translations: Translations = {
  de: {
    users: "  12.031 ZUFRIEDENE NUTZER",
    title: "Enerlytic",
    subtitle: "Dein AI Energy Assistent gibt dir personalisierte Energiespartipps und -empfehlungen für dein Zuhause.",
    cta: "Starte deinen Energy Assistenten for free",
    about: "Über uns",
    language: "Sprache"
  },
  en: {
    users: "  12,031 HAPPY USERS",
    title: "Enerlytic",
    subtitle: "Your AI Energy Assistant provides personalized energy-saving tips and recommendations for your home.",
    cta: "Start your Energy Assistant for free",
    about: "About Us",
    language: "Language"
  }
};

export default function Home() {
  const [locale, setLocale] = useState<Locale>('de');
  
  const t = (key: TranslationKeys) => translations[locale][key];

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLocale(e.target.value as Locale);
  };

  return (
    <main className="min-h-screen bg-[#1a1a1a]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
      {/* Navigation */}
      <nav className="absolute top-0 left-0 p-4 flex items-center space-x-2 z-10">
        <span className="text-white text-xl font-bold">Enerlytic</span>
        <img src="/christian-dubovan-gxsRL8B_ZqE-unsplash.jpg" alt="Logo" className="w-8 h-8" />
      </nav>

      <nav className="absolute top-0 right-0 p-4 flex items-center space-x-4 z-10">
        <Link href="/about" className="text-white hover:text-gray-300">
          {t('about')}
        </Link>
        <select 
          className="bg-transparent text-gray-300 px-2 py-1 focus:outline-none"
          value={locale}
          onChange={handleLanguageChange}
        >
          <option value="de">Deutsch</option>
          <option value="en">English</option>
        </select>
      </nav>

      {/* Hero Section */}
      <div className="relative h-screen">
        <Image
          src="/bruce-mars-FWVMhUa_wbY-unsplash.jpg"
          alt="Enerlytic Hero"
          fill
          style={{ objectFit: 'cover', objectPosition: 'center' }}
          priority
        />
        <div className="absolute inset-0 flex items-center justify-start bg-black bg-opacity-50 p-8">
          <div className="text-left text-white">
            <div className="flex items-center mb-4">
              <div className="flex -space-x-3 mb-4">
                <img
                  className="rounded-full"
                  src="https://originui.com/avatar-80-03.jpg"
                  width={40}
                  height={40}
                  alt="Avatar 01"
                />
                <img
                  className="rounded-full"
                  src="https://originui.com/avatar-80-04.jpg"
                  width={40}
                  height={40}
                  alt="Avatar 02"
                />
                <img
                  className="rounded-full"
                  src="https://originui.com/avatar-80-05.jpg"
                  width={40}
                  height={40}
                  alt="Avatar 03"
                />
                <img
                  className="rounded-full"
                  src="https://originui.com/avatar-80-06.jpg"
                  width={40}
                  height={40}
                  alt="Avatar 04"
                />
              </div>
              <span className="text-white ml-4">  {t('users')}</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6" style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700 }}>
              <span className="font-bold">Spare</span> bei deiner nächsten<br />monatlichen <span className="font-bold">Strom</span><br />und <span className="font-bold">Heizrechnung</span>
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl font-light max-w-lg leading-relaxed mb-8">
              {t('subtitle')}
            </p>
            <InteractiveHoverButton 
              text="Kostenlos testen"
              onClick={() => window.location.href = 'https://t.me/energy_assistant_bot'}
            />
          </div>
        </div>
      </div>
      
      {/* Features Grid */}
      <section className="py-20 px-4 bg-[#1a1a1a]">
        <h2 className="text-4xl text-center text-white font-bold mb-12" style={{ fontFamily: 'Playfair Display, serif' }}>
          Deine Chance
        </h2>
        <FeaturesSectionWithHoverEffects />
      </section>

      {/* Personas Section */}
      <section className="py-20 px-4 bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl text-center text-white font-bold mb-12" style={{ fontFamily: 'Playfair Display, serif' }}>
            Für jeden die passende Lösung
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Persona 1 - Max */}
            <div className="bg-[#1B4332] rounded-xl p-8 hover:bg-[#2D6A4F] transition-colors">
              <div className="w-32 h-32 mx-auto mb-6 bg-[#2D6A4F] rounded-full flex items-center justify-center text-white text-6xl">
                👨🏻
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white text-center">
                Max, 21 – Der Sparfuchs
              </h3>
              <p className="text-gray-300 leading-relaxed text-lg">
                Max wohnt in einer WG in Berlin-Neukölln und will die Stromkosten für sich und seine Mitbewohner senken, ohne große Investitionen. Unser Guide zeigt ihm direkt umsetzbare Tipps für weniger Verbrauch und mehr Geld im Portemonnaie. So kann er nachhaltig leben, ohne auf Komfort zu verzichten.
              </p>
            </div>

            {/* Persona 2 - Tarek */}
            <div className="bg-[#2D6A4F] rounded-xl p-8 hover:bg-[#40916C] transition-colors">
              <div className="w-32 h-32 mx-auto mb-6 bg-[#40916C] rounded-full flex items-center justify-center text-white text-6xl">
                👨🏽‍💼
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white text-center">
                Tarek, 32 – Der Smart-Home-Fan
              </h3>
              <p className="text-gray-300 leading-relaxed text-lg">
                Tarek wohnt in einer modernen Stadtwohnung im Münchner Zentrum und liebt es, sein vernetztes Zuhause ständig zu optimieren. Unser Guide liefert ihm datenbasierte Insights, um seine Energieeffizienz noch weiter zu steigern. So wird sein Smart Home nicht nur komfortabel, sondern auch klimafreundlich.
              </p>
            </div>

            {/* Persona 3 - Leyla */}
            <div className="bg-[#40916C] rounded-xl p-8 hover:bg-[#52B788] transition-colors">
              <div className="w-32 h-32 mx-auto mb-6 bg-[#52B788] rounded-full flex items-center justify-center text-white text-6xl">
                👷🏽‍♀️
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white text-center">
                Leyla, 45 – Die Anpackerin
              </h3>
              <p className="text-gray-300 leading-relaxed text-lg">
                Leyla renoviert mit ihrer Familie ein altes Haus aus den 30er Jahren im ländlichen Brandenburg. Sie möchte die Sanierung nutzen, um ihr Zuhause energetisch fit für die Zukunft zu machen. Mit unserem Guide weiß sie genau, welche Modernisierungen sich wirklich lohnen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section mit Timeline */}
      <TimelineDemo />

      {/* Testimonials Section */}
      <TestimonialsSectionDemo />

      {/* Final CTA */}
      <section className="py-20 bg-[#1a1a1a]">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white" style={{ fontFamily: 'Playfair Display, serif' }}>
              Dein Weg zu mehr Energieeffizienz beginnt hier
            </h2>
            <InteractiveHoverButton 
              text="Kostenlos testen"
              onClick={() => window.location.href = 'https://t.me/energy_assistant_bot'}
            />
          </div>
        </div>
      </section>

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
