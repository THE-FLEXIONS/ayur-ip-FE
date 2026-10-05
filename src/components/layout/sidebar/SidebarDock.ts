import { createContext, useContext } from "react";

/**
 * True while the sidebar is docked beside the page (app pages on desktop).
 * The header reads it to drop its menu button and logo, which the docked
 * sidebar already shows.
 */
export const SidebarDockContext = createContext(false);

export function useSidebarDocked(): boolean {
  return useContext(SidebarDockContext);
}
