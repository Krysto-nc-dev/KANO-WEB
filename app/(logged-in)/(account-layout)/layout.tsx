import { Alert } from "@/components/ui/alert";
import { buttonVariants } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import { BaseLayout } from "@/features/layout/BaseLayout";
import { Layout } from "@/features/page/layout";
import { auth } from "@/lib/auth/helper";
import type { LayoutParams } from "@/types/next";
import { CircleAlert, Rabbit } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";
import { AccountNavigation } from "./account-navigation";
import { VerifyEmailButton } from "./account/verify-email/VerifyEmailButton";

export const metadata: Metadata = {
  title: "Compte",
  description: "Gérez les paramètres de votre compte.",
};

export default async function RouteLayout(props: LayoutParams) {
  const user = await auth();

  if (!user) {
    return (
      <BaseLayout>
        <Layout>
          <Alert>
            <Rabbit className="size-4" />
            <div>
              <Typography variant="large">
                Il semble que vous ne soyez pas connecté. Veuillez vous connecter pour accéder à vos paramètres de compte.
              </Typography>
              <Link
                href="/auth/signin"
                className={buttonVariants({
                  className: "mt-2",
                })}
              >
                Se connecter
              </Link>
            </div>
          </Alert>
        </Layout>
      </BaseLayout>
    );
  }

  return (
    <div>
      {!user?.emailVerified ? (
        <div className="flex items-center gap-4 bg-primary px-4 py-1">
          <CircleAlert size={16} />
          <Typography variant="small">
            Email non vérifié. Veuillez vérifier votre email.
          </Typography>
          <VerifyEmailButton
            variant="invert"
            className="ml-auto flex h-6 w-fit items-center gap-1 rounded-md px-3 text-sm"
          />
        </div>
      ) : null}
      <AccountNavigation>{props.children}</AccountNavigation>
    </div>
  );
}
