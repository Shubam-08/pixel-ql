export default function Footer() {
  return (
    <footer className="bg-[hsl(221,39%,11%)] text-white py-10 px-4 ">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold text-white">Qlite Architect</h2>
          <p className="text-sm text-gray-400 mt-1">
            Lighting | Automation | Smart Solutions
          </p>
        </div>

        <div className="flex space-x-6 text-sm text-gray-400">
          <a href="#home" className="hover:text-white transition">Home</a>
          <a href="#products" className="hover:text-white transition">Products</a>
          <a href="/contact" className="hover:text-white transition">Contact</a>
          <a href="/about" className="hover:text-white transition">About</a>
        </div>
      </div>

      <div className="mt-8 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Qlite Architect. All rights reserved.
      </div>
    </footer>
  );
}
