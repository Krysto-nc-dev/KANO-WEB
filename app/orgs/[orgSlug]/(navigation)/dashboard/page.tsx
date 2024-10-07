import { Button } from "@/components/ui/button";
import {
  Layout,
  LayoutActions,
  LayoutContent,
  LayoutHeader,
  LayoutTitle,
} from "@/features/page/layout";
import { combineWithParentMetadata } from "@/lib/metadata";
import type { PageParams } from "@/types/next";
import { ClientOrg } from "./ClientOrg";
import { DonutChart } from "./donuts-chart";
import { UsersChart } from "./users-chart";

export const generateMetadata = combineWithParentMetadata({
  title: "Users",
  description: "Manage leads",
});

export default async function RoutePage(props: PageParams) {
  return (
    <Layout>
      <LayoutHeader>
        <LayoutTitle>Bienvenue sur votre dashboard</LayoutTitle>
      </LayoutHeader>
      <LayoutActions className="flex gap-2">
        <Button variant="outline">Supprimer</Button>
        <Button variant="invert">Créer</Button>
      </LayoutActions>
      <LayoutContent className="flex  gap-6">
        {/* <UsersChart />
        <DonutChart />
        <ClientOrg /> */}
      </LayoutContent>
    </Layout>
  );
}
