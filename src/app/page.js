// app/page.js
// import { HomeIcon } from '@heroicons/react/24/solid';

export default function Home() {
  return (
    <div className="relative z-20 flex flex-col items-center justify-center min-h-screen text-center">
      {/* Wrapper for content */}
      <div className="flex items-center space-x-3">
        {/* <HomeIcon className="h-6 w-6 fill-slate-400" /> */}
        <h1 className="text-6xl uppercase">
          welcome
        </h1>
      </div>
      <p className="mt-4 text-lg">
      Lorem ipsum odor amet, consectetuer adipiscing elit. Condimentum tempor elit malesuada magna convallis. Placerat duis lobortis ac magnis inceptos.
      </p>
    </div>
  );
}