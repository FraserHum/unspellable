import { PrismicPreview } from "@prismicio/next";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { createClient, repositoryName } from "@/prismicio";
import { Header } from "@/components/Header";
import Sparkles from "@/components/Sparkles";
import { Scroller } from "@/components/Scroller";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const client = createClient();
  const nav = await client.getSingle("nav");

  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-emerald bg-cover bg-no-repeat flex flex-col items-center min-h-screen bg-fixed`}
      >
        <Scroller>
          <Sparkles />
        </Scroller>
        <Header nav={nav} />
        {children}
        <PrismicPreview repositoryName={repositoryName} />
      </body>
    </html>
  );
}
