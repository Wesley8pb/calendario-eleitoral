import { defineConfig, devices } from '@playwright/test';

/**
 * Configuração do Playwright para testes E2E
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: './e2e',

  /* Rodar testes em paralelo */
  fullyParallel: true,

  /* Falhar no CI se deixar test.only no código */
  forbidOnly: !!process.env.CI,

  /* Repetir apenas em falhas no CI */
  retries: process.env.CI ? 2 : 0,

  /* Optar por não rodar em paralelo em CI */
  workers: process.env.CI ? 1 : undefined,

  /* Reporter para usar */
  reporter: 'html',

  /* Configurações compartilhadas para todos os projetos */
  use: {
    /* Base URL para ações como `await page.goto('/')` */
    baseURL: 'http://localhost:5173',

    /* Coletar trace quando teste falha */
    trace: 'on-first-retry',

    /* Tirar screenshot apenas em falhas */
    screenshot: 'only-on-failure',
  },

  /* Configurar projetos para navegadores principais */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
    /* Testar em mobile */
    {
      name: 'Mobile Chrome',
      use: { ...devices['Pixel 5'] },
    },
    {
      name: 'Mobile Safari',
      use: { ...devices['iPhone 12'] },
    },
  ],

  /* Rodar servidor de desenvolvimento local antes de iniciar os testes */
  webServer: {
    command: 'npm run dev',
    url: 'http://localhost:5173',
    reuseExistingServer: !process.env.CI,
  },
});
