import { HeroLamp } from "@/components/HeroLamp";
import "./globals.css";
import { CustomNavbar } from "@/components/CustomNavbar";

export const metadata = {
  title: "Qlite Website",
  description: "Official company website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <CustomNavbar />
        <HeroLamp />
        <main className="pt-20 px-4">{children}</main> {/* Add padding to avoid overlap */}
      </body>
    </html>
  );
}
