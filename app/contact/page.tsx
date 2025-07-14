import { Suspense } from "react";
import AnimatedBackground from "@/components/AnimatedBackground";
import ContactClient from "./ContactClient";

export default function ContactPage() {
  return (
    <main className="relative min-h-screen bg-black text-white pt-3 overflow-hidden">
      <AnimatedBackground />

      <Suspense fallback={<div className="text-center py-10">Loading...</div>}>
        <ContactClient />
      </Suspense>
    </main>
  );
}
