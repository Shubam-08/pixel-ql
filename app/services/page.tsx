export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-8">Our Products</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-4">Smart Lighting Solutions</h2>
              <p className="text-gray-300 mb-4">Advanced lighting control systems for energy efficiency.</p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
                Learn More
              </button>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-4">Energy Automation</h2>
              <p className="text-gray-300 mb-4">Intelligent energy management systems for buildings.</p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
                Learn More
              </button>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-4">Building Management</h2>
              <p className="text-gray-300 mb-4">Comprehensive building automation solutions.</p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
