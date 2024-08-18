import { SignUp } from '@clerk/nextjs';

export const metadata = {
  title: 'Clerk Authentication with Next.js',
  description: 'A description for my app',
};

export default function RegisterPage() {
  return (
    <div className="flex h-screen items-center justify-center ">
      <main className="p-8 rounded-lg  w-full max-w-md">
        <SignUp />
      </main>
    </div>
  );
}
