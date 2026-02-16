import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PrarambhX",
  description: "Engineering the Future of Autonomous Flight",
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
