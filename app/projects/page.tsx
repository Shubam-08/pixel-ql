import Link from "next/link";
import Image from "next/image";
import { ScrollButton } from "@/components/ui/scroll-button";

export default function ProjectsPage() {
  const projects = [
    {
      id: 1,
      title: "Sobha Towers",
      image: "/Sobha Towers.jpg",
      description: "Intelligent energy management system with smart lighting and HVAC controls",
      link: "/projects/sobhatowers"
    },
    {
      id: 2,
      title: "Residential Complex, Bangalore",
      image: "/fourth.jpg",
      description: "Smart home automation with integrated lighting and security systems",
      link: "/projects/residentialcomplex"
    },
    {
      id: 3,
      title: "Italian Heritage",
      image: "/project5.png",
      description: "Smart home automation with integrated lighting and security systems",
      link: "/projects/italianheritage"
    },
    {
      id: 4,
      title: "Gujrat Architectural Jewels",
      image: "/project6.png",
      description: "Advanced lighting control and automation system implemented in a luxury hotel setting",
      link: "/projects/gujratjewels"
    },
    {
      id: 5,
      title: "Fashion Showroom, Bangalore",
      image: "/fashionshowroom.png",
      description: "Intelligent energy management system with smart lighting and HVAC controls",
      link: "/projects/fashionshowroom"
    },
    {
      id: 6,
      title: "Commercial Showroom, Bangalore",
      image: "/comercialshowroom.png",
      description: "Smart home automation with integrated lighting and security systems",
      link: "/projects/comercialshowroom"
    },
    {
      id: 7,
      title: "Residential Building, Chennai",
      image: "/building.jpg",
      description: "Energy-efficient lighting and automation solutions for large retail spaces",
      link: "/projects/residentialbuilding"
    }
  ];

  const getBadge = (title: string) => {
    if (title.toLowerCase().includes('residential')) return { label: 'Residential', color: 'bg-pink-600/90' };
    if (title.toLowerCase().includes('heritage')) return { label: 'Heritage', color: 'bg-blue-600/90' };
    if (title.toLowerCase().includes('showroom')) return { label: 'Showroom', color: 'bg-cyan-600/90' };
    if (title.toLowerCase().includes('hotel') || title.toLowerCase().includes('tower')) return { label: 'Hotel', color: 'bg-purple-700/90' };
    if (title.toLowerCase().includes('jewel')) return { label: 'Architect', color: 'bg-yellow-500/90' };
    return { label: 'Project', color: 'bg-gray-700/90' };
  };

  return (
    <main className="min-h-screen bg-black text-white">
      <section id="projects" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-pink-500 animate-gradient-shimmer">
              Our Projects
            </h1>
            <div className="mx-auto h-1 w-40 rounded-full bg-gradient-to-r from-blue-400 via-cyan-400 to-pink-400 animate-gradient-shimmer mb-8" />
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real-world implementations of our innovative solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((project, idx) => {
              const badge = getBadge(project.title);
              return (
                <div
                  key={project.id}
                  className={`group rounded-2xl p-[2px] bg-gradient-to-r from-blue-600 via-pink-500 to-cyan-400 shadow-xl hover:shadow-2xl hover:shadow-cyan-400/20 transition-shadow duration-300 animate-fadeUp`}
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <div className="rounded-2xl bg-gradient-to-b from-black/80 to-gray-900/80 backdrop-blur-md overflow-hidden">
                    <Link href={project.link} className="block">
                      <div className="relative w-full h-80 overflow-hidden rounded-t-2xl">
                        <Image
                          src={project.image}
                          alt={project.title}
                          width={800}
                          height={500}
                          quality={90}
                          sizes="(max-width: 768px) 100vw, 33vw"
                          className="w-full h-80 object-cover transition-all duration-400 group-hover:scale-110 group-hover:-translate-y-2 brightness-110 contrast-125 saturate-125 drop-shadow-lg border border-cyan-400/20"
                        />
                        <span className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold text-white shadow-md ${badge.color} bg-opacity-90 backdrop-blur-sm animate-fadeIn`} style={{animationDelay: `${idx * 180 + 200}ms`}}>{badge.label}</span>
                      </div>
                    </Link>
                    <div className="p-6">
                      <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-cyan-400 transition-colors duration-300 animate-fadeIn" style={{animationDelay: `${idx * 180 + 300}ms`}}>
                        {project.title}
                      </h3>
                      <p className="text-gray-300 mb-4 text-base min-h-[60px] animate-fadeIn" style={{animationDelay: `${idx * 180 + 400}ms`}}>{project.description}</p>
                      <Link href={project.link} className="inline-block mt-2 text-shadow-md font-semibold hover:text-pink-400 transition-colors bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-fadeIn" style={{animationDelay: `${idx * 180 + 500}ms`}}>
                        Read More →
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="text-center mt-16">
            <ScrollButton />
          </div>
        </div>
      </section>
    </main>
  );
}
