import { MapPin } from "lucide-react";
import type { PoloPreparacao } from "../../types";
import { nviMap, ORDEM_NVIS } from "../../data/nvis";

interface PreparacaoUrnasBlocoProps {
  polos: PoloPreparacao[];
}

function plural(n: number, singular: string, pluralForma: string): string {
  return `${n} ${n === 1 ? singular : pluralForma}`;
}

/**
 * Escala de preparação de urnas do dia, agrupada por polo.
 *
 * O agrupamento é a razão de ser do bloco: numa mesma data há preparação
 * simultânea em até cinco polos distantes entre si, e quem consulta precisa
 * localizar a própria zona sem varrer a lista inteira.
 */
export function PreparacaoUrnasBloco({ polos }: PreparacaoUrnasBlocoProps) {
  const ordenados = [...polos].sort(
    (a, b) => ORDEM_NVIS.indexOf(a.nvi) - ORDEM_NVIS.indexOf(b.nvi),
  );
  const totalZonas = ordenados.reduce((soma, p) => soma + p.zonas.length, 0);

  return (
    <section className="space-y-2" aria-label="Escala de preparação de urnas">
      <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
        <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500">
          Escala de preparação de urnas
        </p>
        <p className="text-xs text-neutral-500 tabular-nums">
          {plural(ordenados.length, "polo", "polos")} ·{" "}
          {plural(totalZonas, "zona eleitoral", "zonas eleitorais")}
        </p>
      </div>

      <div className="space-y-2">
        {ordenados.map((polo) => {
          const info = nviMap[polo.nvi];

          return (
            <div
              key={polo.nvi}
              className="overflow-hidden rounded-lg border border-neutral-200 bg-white"
              style={{ borderLeftWidth: 4, borderLeftColor: info.cor }}
            >
              <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 border-b border-neutral-100 bg-neutral-50/70 px-3 py-2">
                <MapPin
                  size={13}
                  className="flex-shrink-0"
                  style={{ color: info.cor }}
                  aria-hidden="true"
                />
                <span
                  className="font-mono text-xs font-bold tracking-tight"
                  style={{ color: info.cor }}
                >
                  {info.id}
                </span>
                <span className="text-sm font-semibold leading-snug text-neutral-700">
                  {info.cidade}
                </span>
                <span className="ml-auto flex-shrink-0 rounded-full bg-neutral-200/70 px-2 py-0.5 text-[11px] font-medium tabular-nums text-neutral-600">
                  {plural(polo.zonas.length, "zona", "zonas")}
                </span>
              </div>

              <div className="relative">
                {/*
                  Filete contínuo entre as colunas. Vive em elemento próprio,
                  e não como borda dos itens, para não ficar picotado quando a
                  última linha tem só a coluna da esquerda. Só existe a partir
                  de sm — abaixo disso a lista é de coluna única — e some
                  quando o polo tem uma zona só, caso em que não há 2ª coluna.
                */}
                {polo.zonas.length > 1 && (
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-px bg-neutral-300 sm:block"
                  />
                )}
                <ul className="divide-y divide-neutral-100 sm:grid sm:grid-cols-2 sm:divide-y-0">
                  {polo.zonas.map((z) => (
                    <li
                      key={z.ze}
                      className="flex items-baseline gap-2 px-3 py-1.5 text-sm sm:border-b sm:border-neutral-100"
                    >
                      <span className="w-8 flex-shrink-0 font-mono text-xs font-semibold tabular-nums text-neutral-500">
                        {z.ze}
                      </span>
                      <span className="min-w-0 flex-1 leading-snug text-neutral-700">
                        {z.sede}
                      </span>
                      <span className="flex-shrink-0 font-mono text-xs tabular-nums text-neutral-600">
                        {z.horario}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
