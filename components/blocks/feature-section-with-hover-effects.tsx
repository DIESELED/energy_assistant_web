import { cn } from "@/lib/utils";
import {
  IconAdjustmentsBolt,
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconHeart,
  IconHelp,
  IconRouteAltLeft,
  IconTerminal2,
} from "@tabler/icons-react";

export function FeaturesSectionWithHoverEffects() {
  const features = [
    {
      title: "Maßgeschneiderte Sparstrategien",
      description:
        "Schluss mit generischen Tipps! Unser smarter Bot analysiert deinen individuellen Modernisierungsstand und zeigt dir glasklar, wo du bares Geld sparen kannst – ohne Aufwand, ohne Kompromisse.",
      icon: <IconEaseInOut />,
    },
    {
      title: "Soforthilfe für deine Energiezukunft",
      description:
        "Kein stundenlanges Googeln mehr. Lass dir in wenigen Minuten genau sagen, was du tun kannst, um dein Zuhause zukunftsfähig und klimafreundlich zu gestalten.",
      icon: <IconCurrencyDollar />,
    },
    {
      title: "Effizient modernisieren leicht gemacht",
      description: "Egal, ob du Anfänger oder Profi bist: Unser Bot zeigt dir, welche Schritte wirklich Sinn machen. Effizient, individuell und in deinem Tempo – damit dein Zuhause immer smarter wird.",
      icon: <IconHeart />,
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center relative z-10 py-5 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r border-transparent py-5 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l border-transparent dark:border-neutral-800",
        index < 4 && "lg:border-b border-transparent dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-green-200 dark:from-green-700 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-green-200 dark:from-green-700 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-white">
        {icon}
      </div>
      <div className="text-xl font-semibold mb-2 relative z-10 px-10 text-left">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-7 w-1 rounded-tr-full rounded-br-full bg-neutral-400 dark:bg-neutral-600 group-hover/feature:bg-green-300 transition-all duration-150 origin-center" />
        <span className="inline-block text-white">
          {title}
        </span>
      </div>
      <p className="text-base text-white max-w-xs relative z-10 px-10 text-left">
        {description}
      </p>
    </div>
  );
}; 