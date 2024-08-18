import { ClerkProvider, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import { ReactNode } from 'react';
import '../app/globals.css';

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
      <body className=" text-gray-900 antialiased h-screen grid place-items-center">
        <ClerkProvider>
          <div className="w-full max-w-md">
            <header className="mb-4">
              <nav className="flex justify-center">
                <SignedOut>
                  {/* Optional: Add content for signed out users */}
                </SignedOut>
                <SignedIn>
                  <UserButton />
                </SignedIn>
              </nav>
            </header>
            <main className="">
              {children}
            </main>
          </div>
        </ClerkProvider>
      </body>
    </html>
  );
}
