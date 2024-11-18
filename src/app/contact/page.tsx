"use client";
import { Mail, MapPin, Phone } from "lucide-react";
import Contact from "./ContactUs";

export default function Page() {
  return (
    <main className="min-h-screen">
      <section className="text-white py-24">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-5xl font-bold text-center m-24">Get in <span className="text-red-500">Touch ☎️</span></h1>
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <button
              className="flex flex-col items-center space-y-4 bg-transparent border-none cursor-pointer hover:text-blue-300"
              onClick={() =>
                window.open(
                  "https://www.google.com/maps/place/MIT+Robocon+Lab/@18.5203092,73.815416,21z/data=!4m6!3m5!1s0x3bc2bfa22ae1fbdf:0x799455fed92fdda3!8m2!3d18.5203092!4d73.8155528!16s%2Fg%2F11b6ghcqt6?entry=ttu&g_ep=EgoyMDI0MTExNy4wIKXMDSoASAFQAw%3D%3D",
                  "_blank"
                )
              }
            >
              <MapPin className="w-12 h-12 text-red-500" />
              <div>
                <p>MTT Robocon Lab</p>
                <p>
                  9, Vishwashanti Marg, Shilpa Housing Society, Rambaug Colony,
                  Kothrud, Pune, Maharashtra 411038
                </p>
              </div>
            </button>
            <button className="flex flex-col items-center space-y-4 bg-transparent border-none cursor-pointer hover:text-blue-300">
              <div className="flex flex-col items-center space-y-4">
                <Phone className="w-12 h-12 text-red-500" />
                <a
                  href="tel:+919359411901"
                  className="text-white hover:text-blue-300"
                >
                  <p>Call Us </p>
                  <p>+91 93594 11901</p>
                </a>
              </div>
            </button>
            <button className="flex flex-col items-center space-y-4 bg-transparent border-none cursor-pointer hover:text-blue-300">
              <Mail className="w-12 h-12 text-red-500" />
              <a
                href="mailto:robocon.mit@gmail.com"
                className="text-white hover:text-blue-300"
              >
                <p>robocon.mit@gmail.com</p>
              </a>
            </button>
          </div>
        </div>
      </section>
      <Contact />
    </main>
  );
}
