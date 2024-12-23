const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  globalSetup: require.resolve('./tests/test.setup.ts'),
  testDir: './tests',
  timeout: 10000,
  retries: 0,
  use: {
    headless: false,
    slowMo: 1000,
    viewport: { width: 1280, height: 720 },
  },
});