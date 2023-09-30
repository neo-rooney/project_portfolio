import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "RooneyLog",
  description: "This is portfolio website by rooney",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
