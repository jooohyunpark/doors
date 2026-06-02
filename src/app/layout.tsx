import type { ReactNode } from "react";
import type { Metadata } from "next";
import PageTransition from "@/components/PageTransition";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Doors",
  authors: [{ name: "Joohyun Park" }],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
