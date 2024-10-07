"use client";

import { DotPattern } from "@/components/svg/DotPattern";
import { Badge } from "@/components/ui/badge";
import { Typography } from "@/components/ui/typography";
import { ClientMarkdown } from "@/features/markdown/ClientMarkdown";
import type { ReactNode } from "react";
import { SectionLayout } from "./SectionLayout";

export const FeaturesSection = ({
  features,
}: {
  features: FeatureLineProps[];
}) => {
  return (
    <SectionLayout size="sm" className="relative " id="features">
      <div className="relative flex flex-col gap-16 lg:gap-28">
        <div className="flex flex-col items-center gap-2">
          <Badge>Les fonctionnalités dont vous avez besoin.</Badge>
          <Typography variant="h2" className="m-auto max-w-xl text-center">
            Plus qu'une simple gestion de stock, Kano vous aide à{" "}
            <u>optimiser</u> vos processus.
          </Typography>
          <Typography
            variant="muted"
            className="m-auto max-w-lg text-center text-base"
          >
            Gagnez en efficacité avec notre solution de gestion de stock basée
            sur la méthode Kanban. Suivez vos produits, réduisez les pertes et
            améliorez la transparence.
          </Typography>
        </div>
        {features.map((f, i) => {
          return (
            <FeatureLine
              key={i}
              badge={f.badge}
              title={f.title}
              description={f.description}
              component={f.component}
            />
          );
        })}
      </div>
    </SectionLayout>
  );
};

type FeatureLineProps = {
  badge: string;
  title: string;
  description: string;
  component: ReactNode;
};

const FeatureLine = (props: FeatureLineProps) => {
  return (
    <div className="flex items-center gap-4 odd:flex-row-reverse max-lg:!flex-col">
      <div className="flex flex-1 flex-col items-start gap-2">
        <Badge color="green">{props.badge}</Badge>
        <Typography variant="h3" className="">
          {props.title}
        </Typography>
        <ClientMarkdown className="prose-sm">
          {props.description}
        </ClientMarkdown>
      </div>
      <div className="w-full max-w-sm">
        <DotPattern>{props.component}</DotPattern>
      </div>
    </div>
  );
};
