import { test, expect } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();

const BASE_URL = 'https://api.1inch.dev/token';
const API_VERSION = 'v1.2';
const TOKEN_ADDRESS = '0x111111111117dc0aa78b770fa6a738034120c302';
const CHAIN_ID = 1;

test('Validate 1inch API token details', async ({ request }) => {
  const endpoint = `${BASE_URL}/${API_VERSION}/${CHAIN_ID}/custom/${TOKEN_ADDRESS}`;

  const response = await request.get(endpoint, {
    headers: {
      Authorization: `Bearer ${process.env.API_KEY}`,
    },
  });

  console.log('Response status:', response.status());
  const rawResponse = await response.text();
  console.log('Raw response:', rawResponse);

  expect(response.status()).toBe(200);

  const responseBody = await response.json();

  expect(responseBody.symbol).toBe('1INCH');
  expect(responseBody.name).toBe('1INCH Token');
  expect(responseBody.address).toBe(TOKEN_ADDRESS);
  expect(responseBody.chainId).toBe(CHAIN_ID);
  expect(responseBody.decimals).toBe(18);

  const logoURI = responseBody.logoURI;
  expect(logoURI).toBeDefined();
  const logoResponse = await request.get(logoURI);
  expect(logoResponse.status()).toBe(200);
});
