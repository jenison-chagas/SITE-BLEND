import BlendCursor from "@/components/BlendCursor";
import CinematicLoader from "@/components/CinematicLoader";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Blend Creative Design Studio",
    template: "%s | Blend Creative Design Studio",
  },
  description:
    "Estratégia, criatividade e design para marcas que querem deixar de ser apenas mais uma.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
  <CinematicLoader
    logoSrc="/images/logo.png"
    brandName="BLEND CREATIVE"
    minDuration={5400}
  />

  <BlendCursor />
  {children}
</body>
    </html>
  );
}