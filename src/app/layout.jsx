import "./globals.css";
import PageTransition from "@/components/PageTransition";

export const metadata = {
  title: "Doors",
  description: "",
  authors: [{ name: "Joohyun Park" }],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
