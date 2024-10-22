import { HomeIcon } from '@heroicons/react/24/solid';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="flex items-center space-x-3">
        <HomeIcon className="h-6 w-6 fill-slate-400" />
        <h1 className="text-4xl font-bold">
          Welcome to My Developer Portfolio
        </h1>
      </div>
      <p className="mt-4 text-lg">
        This is styled with Tailwind and uses the Roboto font from Google Fonts.
      </p>
    </div>
  );
}