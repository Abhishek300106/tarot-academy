import "./globals.css";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tarot Academy",
  description: "Learn Tarot through a structured learning journey.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
