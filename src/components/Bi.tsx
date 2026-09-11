import type { ReactNode } from "react";
import { useApp } from "@/lib/store";
import { tr } from "@/lib/translate";
import { cn } from "@/lib/utils";

/**
 * Bilingual label: English stays the main line, the user's chosen language
 * appears underneath in smaller text. Falls back to English only.
 */
export function Bi({ children, className }: { children: ReactNode; className?: string }) {
  const { state } = useApp();
  if (typeof children !== "string") return <>{children}</>;
  const local = tr(state.business.language, children);
  if (!local) return <>{children}</>;
  return (
    <>
      {children}
      <span className={cn("block text-[0.76em] leading-tight font-medium opacity-65", className)}>
        {local}
      </span>
    </>
  );
}

/** Inline variant for tight spots (chips, nav labels): "English · लोकल" */
export function BiInline({ children }: { children: ReactNode }) {
  const { state } = useApp();
  if (typeof children !== "string") return <>{children}</>;
  const local = tr(state.business.language, children);
  if (!local) return <>{children}</>;
  return (
    <>
      {children} <span className="font-medium opacity-60">· {local}</span>
    </>
  );
}
