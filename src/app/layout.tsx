import "../globals.css";
import type { ReactNode } from "react";
import Header from "./_components/Header";
import Footer from "./_components/Footer";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ru">
      <body className="bg-neutral-950 text-neutral-100 min-h-screen font-sans flex flex-col">
        <Header />
        <main className="flex-1 w-full flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
