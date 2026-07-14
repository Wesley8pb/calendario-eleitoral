# Calendário Eleitoral 2026 — Timeline Interativa

> [!TIP]
> **Orientação para IA:** Sempre inicie o gerenciamento de contexto lendo primeiro os arquivos `CLAUDE.md` (para diretrizes técnicas e stack) e `Documentations/CHANGELOG.md` (para histórico de alterações e estado atual).

Este projeto é uma ferramenta institucional e interativa para consulta dos eventos, prazos e marcos do calendário eleitoral das Eleições Gerais 2026, baseado na **Resolução TSE nº 23.760/2026** (DJE/TSE de 04/03/2026).

**Desenvolvido por:** Wesley Wagner de Brito Silva — servidor da 56ª Zona Eleitoral/PB

---

## 📋 Sobre o Projeto

**Acesse online:** [https://calendarioeleitoral.app.br](https://calendarioeleitoral.app.br)

Site single-page de caráter informativo que apresenta todos os ~296 eventos do calendário eleitoral em uma **timeline vertical interativa**, com:

- 🔍 **Filtros avançados**: categorias, ocultar passados, turno, busca textual, mês.
- ⭐ **Favoritos**: marque eventos com estrela; filtro "Apenas favoritos" no painel; persistido em localStorage.
- 👤 **Painel "Próximos Eventos"** com tabs de perfil (Destaques,Eleitor, Candidato, Partido e Atos Preparatórios)
- 📅 **Navegação por meses** com Intersection Observer
- ⏱️ **Contagem regressiva** até os turnos eleitorais
- 🗓️ **Exportação para calendário (.ics)**: individual por evento e em lote para eventos filtrados, com lembrete opcional
- 🔗 **URL compartilhável** com filtros sincronizados como query params
- ♿ **Acessibilidade WCAG AA**: navegação por teclado, ARIA, contraste, reduced-motion

---

## 🚀 Como rodar localmente

### Pré-requisitos
- Node.js 18+
- npm 9+

### Instalação

```bash
# Clonar o repositório
git clone https://github.com/Wesley8pb/calendario-eleitoral.git
cd calendario-eleitoral

# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run dev
```

Acesse: `http://localhost:xxxx`

### Build de produção

```bash
npm run build
# Arquivos gerados em: /dist
```

---

## 🛠️ Stack Técnica

| Camada | Tecnologia |
|---|---|
| Framework | React 18 + TypeScript |
| Estilização | Tailwind CSS 3.x |
| Ícones | Lucide React |
| Build | Vite 7 |
| Deploy | Netlify |
| Dados | JSON estático embarcado (`src/data/eventos.ts`) |

---

## 📁 Estrutura de Pastas

```
src/
├── components/
│   ├── calendar/         # Exportação individual (.ics)
│   ├── countdown/        # Contagem regressiva
│   ├── filters/          # FilterPanel (FAB + drawer), FilterSummary, exportação em lote
│   ├── layout/           # Header, Footer
│   ├── proximos-eventos/ # ProximosEventos, EventoProximoCard
│   ├── timeline/         # Timeline, MonthSection, MonthNav, EventCard, EventDetail, DateMarker
│   └── ui/               # Tooltip (com prop `wrap`) e InfoTooltip
├── contexts/
│   └── FavoritosContext.tsx  # Context de favoritos, consumido via useFavoritosContext()
├── data/
│   ├── eventos.ts        # Array completo dos ~296 eventos
│   ├── categorias.ts     # 13 categorias com cor e ícone
│   └── constants.ts      # Datas fixas (1T, 2T, diplomação) e metadados da Resolução
├── hooks/
│   ├── useCountdown.ts
│   ├── useFavoritos.ts   # Estado de favoritos persistido em localStorage
│   ├── useFilteredEvents.ts
│   ├── useLazyRender.ts
│   ├── useProximosEventos.ts
│   └── useUrlFilters.ts
├── lib/
│   ├── ics.ts            # Geração de arquivos .ics e download client-side
│   ├── utils.ts          # Funções utilitárias de data e CSS
│   └── search.ts         # Busca textual normalizada
└── types/
    ├── calendar.ts       # Tipos e opções de lembrete da exportação
    └── index.ts          # Interfaces TypeScript
```

---

## 🗓️ Exportação para Calendário

O sistema permite exportar eventos em formato `.ics`, compatível com apps como Google Calendar, Apple Calendar, Outlook e Samsung Calendar.

- **Exportação individual:** disponível dentro do card expandido de cada evento.
- **Exportação em lote:** disponível no resumo de filtros, gerando um único `.ics` com todos os eventos filtrados.
- **Lembretes suportados:** sem lembrete, 1 dia antes, 3 dias antes e 7 dias antes.
- **Regra da exportação em lote:** quando o único filtro ativo for **Ocultar eventos passados**, a ação de exportar filtrados não é exibida.
- **Ajuda contextual:** os fluxos individual e em lote exibem tooltip explicando como abrir/importar o arquivo após o download.

---

## 🔗 Links de referência

A seção **Links de referência**, exibida após “Meus Eventos”, reúne em categorias todas as leis, normas, formulários, manuais e páginas oficiais citados pelo site. Sua fonte única é `src/data/linksReferencia.ts`.

Ao incluir um novo link informativo em um evento, em `observacoes`, em `fundamentacao` ou em outro componente do site, cadastre simultaneamente a mesma URL nesse catálogo. A única exceção são links expressamente usados como crédito pessoal, como o Instagram do autor no rodapé.

Depois de editar referências, execute a verificação de integridade:

```bash
node tests/links-referencia.test.ts
```

O teste rejeita IDs e URLs duplicados e confirma que todos os links informativos presentes em `src/data/eventos.ts` também estão catalogados.

---

## ➕ Como adicionar ou editar eventos

Todos os eventos estão em `src/data/eventos.ts`. Cada evento segue a interface:

```typescript
interface EventoCalendario {
  id: string;          // "YYYY-MM-DD-N" (único)
  data: string;        // "YYYY-MM-DD"
  diaSemana: string;   // "segunda-feira"
  titulo: string;      // Resumo (máx. 120 chars)
  descricao: string;   // Texto literal da Resolução
  categorias: CategoriaID[];  // Ex: ["REG", "PAR"]
  perfis: Perfil[];    // Ex: ["candidato", "partido"]
  marcos: string | null;
  turno: "1T" | "2T" | "AMBOS" | "POS" | null;
  fundamentacao: Fundamentacao[];
  observacoes?: string;
  destaque?: boolean;
}
```

### Campo `perfis[]` — Critérios de atribuição

| Valor | Quando usar |
|---|---|
| `"eleitor"` | Destinatário explícito ou impacta diretamente o eleitor |
| `"candidato"` | Prazos de registro, propaganda, contas do candidato |
| `"partido"` | Convenções, filiações, FEFC, atos partidários |
| `"advogado"` | Prazos processuais, recursos, representações |
| `"atos-preparatorios"` | Eventos de organização interna da Justiça Eleitoral (Categoria ADM) |
| `"destaques"` | *(Filtro)* Eventos marcados com `destaque: true` |
| `[]` (vazio) | Atos administrativos sem destinatário identificável |

---

## 🎨 Paleta de Cores

Definida em `tailwind.config.js`:

| Token | Valor | Uso |
|---|---|---|
| `primary-900` | `#0C2340` | Headers, textos principais |
| `primary-700` | `#003E7E` | Botões, links, timeline |
| `secondary-500` | `#C9924D` | Destaques, badges especiais |
| `neutral-50` | `#F9FAFB` | Background da página |

---

## 🔐 Segurança

O deploy na Netlify usa o arquivo `netlify.toml` com os seguintes headers:

- `X-Frame-Options: DENY` — impede clickjacking
- `X-Content-Type-Options: nosniff` — impede MIME sniffing
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Content-Security-Policy` — restringe fontes de recursos
- `Strict-Transport-Security` — HSTS por 1 ano
- `Permissions-Policy` — desabilita câmera, microfone e geolocalização

---

## ⚠️ Disclaimer

Este site tem **caráter exclusivamente informativo**. Para fins jurídicos, consulte sempre a publicação oficial no Diário de Justiça Eletrônico do TSE. Este site não possui vínculo institucional com o Tribunal Superior Eleitoral.

---

## 📄 Licença

Distribuído livremente para fins de utilidade pública. Os dados são extraídos de documento público (Resolução TSE nº 23.760/2026).
