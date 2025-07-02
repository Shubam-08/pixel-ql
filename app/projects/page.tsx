import Link from "next/link";

export default function ProjectsPage() {
  const projects = [
    {
      title: "29k Hotel, Pune",
      description: "Integrated GRMS, mood lighting, and energy automation solutions",
      image: "/second.jpg",
      link: "/projects/29k-hotel"
    },
    {
      title: "Corporate Office Building",
      description: "Complete building automation and energy management system",
      image: "/office.jpg",
      link: "/projects/office"
    },
    {
      title: "Luxury Retail Mall",
      description: "Smart lighting and energy optimization solutions",
      image: "/mall.jpg",
      link: "/projects/mall"
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
              Our Projects
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real-world implementations of our innovative solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-shadow"
              >
                <div className="relative h-64 md:h-80">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transform group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 bg-white">
                  <h2 className="text-2xl font-bold mb-3">{project.title}</h2>
                  <p className="text-gray-600 mb-6">{project.description}</p>
                  <Link
                    href={project.link}
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    View Project
                    <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
