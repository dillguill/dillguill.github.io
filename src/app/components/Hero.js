"use client";

export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center">
      <h1 className="text-8xl font-bold tracking-wider uppercase mb-6">
        Explore the Galaxy
      </h1>
      <p className="text-2xl text-gray-400 mb-8">
        The safest way to travel beyond Earth
      </p>
      <button className="px-8 py-4 border-2 border-yellow-500 text-yellow-500 font-bold rounded-lg hover:bg-yellow-500 hover:text-black transition-colors">
        Start Your Adventure
      </button>
    </section>
  );
}
