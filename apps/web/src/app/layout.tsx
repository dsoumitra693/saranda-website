import type { Metadata } from "next";
import { Istok_Web } from "next/font/google";
import "./globals.css";
import Footer from "../../components/footer";

const istokWeb = Istok_Web({
  variable: "--font-istok-web",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Saranda House | IITM",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${istokWeb.variable} ${istokWeb.className} antialiased`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
