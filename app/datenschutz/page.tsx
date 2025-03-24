"use client";
import { WavyBackground } from "@/components/ui/wavy-background";
import Link from "next/link";

export default function Datenschutz() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white font-montserrat">
      <WavyBackground className="max-w-4xl mx-auto py-20">
        <div className="relative z-10 px-4">
          <div className="mb-8">
            <Link href="/" className="text-[#3A5A40] hover:text-[#4A6A50] transition-colors">
              ← Zurück zur Startseite
            </Link>
          </div>
          
          <h1 className="text-4xl font-bold mb-8 text-[#3A5A40]">Datenschutzerklärung</h1>

          <div className="space-y-8 text-gray-300">
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-[#3A5A40]">1. Datenschutz auf einen Blick</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-[#3A5A40]">Allgemeine Hinweise</h3>
                  <p>Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2 text-[#3A5A40]">Datenerfassung auf dieser Website</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-lg font-semibold mb-2 text-[#3A5A40]">Wer ist verantwortlich für die Datenerfassung auf dieser Website?</h4>
                      <p>Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Abschnitt "Hinweis zur Verantwortlichen Stelle" in dieser Datenschutzerklärung entnehmen.</p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold mb-2 text-[#3A5A40]">Wie erfassen wir Ihre Daten?</h4>
                      <p>Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben.</p>
                      <p>Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.</p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold mb-2 text-[#3A5A40]">Wofür nutzen wir Ihre Daten?</h4>
                      <p>Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden. Sofern über die Website Verträge geschlossen oder angebahnt werden können, werden die übermittelten Daten auch für Vertragsangebote, Bestellungen oder sonstige Auftragsanfragen verarbeitet.</p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold mb-2 text-[#3A5A40]">Welche Rechte haben Sie bezüglich Ihrer Daten?</h4>
                      <p>Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese Einwilligung jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht, unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.</p>
                      <p>Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit an uns wenden.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-[#3A5A40]">2. Hosting</h2>
              <p>Wir hosten die Inhalte unserer Website bei folgendem Anbieter:</p>
              
              <div className="mt-4">
                <h3 className="text-xl font-semibold mb-2 text-[#3A5A40]">Amazon Web Services (AWS)</h3>
                <p>Anbieter ist die Amazon Web Services EMEA SARL, 38 Avenue John F. Kennedy, 1855 Luxemburg (nachfolgend AWS).</p>
                <p>Wenn Sie unsere Website besuchen, werden Ihre personenbezogenen Daten auf den Servern von AWS verarbeitet. Hierbei können auch personenbezogene Daten an das Mutterunternehmen von AWS in die USA übermittelt werden. Die Datenübertragung in die USA wird auf die EU-Standardvertragsklauseln gestützt.</p>
              </div>
            </section>
          </div>
        </div>
      </WavyBackground>
    </main>
  );
} 