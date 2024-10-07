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
          <LayoutTitle>Commandes</LayoutTitle>
          <LayoutDescription>
            Rechercher ajouter, modifier et visualiser toute vos commandes par etat via cette page
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
  