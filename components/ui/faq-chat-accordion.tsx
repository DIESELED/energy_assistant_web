"use client";

import * as React from "react";
import { motion } from "framer-motion";
import * as Accordion from "@radix-ui/react-accordion";
import { Minus, Plus, Play } from "lucide-react";
import { cn } from "@/lib/utils";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
  icon?: string;
  iconPosition?: "left" | "right";
  isAudio?: boolean;
}

interface FaqAccordionProps {
  data: FAQItem[];
  className?: string;
  timestamp?: string;
  questionClassName?: string;
  answerClassName?: string;
}

export function FaqAccordion({
  data,
  className,
  timestamp = "Every day, 9:01 AM",
  questionClassName,
  answerClassName,
}: FaqAccordionProps) {
  const [openItem, setOpenItem] = React.useState<string | null>(null);

  const allOpenItems = data.map(item => item.id.toString());

  return (
    <div className={cn("p-4", className)}>
      {timestamp && (
        <div className="mb-4 text-sm text-muted-foreground">{timestamp}</div>
      )}

      <Accordion.Root
        type="multiple"
        value={allOpenItems}
        onValueChange={(value) => setOpenItem(value.join(','))}
      >
        {data.map((item) => (
          <Accordion.Item 
            value={item.id.toString()} 
            key={item.id} 
            className="mb-2"
          >
            <Accordion.Header>
              <Accordion.Trigger className="flex w-full items-center justify-start gap-x-4">
                <div
                  className={cn(
                    "relative flex items-center space-x-2 rounded-xl p-2 transition-colors",
                    openItem === item.id.toString() 
                      ? "bg-[#3A5A40]/20 text-[#52B788]" 
                      : "bg-[#2F4F2F]/10 hover:bg-[#3A5A40]/10",
                    questionClassName
                  )}
                >
                  {item.icon && (
                    <span
                      className={cn(
                        "absolute bottom-6",
                        item.iconPosition === "right" ? "right-0" : "left-0"
                      )}
                      style={{
                        transform: item.iconPosition === "right" 
                          ? "rotate(7deg)" 
                          : "rotate(-4deg)",
                      }}
                    >
                      {item.icon}
                    </span>
                  )}
                  <span className="font-medium text-white">{item.question}</span>
                </div>

                <span 
                  className={cn(
                    "text-gray-400",
                    openItem === item.id.toString() && "text-[#52B788]"
                  )}
                >
                  {openItem === item.id.toString() && (
                    <Minus className="h-5 w-5" />
                  )}
                </span>
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content asChild forceMount>
              <div className="overflow-hidden">
                <div className="ml-7 mt-1 md:ml-16">
                  <div
                    className={cn(
                      "relative max-w-xs rounded-2xl bg-[#3A5A40] px-4 py-2 text-white",
                      answerClassName
                    )}
                  >
                    {item.isAudio ? (
                      <>
                        <div className="flex items-center gap-3 mb-2">
                          <Play size={16} className="text-white/60" />
                          <div className="flex gap-[2px] items-center h-3">
                            {[...Array(12)].map((_, i) => (
                              <div
                                key={i}
                                className="w-[2px] bg-white/60"
                                style={{
                                  height: `${Math.sin(i * 0.5) * 8 + 10}px`
                                }}
                              />
                            ))}
                          </div>
                          <span className="text-xs text-white/60">0:42</span>
                        </div>
                        <div className="pl-1">
                          {item.answer}
                        </div>
                      </>
                    ) : (
                      item.answer
                    )}
                  </div>
                </div>
              </div>
            </Accordion.Content>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </div>
  );
} 