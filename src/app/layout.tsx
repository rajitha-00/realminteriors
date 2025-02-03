import type { Metadata } from "next";
import { PT_Serif } from "next/font/google"; // Import PT Serif
import "./globals.css";

const ptSerif = PT_Serif({
  variable: "--font-pt-serif",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Realm Interiors (Pvt) Ltd | Transforming Spaces, Defining Luxury",
  description:
    "Experience bespoke interior design and construction fitout solutions for residential, commercial, and recreational spaces. Elevate your environment with expert craftsmanship, precision, and style.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${ptSerif.variable} antialiased`}>{children}</body>
    </html>
  );
}
