// layout.tsx
import "./globals.css";
import { CustomNavbar } from "@/components/CustomNavbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "QR pixel Website",
  description: "Official company website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-gradient-to-b from-[#0f0f0f] to-[#1a1a1a] text-white min-h-screen flex flex-col">
  <CustomNavbar />
  
  {/* Main content grows to fill available space */}
  <main className="flex-grow  ">
    {children}
  </main>

  {/* Footer stays at bottom */}
  <Footer />
</body>
    </html>
  );
}
