import { Page, Locator, expect } from '@playwright/test';
import { WalletLocators } from '../locators/walletLocator';

export class WalletPage {
  readonly page: Page;
  readonly walletHeader: Locator;
  readonly walletList: Locator;

  constructor(page: Page) {
    this.page = page;
    this.walletHeader = page.locator(WalletLocators.dropdownButton);
    this.walletList = page.locator(WalletLocators.walletSelectorInList);
  }

  async verifyWalletAdded() {
    await this.page.getByRole('button', { name: 'vitalik.eth' }).isVisible();
  }
}
