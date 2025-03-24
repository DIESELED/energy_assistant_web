"use client";
import { WavyBackground } from "@/components/ui/wavy-background";
import Link from "next/link";

export default function Impressum() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white font-montserrat">
      <WavyBackground className="max-w-4xl mx-auto py-20">
        <div className="relative z-10 px-4">
          <div className="mb-8">
            <Link href="/" className="text-[#3A5A40] hover:text-[#4A6A50] transition-colors">
              ← Zurück zur Startseite
            </Link>
          </div>
          
          <h1 className="text-4xl font-bold mb-8 text-[#3A5A40]">Impressum</h1>

          <div className="space-y-6 text-gray-300">
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-[#3A5A40]">Angaben gemäß § 5 TMG</h2>
              <p>
                Max Mustermann<br />
                Musterstraße 111<br />
                Gebäude 44<br />
                90210 Musterstadt
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-[#3A5A40]">Kontakt</h2>
              <p>
                Telefon: +49 (0) 123 44 55 66<br />
                Telefax: +49 (0) 123 44 55 99<br />
                E-Mail: mustermann@musterfirma.de
              </p>
            </div>
          </div>
        </div>
      </WavyBackground>
    </main>
  );
} 