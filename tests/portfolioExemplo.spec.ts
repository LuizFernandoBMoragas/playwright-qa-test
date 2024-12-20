import { test, expect } from '@playwright/test';
import { Portfolio } from '../pages/Portfolio';

test('1inch portfolio page has correct title', async ({ page }) => {
  const PortfolioPage = new Portfolio(page);

  await PortfolioPage.navigate();
  await expect(page).toHaveTitle('1inch Portfolio');
});
