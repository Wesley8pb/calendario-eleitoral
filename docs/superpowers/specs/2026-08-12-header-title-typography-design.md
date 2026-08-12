# Destaque tipográfico do título no Header

## Objetivo

Dar ao título "Calendário Eleitoral / Eleições 2026" a presença de peça institucional que ele hoje não tem, mantendo rigorosamente a paleta do projeto. O título atual usa Inter no peso 700 a 36 px no desktop, o mesmo peso máximo carregado para todo o resto do site, de modo que não há hierarquia tipográfica separando o título do corpo — ele apenas repete a voz da interface em corpo maior.

## Decisão de caráter

O destaque virá de **contraste de família**, não de massa. Uma serifa de display no título, contra o corpo em Inter, produz hierarquia imediata e evoca documento oficial e tribunal. A alternativa considerada — manter Inter e subir para os pesos 800 ou 900 — foi renderizada e descartada: ganha peso, mas o resultado soa a produto de tecnologia, não a Justiça Eleitoral.

Cinco famílias foram renderizadas sobre o gradiente real do Header, todas no mesmo corpo, para isolar a variável família: Source Serif 4, Spectral, Lora, Playfair Display e Inter 900 como régua. A escolhida foi a **Lora**, pelo contraste pincelado e pelo desenho mais humano, elegante sem o tom editorial de moda que a Playfair Display imprime e sem a frieza das outras duas.

## Solução visual aprovada

- Título em **Lora peso 700**, com fallback para Georgia e depois a serifa genérica.
- Escala responsiva de **30 px no mobile, 48 px a partir de 640 px e 56 px a partir de 1024 px**.
- Entrelinha de 1,1 e espaçamento entre letras de -0,02 em, para fechar o bloco em corpo grande.
- Sombra sutil de texto, deslocamento vertical de 2 px, difusão de 12 px e preto a 30 % de opacidade. É ela que descola o título do gradiente azul; sem ela a serifa afunda no fundo.
- "Eleições 2026" permanece em `secondary-500`, no mesmo peso e em linha própria.
- **Filete dourado** decorativo de 2 px entre o título e a descrição: 56 px de largura no mobile, 64 px a partir de 640 px e 72 px a partir de 1024 px, em `secondary-500` a 85 % de opacidade, cantos arredondados e centralizado.

## Escala: números medidos

A escala não foi estimada. Cada largura foi renderizada no fundo real do Header e a linha "Calendário Eleitoral" foi medida contra o espaço disponível no container.

| Viewport | Corpo do h1 | Largura da linha | Disponível | Ocupação | Quebra |
| --- | --- | --- | --- | --- | --- |
| 320 px | 30 px | 275 px | 288 px | 95 % | não |
| 375 px | 30 px | 275 px | 343 px | 80 % | não |
| 640 px | 48 px | 439 px | 592 px | 74 % | não |
| 768 px | 48 px | 439 px | 720 px | 61 % | não |
| 1280 px | 56 px | 513 px | 896 px | 57 % | não |

Em nenhuma dessas larguras houve scroll horizontal no documento.

O mobile foi primeiro testado a 32 px, que resulta em composição melhor em 375 px, porém **quebra "Calendário Eleitoral" em duas linhas a 320 px**, levando o título a três linhas. O valor recuou para 30 px, que corresponde ao token `text-3xl` do Tailwind e sobrevive até 320 px. A 320 px a ocupação é de 95 % da largura disponível, portanto esse é o limite da composição em uma linha; abaixo disso o título degrada para três linhas, sem scroll lateral.

## Implementação

A fonte entra no link do Google Fonts que já existe em `index.html`, acrescentando a família Lora à consulta atual de Inter e JetBrains Mono. **Apenas o peso 700 é carregado**, que é o único que a composição usa; carregar pesos sem consumidor custaria transferência à toa. **Não há alteração na Content-Security-Policy**: o `netlify.toml` já autoriza `fonts.googleapis.com` em `style-src` e `fonts.gstatic.com` em `font-src`.

A família é registrada em `tailwind.config.js` como um token novo em `fontFamily`, de nome `display`, resolvendo para Lora, Georgia e serifa genérica. Isso expõe a classe `font-display` e evita repetir a pilha de fontes no componente. O fallback Georgia é deliberado: durante a troca do `display=swap`, a substituição ocorre entre duas serifas, o que mantém o deslocamento de layout pequeno — um fallback sem serifa produziria um salto visível de sans para serifa.

A mudança de marcação se concentra no `h1` do `Header.tsx` e no filete acrescentado imediatamente após ele. Sombra de texto e espaçamento entre letras usam valores arbitrários do Tailwind, por não existirem como tokens.

## Acessibilidade

A estrutura semântica não muda: permanece um único `h1` com o mesmo texto, na mesma ordem de leitura. O filete é puramente decorativo e recebe `aria-hidden`, para não introduzir ruído em leitores de tela.

O contraste não regride. O branco sobre o azul do gradiente e o dourado `secondary-500` sobre o mesmo fundo são exatamente os pares já em uso hoje; o aumento de corpo apenas afrouxa a exigência aplicável, já que texto grande tem limiar de contraste menor.

## Validação

- Type-check, lint e build de produção sem erros.
- Verificação visual em 320 px, 375 px, 640 px, 768 px e 1280 px, confirmando ausência de quebra do título em três linhas e de scroll horizontal.
- Confirmação de que a Lora efetivamente carrega no navegador, e não apenas o fallback, verificando a fonte computada do `h1`.
- Confirmação de que os três testes existentes seguem passando, incluindo `tests/links-referencia.test.ts`.

## Fora de escopo

- Estender a serifa aos títulos de seção do site, como `MonthSection` e Próximos Eventos. Isso constituiria um sistema tipográfico novo, muito além do pedido, e deve ser decidido em separado.
- Alterar badge, descrição, links de resolução, countdown ou os três botões de navegação, que permanecem em Inter.
- Introduzir qualquer cor fora de `primary` e `secondary`.
- Alterar a altura do Header por outro meio que não o crescimento natural do título e do filete.
- Trocar a fonte do corpo do site ou a fonte monoespaçada do countdown.
