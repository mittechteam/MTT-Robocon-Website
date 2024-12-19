import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function AlumniSection() {
  const alumni = [
    {
      quote:
        "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
      name: "Soham Patil",
      designation: "MS at RRC, IIITH, Hyderabad",
      src: "/team/Aditya P.jpg",
    },
    {
      quote:
        "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
      name: "Siddhant Vaidya",
      designation: "Quant Strategist, Pune",
      src: "/team/Rutu S.jpg",
    },
    {
      quote:
        "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
      name: "Nishant Jain",
      designation: "Software Developer, Mumbai ",
      src: "/team/Sujal B.jpg",
    },
    {
      quote:
        "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
      name: "Paresh Chaudhary",
      designation: "Researcher at University of Washington, Seattle",
      src: "/team/Rishit D.jpg",
    },
    {
      quote:
        "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
      name: "Akash Kulkarni",
      designation:
        "Master's in Robotic systems engineering at RWTH Aachen University, Germany",
      src: "/team/Rishit D.jpg",
    },
    {
      quote:
        "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
      name: "Suman Mandal",
      designation: "Associate consultant at Oracle, Pune",
      src: "/team/Rishit D.jpg",
    },
    {
      quote:
        "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
      name: "Yashas Shetty",
      designation: "Sr Electrical Engineer at Medtronic, New Haven",
      src: "/team/Rishit D.jpg",
    },
  ];
  return <AnimatedTestimonials testimonials={alumni} autoplay />;
}
