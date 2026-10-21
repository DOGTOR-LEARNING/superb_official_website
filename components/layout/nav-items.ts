export const navItems = [
  { key: "home", href: "/" },
  { key: "work", href: "/work" },
  { key: "about", href: "/about" },
  { key: "insights", href: "/insights" },
  { key: "contact", href: "/contact" },
] as const;

export function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  if (href === "/work") return pathname.startsWith("/work") || pathname.startsWith("/products");
  return pathname === href || pathname.startsWith(`${href}/`);
}
