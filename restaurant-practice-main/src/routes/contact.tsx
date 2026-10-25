import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageHeader } from "@/components/Layout";
import { site, whatsappLink } from "@/content/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Location — Spice House" },
      { name: "description", content: "Phone, address, opening hours and WhatsApp ordering for Spice House." },
      { property: "og:title", content: "Contact — Spice House" },
      { property: "og:description", content: "Find us and order on WhatsApp." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const rows = [
    { label: "Phone", value: site.phone },
    { label: "Email", value: site.email },
    { label: "Address", value: site.address },
  ];
  return (
    <Layout>
      <PageHeader eyebrow="Contact" title="Visit or Order" />
      <section className="mx-auto max-w-3xl px-5 pb-24">
        <p className="mb-8 rounded-lg border border-primary/40 bg-card p-4 text-center text-sm text-muted-foreground">
          Note: Spice House is a fictional restaurant. The details below are placeholders.
        </p>
        <div className="space-y-6 rounded-lg border border-border bg-card p-8">
          {rows.map((r) => (
            <div key={r.label}>
              <p className="eyebrow">{r.label}</p>
              <p className="mt-1 text-lg break-words">{r.value}</p>
            </div>
          ))}
          <div>
            <p className="eyebrow">Opening Hours</p>
            {site.hours.map((h) => <p key={h} className="mt-1 text-lg">{h}</p>)}
          </div>
          <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex">Order on WhatsApp</a>
        </div>
      </section>
    </Layout>
  );
}
