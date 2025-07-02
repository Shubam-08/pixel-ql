export default function AboutPage() {
  return (
    <>
      {/* About Section */}
      <section className="w-full px-4 sm:px-6 lg:px-12 py-10">
        <h1 className="text-4xl font-bold">About Us</h1>
        <p className="mt-4 text-green-600 underline">
          Welcome to Qlite. We specialize in smart lighting and automation solutions that blend innovation, design, and energy efficiency.
        </p>
      </section>

      {/* Team Section */}
      <section className="bg-[#111] text-white py-16 px-4 sm:px-6 lg:px-12">
        <h2 className="text-3xl font-bold mb-10 text-center">
          The Minds Behind Qlite
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 max-w-7xl mx-auto">
          {[
            { name: "Aarav Mehta", role: "Founder & CEO" },
            { name: "Simran Kaur", role: "Design Head" },
            { name: "Kabir Shah", role: "Automation Expert" },
            { name: "Riya Singh", role: "Project Manager" },
            { name: "Neel Joshi", role: "Tech Lead" },
          ].map((member, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-[#1e1e1e] to-[#2d2d2d] rounded-lg p-6 text-center shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-bold">
                {member.name.split(" ")[0][0]}
                {member.name.split(" ")[1][0]}
              </div>
              <h3 className="text-lg font-semibold">{member.name}</h3>
              <p className="text-sm text-gray-400">{member.role}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
