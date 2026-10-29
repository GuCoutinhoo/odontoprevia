import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
  type ErrorComponentProps,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: ErrorComponentProps) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

const LUMIERE_FAVICON_DATA_URI =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 40' fill='none'%3E%3Cdefs%3E%3ClinearGradient id='lumiereGold' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%23ECC87E'/%3E%3Cstop offset='45%25' stop-color='%23C5A059'/%3E%3Cstop offset='100%25' stop-color='%239E732B'/%3E%3C/linearGradient%3E%3Cfilter id='shadow' x='-20%25' y='-20%25' width='140%25' height='140%25'%3E%3CfeDropShadow dx='0' dy='0.8' stdDeviation='0.8' flood-color='%23000000' flood-opacity='0.3'/%3E%3C/filter%3E%3C/defs%3E%3Cg transform='translate(0, 6)' filter='url(%23shadow)' stroke='url(%23lumiereGold)' stroke-width='2.2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M20 26C20 18 20 10 20 2C24 8 24 18 20 2'/%3E%3Cpath d='M20 26C15 22 10 16 9 8C15 11 19 18 20 26'/%3E%3Cpath d='M20 26C25 22 30 16 31 8C25 11 21 18 20 26'/%3E%3Cpath d='M20 26C13 25 6 21 2 15C9 15 16 20 20 26'/%3E%3Cpath d='M20 26C27 25 34 21 38 15C31 15 24 20 20 26'/%3E%3C/g%3E%3C/svg%3E";

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Lumière Odontologia" },
      {
        name: "description",
        content:
          "Odontologia de alto padrão com tecnologia avançada, atendimento personalizado e resultados que vão além da estética.",
      },
      { property: "og:title", content: "Lumière Odontologia" },
      {
        property: "og:description",
        content:
          "Odontologia de alto padrão com tecnologia avançada, atendimento personalizado e resultados que vão além da estética.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&family=Montserrat:wght@400;500;600&display=swap",
      },
      { rel: "icon", href: LUMIERE_FAVICON_DATA_URI, type: "image/svg+xml" },
      { rel: "shortcut icon", href: LUMIERE_FAVICON_DATA_URI },
      { rel: "alternate icon", href: "/favicon.svg?v=3", type: "image/svg+xml" },
      { rel: "alternate icon", href: "/favicon-32x32.png?v=3", type: "image/png" },
      { rel: "alternate icon", href: "/favicon.ico?v=3" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png?v=3" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  useEffect(() => {
    // Invalidate browser tab favicon cache immediately
    const links = document.querySelectorAll<HTMLLinkElement>(
      "link[rel*='icon'], link[rel='shortcut icon']",
    );
    links.forEach((link) => {
      link.href = LUMIERE_FAVICON_DATA_URI;
    });
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
