
import { test, expect } from '@playwright/test';
import { APIHelpers } from '../utils/apiHelpers';
import { PortfolioPage } from '../pages/portfolioPage';
import dotenv from 'dotenv';

dotenv.config();

test.describe('Connect Wallet Test Suite', () => {
  let savedValueUsd: string;
  let portfolioPage: PortfolioPage;
  let apiHelpers: APIHelpers;

  test.beforeEach(async ({ page, request }) => {
    portfolioPage = new PortfolioPage(page);
    apiHelpers = new APIHelpers(request);
  });

  test('Connect Wallet Flow', async ({ page, request }) => {
    await portfolioPage.navigateToPortfolio();
    await portfolioPage.clickConnectWallet();
    await portfolioPage.enterWalletAddress('vitalik.eth');
    await portfolioPage.addWallet();

    const walletDetails = await apiHelpers.fetchWalletDetails('vitalik.eth');
    expect(walletDetails.result[0].address).toBe('0xd8da6bf26964af9d7eed9e03e53415d37aa96045');
    expect(walletDetails.result[0].checkUrl).toBe('https://app.ens.domains/vitalik.eth');
    console.log('Verified the ENS lookup request.');


    const apiKey = process.env.API_KEY;
    const portfolioApiUrl = `https://api.1inch.dev/portfolio/portfolio/v4/general/current_value?addresses=0xd8da6bf26964af9d7eed9e03e53415d37aa96045&use_cache=true`;
        
    const apiResponse = await page.request.get(portfolioApiUrl, {
      headers: {
        'Authorization': `Bearer ${apiKey}`,
      },
    });

    
    expect(apiResponse.status()).toBe(200);
    console.log('API request to portfolio API was successful (status 200).');
    
    const responseBody = await apiResponse.json();
    
    expect(responseBody.result[0]).toHaveProperty('value_usd');
    savedValueUsd = responseBody.result[0].value_usd;
    const roundedValue = Math.round(parseFloat(savedValueUsd));
    const amountInUSD = roundedValue.toString();
    console.log(`Saved USD value: ${savedValueUsd}`);
    console.log(`Rounded Value: ${amountInUSD}`);

    await portfolioPage.walletPresentInHeader();
    await portfolioPage.openDropdownMenu();

    const button = page.locator('button.account-option');
    const smallTag = button.locator('small.account-option-value');
    const smallText = await smallTag.textContent();
    const numericValue = smallText?.trim().replace(/\$/g, '').replace(/\s+/g, '');
    console.log(numericValue);

    expect(numericValue).toBe(amountInUSD);
    console.log(`USD value in button: ${numericValue}, expected: ${amountInUSD}.`);
  });
});
