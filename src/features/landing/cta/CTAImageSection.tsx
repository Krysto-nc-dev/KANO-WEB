import { buttonVariants } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import Link from "next/link";
import { SectionLayout } from "../SectionLayout";

export const CTAImageSection = () => {
  return (
    <div
      style={{
        backgroundImage:
          "url(https://plus.unsplash.com/premium_photo-1663040328859-48bddaa9dfeb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
        backgroundSize: "cover",
      }}
    >
      <SectionLayout
        variant="image"
        className="flex min-h-[500px] flex-col items-center justify-center gap-4 text-white drop-shadow-md"
      >
        <Typography
          variant="h2"
          className="text-center text-5xl font-extrabold"
        >
          Gérer votre stock n'a jamais été aussi simple
        </Typography>
        <Typography className="text-center font-bold">
          Rejoignez Kano et optimisez votre activité artisanale !
        </Typography>
        <Link href="#pricing" className={buttonVariants({ size: "lg" })}>
          Commencer maintenant
        </Link>
      </SectionLayout>
    </div>
  );
};
