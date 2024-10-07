import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SubmitButton } from "@/features/form/SubmitButton";
import AuthNavigationWrapper from "@/features/navigation/LogInNavigationWrapper";
import { NavigationWrapper } from "@/features/navigation/NavigationWrapper";
import {
  Layout,
  LayoutContent,
  LayoutHeader,
  LayoutTitle,
} from "@/features/page/layout";
import { Page400 } from "@/features/page/Page400";
import { auth } from "@/lib/auth/helper";
import { combineWithParentMetadata } from "@/lib/metadata";
import { prisma } from "@/lib/prisma";
import { getServerUrl } from "@/lib/server-url";
import type { PageParams } from "@/types/next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { z } from "zod";

const TokenSchema = z.object({
  orgId: z.string(),
  email: z.string(),
});

export const generateMetadata = combineWithParentMetadata({
  title: "Invitation",
  description: "Vous avez reçu une invitation à rejoindre une organisation.",
});

export default async function RoutePage(
  props: PageParams<{ orgSlug: string; token: string }>,
) {
  const organization = await prisma.organization.findFirst({
    where: {
      slug: props.params.orgSlug,
    },
  });

  if (!organization) {
    return <Page400 title="Token invalide 1" />;
  }

  const verificationToken = await prisma.verificationToken.findUnique({
    where: {
      token: props.params.token,
    },
  });

  if (!verificationToken) {
    return <Page400 title="Token invalide 2" />;
  }

  const user = await auth();

  const tokenData = TokenSchema.parse(verificationToken.data);

  if (tokenData.orgId !== organization.id) {
    return <Page400 title="Token invalide 3" />;
  }

  if (!user) {
    return (
      <NavigationWrapper>
        <Layout>
          <LayoutHeader>
            <LayoutTitle>
              Vous avez été invité à rejoindre {organization.name}
            </LayoutTitle>
          </LayoutHeader>
          <LayoutContent>
            <Card>
              <CardHeader>
                <CardTitle>
                  Vous devez vous authentifier pour rejoindre{" "}
                  {organization.name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Link
                  className={buttonVariants({ size: "lg" })}
                  href={`/auth/signin?callbackUrl=${getServerUrl()}/orgs/${organization.slug}/invitations/${props.params.token}&email=${tokenData.email}`}
                >
                  Se connecter
                </Link>
              </CardContent>
            </Card>
          </LayoutContent>
        </Layout>
      </NavigationWrapper>
    );
  }

  const membership = await prisma.organizationMembership.findFirst({
    where: {
      organizationId: organization.id,
      userId: user.id,
    },
  });

  if (membership) {
    redirect(`/orgs/${organization.slug}`);
  }

  if (
    verificationToken.identifier !== `${user.email}-invite-${organization.id}`
  ) {
    return <Page400 title="Email invalide" />;
  }

  return (
    <AuthNavigationWrapper>
      <Layout>
        <LayoutHeader>
          <LayoutTitle>
            Vous avez été invité à rejoindre {organization.name}
          </LayoutTitle>
        </LayoutHeader>
        <LayoutContent>
          <Card>
            <CardHeader>
              <CardTitle>
                Dernière étape pour rejoindre {organization.name}
              </CardTitle>
              <CardDescription>
                En cliquant sur le bouton ci-dessous, vous acceptez de rejoindre{" "}
                {organization.name} en tant que membre.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form>
                <SubmitButton
                  formAction={async () => {
                    "use server";
                    await prisma.organizationMembership.create({
                      data: {
                        organizationId: organization.id,
                        userId: user.id,
                        roles: ["MEMBER"],
                      },
                    });
                    await prisma.verificationToken.delete({
                      where: {
                        token: props.params.token,
                      },
                    });
                    redirect(`/orgs/${organization.slug}`);
                  }}
                >
                  Rejoindre {organization.name}
                </SubmitButton>
              </form>
            </CardContent>
          </Card>
        </LayoutContent>
      </Layout>
    </AuthNavigationWrapper>
  );
}
