import {
    Layout,
    LayoutHeader,
    LayoutDescription,
    LayoutTitle,
    LayoutContent,
    LayoutActions,
  } from "@/features/page/layout";
  import type { PageParams } from "@/types/next";
  import { Button } from "@/components/ui/button";
  
  export default async function RoutePage(props: PageParams) {
    return (
      <Layout>
        <LayoutHeader>
          <LayoutTitle>Zones</LayoutTitle>
          <LayoutDescription>
            Rechercher ajouter et modifier tout vos Zones de vente et de stockage via cette page
          </LayoutDescription>
        </LayoutHeader>
        <LayoutActions>
          <Button>Ajouter</Button>
        </LayoutActions>
        <LayoutContent>
          THIS IS THE CONTENT !!
        </LayoutContent>
      </Layout>
    );
  }
  