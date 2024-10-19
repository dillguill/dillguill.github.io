import SkillsShowcase from "./components/SkillsShowcase";

export default function Home() {
  return (
    <div className="relative overflow-hidden bg-black">
      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center items-center text-center bg-black text-white">
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

      {/* Divider */}
      <div className="w-full h-px bg-gray-700 mb-16"></div>

      {/* Adventures Section */}
      <section className="bg-black text-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold uppercase mb-16">Adventures</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="p-10 border-2 border-gray-700 rounded-lg hover:border-yellow-500 transition-colors">
              <h3 className="text-3xl font-semibold mb-4">Dune Buggy Tours</h3>
              <p className="text-gray-400">
                Experience the thrill of driving on alien terrains.
              </p>
            </div>
            <div className="p-10 border-2 border-gray-700 rounded-lg hover:border-yellow-500 transition-colors">
              <h3 className="text-3xl font-semibold mb-4">Canyon Adventures</h3>
              <p className="text-gray-400">
                Explore deep canyons carved over millennia.
              </p>
            </div>
            <div className="p-10 border-2 border-gray-700 rounded-lg hover:border-yellow-500 transition-colors">
              <h3 className="text-3xl font-semibold mb-4">
                Ocean Aerial Tours
              </h3>
              <p className="text-gray-400">
                Fly over extraterrestrial oceans and witness their beauty.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="w-full h-px bg-gray-700 mb-16"></div>
      <SkillsShowcase />
    </div>
  );
}
