# Formulários individualizados de transferência temporária de eleitores

## Objetivo

Substituir o link genérico da Extranet do TSE por quatro links diretos para formulários do TRE-PB nos eventos de 20 de julho e 20 de agosto de 2026 relativos à transferência temporária de eleitores (TTE).

## Escopo

- Atualizar as observações dos eventos `2026-07-20-20` e `2026-08-20-1`.
- Remover desses eventos a referência genérica à Extranet do TSE.
- Exibir, em linhas separadas dentro do aviso informativo já existente, os formulários destinados a:
  - presos provisórios;
  - militares;
  - juízas, juízes, promotoras, promotores eleitorais e servidoras e servidores da Justiça Eleitoral;
  - pessoas em serviço em unidades penais ou de internação.
- Fazer cada link abrir o PDF correspondente do TRE-PB em nova aba, preservando `rel="noopener noreferrer"`.
- Manter inalteradas as descrições literais, categorias, perfis e fundamentações dos eventos.

## Apresentação

O aviso azul atual será preservado. Após uma frase introdutória, cada formulário aparecerá em uma linha própria, com um marcador textual e o nome do público como link. A quebra de linhas deverá funcionar em telas móveis e desktop sem criar uma nova seção ou alterar o modelo `EventoCalendario`.

## Implementação

As observações continuarão armazenadas como texto com links no formato Markdown restrito já aceito por `EventDetail`. O componente será ajustado apenas no necessário para preservar quebras de linha, permitindo uma lista textual legível. Não será introduzida biblioteca adicional.

## Verificação

- Um teste automatizado deverá falhar antes da implementação ao procurar os quatro links nos dois eventos.
- Após a alteração, o teste deverá confirmar os rótulos e destinos dos oito links renderizados, além da ausência do link genérico da Extranet nesses eventos.
- Serão executados os testes pertinentes, verificação de tipos, lint e build de produção.
- A apresentação será conferida em largura móvel de 375 px e em desktop.
- A mudança será registrada em `Documentations/CHANGELOG.md`.

## Adendo: evento em destaque

O evento `2026-07-20-20` será marcado com `destaque: true`, reutilizando o tratamento visual nativo do `EventCard`. Nenhum outro evento de 20 de julho ou 20 de agosto terá sua condição de destaque alterada. Por decisão do responsável, a conferência será feita visualmente no localhost, sem testes automatizados nesta sessão.
