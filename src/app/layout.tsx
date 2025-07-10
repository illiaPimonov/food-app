import type { Metadata } from "next";
import "./globals.css";
import { nunito } from "@/ui/fonts/fonts";

export const metadata: Metadata = {
  title: "Food App",
  description: "Food App made with Next in practice purposes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${nunito.variable}`}>
        {children}
      </body>
    </html>
  );
}
