# Changelog

## 2026-03-06

### Implementação final (válida)
- Não foi criada nova categoria de evento para pós-eleição.
- A classificação de pós-eleição foi aplicada no campo `turno` com o valor `"POS"`.
- Regra implementada: eventos após **25/10/2026** ficam com `turno: "POS"`.
- Regra mantida: `2T` apenas para eventos entre **05/10/2026** e **25/10/2026**.
- Filtros de turno atualizados para permitir **Pós-eleição** na UI e via URL (`turno=POS`).
- Categorias originais dos eventos foram preservadas (sem uso de categoria `POS` em `categorias`).
