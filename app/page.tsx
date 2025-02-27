import { Metadata } from 'next';
import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import CoinbaseConnect from '@/components/web3/coinbase-connect';

export const metadata: Metadata = {
  title: 'Login',
  description: 'Login to your account or create a new one.'
};

export default function LoginPage() {
  return (
    <div className="relative h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
      <Link
        href="/examples/authentication"
        className={cn(
          buttonVariants({ variant: 'ghost' }),
          'absolute right-4 top-4 hidden md:right-8 md:top-8'
        )}
      >
        Login
      </Link>
      <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
        <div className="absolute inset-0 bg-zinc-900" />
        <div className="relative z-20 flex items-center text-lg font-medium">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mr-2 h-6 w-6"
          >
            <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
          </svg>
          Rewards Wallet
        </div>
        <div className="relative z-20 mt-auto">
          <blockquote className="space-y-2">
            <p className="text-lg">
              Welcome to the Rewards Wallet. A place to earn cashback on your
              transactions. Never miss a reward again. Never pay for gas fees
              again.
            </p>
            <footer className="text-sm">Kitai Hazure</footer>
          </blockquote>
        </div>
      </div>
      <div className="flex h-full items-center p-4 lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-4 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Login or Create an account
            </h1>
            <p className="my-8 text-sm text-muted-foreground">
              Connect your wallet to get started. You can use an existing
              coinbase wallet or create a new one.
            </p>
            <CoinbaseConnect />
          </div>
        </div>
      </div>
    </div>
  );
}
