import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageHeader } from "@/components/Layout";
import { gallery } from "@/content/site";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Spice House" },
      { name: "description", content: "Photos of our dishes and dining room." },
      { property: "og:title", content: "Gallery — Spice House" },
      { property: "og:description", content: "Photos of our dishes and dining room." },
    ],
  }),
  component: Gallery,
});

function Gallery() {
  return (
    <Layout>
      <PageHeader eyebrow="Gallery" title="A Feast for the Eyes" />
      <section className="mx-auto grid max-w-6xl gap-4 px-5 pb-24 sm:grid-cols-2">
        {gallery.map((g) => (
          <div key={g.alt} className="overflow-hidden rounded-lg">
            <img src={g.src} alt={g.alt} loading="lazy" width={1024} height={1024} className="aspect-square w-full object-cover transition-transform duration-700 hover:scale-105" />
          </div>
        ))}
      </section>
    </Layout>
  );
}
