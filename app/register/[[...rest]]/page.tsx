import { SignUp } from '@clerk/nextjs';

export const metadata = {
  title: 'Clerk Authentication with Next.js',
  description: 'A description for my app',
};

export default function RegisterPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <main className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <SignUp />
      </main>
    </div>
  );
}
