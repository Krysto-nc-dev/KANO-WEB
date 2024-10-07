"use client";

import { buttonVariants } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Typography } from "@/components/ui/typography";
import Link from "next/link";
import { SectionLayout } from "../SectionLayout";

export function CTASectionCard() {
  return (
    <SectionLayout>
      <Card className="relative isolate overflow-hidden px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">
        <Typography variant="h2">Commencez à gérer votre stock.</Typography>
        <Typography className="mt-4 text-muted-foreground">
          Créez un compte et simplifiez la gestion de votre entreprise.
        </Typography>
        <div className="mt-10 flex items-center justify-center gap-6">
          <Link href="#pricing" className={buttonVariants({ size: "lg" })}>
            Commencer maintenant
          </Link>
        </div>
      </Card>
    </SectionLayout>
  );
}
