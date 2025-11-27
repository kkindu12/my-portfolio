import { path } from "motion/react-client";

export const myProjects = [
  {
    id: 1,
    title: "Medicare",
    description:
      "Web Application",
    subDescription: [
      "Role: Full-Stack Developer",
      "Background: Developed a comprehensive hospital management system to efficiently manage patient records, appointments and medical data. Implemented a structured database design to ensure optimized hospital operations and accurate data management. Integrated an AI-powered chatbot to assist patients by answering health-related questions, guiding appointment bookings, and providing personalized medical instructions.",
      "Tech Stack: Angular, HTML, CSS, Tailwind CSS, JS, Fast API, MongoDB, Python , OpenAI API",
      
    ],
    href: "",
    logo: "",
    image: "/assets/projects/games/medicare.jpg",
    tags: [
      {
        id: 1,
        name: "Angular",
        path: "/assets/logos/unity.svg",
      },
      {
        id: 2,
        name: "Fast API",
        path: "/assets/logos/csharp.svg",
      },
      {
        id: 3,
        name: "MongoDB",
        path: "/assets/logos/mongo.png",
      },
    ],
  },
  {
    id: 2,
    title: "Coffee Ceylon",
    description: "Web Application",
    subDescription: [
      "Role: Full-Stack Developer",
      "Background: Created a modern specialty café platform concept focusing onfreshly roasted, ethically sourced coffee, sustainability, and enhanced customerexperience.",
      "Tech Stack: Angular, HTML, CSS, JavaScript, TypeScript, Node.js, MongoDB,Postman",
    
    ],
    href: "",
    logo: "",
    image: "/assets/projects/games/coffee.jpg",
    tags: [
      {
        id: 1,
        name: "Angular",
        path: "/assets/logos/angular.png",
      },
      {
        id: 2,
        name: "Node.js",
        path: "/assets/logos/node.jpg",
      },
      {
        id: 3,
        name: "MongoDB",
        path: "/assets/logos/mongo.png",
      },
    ],
  },
  {
    id: 3,
    title: "Student Management System",
    description: "Web Application",
    subDescription: [
      "Role: Full-Stack Developer.",
      "Background: Built a student registration system to streamline data management,enabling efficient registration, record updates, and retrieval through a secure anduser-friendly interface. Contributed to both front-end and back-end development.",
      "Tech Stack: PHP, Laravel, MySQL",
      
    ],
    href: "",
    logo: "",
    image: "/assets/projects/games/student.jpeg",
    tags: [
      {
        id: 1,
        name: "PHP",
        path: "/assets/logos/php.svg",
      },
      {
        id: 2,
        name: "Laravel",
        path: "/assets/logos/laraval.png",
      },
      {
        id: 3,
        name: "Mysql",
        path: "/assets/logos/my.png",
      },
    ],
  },
  {
    id: 4,
    title: "Staff Leave Management System",
    description: "Mobile Application",
    subDescription: [
      "Role: Mobile App Developer",
      "Background: Designed and developed a digital leave management system to streamline student and teacher leave requests, approvals, and record management.",
      "Tech Stack: Flutter, Dart, Firebase",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/games/slv.png",
    tags: [
      {
        id: 1,
        name: "Flutter",
        path: "/assets/logos/flutter.jpg",
      },
      {
        id: 2,
        name: "Dart",
        path: "/assets/logos/dart.png",
      },
      {
        id: 3,
        name: "Firebase",
        path: "/assets/logos/social.png",
      },
    ],
  },
  {
    id: 5,
    title: "CI/CD Final Project",
    description: "A simple platformer game built in Unity where the player must keep moving forward without falling.",
    subDescription: [
      "Developed in Unity with C# focusing on smooth forward movement and platforming mechanics.",
      "Designed challenging platforms that test timing and precision as the player progresses.",
      "Optimized controls and physics for a responsive and seamless gameplay experience.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/games/devops.png",
    tags: [
      {
        id: 1,
        name: "Github Actions",
        path: "/assets/logos/github.svg",
      },
      {
        id: 2,
        name: "Python",
        path: "/assets/logos/python.svg",
      },
      {
        id: 3,
        name: "Docker",
        path: "/assets/logos/docker.svg",
      },
    ],
  },
  {
    id: 6,
    title: "Serverless Todo Application on AWS",
    description: "Cloud Project",
    subDescription: [
      "Role: Cloud Engineer",
      "Background: Developed and deployed a serverless task management app on AWS using Lambda, API Gateway, DynamoDB, and S3, implementing RESTful APIs for CRUD operations and ensuring high availability, scalability, and cost efficiency through Infrastructure as Code (IaC) practices.",
      "Tech Stack: AWS Lambda, API Gateway, DynamoDB, S3, IAM, CloudFormation, Python, YAML",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/AI/aws.jpg",
    tags: [
      {
        id: 1,
        name: "AWS Lambda",
        path: "/assets/logos/python.svg",
      },
      {
        id: 2,
        name: "API Gateway", 
        path: "/assets/logos/aws.jpg",
      },
      {
        id:3,
        name:"Python",
        path:"/assets/logos/db.jpg",
      },
    ],
  },
  {
    id: 7,
    title: "AI Resume Analyzer",
    description: "Web Project",
    subDescription: [
      "Role: Web Developer",
      "Background: Developed an AI-powered resume analyzer web application that evaluates resumes, provides skill matching, and generates suggestions using OpenAI’s API. Implemented a full-stack solution with Angular for the frontend, Node.js for the backend, and MongoDB for storing user data, ensuring seamless user experience and real-time analysis.",
      "Tech Stack: Angular, Node.js, Express.js, MongoDB, OpenAI API, HTML, CSS, JavaScript, RESTful APIs",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/AI/resume.png",
    tags: [
      {
        id: 1,
        name: "Angular",
        path: "/assets/logos/angular.png",
      },
      {
        id: 2,
        name: "Node.js", 
        path: "/assets/logos/node.png",
      },
      {
        id:3,
        name:"OpenAI",
        path:"/assets/logos/openai.png",
      },
    ],
  },

];

export const mySocials = [
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/akhila-induwara-008967302/",
    icon: "/assets/socials/linkedIn.svg",
  },
  {
    name: "GitHub",
    href: "https://github.com/kkindu12/",
    icon: "/assets/socials/github.svg",
  },
];

export const experiences = [
  {
    title: "Committee Member",
    job: "IEEE Computer Society – Sabaragamuwa University of Sri Lanka",
    date: "2025",
    contents: [
      "As a committee member of the IEEE Computer Society Chapter, I actively supported the planning and execution of chapter activities, workshops, and technical events aimed at enhancing computer science knowledge among undergraduates.",
      "I collaborated closely with the executive committee to help organize technical talks, coding competitions, and hands-on sessions that encouraged skill development and industry exposure.",
      
      "I contributed to member engagement by coordinating communication, assisting in event logistics, and helping connect students with IEEE resources and professionals. Through these efforts, I helped promote research participation, open-source involvement, and broader student engagement in IEEE initiatives and community outreach programs.",
    ],
  },
  {
    title: "Presenter",
    job: "Codefest 2025 & 2024",
    date: "",
    contents: [
      "Selected as a finalist in the NETCOM Hackathon, demonstrating strong problem-solving skills, teamwork, and innovative thinking under time-bound challenges.",
      "Developed a functional prototype addressing real-world networking or communication-related problems using modern technologies and best engineering practices.",
      "Collaborated effectively with a multidisciplinary team and presented the solution clearly to judges and industry professionals.",
      
    ],
  },
 
];
export const reviews = [
  {
    name: "",
    username: "",
    body: "",
    img: "/assets/Certificates/api.jfif",
  },
  {
    name: "",
    username: "",
    body: "",
    img: "/assets/Certificates/ballerina.jfif",
  },
  {
    name: "",
    username: "",
    body: "",
    img: "/assets/Certificates/cicd.jfif",
  },
  {
    name: "",
    username: "",
    body: "",
    img: "/assets/Certificates/devops.jpeg",
  },
  {
    name: "",
    username: "",
    body: "",
    img: "/assets/Certificates/netcom1.jpeg",
  },
  {
    name: "",
    username: "",
    body: "",
    img: "/assets/Certificates/netcom2.jpeg",
  },
  {
    name: "",
    username: "",
    body: "",
    img: "/assets/badges/ai.jpg",
  },
  {
    name: "",
    username: "",
    body: "",
    img: "/assets/badges/gle.jpg",
  },

  
];
