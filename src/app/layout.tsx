import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Present",
  description: "Create beautiful presentations effortlessly.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={""}>{children}</body>
    </html>
  );
}
