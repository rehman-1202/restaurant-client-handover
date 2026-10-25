import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { site, whatsappLink } from "@/content/site";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/menu", label: "Menu" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
] as const;

export function Layout({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <Link to="/" className="font-display text-2xl text-primary">{site.name}</Link>
          <nav className="hidden gap-8 md:flex">
            {links.map((l) => (
              <Link key={l.to} to={l.to} className="nav-link" activeOptions={{ exact: true }} activeProps={{ className: "nav-link text-primary" }}>
                {l.label}
              </Link>
            ))}
          </nav>
          <button
            className="flex min-h-11 min-w-11 items-center justify-center text-foreground text-2xl md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen(!open)}
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
        {open && (
          <nav id="mobile-nav" className="flex flex-col border-t border-border px-5 py-3 md:hidden">
            {links.map((l) => (
              <Link key={l.to} to={l.to} onClick={() => setOpen(false)} className="nav-link py-3">
                {l.label}
              </Link>
            ))}
          </nav>
        )}
      </header>

      <main className="flex-1">{children}</main>

      <footer className="border-t border-border bg-card">
        <div className="mx-auto grid max-w-6xl gap-6 px-5 py-10 text-sm text-muted-foreground md:grid-cols-3">
          <div>
            <p className="font-display text-2xl text-primary">{site.name}</p>
            <p className="mt-2">{site.tagline}</p>
          </div>
          <div>
            <p>{site.address}</p>
            <p>{site.phone}</p>
          </div>
          <div>{site.hours.map((h) => <p key={h}>{h}</p>)}</div>
        </div>
        <p className="pb-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} {site.name} — a fictional restaurant. All contact details are placeholders.
        </p>
      </footer>

      <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="whatsapp-fab" aria-label="Order on WhatsApp">
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor"><path d="M17.5 14.4c-.3-.1-1.8-.9-2-1-.3-.1-.5-.1-.7.1-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6l.4-.5c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.2 5.1 4.5 2.5 1 3 .8 3.6.8.6-.1 1.8-.7 2-1.5.2-.7.2-1.3.2-1.5-.1-.1-.3-.2-.6-.3zM12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2z"/></svg>
        <span className="hidden sm:inline">Order on WhatsApp</span>
      </a>
    </div>
  );
}

export function PageHeader({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <section className="mx-auto max-w-6xl px-5 pt-16 pb-8 text-center">
      <p className="eyebrow">{eyebrow}</p>
      <h1 className="mt-3 font-display text-5xl md:text-6xl">{title}</h1>
      <div className="ornament mx-auto mt-6" />
    </section>
  );
}
