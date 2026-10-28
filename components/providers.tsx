"use client";

import { ThemeProvider } from "next-themes";
import { TransitionProvider } from "./transition-link";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="data-theme" defaultTheme="system" enableSystem disableTransitionOnChange>
      <TransitionProvider>{children}</TransitionProvider>
    </ThemeProvider>
  );
}
