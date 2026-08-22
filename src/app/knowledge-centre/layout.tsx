import type { ReactNode } from "react";
import KnowledgeArticleNavigation from "@/components/KnowledgeArticleNavigation";

export default function KnowledgeCentreLayout({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
      <KnowledgeArticleNavigation />
    </>
  );
}
