import { Page } from '@playwright/test';
import { WalletLocators } from '../locators/walletLocator';
import dotenv from 'dotenv';

dotenv.config();

export class PortfolioPage {
  readonly page: Page;

  constructor(page: any) {
    this.page = page;
  }
;
  async navigateToPortfolio() {
    const porfolioPage = 'https://portfolio.1inch.io/';
    await this.page.goto(porfolioPage);
  };

  async clickConnectWallet() {
    await this.page.getByRole('button', { name: 'Connect wallet' }).nth(1).click();
  };

  async enterWalletAddress(address: any) {
    const walletAddressInput = WalletLocators.walletAddressInput;
    await this.page.fill(walletAddressInput, address);
  };

  async addWallet() {
    const addWalletButton = WalletLocators.addWalletButton;
    await this.page.click(addWalletButton);
  };

  async walletPresentInHeader() {
    await this.page.getByRole('button', { name: 'vitalik.eth' }).isVisible();
  };

  async openDropdownMenu() {
    await this.page.getByRole('button', { name: 'vitalik.eth' }).click();
  };
};
