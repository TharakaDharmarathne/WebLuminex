import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "WebLuminex | Digital Solutions Company",
  description:
    "WebLuminex develops modern websites, ERP systems, POS systems, mobile applications and custom web solutions.",
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