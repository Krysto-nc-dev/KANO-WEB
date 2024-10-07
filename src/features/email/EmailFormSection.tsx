import { Typography } from "@/components/ui/typography";
import { SectionLayout } from "../landing/SectionLayout";
import { EmailForm } from "./EmailForm";

export const EmailFormSection = () => {
  return (
    <SectionLayout
      size="lg"
      className="relative flex w-full flex-col items-center gap-16"
    >
      <div className="relative m-auto flex max-w-xl flex-col gap-4 text-center">
        <Typography
          variant="small"
          className="font-extrabold uppercase text-primary"
        >
          Soyez le premier à utiliser Kano
        </Typography>
        <Typography variant="h2" className="text-center text-4xl lg:text-5xl">
          Rejoignez la liste d'attente de{" "}
          <span className="text-gradient bg-gradient-to-r from-blue-600 via-yellow-400 to-yellow-400 font-mono font-extrabold uppercase">
            KANO
          </span>
        </Typography>
        <Typography variant="h3">
          Obtenez un accès anticipé, du contenu exclusif et plus encore.
        </Typography>
        <div className="mx-auto mt-6 w-full max-w-md">
          <EmailForm
            submitButtonLabel="Rejoindre"
            successMessage="Merci d'avoir rejoint la liste d'attente"
          />
        </div>
      </div>
    </SectionLayout>
  );
};
