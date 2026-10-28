import type { Metadata, Viewport } from "next";
import { Caveat, Hanken_Grotesk, JetBrains_Mono, Phudu } from "next/font/google";
import { profile } from "@/data/projects";
import { Providers } from "@/components/providers";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Cursor } from "@/components/cursor";
import { RevealObserver } from "@/components/reveal";
import "./globals.css";

const phudu = Phudu({ subsets: ["latin"], weight: ["700"], variable: "--font-phudu", display: "swap" });
// Only Phudu (headings, incl. the hero name that is our LCP) is preloaded; the others swap in without competing for bandwidth.
const hanken = Hanken_Grotesk({ subsets: ["latin"], variable: "--font-hanken", display: "swap", preload: false });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-jetbrains", display: "swap", preload: false });
const caveat = Caveat({ subsets: ["latin"], weight: ["500", "700"], variable: "--font-caveat", display: "swap", preload: false });

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: profile.seoTitle, template: `%s — ${profile.name}` },
  description: profile.seoDescription,
  authors: [{ name: profile.name }],
  openGraph: {
    type: "website",
    siteName: profile.name,
    title: profile.seoTitle,
    description: profile.seoDescription,
    locale: "en_US",
  },
  twitter: { card: "summary_large_image", title: profile.seoTitle, description: profile.seoDescription },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#edeff2" },
    { media: "(prefers-color-scheme: dark)", color: "#17181b" },
  ],
};

/**
 * Runs before first paint. Content is only ever hidden for animation when this ran
 * and the visitor allows motion; if the app never hydrates, everything is revealed.
 */
const motionScript = `(function(){var d=document.documentElement;d.classList.add('js');
if(!window.matchMedia('(prefers-reduced-motion: reduce)').matches)d.classList.add('motion-ok');
setTimeout(function(){if(!window.__revealReady)d.classList.add('reveal-all')},2500)})()`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      data-scroll-behavior="smooth"
      className={`${phudu.variable} ${hanken.variable} ${jetbrains.variable} ${caveat.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: motionScript }} />
      </head>
      <body>
        <Providers>
          <a
            href="#main"
            className="label-mono sr-only z-50 rounded-full bg-ink px-4 py-2 text-canvas focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
          >
            Skip to content
          </a>
          <Nav />
          <main id="main">{children}</main>
          <Footer />
          <Cursor />
          <RevealObserver />
        </Providers>
      </body>
    </html>
  );
}
