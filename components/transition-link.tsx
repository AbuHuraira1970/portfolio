"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { createContext, useCallback, useContext, useEffect, useRef } from "react";

/**
 * Wraps route changes in the browser's View Transitions API so elements that share a
 * `view-transition-name` (project cover + title) morph between home and case study.
 * Browsers without the API, and visitors who prefer reduced motion, get a normal navigation.
 */
const NavigateContext = createContext<(href: string) => void>(() => {});

export function TransitionProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const finish = useRef<(() => void) | null>(null);

  // The new route has committed: let the transition capture it.
  useEffect(() => {
    finish.current?.();
    finish.current = null;
  }, [pathname]);

  // Back/forward navigations don't animate, so let the case page play its own entrance.
  useEffect(() => {
    const onPop = () => delete document.documentElement.dataset.nav;
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  const navigate = useCallback(
    (href: string) => {
      const root = document.documentElement;
      const canTransition =
        "startViewTransition" in document && !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (!canTransition) {
        delete root.dataset.nav;
        router.push(href);
        return;
      }
      root.dataset.nav = "vt";
      document.startViewTransition(
        () =>
          new Promise<void>((resolve) => {
            finish.current = resolve;
            router.push(href);
            setTimeout(resolve, 1200); // never block on a slow route
          }),
      );
    },
    [router],
  );

  return <NavigateContext.Provider value={navigate}>{children}</NavigateContext.Provider>;
}

type Props = React.ComponentProps<typeof Link> & { href: string };

export function TransitionLink({ href, onClick, ...rest }: Props) {
  const navigate = useContext(NavigateContext);
  const pathname = usePathname();

  return (
    <Link
      href={href}
      onClick={(e) => {
        onClick?.(e);
        const samePage = href.split("#")[0] === pathname;
        if (e.defaultPrevented || samePage || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
        e.preventDefault();
        navigate(href);
      }}
      {...rest}
    />
  );
}
