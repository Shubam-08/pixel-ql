// app/fonts.ts
import { Montserrat, Dancing_Script } from "next/font/google";

export const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: "400",
});
