import type { MDXComponents } from "mdx/types";
import { articleComponents } from "@/components/ui/ArticleProse";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return { ...articleComponents, ...components };
}
