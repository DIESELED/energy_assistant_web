import { TestimonialsSection } from "@/components/blocks/testimonials-with-marquee"

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
]

export function TestimonialsSectionDemo() {
  return (
    <TestimonialsSection
      title="Das sagen unsere Nutzer"
      description="Tausende von Menschen sparen bereits Energie und Geld mit unserem Assistenten"
      testimonials={testimonials}
    />
  )
} 