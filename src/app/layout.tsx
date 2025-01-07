import type { Metadata } from "next";
import "./globals.css";
import NavigationWrapper from "@/components/navbar/navigation-wraper";
import Image from "next/image";
import MTTlogo from "@/assets/logos/MTT-Logo.svg";
import Footer from "@/components/footer/footer";
import Link from "next/link";
import { Toaster } from "@/components/ui/toaster";
import { RecruitmentButton } from "@/components/ui/recruitmentButton";

export const metadata: Metadata = {
  title: "MIT-WPU Tech Team",
  description: "Official Robotics Team of MIT-WPU",
  icons: {
    icon: "/favicon.ico",
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
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <div className="min-h-screen relative bg-black dark:bg-white bg-dot-white/[0.2] dark:bg-dot-white/[0.2] overflow-hidden">
          <Link href="/">
            <div className="absolute top-4 left-10 z-40 cursor-pointer">
              <Image src={MTTlogo} alt="MTT-Logo" width={75} height={75} />
            </div>
          </Link>
          <Link
            href="https://forms.gle/JjDRka53DCJYrGju6"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="absolute top-8 right-10 z-50 cursor-pointer hidden lg:block">
              <RecruitmentButton />
            </div>
          </Link>
          <NavigationWrapper />
          {children}
          <Toaster />
          <Footer />
        </div>
      </body>
    </html>
  );
}
