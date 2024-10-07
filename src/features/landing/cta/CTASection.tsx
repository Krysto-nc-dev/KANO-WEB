import { buttonVariants } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import Link from "next/link";
import { SectionLayout } from "../SectionLayout";

export function CtaSection() {
  return (
    <SectionLayout className="lg:flex lg:items-center lg:justify-between lg:px-8">
      <Typography variant="h3">
        <Typography variant="h2" as="span">
          Prêt à optimiser votre stock ?
        </Typography>
        <br />
        <span className="text-muted-foreground">
          Il est temps de commencer avec Kano.
        </span>
      </Typography>
      <div className="mt-10 flex items-center gap-x-6 lg:mt-0 lg:shrink-0">
        <Link className={buttonVariants({ size: "lg" })} href="#pricing">
          Commencer maintenant
        </Link>
      </div>
    </SectionLayout>
  );
}
