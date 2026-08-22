import type { ReactNode } from "react";
import KnowledgeArticleNavigation from "@/components/KnowledgeArticleNavigation";
import KnowledgeArticleImage from "@/components/KnowledgeArticleImage";

export default function KnowledgeCentreLayout({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
      <KnowledgeArticleImage />
      <KnowledgeArticleNavigation />
    </>
  );
}
