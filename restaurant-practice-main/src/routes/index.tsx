import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { about, menu, site, whatsappLink, formatPKR } from "@/content/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Spice House — Authentic Pakistani Restaurant" },
      { name: "description", content: "Karahi, BBQ and biryani made with traditional recipes. View our menu and order on WhatsApp." },
      { property: "og:title", content: "Spice House — Authentic Pakistani Restaurant" },
      { property: "og:description", content: "Karahi, BBQ and biryani made with traditional recipes." },
    ],
  }),
  component: Home,
});

function Home() {
  const featured = menu.flatMap((c) => c.items).slice(3, 7);
  return (
    <Layout>
      <section className="relative flex min-h-[88vh] items-center overflow-hidden">
        <img src={site.images.hero} alt="Pakistani feast" width={1920} height={1088} fetchPriority="high" className="absolute inset-0 h-full w-full object-cover" />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative mx-auto max-w-6xl px-5 py-24">
          <p className="eyebrow">Fine Pakistani Dining</p>
          <h1 className="mt-4 max-w-3xl font-display text-6xl leading-[0.95] md:text-8xl">{site.name}</h1>
          <p className="mt-6 max-w-xl text-lg text-foreground/85">{site.tagline}</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link to="/menu" className="btn-primary">View Menu</Link>
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn-outline">Order on WhatsApp</a>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-24 md:grid-cols-2">
        <img src={site.images.interior} alt="Spice House dining room" loading="lazy" width={1024} height={1024} className="aspect-[4/5] w-full rounded-lg object-cover" />
        <div>
          <p className="eyebrow">About Us</p>
          <h2 className="mt-3 font-display text-5xl">{about.title}</h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">{site.intro}</p>
          <Link to="/about" className="btn-outline mt-8 inline-flex">Read More</Link>
        </div>
      </section>

      <section className="bg-card py-24">
        <div className="mx-auto max-w-6xl px-5">
          <div className="text-center">
            <p className="eyebrow">Chef's Favourites</p>
            <h2 className="mt-3 font-display text-5xl">From Our Kitchen</h2>
            <div className="ornament mx-auto mt-6" />
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {featured.map((d) => (
              <div key={d.name} className="flex items-baseline gap-4 border-b border-border pb-4">
                <div className="min-w-0 flex-1">
                  <h3 className="font-display text-2xl">{d.name}</h3>
                  <p className="text-sm text-muted-foreground">{d.description}</p>
                </div>
                <span className="shrink-0 text-primary">{formatPKR(d.price)}</span>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center"><Link to="/menu" className="btn-primary">Full Menu</Link></div>
        </div>
      </section>
    </Layout>
  );
}
