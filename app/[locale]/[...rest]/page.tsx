import { notFound } from "next/navigation";

// 未知路徑交由 [locale]/not-found.tsx 以目前語言顯示 404
export default function CatchAll() {
  notFound();
}
