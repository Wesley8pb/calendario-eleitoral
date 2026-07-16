# Rótulo do mês nos marcadores da timeline

## Objetivo

Facilitar a orientação temporal durante a rolagem do calendário exibindo o mês sob cada círculo de data, sem aumentar a altura da timeline nem competir visualmente com os cards.

## Solução visual aprovada

- Exibir a abreviação portuguesa do mês em três letras e caixa alta, como `JUL`.
- Posicionar o rótulo centralizado logo abaixo de todos os círculos de data.
- Usar texto pequeno de 10 px, peso semibold, espaçamento leve entre letras e cinza neutro discreto.
- Aplicar um pequeno fundo igual ao da página ao redor do texto para impedir que a linha vertical atravesse as letras.
- Manter o rótulo fora do fluxo vertical do marcador, evitando aumentar a distância entre os grupos de eventos.

## Implementação

O componente `DateMarker` continuará recebendo a data ISO `YYYY-MM-DD`. O mês será obtido diretamente do segmento `MM` e convertido por um mapeamento local e determinístico para `JAN` a `DEZ`, sem criar objetos `Date` e sem risco de deslocamento por fuso horário.

O novo elemento visual será renderizado na mesma coluna do círculo, com posicionamento absoluto abaixo dele. Não haverá alteração nos dados dos eventos, na estrutura de `Timeline` ou na largura reservada para os cards.

## Acessibilidade

O texto do mês continuará disponível no conteúdo da página e terá um rótulo descritivo com o nome completo do mês. A informação principal da data e a interação dos cards não serão alteradas.

## Validação

- Teste automatizado do mapeamento dos doze meses e de uma data representativa.
- Verificação visual em viewport móvel de 375 px e em desktop.
- Confirmação de que o rótulo aparece sob todos os marcadores visíveis e não se sobrepõe aos cards.
- Execução do type-check, lint e build de produção.

## Fora de escopo

- Alterar o cabeçalho mensal fixo.
- Modificar espaçamentos dos cards ou da timeline.
- Exibir o ano junto ao círculo.
- Alterar cores, tamanhos ou comportamento dos círculos existentes.
