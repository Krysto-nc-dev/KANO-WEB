import { CircleSvg } from "@/components/svg/CircleSvg";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Rocket } from "lucide-react";
import Link from "next/link";
import { Typography } from "../../components/ui/typography";
import { ReviewSmall } from "./review/ReviewSmall";

export const Hero = () => {
  return (
    <main className="relative m-auto my-12 flex min-h-[700px] w-full max-w-7xl items-center gap-4 px-8 max-lg:flex-col">
      <div className="relative flex flex-1 flex-col items-start gap-4 lg:gap-6 xl:gap-8">
        <Typography variant="h1" className="!leading-tight">
          Gérez efficacement votre stock et{" "}
          <span className="inline-block -rotate-2 bg-foreground text-background">
            Organisez{" "}
            <span className="relative inline-block">
              <span>vos flux</span>
              <CircleSvg className="fill-primary" />
            </span>
          </span>
        </Typography>
        <Typography variant="large">
          Utilisez la méthode Kanban pour optimiser la gestion de votre stock,
          tout en visualisant les étapes clés en temps réel.
        </Typography>

        <Link
          href="#pricing"
          className={cn(buttonVariants({ size: "lg", variant: "default" }))}
        >
          <Rocket size={20} className="mr-2" /> Commencez dès maintenant
        </Link>

        <ReviewSmall
          stars={5}
          avatars={[
            "https://i.pravatar.cc/300?u=1",
            "https://i.pravatar.cc/300?u=2",
            "https://i.pravatar.cc/300?u=3",
            "https://i.pravatar.cc/300?u=4",
            "https://i.pravatar.cc/300?u=100",
          ]}
        >
          100+ utilisateurs optimisent leur stock avec Kano
        </ReviewSmall>
      </div>
      <div className="flex flex-1 justify-end">
        <img
          src="/images/icon.png"
          className="max-w-md object-contain max-md:max-w-md"
          alt="Hero images"
        />
      </div>
    </main>
  );
};
