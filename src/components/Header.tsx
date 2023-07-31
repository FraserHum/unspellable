import { PrismicNextImage } from "@prismicio/next";
import { Navigation } from "./Navigation";
import { Vidaloka } from "next/font/google";
import { NavDocument } from "../../prismicio-types";

const vidaloka = Vidaloka({ subsets: ["latin"], weight: "400" });
export const Header = ({ nav }: { nav: NavDocument }) => {
  return (
    <header className="w-full">
      <div className="flex flex-col md:flex-row items-center justify-center">
        <PrismicNextImage className="w-1/4 md:w-1/12" field={nav.data.logo} />
        <h1
          className={`${vidaloka.className} mb-4 text-4xl font-extrabold tracking-widest leading-none text-title md:text-5xl lg:text-6xl`}
        >
          UNSPELLABLE
        </h1>
      </div>
      <Navigation nav={nav} />
    </header>
  );
};
