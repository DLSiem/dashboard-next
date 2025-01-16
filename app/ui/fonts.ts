import { Inter, Roboto, Lusitana } from "next/font/google";

export const lusitana = Lusitana({
  subsets: ["latin"],
  weight: ["400", "700"],
});
export const inter = Inter({ subsets: ["latin"] });
export const roboto100 = Roboto({
  subsets: ["latin"],
  weight: "100",
});

export const roboto500 = Roboto({ subsets: ["latin"], weight: "500" });
export const roboto = Roboto({ subsets: ["latin"], weight: "400" });
