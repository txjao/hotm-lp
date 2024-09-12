import Head from "next/head";
import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";
import { FacebookPixelEvents } from "./components/PixelEvents";
import { GoogleTagManager } from '@next/third-parties/google' 

const jost = Jost({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HotM",
  description: "Aprenda a conquistar mulheres usando as redes sociais",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        {children}
        <Suspense fallback={null}>
          <FacebookPixelEvents />
        </Suspense>
      </body>
      <GoogleTagManager gtmId="GTM-PX9LFK4T" />
    </html>
  );
}
