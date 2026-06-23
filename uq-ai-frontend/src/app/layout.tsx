import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "UQ AI Solution Company",
  description: "Inteligencia Artificial para el Perú y el Mundo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}