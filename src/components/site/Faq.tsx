import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { FaqItem } from "@/data/faq";
import { Reveal } from "./motion-primitives";

export function Faq({
  items,
  title = "Questions fréquentes",
  intro,
}: {
  items: FaqItem[];
  title?: string;
  intro?: string;
}) {
  return (
    <section className="section-y bg-background">
      <div className="shell grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
        <Reveal>
          <p className="eyebrow">Bon à savoir</p>
          <h2 className="mt-3 text-3xl sm:text-4xl">{title}</h2>
          {intro ? (
            <p className="mt-5 leading-relaxed text-muted-foreground">{intro}</p>
          ) : null}
        </Reveal>

        <Reveal delay={0.12}>
          <Accordion type="single" collapsible className="w-full">
            {items.map((item, i) => (
              <AccordionItem key={item.q} value={`item-${i}`}>
                <AccordionTrigger className="text-left text-base font-semibold text-navy hover:no-underline">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
