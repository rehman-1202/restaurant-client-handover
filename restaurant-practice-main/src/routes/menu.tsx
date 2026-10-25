import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageHeader } from "@/components/Layout";
import { menu, formatPKR, whatsappLink } from "@/content/site";

const slug = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-");

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu & Prices (PKR) — Spice House" },
      { name: "description", content: "Karahi, BBQ, biryani, naan and desserts with prices in Pakistani Rupees." },
      { property: "og:title", content: "Menu — Spice House" },
      { property: "og:description", content: "Our full menu with prices in PKR." },
    ],
  }),
  component: Menu,
});

function Menu() {
  return (
    <Layout>
      <PageHeader eyebrow="Our Menu" title="Taste of Pakistan" />
      <nav aria-label="Menu categories" className="mx-auto max-w-4xl px-5 pb-10">
        <ul className="flex flex-wrap justify-center gap-3">
          {menu.map((cat) => (
            <li key={cat.category}>
              <a href={`#${slug(cat.category)}`} className="btn-outline !px-5 !py-2.5 text-xs">{cat.category}</a>
            </li>
          ))}
        </ul>
      </nav>
      <section className="mx-auto max-w-4xl space-y-16 px-5 pb-24">
        {menu.map((cat) => (
          <div key={cat.category} id={slug(cat.category)} className="scroll-mt-24">
            <h2 className="font-display text-4xl text-primary">{cat.category}</h2>
            <div className="mt-6 space-y-5">
              {cat.items.map((d) => (
                <div key={d.name} className="flex items-baseline gap-4 border-b border-border pb-4">
                  <div className="min-w-0 flex-1">
                    <h3 className="font-display text-2xl">{d.name}</h3>
                    <p className="text-sm text-muted-foreground">{d.description}</p>
                  </div>
                  <span className="shrink-0 font-medium text-primary">{formatPKR(d.price)}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
        <div className="text-center">
          <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn-primary">Order on WhatsApp</a>
        </div>
      </section>
    </Layout>
  );
}
