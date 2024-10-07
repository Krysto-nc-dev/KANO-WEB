import {
  NavigationGroup,
  NavigationLink,
} from "@/features/navigation/navigation.type";
import { isInRoles } from "@/lib/organizations/isInRoles";
import { OrganizationMembershipRole } from "@prisma/client";
import { Home, User, ShoppingCart, LandPlot, Factory, Archive } from "lucide-react";

const replaceSlug = (href: string, slug: string) => {
  return href.replace(":organizationSlug", slug);
};

export const getOrganizationNavigation = (
  slug: string,
  userRoles: OrganizationMembershipRole[] | undefined,
): NavigationGroup[] => {
  return ORGANIZATION_LINKS.map((group: NavigationGroup) => {
    return {
      ...group,
      links: group.links
        .filter((link: NavigationLink) =>
          link.roles ? isInRoles(userRoles, link.roles) : true,
        )
        .map((link: NavigationLink) => {
          return {
            ...link,
            href: replaceSlug(link.href, slug),
          };
        }),
    };
  });
};

const ORGANIZATION_PATH = `/orgs/:organizationSlug`;

export const ORGANIZATION_LINKS: NavigationGroup[] = [
  {
    title: "Menu",
    links: [
      {
        href: ORGANIZATION_PATH,
        Icon: Home,
        label: "Dashboard",
      },
      {
        href: `${ORGANIZATION_PATH}/users`,
        Icon: User,
        label: "Users",
      },
      {
        href: `${ORGANIZATION_PATH}/suppliers`,
        Icon: Factory,
        label: "Fournisseurs",
      },
      {
        href: `${ORGANIZATION_PATH}/products`,
        Icon: ShoppingCart,
        label: "Produits",
      },
      {
        href: `${ORGANIZATION_PATH}/zones`,
        Icon: LandPlot,
        label: "zones",
      },
      {
        href: `${ORGANIZATION_PATH}/kanbans`,
        Icon: Archive,
        label: "Kanbans",
      },
    ] satisfies NavigationLink[],
  },
] satisfies NavigationGroup[];
