import Link from "next/link";

export default function ServicesPage() {
  const services = [
    {
      title: "Smart Lighting Solutions",
      description: "Advanced lighting control systems for energy efficiency. Our solutions include automated dimming, occupancy sensors, and daylight harvesting to reduce energy consumption while maintaining optimal lighting levels.",
      icon: "💡",
      link: "/services/lighting"
    },
    {
      title: "Energy Automation",
      description: "Intelligent energy management systems for buildings. We provide comprehensive solutions for HVAC control, energy monitoring, and optimization to help you reduce operational costs and achieve sustainability goals.",
      icon: "⚡",
      link: "/services/energy"
    },
    {
      title: "Building Management",
      description: "Comprehensive building automation solutions. Our integrated systems manage everything from security to environmental controls, ensuring your facility operates at peak efficiency.",
      icon: "🏢",
      link: "/services/building"
    },
    {
      title: "Mood Lighting",
      description: "Customizable lighting solutions that enhance ambiance and create the perfect atmosphere for any space. Perfect for hospitality, retail, and residential applications.",
      icon: "✨",
      link: "/services/mood-lighting"
    },
    {
      title: "Energy Monitoring",
      description: "Real-time energy consumption tracking and analytics to help you identify inefficiencies and optimize your energy usage.",
      icon: "📊",
      link: "/services/monitoring"
    },
    {
      title: "Custom Solutions",
      description: "Tailored automation solutions designed specifically for your unique needs and requirements. We work closely with you to create the perfect system for your space.",
      icon: "🛠️",
      link: "/services/custom"
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
              Our Services
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Innovative solutions for energy efficiency and building automation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-gray-800 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-blue-600 rounded-full mb-6">
                  <span className="text-2xl font-bold text-white">{service.icon}</span>
                </div>
                <h2 className="text-2xl font-bold mb-4">{service.title}</h2>
                <p className="text-gray-400 mb-6">{service.description}</p>
                <Link
                  href={service.link}
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
                >
                  Learn More
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
