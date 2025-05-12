import { Metadata } from "next";
import "./globals.css";
import { NavBar } from "./components/navBar/page";


export const metadata: Metadata = {
  title: "Lista de Produtos",
  description: "Listando produtos no next",
};

export default function RootLayout({children}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="pt-BR">
      <body>
      <NavBar />
        {children}
      </body>
    </html>
  );
}
