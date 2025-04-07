"use client";
import React from "react";
import { WavyBackground } from "@/components/ui/wavy-background";
import Image from "next/image";
import { Timeline } from "@/components/ui/timeline";
import { TestimonialsSection } from "@/components/blocks/testimonials-with-marquee";
import { FaqAccordion } from "@/components/ui/faq-chat-accordion";

export function WavyBackgroundDemo() {
  return (
    <WavyBackground 
      className="max-w-4xl mx-auto pb-40"
      colors={[
        "#2F4F2F", // Dunkelgrün matt
        "#3A5A40", // Waldgrün matt
        "#588157", // Mittleres Grün matt
        "#90A959", // Helles Grün matt
        "#4F6F4F"  // Olivgrün matt
      ]}
      speed="slow"
      waveOpacity={0.6}
      backgroundFill="#1a1a1a"
      blur={8}
    >
      <div className="h-[40vh] md:h-[60vh]" />
    </WavyBackground>
  );
}

export function TimelineDemo() {
  const data = [
    {
      title: "Schritt 1",
      content: (
        <div>
          <p className="text-neutral-300 text-xs md:text-sm font-normal mb-8">
          Starte den Energiespar-Assistenten per Text oder Audio. Er hilft dir, deine Situation und Wohnung zu analysieren. 
          Sende auch Fotos für maßgeschneiderte Energiespartipps.
          </p>
          <div className="grid grid-cols-1 gap-4">
            <Image
              src="/cfbfb9de3f74d96d39c4aca92cc366341f77efdf573bf2c6e982321ccf8cde75.png"
              alt="Person fotografiert Wohnung"
              width={800}
              height={600}
              className="rounded-lg object-cover h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Schritt 2",
      content: (
        <div>
          <p className="text-neutral-300 text-xs md:text-sm font-normal mb-8">
            Beantworte ein paar einfache Fragen zu deiner Wohnsituation
          </p>
          <FaqAccordion 
            data={[
              {
                id: 1,
                question: "Wie groß ist deine Wohnung?",
                answer: "Gib einfach die ungefähre Quadratmeterzahl an. Das hilft uns, den Energiebedarf besser einzuschätzen."
              },
              {
                id: 2,
                question: "Wie viele Personen leben im Haushalt?",
                answer: "Die Anzahl der Bewohner hat einen großen Einfluss auf den Energieverbrauch.",
                icon: "👥",
                iconPosition: "right"
              },
              {
                id: 3,
                question: "Welche Heizungsart nutzt du?",
                answer: "",
                isAudio: true,
                icon: "🎤"
              }
            ]}
            className="max-w-[600px]"
            timestamp="Deine Antworten helfen uns, maßgeschneiderte Empfehlungen zu geben"
          />
        </div>
      ),
    },
    {
      title: "Schritt 3",
      content: (
        <div>
          <p className="text-white text-xs md:text-sm font-normal mb-8">
            Erhalte deinen personalisierten Energiesparplan mit konkreten Handlungsempfehlungen
          </p>
          <div className="space-y-4">
            <div className="flex gap-2 items-center text-white text-xs md:text-sm">
               Maßgeschneiderte Sparstrategien
            </div>
            <div className="flex gap-2 items-center text-white text-xs md:text-sm">
               Konkrete Modernisierungsvorschläge
            </div>
            <div className="flex gap-2 items-center text-white text-xs md:text-sm">
               Berechnung deines Einsparpotentials
            </div>
            <div className="flex gap-2 items-center text-white text-xs md:text-sm">
               Priorisierte Maßnahmenliste
            </div>
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="min-h-screen w-full">
      <Timeline data={data} />
    </div>
  );
}

export function TestimonialsSectionDemo() {
  const testimonials = [
    {
      author: {
        name: "Lisa Müller",
        handle: "Mieterin in Berlin",
        emoji: "👩"
      },
      text: "Der Energiespar-Assistent hat mir super geholfen zu verstehen, wo ich in meiner Altbauwohnung am meisten Energie verschwende. Die Tipps waren wirklich praktisch und einfach umzusetzen!"
    },
    {
      author: {
        name: "Thomas Weber",
        handle: "Hausbesitzer in München",
        emoji: "👨"
      },
      text: "Durch die Analyse und Empfehlungen konnte ich meine Heizkosten um 30% senken. Der Bot hat mir genau erklärt, welche Modernisierungen sich für mein Haus am meisten lohnen."
    },
    {
      author: {
        name: "Sarah Schmidt",
        handle: "Studentin in Hamburg",
        emoji: "👩‍🎓"
      },
      text: "Als Studentin in einer WG war ich skeptisch, ob sich Energiesparen für uns lohnt. Aber die personalisierten Tipps waren gold wert - wir sparen jetzt richtig Geld!"
    },
    {
      author: {
        name: "Familie Bauer",
        handle: "Eigenheimbesitzer",
        emoji: "👨‍👩‍👧‍👦"
      },
      text: "Der Assistent hat uns Schritt für Schritt durch die energetische Sanierung unseres Hauses geführt. Besonders toll fanden wir die konkreten Förderungsmöglichkeiten!"
    }
  ];

  return (
    <TestimonialsSection
      title="Das sagen unsere Nutzer"
      description="Tausende von Menschen sparen bereits Energie und Geld mit unserem Assistenten"
      testimonials={testimonials}
    />
  );
} 