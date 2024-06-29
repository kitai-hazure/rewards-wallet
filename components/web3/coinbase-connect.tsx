'use client';

import { CoinbaseWalletSDK } from '@coinbase/wallet-sdk';
import { useCallback } from 'react';
import { Button } from '../ui/button';
import { ethers } from 'ethers';
import { useRouter } from 'next/navigation';

const sdk = new CoinbaseWalletSDK({
  appName: 'Rewards Wallet',
  appLogoUrl: 'https://example.com/logo.png',
  appChainIds: [84532]
});

const provider = sdk.makeWeb3Provider();

export default function CoinbaseConnect() {
  const router = useRouter();

  const createWallet = useCallback(async () => {
    try {
      const [address]: any = await provider.request({
        method: 'eth_requestAccounts'
      });
      const ethersProvider = new ethers.BrowserProvider(provider);
      const signer = await ethersProvider.getSigner();
      const sign = await signer.signMessage('Hello');
      router.replace('/dashboard');
    } catch (error: any) {
      console.error('Wallet connection error', error);
    }
  }, []);

  return (
    <Button onClick={createWallet} variant="secondary" className="m-8">
      Connect with Coinbase Wallet
    </Button>
  );
}
