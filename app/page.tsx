// app/page.tsx
import { HeroLamp } from "@/components/HeroLamp";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <HeroLamp />
      
      <section className="bg-black">
        <ContainerScroll
          titleComponent={
            <h2 className="text-4xl font-bold text-white mb-6 text-center">
              Our Featured Projects
            </h2>
          }
        >
          <div className="w-full flex flex-col items-center justify-center py-12 px-4 md:px-6">
            <div className="w-full">


<Image
  src="/second.jpg"
  alt="29k Hotel Project"
  width={800}  // ✅ Add width
  height={500} // ✅ Add height
  className="rounded-lg object-cover shadow-lg w-full max-w-4xl"
/>

              <div className="text-center mt-8">
                <h3 className="text-2xl font-bold mb-2">29k Hotel, Pune</h3>
                <p className="text-yellow-900 font-semibold">
                  GRMS, mood lighting, and energy automation solutions integrated by Qlite.
                </p>
              </div>
              <div className="mt-8">
                <button className="bg-blue-900 p-4 border-2 hover:bg-blue-800 transition-colors">Show more</button>
              </div>
            </div>
          </div>
        </ContainerScroll>
      </section>
    </>
  );
}
