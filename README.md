# Calendário Eleitoral 2026 — Timeline Interativa

> Calendário interativo com todos os prazos e eventos eleitorais das Eleições Gerais 2026, baseado na **Resolução TSE nº 23.760/2026** (DJE/TSE de 04/03/2026).

**Desenvolvido por:** Wesley Wagner de Brito Silva — servidor da 56ª Zona Eleitoral/PB

---

## 📋 Sobre o Projeto

Site single-page de caráter informativo que apresenta todos os ~296 eventos do calendário eleitoral em uma **timeline vertical interativa**, com:

- 🔍 **Filtros avançados**: categorias, ocultar passados, turno, busca textual, mês.
- 👤 **Painel "Próximos Prazos"** com tabs de perfil (Eleitor, Candidato, Partido, Advogado, Atos Preparatórios)
- 📅 **Navegação por meses** com Intersection Observer
- ⏱️ **Contagem regressiva** até os turnos eleitorais
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
git clone <url-do-repositorio>
cd calendario-eleitoral-2026

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
│   ├── countdown/       # Contagem regressiva
│   ├── filters/         # FilterPanel, FilterSummary
│   ├── layout/          # Header, Footer
│   ├── proximos-prazos/ # ProximosPrazos, PrazoCard
│   └── timeline/        # Timeline, MonthSection, MonthNav, EventCard, EventDetail, DateMarker
├── data/
│   ├── eventos.ts       # ⭐ Array completo dos ~296 eventos
│   ├── categorias.ts    # 11 categorias com cor e ícone
│   └── constants.ts     # Datas fixas (1T, 2T, diplomação) e metadados da Resolução
├── hooks/
│   ├── useCountdown.ts
│   ├── useFilteredEvents.ts
│   ├── useLazyRender.ts
│   ├── useProximosPrazos.ts
│   └── useUrlFilters.ts
├── lib/
│   ├── utils.ts         # Funções utilitárias de data e CSS
│   └── search.ts        # Busca textual normalizada
└── types/
    └── index.ts         # Interfaces TypeScript
```

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
  turno: "1T" | "2T" | "AMBOS" | null;
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
# calendario-eleitoral
