import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SubmitButton } from "@/features/form/SubmitButton";
import { requiredAuth } from "@/lib/auth/helper";
import { combineWithParentMetadata } from "@/lib/metadata";
import type { PageParams } from "@/types/next";
import Link from "next/link";
import {
  orgConfirmDeletionAction,
  verifyDeleteAccountToken,
} from "../delete-account.action";

export const generateMetadata = combineWithParentMetadata({
  title: "Confirmer la suppression",
  description: "Une dernière étape pour supprimer votre compte.",
});

export default async function RoutePage(props: PageParams) {
  const token = props.searchParams.token;
  const user = await requiredAuth();

  const invalidTokenCard = (
    <Card>
      <CardHeader>
        <CardTitle>Jeton invalide</CardTitle>
      </CardHeader>
      <CardFooter>
        <Link
          href="/account/danger"
          className={buttonVariants({ variant: "outline" })}
        >
          Réessayer
        </Link>
      </CardFooter>
    </Card>
  );

  try {
    if (typeof token !== "string") {
      return invalidTokenCard;
    }

    await verifyDeleteAccountToken(String(token), user.email);
  } catch {
    return invalidTokenCard;
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Êtes-vous sûr de vouloir supprimer votre compte ?</CardTitle>
        <CardDescription>
          En cliquant sur le bouton ci-dessous, vous confirmez que vous souhaitez supprimer votre compte.
        </CardDescription>
      </CardHeader>
      <CardFooter className="flex justify-end gap-2">
        <Link
          href="/organizations"
          className={buttonVariants({ variant: "outline" })}
        >
          Annuler
        </Link>
        <form>
          <SubmitButton
            formAction={async () => {
              "use server";

              await orgConfirmDeletionAction({
                token: String(token),
              });
            }}
          >
            Supprimer le compte
          </SubmitButton>
        </form>
      </CardFooter>
    </Card>
  );
}
