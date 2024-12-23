import { APIRequestContext } from '@playwright/test';

export class APIHelpers {
  private request: APIRequestContext;

  constructor(request: APIRequestContext) {
    this.request = request;
  };

  async fetchWalletDetails(ensName: string) {
    const response = await this.request.get(
      `https://domains.1inch.io/v2.0/lookup?name=${ensName}`
    );
    return await response.json();
  };
};
