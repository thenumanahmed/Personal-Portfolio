import project1 from "../assets/projects/project-1.webp";
import project2 from "../assets/projects/project-2.webp";
import project3 from "../assets/projects/project-3.webp";
import project4 from "../assets/projects/project-4.webp";
import miniOS from "../assets/projects/OS_Simulator_home_page.jpg";
import chatappflutter from "../assets/projects/chat-app-flutter.jpg";

// export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 5 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

// export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const HERO_CONTENT = `I'm a passionate full-stack developer and recent Software Engineering graduate from UET Lahore. I specialize in building scalable web and mobile applications using the MERN stack and Flutter with Firebase. With hands-on experience in both client and server-side development, I aim to create impactful, user-focused solutions that blend functionality with performance.`;

export const ABOUT_TEXT = `I'm a dedicated full-stack and cross-platform mobile app developer with experience in React, Node.js, Flutter, and Firebase. From building real-time chat apps and AI-based invoice systems to deploying end-to-end quiz platforms, I enjoy turning ideas into intuitive, efficient applications. I thrive in collaborative environments, love solving real-world problems, and am always eager to explore new technologies and tools that push boundaries.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const PROJECTS = [
  {
    title: "Intelligent Invoice Management System",
    image: project4,
    description:
      "An AI-powered web app for extracting and validating invoice data using OCR (Tesseract) and YOLO. Built with Flask and deployed with a simple UI for uploading and searching invoices.",
    technologies: ["HTML", "CSS", "Flask", "Yolo-v8", "Tesseract", "Roboflow"],
  },
  {
    title: "Chat App - Realtime Messaging with Flutter & Firebase",
    image: chatappflutter,
    description:
      "A realtime messaging app built with Flutter and Firebase, featuring Google Authentication, image sharing via Firebase Storage, and push notifications using Firebase Cloud Messaging (FCM). Designed with smooth UI and responsive layouts for a seamless chat experience.",
    technologies: ["Flutter", "Firestore", "Firebase Storage"]
  },
  {
    title: "Urdu Chatbot - Punjab Khidmat Markaz",
    image: project2,
    description:
      "A conversational chatbot built using OpenAI and Langchain that answers questions in Urdu based on crawled data from Punjab Khidmat Markaz. Frontend built in React; backend powered by Python APIs.",
    technologies: ["Python", "OpenAI", "React", "Langchain"],
  },
  {
    title: "Mini Operating System",
    image: miniOS,
    description:
      "A desktop application simulating a basic OS with 15 utilities like calculator, image viewer, and text editor. Developed using C++ and Qt Creator(for frontend) with round-robin process scheduling.",
    technologies: ["C++", "QtCreator"], 
  },
  {
    title: "Bitcoin Price Prediction",
    image: project1,
    description:
      "A machine learning project that uses time-series data to predict Bitcoin trends. Implemented using TensorFlow and visualized with an interactive Streamlit dashboard.",
    technologies: ["Python", "Streamlit", "Timeseries Data", "Tensorflow"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
  }  
];

export const CONTACT = {
  address: "Lahore, Pakistan",
  phoneNo: "+93214978798",
  email: "numanahmedmail@gmail.com",
};
