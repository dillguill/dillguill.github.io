export default function Adventure() {
  return (
    <section className="py-24">
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
            <h3 className="text-3xl font-semibold mb-4">Ocean Aerial Tours</h3>
            <p className="text-gray-400">
              Fly over extraterrestrial oceans and witness their beauty.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
