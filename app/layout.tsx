import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Max Tijerino — Marketing Systems Portfolio",
  description:
    "Portfolio for Max Tijerino: digital marketer, creative systems thinker, AI-assisted workflow strategist, and branding + UX operator.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
