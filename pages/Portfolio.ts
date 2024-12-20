import { Page } from '@playwright/test';
import { locators } from '../locators/locators';
import dotenv from 'dotenv';
dotenv.config();

export class Portfolio {
  constructor(private page: Page) {};

  
  async navigate() {
    const portfolioPage = process.env.PORTFOLIO_PAGE || "";
    await this.page.goto(portfolioPage);
  };

  async isConnectWalletVisible() {
    return await this.page.isVisible(locators.connectWalletButton);
  };

  async clickConnectWallet() {
    await this.page.click(locators.connectWalletButton);
  };
};