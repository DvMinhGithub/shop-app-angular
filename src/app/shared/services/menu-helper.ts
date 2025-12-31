import { MENU_USER } from "../models/constants/menu-user";

export function findLabelByRoute(route: string): string | null {

  for (const item of MENU_USER) {
    if (item.link === route || ('/' + item.link) === route) {
      return item.label;
    }

    // Kiểm tra children
    if (item.children) {
      const child = item.children.find(c => c.link === route || ('/' + c.link) === route);
      if (child) return child.label;
    }
  }

  return null;
}
