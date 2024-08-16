import { ClerkProvider, SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';
import { ReactNode } from 'react';

interface RootLayoutProps {
  children: ReactNode;
}

export const metadata = {
  title: 'Clerk Authentication with Next.js',
  description: 'A description for my app',
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <ClerkProvider>
          <header>
            <SignedOut>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </header>
          <main>{children}</main>
        </ClerkProvider>
      </body>
    </html>
  );
}
