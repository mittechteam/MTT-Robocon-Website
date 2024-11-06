"use client";
import React from "react";
import Teams from "./teams";

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
    title: "Harsh Chourasia",
    src: "/team/Harsh C.jpg",
    ctaLink:
      "https://www.linkedin.com/in/harsh-chourasia-608889281?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    content: () => {
      return (
        <p>
          Captain of the team and a third-year Computer Science student, he is a
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
    description: "Vice-Captain👨‍✈️ - Circuits",
    title: "Om Gunjal",
    src: "/team/OM_GUNJAL.jpg",
    ctaLink: "https://www.linkedin.com/in/om-gunjal-77b035255/",
    content: () => {
      return (
        <p>
          Om Gunjal serves as the Vice Captain of his team, focusing on embedded
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
    title: "Aishwarya Godse",
    src: "/team/Aishwarya G .jpg",
    ctaLink: "https://www.linkedin.com/in/aishwarya-godse-73ba28234/",
    content: () => {
      return (
        <p>
          Aishwarya Godse is an Electrical and Computer Engineering student
          focused on robotics and embedded systems. As a member of the Controls
          Department, she has developed embedded code for robot navigation and
          mechanism control and is currently advancing her skills in ROS2. With
          experience in competition analytics, Aishwarya is dedicated to
          excelling in robotics and leaving a positive impact, particularly in
          traditionally male-dominated fields.
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
    title: "Himadri Rajput",
    src: "/team/Himadri.jpg",
    ctaLink: "",
    content: () => {
      return (
        <p>
          Himadri Rajput, a Robocon team member, excels in embedded systems
          coding, where her skills in microcontroller programming, learning ros
          and its core concepts and firmware development make her a key
          contributor to the team&apos;s technical innovation.
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
    description: "Controls",
    title: "Avnish Deshmukh",
    src: "/team/VIN_0376.JPG",
    ctaLink: "https://www.linkedin.com/in/avnish-deshmukh/",
    content: () => {
      return (
        <p>
          A robotics enthusiast passionate about electronics, coding, and
          mechanical design. know more about him at avnish2105.github.io.
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
    description: "Circuits",
    title: "Sujal Bafna",
    src: "/team/Sujal B.jpg",
    ctaLink: "https://www.linkedin.com/in/sujal-bafna-884a8722b/",
    content: () => {
      return (
        <p>
          Sujal Bafna is a final-year Electronics and Communication Engineering
          student who has been an active and dedicated member of the club since
          his second year. His role as an embedded circuits developer has
          showcased his expertise in embedded systems, PCB design, robotics
          systems, and automation. Sujal&apos;s contributions were instrumental
          in the team&apos;s achievement of an AIR 3 at DD Robocon 2024
          competition. Known for his diligence, and forward-thinking approach,
          Sujal is driven by a clear vision to advance the team&apos;s
          capabilities, foster innovation, and support the growth of robotics
          and automation.
        </p>
      );
    },
  },
  {
    description: "Mech",
    title: "Aaditya Patil",
    src: "/team/Aditya P.jpg",
    ctaLink: "https://www.linkedin.com/in/aaditya-patil-300444246/",
    content: () => {
      return (
        <p>
          Aaditya Patil, a Second Year robotics engineering student, is skilled
          in CAD design, mechanical system integration, and industrial
          manufacturing. As a proactive MIT Tech Team member, he applies
          hands-on expertise in manufacturing processes , optimizing designs to
          improve robot&apos;s reliability. Aaditya&apos;s proficiency in 3D
          modeling and component analysis showcases his practical and
          theoretical knowledge, demonstrating his dedication to pushing the
          boundaries of robotics
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
    description: "Mech",
    title: "Rameshwar Patil",
    src: "/team/Rameshwar Patil.jpg",
    ctaLink: "https://www.linkedin.com/in/rameshwar-patil-0000000002/",
    content: () => {
      return (
        <p>
          Rameshwar Patil is a final-year Robotics and Automation Engineering
          student and a former Vice Captain of the MIT Tech Team. Since joining
          in his first year, he progressed from a supportive member honing his
          skills to a core contributor, actively designing, prototyping, and
          testing robots. As the manual operator at Robocon 2023, he
          demonstrated his capabilities under pressure contributing to AIR2 in
          2023. In his third year, Rameshwar led the team as Vice Captain,
          blending design and programming expertise, which was pivotal in
          securing AIR3 in DD Robocon 2024. Known for his strategic mindset,
          he&apos;s driven to push robotics innovation forward.
        </p>
      );
    },
  },
  {
    description: "Non-Tech",
    title: "Piyusha Patil",
    src: "/team/Piyusha Patil.jpg",
    ctaLink: "https://www.linkedin.com/in/piyusha-patil-5b2254267/",
    content: () => {
      return (
        <p>
          Piyusha Patil is a content writer who contributes to the non-technical
          part of the team. She works with documentation, drafting, social media
          & marketing of the team, and serves as a support to the technical team
          at several events and workshops.
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
    title: "Vedant Pawar",
    src: "/team/Vedant Pawar ID.png",
    ctaLink: "https://www.linkedin.com/in/vedantpawar15/",
    content: () => {
      return (
        <p>
          Vedant Pawar is a member of the non-technical team of MTT, serving as
          the official video editor. With a keen eye for detail and a flair for
          storytelling, they expertly capture the essence of the team&apos;s
          hard work, dedication, and spirit. As a second-year student, they
          bring both creativity and technical precision to every video project,
          showcasing the team&apos;s journey and accomplishments in a way that
          resonates with audiences.
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
          Harshada Gaikwad 2nd year BTECH student works in events management,
          helping with sponsorships and supporting the team at various events
          and workshops.
        </p>
      );
    },
  },
];

const page = () => {
  return (
    <div className="max-w-7xl mx-auto pt-48 px-4 md:px-8 lg:px-10">
      <h2 className="text-5xl font-semibold px-24 mb-4 text-[#c73808]">
        Meet Our Team 👏
      </h2>
      <p className="text-white px-24 text-sm md:text-base  mb-10 text-justify">
        Our team is a group of dedicated individuals who are passionate about
        their work.
      </p>
      <Teams cards={cards} />
    </div>
  );
};

export default page;
