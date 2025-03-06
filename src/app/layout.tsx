import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "SiNKO - Blog Otimizado",
  description: "Blog otimizado para SEO e acessibilidade.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="bg-white text-gray-900">
        <header className="bg-gray-100 p-4 shadow-md">
          <h1 className="text-2xl font-bold text-teal-600">SiNKO</h1>
        </header>
        <main className="container mx-auto p-6">{children}</main>
        <footer className="bg-gray-100 p-4 text-center mt-10">
          <p>&copy; 2025 SiNKO. Todos os direitos reservados.</p>
        </footer>
      </body>
    </html>
  );
}
