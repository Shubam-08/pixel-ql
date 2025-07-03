import Link from "next/link";
import Image from "next/image";
import { ScrollButton } from "@/components/ui/scroll-button";

export default function ProjectsPage() {
  const projects = [
    {
      id: 1,
      title: "29k Hotel, Pune",
      image: "/second.jpg",
      description: "Advanced lighting control and automation system implemented in a luxury hotel setting",
      link: "/projects/hotel"
    },
    {
      id: 2,
      title: "Tower from street",
      image: "/tower from street.jpg",
      description: "Intelligent energy management system with smart lighting and HVAC controls",
      link: "/projects/office"
    },
    {
      id: 3,
      title: "Residential Complex, Bangalore",
      image: "/fourth.jpg",
      description: "Smart home automation with integrated lighting and security systems",
      link: "/projects/residential"
    },
    {
      id: 4,
      title: "Retail Mall, Chennai",
      image: "/fifth.jpg",
      description: "Energy-efficient lighting and automation solutions for large retail spaces",
      link: "/projects/retail"
    }
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      <section id="projects" className="py-20">
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
            {projects.map((project) => (
              <div key={project.id} className="group bg-black/50 rounded-2xl overflow-hidden shadow-xl transform hover:scale-105 transition-all duration-300">
                <Image src={project.image} alt={project.title} width={800} height={500} className="w-full h-64 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <Link href={project.link}  className="hidden md:block ml-4 text-shadow-md font-semibold text-blue-400 animate-pulse tracking-wide bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                    Learn More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="text-center mt-16">
          <ScrollButton />
        </div>
      </section>
    </main>
  );
}
