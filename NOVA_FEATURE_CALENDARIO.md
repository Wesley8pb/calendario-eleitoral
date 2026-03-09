# Guia de Implementação — Exportar evento para calendário com lembrete configurável via `.ics`

## Objetivo

Implementar uma funcionalidade que permita ao usuário:

1. escolher um prazo de notificação antes do evento;
2. baixar um arquivo `.ics` do evento;
3. ao abrir/importar o arquivo no calendário do dispositivo, o lembrete já estar embutido no evento.
 
---

## Escopo da feature

### Versão inicial recomendada
Implementar no card de cada evento:

- botão **Adicionar ao calendário**
- seleção de lembrete:
  - Sem lembrete
  - No dia
  - 1 dia antes
  - 3 dias antes
  - 7 dias antes

### Resultado esperado
O sistema gera um arquivo `.ics` contendo:

- título do evento
- data
- descrição
- observações, se houver
- fundamentação, se houver
- alarme (`VALARM`) com o prazo escolhido

---

## Decisão de arquitetura

### Abordagem escolhida
**Geração client-side de `.ics` no frontend**, sem backend.

### Motivos
- simples de implementar;
- compatível com SPA estática;
- não exige autenticação;
- não exige integração com Google/Outlook;
- mantém o projeto leve.

### Fora do escopo nesta fase
- sincronização automática de calendário remoto;
- notificações push;
- envio de e-mail;
- assinatura de feed `.ics`.

---

## Experiência do usuário

## Fluxo principal

1. usuário abre o card de um evento;
2. clica em **Adicionar ao calendário**;
3. escolhe o prazo do lembrete;
4. clica em **Baixar .ics**;
5. o arquivo é baixado;
6. ao abrir/importar no calendário, o evento já vem com o lembrete configurado.

---

## Regras de negócio

### Tipo do evento
Como a maioria dos prazos eleitorais é orientada por **data** e não por horário exato, a implementação inicial deve usar:

- **evento de dia inteiro** (`VALUE=DATE`)

### Lembretes suportados
Mapeamento sugerido:

- Sem lembrete → não incluir `VALARM`
- No dia → `TRIGGER:P0D` ou alternativa equivalente
- 1 dia antes → `TRIGGER:-P1D`
- 3 dias antes → `TRIGGER:-P3D`
- 7 dias antes → `TRIGGER:-P7D`

### Descrição do evento
A descrição do `.ics` deve incluir:

- resumo do evento
- observações, se existirem
- fundamentação legal resumida
- identificação do projeto

### Nome do arquivo
Padrão sugerido:

`calendario-eleitoral-<id-do-evento>.ics`

Exemplo:

`calendario-eleitoral-2026-08-15-2.ics`

---

## Estrutura sugerida

## Novos arquivos

### `src/lib/ics.ts`
Responsável por:

- escapar texto para formato `.ics`
- montar `VEVENT`
- montar `VALARM`
- gerar o conteúdo final do arquivo

### `src/components/calendar/CalendarExportButton.tsx`
Responsável por:

- exibir botão
- abrir seletor de lembrete
- disparar download do `.ics`

### Opcional: `src/types/calendar.ts`
Responsável por:

- centralizar tipos do lembrete
- definir enum/union dos prazos aceitos

---

## Estrutura técnica recomendada

## 1. Criar tipo para lembrete

Criar um tipo como:

- `none`
- `same-day`
- `1d`
- `3d`
- `7d`

Isso evita strings soltas na UI.

---

## 2. Criar função de escape para `.ics`

O formato `.ics` exige cuidado com caracteres especiais.

A função de escape deve tratar ao menos:

- quebra de linha
- vírgula
- ponto e vírgula
- barra invertida

Objetivo:
evitar arquivos inválidos em calendários mais rígidos.

---

## 3. Criar função que gera o `VALARM`

A função deve:

- receber o tipo de lembrete;
- retornar string vazia quando não houver lembrete;
- retornar um bloco `VALARM` quando houver.

### Estratégia
Usar sempre:

- `ACTION:DISPLAY`

Porque é a opção mais compatível para lembretes locais.

---

## 4. Criar função que gera um `VEVENT`

A função deve receber um `EventoCalendario` e o lembrete escolhido.

Campos mínimos recomendados:

- `BEGIN:VEVENT`
- `UID`
- `DTSTAMP`
- `SUMMARY`
- `DTSTART;VALUE=DATE`
- `DESCRIPTION`
- `STATUS:CONFIRMED`
- `TRANSP:OPAQUE`
- `END:VEVENT`

### UID
Usar um UID estável e único, por exemplo:

`<id-do-evento>@calendario-eleitoral`

---

## 5. Criar função que gera o calendário completo

Mesmo para um único evento, o arquivo precisa conter:

- `BEGIN:VCALENDAR`
- `VERSION:2.0`
- `PRODID`
- `CALSCALE:GREGORIAN`
- `METHOD:PUBLISH`
- `VEVENT`
- `END:VCALENDAR`

---

## 6. Criar função de download no navegador

Fluxo:

1. gerar string do `.ics`;
2. criar `Blob`;
3. criar URL temporária;
4. disparar download via elemento `<a>`;
5. limpar recursos.

---

## 7. Integrar ao `EventCard`

Adicionar no card do evento:

- botão ou menu de exportação;
- seletor de lembrete;
- ação de download.

### UX recomendada
Usar uma interface simples, por exemplo:

#### Opção A — menu compacto
- Adicionar ao calendário
  - Sem lembrete
  - No dia
  - 1 dia antes
  - 3 dias antes
  - 7 dias antes

#### Opção B — mini painel
- seletor de lembrete
- botão “Baixar .ics”

### Recomendação
Começar pela **Opção B**, porque é mais clara e fácil de testar.

---

## Conteúdo recomendado do arquivo `.ics`

## Título (`SUMMARY`)
Usar o `titulo` do evento.

## Data (`DTSTART`)
Usar `data` como evento de dia inteiro.

## Descrição (`DESCRIPTION`)
Montar a partir de:

- `descricao`
- `observacoes`
- `fundamentacao`

### Formato sugerido
- descrição principal
- observações
- base legal
- aviso de que se trata de ferramenta informativa

---

## Exemplo de composição da descrição

### Parte 1 — descrição
Texto principal do evento.

### Parte 2 — observações
Adicionar só se existir.

### Parte 3 — fundamentação
Concatenar algo como:

- norma + dispositivo

### Parte 4 — assinatura do projeto
Exemplo:

“Gerado por Calendário Eleitoral 2026 — ferramenta informativa.”

---

## Comportamento esperado em diferentes calendários

## O que deve acontecer
Ao abrir/importar o `.ics`, muitos calendários vão:

- criar o evento;
- manter a data;
- aplicar o lembrete embutido.

## Limitação importante
O comportamento final depende do aplicativo do usuário.

Isso significa que:

- alguns apps importam tudo corretamente;
- alguns pedem confirmação;
- alguns podem ajustar ou ignorar certos alarmes.

### Conclusão prática
A feature é viável e útil, mas o sistema não controla 100% do comportamento após a importação.

---

## Critérios de aceitação

A feature será considerada pronta quando:

- o usuário conseguir baixar um `.ics` por evento;
- for possível escolher o lembrete antes do download;
- o arquivo abrir sem erro nos principais apps;
- eventos sem lembrete não gerarem `VALARM`;
- eventos com lembrete gerarem `VALARM` válido;
- o nome do arquivo for amigável;
- a interface funcionar em desktop e mobile;
- a funcionalidade for acessível por teclado.

---

## Casos de teste recomendados

## Testes funcionais
- exportar evento sem lembrete;
- exportar evento com lembrete de 1 dia;
- exportar evento com lembrete de 3 dias;
- exportar evento com lembrete de 7 dias;
- exportar evento com observações;
- exportar evento sem observações;
- exportar evento com múltiplas fundamentações.

## Testes de compatibilidade
Validar importação em:

- Google Agenda
- Outlook
- Apple Calendar
- Samsung Calendar, se possível

## Testes de UX
- botão visível no card expandido;
- seleção clara do lembrete;
- download funcionando em mobile;
- fluxo não poluído visualmente.

## Testes de acessibilidade
- navegação por teclado;
- foco visível;
- labels adequados;
- texto descritivo para leitores de tela.

---

## Riscos e cuidados

## 1. Compatibilidade entre calendários
Nem todos interpretam alarmes exatamente igual.

## 2. Caracteres especiais
Se o texto não for escapado corretamente, o `.ics` pode quebrar.

## 3. Excesso de informação na descrição
Descrições muito longas podem ficar ruins em alguns apps.

## 4. Falsa precisão temporal
Não atribuir horário exato se a norma só fala em data.

---

## Ordem sugerida de implementação

### Fase 1
- criar utilitário `.ics`
- exportar 1 evento sem lembrete

### Fase 2
- adicionar suporte a `VALARM`
- permitir escolha de lembrete

### Fase 3
- integrar ao `EventCard`
- testar mobile e desktop

### Fase 4
- refinar descrição
- validar compatibilidade em calendários reais

### Fase 5
- opcional: exportar lista filtrada de eventos

---

## Melhorias futuras

Após a versão inicial, considerar:

- exportar todos os eventos filtrados em um único `.ics`;
- botão direto para Google Agenda;
- permitir lembretes em horas antes do evento;
- deep link para o evento dentro do site;
- analytics de uso da funcionalidade.

---

## Recomendação final

Para a primeira entrega, implementar:

- exportação de **1 evento por vez**
- **evento de dia inteiro**
- lembretes:
  - sem lembrete
  - 1 dia antes
  - 3 dias antes
  - 7 dias antes

Essa combinação oferece o melhor equilíbrio entre:

- utilidade prática
- simplicidade técnica
- compatibilidade
- aderência à arquitetura atual do projeto