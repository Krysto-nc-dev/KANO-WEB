"use client";

import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { SignInButton } from "@/features/auth/SignInButton";
import { Page400 } from "@/features/page/Page400";
import { logger } from "@/lib/logger";
import type { ErrorParams } from "@/types/next";
import { useSession } from "next-auth/react";
import { useEffect } from "react";

export default function RouteError({ error }: ErrorParams) {
  const session = useSession();

  useEffect(() => {
    logger.error(error);
  }, [error]);

  if (session.status === "authenticated") {
    return <Page400 />;
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>
          Vous devez être authentifié pour accéder à cette ressource.
        </CardTitle>
      </CardHeader>
      <CardFooter>
        <SignInButton variant="invert" size="lg" />
      </CardFooter>
    </Card>
  );
}
