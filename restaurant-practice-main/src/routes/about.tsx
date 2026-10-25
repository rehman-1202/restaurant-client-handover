import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageHeader } from "@/components/Layout";
import { about, site } from "@/content/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Spice House" },
      { name: "description", content: "The story behind Spice House and our traditional Pakistani cooking." },
      { property: "og:title", content: "About Us — Spice House" },
      { property: "og:description", content: "The story behind Spice House." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <Layout>
      <PageHeader eyebrow="About Us" title={about.title} />
      <section className="mx-auto grid max-w-6xl gap-12 px-5 pb-24 md:grid-cols-2">
        <img src={site.images.karahi} alt="Chicken karahi" loading="lazy" width={1024} height={1024} className="w-full rounded-lg object-cover" />
        <div className="space-y-5 text-muted-foreground leading-relaxed">
          {about.paragraphs.map((p) => <p key={p}>{p}</p>)}
          <div className="grid gap-4 pt-4 sm:grid-cols-3">
            {about.highlights.map((h) => (
              <div key={h.title} className="rounded-lg border border-border bg-card p-4">
                <p className="font-display text-xl text-primary">{h.title}</p>
                <p className="mt-1 text-sm">{h.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
