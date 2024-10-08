"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Typography } from "@/components/ui/typography";
import { ClientMarkdown } from "../markdown/ClientMarkdown";
import { SectionLayout } from "./SectionLayout";

type Faq = {
  question: string;
  answer: string;
};

type FeaturesPreviewProps = {
  faq: Faq[];
};

export const FAQSection = (props: FeaturesPreviewProps) => {
  return (
    <SectionLayout size="lg" className="flex max-lg:flex-col">
      <div className="flex-1 space-y-2">
        <Typography className="font-extrabold uppercase text-primary">
          FAQ
        </Typography>
        <Typography variant="h2" className="text-5xl">
          Questions Fréquemment Posées
        </Typography>
      </div>
      <div className="flex-1">
        <Accordion type="single" collapsible>
          {props.faq.map((item, index) => (
            <AccordionItem value={`item-${index}`} key={index}>
              <AccordionTrigger className="text-left text-lg">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-base">
                <ClientMarkdown>{item.answer}</ClientMarkdown>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </SectionLayout>
  );
};

