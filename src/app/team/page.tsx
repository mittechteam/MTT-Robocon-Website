"use client";
import React, { Suspense, useEffect, useState } from "react";
import Teams from "./teams";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useSearchParams } from "next/navigation";

const cards = [
  {
    description: "Faculty Mentor👨🏻‍🏫",
    title: "Prof Dr Saket Yeolekar",
    src: "/team/SRY.jpg",
    ctaLink: "https://www.linkedin.com/in/dr-saket-yeolekar-8137791b1/",
    content: () => {
      return (
        <p>
          Prof. Dr. Saket Yeolekar is an esteemed faculty mentor, bringing years
          of expertise to guide and inspire students. Known for his insightful
          research contributions and dedication to academic excellence, Dr.
          Yeolekar fosters a learning environment that encourages innovation and
          critical thinking. His mentorship empowers students to explore
          cutting-edge technologies and develop practical skills essential for
          success in the field.
        </p>
      );
    },
  },
  {
    description: "Captain🧑‍✈️ - Controls",
    title: "Jayesh Sangave",
    src: "/team/Jayesh S.jpg",
    ctaLink:
      "https://www.linkedin.com/in/jayesh-sangave-3643992a2/",
    content: () => {
      return (
        <p>
          Jayesh Sangave serves as the Vice Captain of his team, is an integral member of the MIT Tech Team&apos;s
          Controls Department, having joined in August 2023. A third-year BTech
          CSE student, he has a solid foundation in microcontrollers and
          embedded systems, contributing to both technical and operational
          aspects, including finance and management (F&M) for the club.
          Currently expanding his skill set in computer vision and ROS2, Jayesh
          is involved in various tech and non-tech initiatives, ensuring the
          team&apos;s smooth functioning. Alongside his passion for robotics and
          automation, he has a strong interest in game development, bringing a
          versatile approach to his role in the team.
        </p>
      );
    },
  },
  {
    description: "Vice-Captain👨‍✈️ - Controls",
    title: "Avnish Deshmukh",
    src: "/team/VIN_0376.JPG",
    ctaLink: "https://www.linkedin.com/in/avnish-deshmukh/",
    content: () => {
      return (
        <p>
          Avnish Deshmukh current Vice-Captain of the team and a third-year student. A robotics enthusiast passionate about electronics, coding, and
          mechanical design. know more about him at avnish2105.github.io.
        </p>
      );
    },
  },
  {
    description: "Circuits",
    title: "Om Gunjal",
    src: "/team/OM_GUNJAL.jpg",
    ctaLink: "https://www.linkedin.com/in/om-gunjal-77b035255/",
    content: () => {
      return (
        <p>
          Om Gunjal a final-year student, focusing on embedded
          systems and circuit design in the circuits department. In addition to
          his technical role, he manages the team’s finances and oversees
          non-technical operations, fostering collaboration among team members.
          His contributions play a vital role in ensuring the team remains on
          track to achieve its goals.

        </p>
      );
    },
  },
  {
    description: "Controls",
    title: "Harsh Chourasia",
    src: "/team/Harsh C.jpg",
    ctaLink: "https://www.linkedin.com/in/harsh-chourasia-608889281?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    content: () => {
      return (
        <p>
          A final-year Computer Science student, he is a
          skilled ROS developer with a solid foundation in autonomous robotics
          and embedded systems. As a member of the MIT Tech Team, he has played
          a crucial role in developing and deploying advanced robotic solutions,
          demonstrating expertise in ROS2, real-time navigation, and control
          interfaces. He also serves as the project and timeline manager for the
          team.

        </p>
      );
    },
  },
  {
    description: "Controls",
    title: "Rishit Darwade",
    src: "/team/Rishit D.jpg",
    ctaLink: "http://linkedin.com/in/rishit-darwade-64250229a",
    content: () => {
      return (
        <p>
          Rishit Darwade is a member of the control branch, specializing in
          embedded systems with practical experience in microcontrollers and
          hardware integration. His keen interest in electronics, mechanics, and
          programming robots drives his approach to robotics. Currently, he is
          advancing his robotics knowledge by mastering core concepts in ROS2,
          with a focus on developing autonomous systems. This expertise makes
          him an integral part of the team.
        </p>
      );
    },
  },
  {
    description: "Controls",
    title: "Amruta Panda",
    src: "/team/Amruta P.jpg",
    ctaLink: "https://www.linkedin.com/in/amruta-panda-700128288/",
    content: () => {
      return (
        <p>
          Contributing to tech innovation at Mit Tech Team by specializing in
          embedded systems and ROS integration, Amruta Panda values
          collaboration, creativity, and continuous learning. Currently pursuing
          her ECE(AI/ML) degree, she has created standout projects like a
          GPS-enabled IoT SOS system and an RFID keypad home security solution.
        </p>
      );
    },
  },
  {
    description: "Controls",
    title: "Danish Tapia",
    src: "/team/Danish T.JPG",
    ctaLink: "https://www.linkedin.com/in/danish-tapia/",
    content: () => {
      return (
        <p>
          Danish Tapia is a member of the control branch at MTT, currently
          working with ROS2. He mentors upcoming talent in robotics and served
          as the operator in 2024. He has worked on projects such as creating a
          custom Omni Pure Pursuit Controller for ROS2, developing a Micromouse
          navigation algorithm, and Research on Wheeled Odometry.
        </p>
      );
    },
  },
  {
    description: "Controls",
    title: "Jayesh Sangave",
    src: "/team/Jayesh S.jpg",
    ctaLink: "https://www.linkedin.com/in/jayesh-sangave-3643992a2/",
    content: () => {
      return (
        <p>
          Jayesh Sangave is an integral member of the MIT Tech Team&apos;s
          Controls Department, having joined in August 2023. A second-year BTech
          CSE student, he has a solid foundation in microcontrollers and
          embedded systems, contributing to both technical and operational
          aspects, including finance and management (F&M) for the club.
          Currently expanding his skill set in computer vision and ROS2, Jayesh
          is involved in various tech and non-tech initiatives, ensuring the
          team&apos;s smooth functioning. Alongside his passion for robotics and
          automation, he has a strong interest in game development, bringing a
          versatile approach to his role in the team.
        </p>
      );
    },
  },
  {
    description: "Controls",
    title: "Samyak Kharat",
    src: "/team/Samyak k .jpg",
    ctaLink: "https://www.linkedin.com/in/samyak-kharat-06a056250/",
    content: () => {
      return (
        <p>
          Samyak Kharat is a skilled ROS developer with a strong foundation in
          autonomous robotics and embedded systems. A member of the MIT Tech
          Team, he has played a crucial role in developing and deploying
          advanced robotic solutions, showcasing expertise in ROS2, real-time
          navigation, and control. His work includes integrating computer vision
          for object detection and tracking, contributing to the team&apos;s
          competitive edge.
        </p>
      );
    },
  },
  {
    description: "Circuits",
    title: "Hrishikesh Ghogle",
    src: "/team/Hrishikesh.jpg",
    ctaLink: "https://www.linkedin.com/in/hrishikesh-ghogle-1b8602247/",
    content: () => {
      return (
        <p>
          Hrishikesh Ghogle is an embedded circuit designer at MIT Tech Team,
          specializing in PCB design and embedded firmware. With a strong
          foundation in STM32 systems, Hrishikesh has developed custom PCBs,
          including an odometry system, and has extensive experience in
          communication protocols and embedded electronics.
        </p>
      );
    },
  },
  {
    description: "Circuits",
    title: "Sourabh Bhosale",
    src: "/team/SOURABH_BHOSALE.jpg",
    ctaLink: "https://www.linkedin.com/in/sourabh-bhosale-b13ab61a7/",
    content: () => {
      return (
        <p>
          Sourabh Bhosale is a embedded circuits developer, bringing expertise
          in embedded systems development, PCB designing, robotics systems, and
          automation. His technical skills contribute to high-quality outputs
          and advancements in the team’s projects. Sourabh’s dedication and
          precision play a key role in driving the team&apos;s success, ensuring
          smooth progress and effective collaboration.
        </p>
      );
    },
  },
  {
    description: "Circuits",
    title: "Aditya Naik",
    src: "/team/ADITYA_NAIK.jpg",
    ctaLink: "https://www.linkedin.com/in/aditya-naik-8b1874281/",
    content: () => {
      return (
        <p>
          Aditya is an embedded systems developer with the MIT Tech Team,
          specializing in PCB design, firmware development, and automation. He
          brings a deep understanding of embedded electronics, communication
          protocols, and robotics systems, combined with extensive experience in
          designing custom PCBs. Aditya&apos;s technical expertise and attention
          to detail contribute significantly to the team&apos;s innovation,
          driving high-quality results and ensuring seamless collaboration and
          progress in advanced projects.
        </p>
      );
    },
  },
  {
    description: "Circuits",
    title: "Shravani Pachpute",
    src: "/team/Shravani P.jpg",
    ctaLink: "https://www.linkedin.com/in/shravani-pachpute-6342492a1/",
    content: () => {
      return (
        <p>
          Shravani Pachpute is an embedded circuit designer with the MIT Tech
          Team, specializing in PCB design and firmware development. She brings
          extensive knowledge in creating custom PCBs and demonstrates strong
          proficiency in communication protocols and embedded electronics.
          Shravani&apos;s work reflects her dedication to precision and
          innovation in advanced circuit design.
        </p>
      );
    },
  },
  {
    description: "Mech",
    title: "Rutu Shirke",
    src: "/team/Rutu S.jpg",
    ctaLink: "https://www.linkedin.com/in/rutu-shirke-891b03318/",
    content: () => {
      return (
        <p>
          Rutu Shirke is a Robotics Engineering student with a deep-rooted
          passion for robotics and automation. As a proactive member of the MIT
          Tech Team, she has demonstrated expertise in CAD design and mechanical
          system integration. With hands-on experience in industrial
          manufacturing processes and simulations, Rutu has been pivotal in
          optimizing design frameworks that enhance the functionality and
          reliability of robotic systems. Her practical skills extend to
          utilizing cutting-edge software for 3D modeling and analyzing
          mechanical components, reflecting a blend of theoretical and applied
          knowledge. Driven by a commitment to innovation, Rutu is continually
          honing her technical acumen to contribute effectively to the
          advancement of robotics.
        </p>
      );
    },
  },
  {
    description: "Mech",
    title: "Vishweshwar Patil",
    src: "/team/Vishweshwar.jpg",
    ctaLink: "https://www.linkedin.com/in/vishweshwar-patil-10713824b/",
    content: () => {
      return (
        <p>
          Vishweshwar Patil is an accomplished mechanical engineer with
          expertise in robotic design and industrial automation. As a key member
          of the MIT Tech Team since 2022, he has made substantial contributions
          to robotic prototyping, design, and testing, particularly for Robocon
          competitions. Proficient in CAD design with SolidWorks, Vishweshwar
          has applied his skills to create robust and efficient mechanical
          systems, including a 2-wheeled odometry plane positioning system. His
          solid grasp of automation and precise design principles has been
          instrumental in advancing the team’s engineering projects,
          establishing him as a dependable innovator in the field of robotics
          and mechanical engineering.
        </p>
      );
    },
  },
  {
    description: "Circuits",
    title: "S.Balamurugan",
    src: "/team/Bala.JPG",
    ctaLink: "https://www.linkedin.com/in/s-balamurugan-11598531a/",
    content: () => {
      return (
        <p>
          S. Balamurugan is an integral member of the MIT Tech Team’s Circuits Department, having joined in August 2023. A second-year BTech student, he possesses a strong foundation in embedded systems, with hands-on experience in embedded programming using HAL drivers and register-level coding. He actively contributes to both technical and operational aspects of the team, including finance and management (F&M) for the club. In addition to his technical responsibilities, Bala is involved in various non-technical initiatives, ensuring the smooth functioning of the team. With a keen interest in robotics and automation, he brings a reliable and versatile approach to his role within the MIT Tech Team.

        </p>
      );
    },
  },
  {
    description: "Controls",
    title: "Shreeya Suresh",
    src: "/team/Shreeya.JPG",
    ctaLink: "https://www.linkedin.com/in/shreeya-suresh-2b92ab348/",
    content: () => {
      return (
        <p>
          Shreeya is a robotics enthusiast with a strong interest in perception and navigation systems. As a member of the MIT Tech Team, she has previously worked on computer vision and perception, focusing on depth estimation for real-time visual localization. She is familiar with ROS and continues to build her understanding of robotic software frameworks through ongoing learning and experimentation. On the embedded side, Shreeya works with sensors and actuators to implement navigation on STM32 microcontrollers, exploring different navigation algorithms and developing a custom Pure Pursuit implementation on an embedded environment. Driven by curiosity and hands-on learning, she enjoys tackling practical challenges in robotics and autonomous systems.
        </p>
      );
    },
  },
  {
    description: "Circuits",
    title: "Kishan Naik",
    src: "/team/Kishan.JPG",
    ctaLink: "https://www.linkedin.com/in/kishan-naik-b40b0632b/",
    content: () => {
      return (
        <p>
          Kishan Naik is an embedded circuit designer at the MIT Tech Team, 
          with a primary focus on PCB design and embedded firmware development.
           He has designed and developed a customized STM MCM board,
            demonstrating strong expertise in STM32-based systems and embedded electronics.
             In addition to his strong debugging skills, Kishan has hands-on experience with register-level coding,
              allowing for low-level system control and performance optimization. He also contributes to vendor management,
               playing a key role in coordinating with suppliers and streamlining procurement processes.
        </p>
      );
    },
  },
  {
    description: "Non-Tech",
    title: "Vedant Pawar",
    src: "/team/Vedant.JPG",
    ctaLink: "https://www.linkedin.com/in/vedantpawar15/",
    content: () => {
      return (
        <p>
          Vedant Pawar serves as the Head of the Non-Technical Team at MTT, leading strategic planning, branding, outreach, sponsorship coordination, and overall team operations beyond the technical domain. As a third-year student, he ensures seamless execution of events, communications, and team representation. Alongside his leadership responsibilities, he also contributes as the team’s Video Editor, creatively documenting MTT’s journey and milestones while strengthening its digital presence.
        </p>
      );
    },
  },
  {
    description: "Non-Tech",
    title: "Swapnaja Magarde",
    src: "/team/Swapnaja_id.jpg",
    ctaLink: "https://www.linkedin.com/in/swapnaja-magarde-653a98226/",
    content: () => {
      return (
        <p>
          Swapnaja Magarde is a member of MTT&apos;s non-technical team, serving
          as a web-designer.
        </p>
      );
    },
  },
  {
    description: "Non-Tech",
    title: "Harshada Gaikwad",
    src: "/team/Harshada.jpg",
    ctaLink: "https://www.linkedin.com/in/harshadavilasraogaikwad/",
    content: () => {
      return (
        <p>
          Harshada Gaikwad 3nd year BTECH student works in events management,
          helping with sponsorships and supporting the team at various events
          and workshops.
        </p>
      );
    },
  },
  {
    description: "Non-Tech",
    title: "Manasee Ambhore",
    src: "/team/Manasee.jpg",
    ctaLink: "https://www.linkedin.com/in/manasee-ambhore-87ab65287/",
    content: () => {
      return (
        <p>
          Manasee Ambhore a 3nd year BTECH student works in events management, providing the team various non-technical support.

        </p>
      );
    },
  },
];

const batchOptions = [
  { value: "2024-25", label: "2024–25 Batch" },
  { value: "2025-26", label: "2025–26 Batch" },
] as const;

type BatchValue = (typeof batchOptions)[number]["value"];

const batchCards: Record<BatchValue, typeof cards> = {
  "2024-25": cards.filter((c) => c.title !== "Aaditya Patil"),
  "2025-26": [
    ...cards
      .filter((card) => {
        const removed = new Set([
          "Rameshwar Patil",
          "Aaditya Patil",
          "Sujal Bafna",
          "Piyusha Patil",
          "Shreeya Suresh",
          "Kishan Naik",
          "S.Balamurugan",
          "Manasee Ambhore",
        ]);
        return !removed.has(card.title);
      })
      .map((card) => {
        if (card.title === "Jayesh Sangave") {
          return { ...card, description: "Captain🧑‍✈️ - Controls" };
        }
        if (card.title === "Avnish Deshmukh") {
          return { ...card, description: "Vice-Captain👨‍✈️ - Controls" };
        }
        if (card.title === "Om Gunjal") {
          return {
            ...card,
            description: "Circuits",
            content: () => {
              return (
                <p>
                  Om Gunjal focuses on embedded systems and circuit design in
                  the circuits department. In addition to his technical role, he
                  manages the team’s finances and oversees non-technical
                  operations, fostering collaboration among team members. His
                  contributions play a vital role in ensuring the team remains
                  on track to achieve its goals.
                </p>
              );
            },
          };
        }
        if (card.title === "Harsh Chourasia") {
          return {
            ...card,
            description: "Controls",
            content: () => {
              return (
                <p>
                  A third-year Computer Science student, he is a skilled ROS
                  developer with a solid foundation in autonomous robotics and
                  embedded systems. As a member of the MIT Tech Team, he has
                  played a crucial role in developing and deploying advanced
                  robotic solutions, demonstrating expertise in ROS2, real-time
                  navigation, and control interfaces. He also contributes as a
                  project and timeline manager for the team.
                </p>
              );
            },
          };
        }
        return card;
      }),
    {
      description: "Controls",
      title: "Shreeya Suresh",
      src: "/team/Shreeya.JPG",
      ctaLink: "https://www.linkedin.com/in/shreeya-suresh-2b92ab348/",
      content: () => {
        return (
          <p>
            Shreeya is a robotics enthusiast with a strong interest in
            perception and navigation systems. As a member of the MIT Tech Team,
            she has previously worked on computer vision and perception,
            focusing on depth estimation for real-time visual localization. She
            is familiar with ROS and continues to build her understanding of
            robotic software frameworks through ongoing learning and
            experimentation. On the embedded side, Shreeya works with sensors
            and actuators to implement navigation on STM32 microcontrollers,
            exploring different navigation algorithms and developing a custom
            Pure Pursuit implementation on an embedded environment.
          </p>
        );
      },
    },
    {
      description: "Circuits",
      title: "Kishan Naik",
      src: "/team/Kishan.JPG",
      ctaLink: "https://www.linkedin.com/in/kishan-naik-b40b0632b/",
      content: () => {
        return (
          <p>
            Kishan Naik is an embedded circuit designer at the MIT Tech Team,
            with a primary focus on PCB design and embedded firmware
            development. He has designed and developed a customized STM MCM
            board, demonstrating strong expertise in STM32-based systems and
            embedded electronics. In addition to his strong debugging skills,
            Kishan has hands-on experience with register-level coding, allowing
            for low-level system control and performance optimization. He also
            contributes to vendor management, playing a key role in coordinating
            with suppliers and streamlining procurement processes.
          </p>
        );
      },
    },
    {
      description: "Circuits",
      title: "S. Balamurugan",
      src: "/team/Bala.JPG",
      ctaLink: "https://www.linkedin.com/in/s-balamurugan-11598531a/",
      content: () => {
        return (
          <p>
            S. Balamurugan is an integral member of the MIT Tech Team’s Circuits
            Department, having joined in August 2023. A second-year BTech
            student, he possesses a strong foundation in embedded systems, with
            hands-on experience in embedded programming using HAL drivers and
            register-level coding. He actively contributes to both technical and
            operational aspects of the team, including finance and management
            (F&amp;M) for the club. In addition to his technical
            responsibilities, Bala is involved in various non-technical
            initiatives, ensuring the smooth functioning of the team. With a
            keen interest in robotics and automation, he brings a reliable and
            versatile approach to his role within the MIT Tech Team.
          </p>
        );
      },
    },
    {
      description: "Non-Tech",
      title: "Manasee Ambhore",
      src: "/team/Manasee.jpg",
      ctaLink: "https://www.linkedin.com/in/manasee-ambhore-87ab65287/",
      content: () => {
        return (
          <p>
            Manasee Ambhore, a 3rd year BTECH student, works in events
            management, providing the team various non-technical support.
          </p>
        );
      },
    },
  ],
};

const TeamPageContent = () => {
  const searchParams = useSearchParams();
  const [selectedBatch, setSelectedBatch] = useState<BatchValue>("2024-25");

  useEffect(() => {
    const batch = searchParams.get("batch");
    if (batch === "2024-25" || batch === "2025-26") {
      setSelectedBatch(batch);
    }
  }, [searchParams]);

  const currentCards = batchCards[selectedBatch];

  return (
    <div className="max-w-7xl mx-auto py-32 px-4 md:px-8 lg:px-10">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <div>
          <h2 className="text-4xl lg:text-5xl font-semibold mb-4 text-[#c73808]">
            Meet Our Team 👏
          </h2>
          <p className="text-white dark:text-neutral-300 text-sm md:text-base max-w-2xl text-justify">
            Our team is a group of dedicated individuals who are passionate about
            their work.
          </p>
        </div>
        <div className="w-full md:w-64">
          <Select
            value={selectedBatch}
            onValueChange={(value) => setSelectedBatch(value as BatchValue)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select batch" />
            </SelectTrigger>
            <SelectContent>
              {batchOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {currentCards.length > 0 ? (
        <Teams key={selectedBatch} cards={currentCards} />
      ) : (
        <div className="mt-16 text-white dark:text-neutral-300 text-sm md:text-base">
          Team details for the selected batch will be added soon.
        </div>
      )}
    </div>
  );
};

const Page = () => {
  return (
    <Suspense
      fallback={
        <div className="max-w-7xl mx-auto py-32 px-4 md:px-8 lg:px-10 text-white dark:text-neutral-300">
          Loading team...
        </div>
      }
    >
      <TeamPageContent />
    </Suspense>
  );
};

export default Page;
