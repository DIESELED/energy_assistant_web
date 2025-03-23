"use client";
import Link from 'next/link';

export default function Impressum() {
  return (
    <main className="min-h-screen bg-[#1a1a1a] py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto bg-[#2F4F2F] rounded-xl p-8">
          <h1 className="text-3xl font-bold text-white mb-8">Impressum</h1>
          <div className="text-gray-300 space-y-4">
            <p>Enerlytic ist ein Projekt der Enerlytic GmbH</p>
            <p>Geschäftsführung: Max Mustermann</p>
            <p>Sitz der Gesellschaft: Musterstraße 123, 12345 Berlin</p>
            <p>Handelsregister: Amtsgericht Berlin-Charlottenburg, HRB XXXXX</p>
            <p>Kontakt: info@enerlytic.de</p>
            
            <h2 className="text-xl font-bold text-white mt-8 mb-4">Haftungsausschluss</h2>
            <p>Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.</p>
            
            <h2 className="text-xl font-bold text-white mt-8 mb-4">Urheberrecht</h2>
            <p>Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht.</p>
            
            <div className="mt-12">
              <Link 
                href="/" 
                className="text-white hover:text-gray-300 transition-colors"
              >
                ← Zurück zur Startseite
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 