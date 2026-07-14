import {
  BookOpen,
  ExternalLink,
  FileText,
  Globe2,
  Landmark,
  Link2,
  Scale,
  type LucideIcon,
} from "lucide-react";
import {
  categoriasLinksReferencia,
  linksReferencia,
  type IconeCategoriaLink,
} from "../../data/linksReferencia";

const iconesCategoria: Record<IconeCategoriaLink, LucideIcon> = {
  scale: Scale,
  landmark: Landmark,
  "file-text": FileText,
  "book-open": BookOpen,
  globe: Globe2,
};

export function LinksReferencia() {
  return (
    <section
      id="links-referencia"
      aria-labelledby="links-referencia-titulo"
      className="relative scroll-mt-6 overflow-hidden border-t border-primary-100 bg-neutral-50 px-4 py-12 sm:py-16"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-secondary-500/60 to-transparent"
      />

      <div className="relative mx-auto max-w-5xl">
        <header className="mx-auto mb-8 max-w-2xl text-center sm:mb-10">
          <div className="mx-auto mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-primary-200 bg-white text-primary-700 shadow-card">
            <Link2 size={21} strokeWidth={2.2} aria-hidden="true" />
          </div>
          <h2
            id="links-referencia-titulo"
            className="text-2xl font-bold tracking-tight text-primary-900 sm:text-3xl"
          >
            Links de referência
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-neutral-700 sm:text-base">
            Leis, normas, formulários e orientações oficiais citados no
            Calendário Eleitoral, reunidos em um só lugar.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-5">
          {categoriasLinksReferencia.map((categoria) => {
            const Icone = iconesCategoria[categoria.icone];
            const links = linksReferencia.filter(
              (link) => link.categoria === categoria.id,
            );

            return (
              <article
                key={categoria.id}
                className={`group overflow-hidden rounded-2xl border border-primary-100 bg-white shadow-card transition-shadow hover:shadow-card-hover ${
                  categoria.cardLargo ? "lg:col-span-2" : ""
                }`}
              >
                <div className="flex items-center gap-3 border-b border-primary-100 bg-primary-100/45 px-4 py-3.5 sm:px-5">
                  <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-primary-700 text-white shadow-sm">
                    <Icone size={18} strokeWidth={2.2} aria-hidden="true" />
                  </span>
                  <h3 className="min-w-0 flex-1 text-sm font-bold leading-snug text-primary-900 sm:text-base">
                    {categoria.titulo}
                  </h3>
                  <span
                    className="flex-shrink-0 rounded-full border border-secondary-500/25 bg-secondary-100 px-2 py-0.5 text-xs font-bold tabular-nums text-secondary-700"
                    aria-label={`${links.length} ${links.length === 1 ? "link" : "links"}`}
                  >
                    {links.length}
                  </span>
                </div>

                <ul className="divide-y divide-neutral-100 px-4 sm:px-5">
                  {links.map((link) => (
                    <li key={link.id}>
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/link flex min-w-0 items-start gap-3 py-3.5 text-sm font-medium leading-relaxed text-primary-700 transition-colors hover:text-primary-900 focus-visible:rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2"
                      >
                        <span className="min-w-0 flex-1 break-words [overflow-wrap:anywhere] group-hover/link:underline group-hover/link:underline-offset-4">
                          {link.titulo}
                        </span>
                        <ExternalLink
                          size={14}
                          className="mt-1 flex-shrink-0 text-primary-400 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                          aria-hidden="true"
                        />
                      </a>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
