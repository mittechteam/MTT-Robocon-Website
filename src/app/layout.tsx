import type { Metadata } from "next";
import "./globals.css";
import { NavbarDemo } from "@/components/navbar/navbar";
import Image from "next/image";
import MTTlogo from "@/assets/logos/MTT-Logo.svg";
import Footer from "@/components/footer/footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "MIT-WPU Tech Team",
  description: "Official Robotics Team of MIT-WPU",
  icons: {
    icon: "/MTT-Logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/MTT-logo.svg" />
      </head>
      <body>
        <div className="min-h-screen relative bg-black dark:bg-white bg-dot-white/[0.2] dark:bg-dot-white/[0.2] overflow-hidden">
          <Link href="/">
            <div className="absolute top-4 left-10 z-50 cursor-pointer">
              <Image src={MTTlogo} alt="MTT-Logo" width={75} height={75} />
            </div>
          </Link>
          <NavbarDemo />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
