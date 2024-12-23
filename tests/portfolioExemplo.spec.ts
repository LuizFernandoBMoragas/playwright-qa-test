import { test, expect } from '@playwright/test';
import { PortfolioPage } from '../pages/portfolioPage';

test('1inch portfolio page has correct title', async ({ page }) => {
  const Portfolio = new PortfolioPage(page);

  await Portfolio.navigateToPortfolio();
  await expect(page).toHaveTitle('1inch Portfolio');
});
