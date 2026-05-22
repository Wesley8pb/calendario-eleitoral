import { test, expect } from '@playwright/test';

test.describe('Calendário Eleitoral 2026', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('deve exibir o título principal', async ({ page }) => {
    await expect(page.locator('h1')).toContainText('Calendário Eleitoral');
    await expect(page.locator('h1')).toContainText('Eleições 2026');
  });

  test('deve exibir o countdown', async ({ page }) => {
    const countdown = page.locator('.animate-countdown-in');
    await expect(countdown).toBeVisible();
  });

  test('deve exibir a seção de próximos eventos', async ({ page }) => {
    await expect(page.locator('text=Próximos Eventos')).toBeVisible();
  });

  test('deve permitir abrir o painel de filtros', async ({ page }) => {
    const filterButton = page.locator('button[aria-label*="Abrir filtros"]').first();
    await filterButton.click();
    
    await expect(page.locator('role=dialog')).toBeVisible();
    await expect(page.locator('text=Filtros')).toBeVisible();
  });

  test('deve exibir a timeline com eventos', async ({ page }) => {
    // Aguardar a timeline carregar
    await page.waitForSelector('[data-event-id]', { timeout: 5000 });
    
    const eventCards = page.locator('[data-event-id]').first();
    await expect(eventCards).toBeVisible();
  });

  test('deve permitir busca textual', async ({ page }) => {
    // Abrir filtros
    const filterButton = page.locator('button[aria-label*="Abrir filtros"]').first();
    await filterButton.click();
    
    // Preencher busca
    const searchInput = page.locator('#filter-search');
    await searchInput.fill('convenção');
    
    // Aguardar debounce
    await page.waitForTimeout(400);
    
    // Verificar resultados
    await expect(page.locator('text=Exibindo')).toBeVisible();
  });

  test('deve ser responsivo em mobile', async ({ page }) => {
    // Simular mobile
    await page.setViewportSize({ width: 375, height: 667 });

    await expect(page.locator('h1')).toBeVisible();

    // Verificar que elementos estão adaptados
    const timeline = page.locator('.relative').first();
    await expect(timeline).toBeVisible();
  });

  test('deve exibir o botão Favoritar todos na toolbar', async ({ page }) => {
    const btn = page.locator('button[aria-label*="Favoritar todos"]');
    await expect(btn).toBeVisible();
  });

  test('deve favoritar todos os eventos visíveis ao clicar', async ({ page }) => {
    const btn = page.locator('button[aria-label*="Favoritar todos"]');
    await btn.click();
    await expect(page.locator('button[aria-label*="Desfavoritar todos"]')).toBeVisible();
  });

  test('deve desfavoritar todos ao clicar novamente', async ({ page }) => {
    // Favoritar todos
    await page.locator('button[aria-label*="Favoritar todos"]').click();
    // Desfavoritar todos
    await page.locator('button[aria-label*="Desfavoritar todos"]').click();
    await expect(page.locator('button[aria-label*="Favoritar todos"]')).toBeVisible();
  });
});
