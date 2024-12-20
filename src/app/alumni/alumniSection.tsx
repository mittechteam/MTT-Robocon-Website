import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function AlumniSection() {
  const alumni = [
    {
      quote:
        "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
      name: "Soham Patil",
      designation: "MS at RRC, IIITH, Hyderabad",
      src: "/alumni/Soham-Patil.jpg",
      linkedInSrc: "https://www.linkedin.com/in/sohampatil2560/",
    },
    {
      quote:
        "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
      name: "Siddhant Vaidya",
      designation: "Senior Quant Analyst, Pune",
      src: "/alumni/Siddhant-Vaidya.jpg",
      linkedInSrc: "https://www.linkedin.com/in/siddhant-vaidya/",
    },
    {
      quote:
        "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
      name: "Nishant Jain",
      designation: "Software Developer, Mumbai ",
      src: "/alumni/Nishant-Jain.jpg",
      linkedInSrc: "https://www.linkedin.com/in/nishant-jain01/",
    },
    {
      quote:
        "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
      name: "Paresh Chaudhary",
      designation: "Researcher at University of Washington, Seattle",
      src: "/alumni/Paresh-Chaudhary.jpg",
      linkedInSrc: "https://www.linkedin.com/in/pareshrchaudhary/",
    },
    {
      quote:
        "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
      name: "Akash Kulkarni",
      designation:
        "Master's in Robotic systems engineering at RWTH Aachen University, Germany",
      src: "/alumni/Akash-Kulkarni.jpg",
      linkedInSrc: "https://www.linkedin.com/in/akashkulkarni1998",
    },
    {
      quote:
        "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
      name: "Suman Mandal",
      designation: "Associate consultant at Oracle, Pune",
      src: "/alumni/Suman-Mandal.jpg",
      linkedInSrc: "http://linkedin.com/in/suman-mandal05",
    },
    {
      quote:
        "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
      name: "Yashas Shetty",
      designation: "Sr Electrical Engineer at Medtronic, New Haven",
      src: "/alumni/Yashas-Shetty.jpg",
      linkedInSrc: "https://www.linkedin.com/in/yashas-shetty-046858168/",
    },
  ];
  return <AnimatedTestimonials testimonials={alumni} autoplay />;
}
