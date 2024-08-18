'use client'; // Mark this file as a Client Component

import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';
import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation'; // Use useRouter from next/navigation
import { useUser } from '@clerk/nextjs';

const Page = () => {
  const { isLoaded, user } = useUser();
  const router = useRouter(); // Use useRouter from next/navigation

  useEffect(() => {
    if (isLoaded && !user) {
      // Redirect to register page if the user is not signed in
      router.push('/register');
    }
  }, [isLoaded, user, router]);

  if (!isLoaded) {
    return <div className="flex justify-center items-center h-screen text-lg">Loading...</div>;
  }

  return (
    <div className="min-h-screen flex flex-col">

      <SignedIn>
        <div className="flex-3 bg-gray-100 flex flex-col">
          <header className="bg-gray-700 text-white p-4 shadow-md">
            <h1 className="text-2xl font-bold">Dashboard</h1>
          </header>
          <main className="flex-1 p-6">
            <div className="max-w mx-auto bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">Welcome to your dashboard!</h2>
              <p className="text-gray-700">Here you can manage your account settings, view notifications, and more.</p>
              {/* Add more dashboard content here */}
            </div>
          </main>
          <footer className="bg-gray-800 text-white p-4 text-center">
            <p>© {new Date().getFullYear()} Your Company.</p>
          </footer>
        </div>
      </SignedIn>
    </div>
  );
};

export default Page;
