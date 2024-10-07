"use client";

import { Typography } from "@/components/ui/typography";
import { SectionLayout } from "./SectionLayout";

export const PainSection = () => {
  return (
    <SectionLayout
      variant="card"
      size="base"
      className="flex flex-col items-center justify-center gap-4"
    >
      <div className="flex w-full flex-col items-center gap-3 lg:gap-4 xl:gap-6">
        <Typography variant="h1">Gérer mon stock efficacement...</Typography>
        <Typography variant="large">
          Mais je perds du temps à suivre manuellement chaque mouvement
        </Typography>
        <div className="flex items-start gap-4 max-lg:flex-col">
          <div className="flex-1 rounded-lg bg-red-500/20 p-4 lg:p-6">
            <Typography variant="h3" className="text-red-500">
              😞 Gestion sans Kano
            </Typography>
            <ul className="ml-4 mt-4 flex list-disc flex-col gap-2 text-lg text-foreground/80">
              <li>Suivi manuel de chaque entrée et sortie de stock</li>
              <li>Perte de visibilité sur les niveaux de stock</li>
              <li>Difficulté à gérer les commandes en cours</li>
              <li>Incohérence dans la gestion des stocks</li>
            </ul>
          </div>
          <div className="flex-1 rounded-lg bg-green-500/20 p-4 lg:p-6">
            <Typography variant="h3" className="text-green-500">
              😎 Gestion AVEC Kano
            </Typography>
            <ul className="ml-4 mt-4 flex list-disc flex-col gap-2 text-lg text-foreground/80">
              <li>Suivi automatisé des mouvements de stock</li>
              <li>Tableau Kanban pour visualiser en temps réel</li>
              <li>Gestion des commandes optimisée</li>
              <li>Consistance et précision dans le contrôle des stocks</li>
            </ul>
          </div>
        </div>
      </div>
    </SectionLayout>
  );
};
