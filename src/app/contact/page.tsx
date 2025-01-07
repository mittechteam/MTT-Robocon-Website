import { Metadata } from "next";
import Contact from "./ContactUs";
import ContactHeader from "./ContactHeader";

export const metadata: Metadata = {
  title: "Contact | MIT Tech Team",
  description:
    "Get in touch with us at MIT Tech Team. We are always happy to help you.",
  icons: {
    icon: "/MTT-Logo.svg",
  },
};

export default function Page() {
  return (
    <main className="min-h-screen mb-16">
     <ContactHeader />
      <Contact />
    </main>
  );
}
