import "./globals.css";
import PageTransition from "@/components/PageTransition";

export const metadata = {
  title: "Doors",
  description: "",
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
