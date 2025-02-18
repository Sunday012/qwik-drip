import { FileRouteTypes } from "~/routeTree.gen"

export interface NavItem {
    title: string
    to?: FileRouteTypes["to"]
    disabled?: boolean
    external?: boolean
    // icon?: keyof typeof Icons
    label?: string
  }
  
  export interface NavItemWithChildren extends NavItem {
    items: NavItemWithChildren[]
  }
  
  export interface MainNavItem extends NavItem {}
  
  export interface SidebarNavItem extends NavItemWithChildren {}