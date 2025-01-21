import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  csharp,
  dotnet,
  aws,
  azure,
  redis,
  rabbitmq,
  java,
  sql,
  nestjs,
  icbari,
  dia,
  crm,
  lib
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  // {
  //   title: "Web Developer",
  //   icon: web,
  // },
  // {
  //   title: "Backend Developer",
  //   icon: backend,
  // },
];

const technologies = [
  {
    name: ".NET",
    icon: dotnet,
  },
  // {
  //   name: "C#",
  //   icon: csharp,
  // },
  {
    name: "NestJS",
    icon: nestjs,
  },
  {
    name: "Redis",
    icon: redis,
  },
  {
    name: "RabbitMQ",
    icon: rabbitmq,
  },
  {
    name: "Azure",
    icon: azure,
  },
  {
    name: "AWS",
    icon: aws,
  },
  // {
  //   name: "Tailwind CSS",
  //   icon: tailwind,
  // },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "SQL",
    icon: sql,
  },
  // {
  //   name: "JavaScript",
  //   icon: javascript,
  // },
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
  {
    name: "React JS",
    icon: reactjs,
  },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  // {
  //   name: "Tailwind CSS",
  //   icon: tailwind,
  // },
  // {
  //   name: "Node JS",
  //   icon: nodejs,
  // },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Engineer",
    company_name: "Mandatory Health Insurance",
    icon: icbari,
    iconBg: "#383E56",
    date: "September 2023 - Current",
    points: [
      ' Collaborated with product owners, business analyst, frontend developers and UX/UI designers to enhance existing corporate digital solutions',
      'Built software (Microservices and APIs) for the car leasing initiative employing agile mindse',
      ' Worked on company’s ERP system for adding new features based on use cases',
      ' Designed detailed data reporting SQL procedures for KPI measurement ',
      'Built unit and integration tests for software'

    ],
  },
  {
    title: "IT Specialist",
    company_name: "Acamdemy of Public Administration",
    icon: dia,
    iconBg: "#E6DEDD",
    date: "Oct 2021 - Jun 2023",
    points: [
      "Implemented Session management functionality for monitoring and access limiting purposes",
      "Managed and optimized computer networks for peak performance and security",
      "Oversaw server operations, handling installations, configurations, and troubleshooting",
      "Conducted daily research on immersive technologies and tools",

    ],
  },
  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  // {
  //   testimonial:
  //     "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
  //   name: "Sara Lee",
  //   designation: "CFO",
  //   company: "Acme Co",
  //   image: "https://randomuser.me/api/portraits/women/4.jpg",
  // },
  // {
  //   testimonial:
  //     "I've never met a web developer who truly cares about their clients' success like Rick does.",
  //   name: "Chris Brown",
  //   designation: "COO",
  //   company: "DEF Corp",
  //   image: "https://randomuser.me/api/portraits/men/5.jpg",
  // },
  // {
  //   testimonial:
  //     "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
  //   name: "Lisa Wang",
  //   designation: "CTO",
  //   company: "456 Enterprises",
  //   image: "https://randomuser.me/api/portraits/women/6.jpg",
  // },
];

const projects = [
  {
    name: "Car leasing",
    description:
      "Reliably API based service for managing customer leasing requests via calling and updating their data on system," +
      "and both for the company and its partners.",
    tags: [
      {
        name: ".net",
        color: "violet-text-gradient",
      },
      {
        name: "PostgreSQL",
        color: "green-text-gradient",
      },
      {
        name: "docker",
        color: "blue-text-gradient",
      },
    ],
    image: carrent,
    // source_code_link: "https://github.com/",
  },
  {
    name: "Customer Relationship Management",
    description:
      "Web application that enables employees of sales department to engage with existing customers via calling, suggesting products and verifiying the sale",

    tags: [
      {
        name: "java",
        color: "orange-text-gradient",
      },
      {
        name: "oracle",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
    ],
    image: crm,
    source_code_link: "https://github.com/",
  },
  {
    name: "E-library",
    description:
      "Web based admin panel and user panel with viewing and reading, adding, updating and  deleting pdf, docs and" +
      + "other type of documents",
    tags: [
      {
        name: "NestJS",
        color: "red-text-gradient",
      },
      {
        name: "MSSQL",
        color: "silver-text-gradient",
      },
      {
        name: "MVC",
        color: "blue-text-gradient",
      },
    ],
    image: lib,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
