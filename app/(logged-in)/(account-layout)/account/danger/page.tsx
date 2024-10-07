"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { alertDialog } from "@/features/alert-dialog/alert-dialog-store";
import { toast } from "sonner";
import { accountAskDeletionAction } from "./delete-account.action";

export default function DeleteProfilePage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Supprimer votre profil</CardTitle>
        <CardDescription>
          La suppression de votre compte signifie que toutes vos données
          personnelles seront définitivement effacées et votre abonnement en
          cours sera résilié. Veuillez noter que cette action est irréversible.
        </CardDescription>
        <CardDescription>
          De plus, si vous êtes le propriétaire d'une organisation,
          l'organisation sera supprimée et votre abonnement sera annulé. Toutes
          vos données seront perdues.
        </CardDescription>
      </CardHeader>
      <CardFooter className="flex justify-end gap-2">
        <Button
          variant="destructive"
          size="lg"
          onClick={() => {
            alertDialog.add({
              title: "Supprimer votre compte ?",
              description: "Êtes-vous sûr de vouloir supprimer votre profil ?",
              action: {
                label: "Supprimer",
                onClick: async () => {
                  await accountAskDeletionAction();
                  toast.success("Votre demande de suppression a été envoyée.", {
                    description:
                      "Veuillez vérifier votre e-mail pour des instructions supplémentaires.",
                  });
                },
              },
            });
          }}
        >
          Supprimer
        </Button>
      </CardFooter>
    </Card>
  );
}
