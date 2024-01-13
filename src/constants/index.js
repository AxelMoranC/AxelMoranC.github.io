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
    {
      title: "Full-Stack Web Developer",
      icon: web,
    },
    {
      title: "Backend Developer",
      icon: mobile,
    },
    {
      title: "Collaborative Developer",
      icon: backend,
    },
    {
      title: "Hackathon Enthusiast",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "Java",
      icon: redux,
    },
    {
      name: "Python",
      icon: nodejs,
    },
    {
      name: "docker",
      icon: docker,
    },
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
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
    {
      name: "figma",
      icon: figma,
    },
  ];
  
  const experiences = [
    {
      title: "Technical Support Specialist",
      company_name: "Vuwall Technology Inc.",
      icon: starbucks,
      iconBg: "#383E56",
      date: "September 2023 - December 2023",
      points: [
        "Collaborated with software quality assurance (SQA) personnel in conducting extensive testing.",
        "Actively involved in testing new software builds against different test cycles, including Zypher Scale testing.",
        "Recording identified bugs and new features associated with the new builds.",
        "Contributed to the decision-making process for selecting automation tools for browser end to end testing.",
      ],
    },
    {
      title: "Administrative Clerk",
      company_name: "	McGill University Health Centre",
      icon: tesla,
      iconBg: "#383E56",
      date: "May 2022 - August 2023",
      points: [
        "Scheduling appointments for patients to get tested for COVID-19.",
        "Collecting and processing patient information and data using electronic medical records systems.",
        "Answering phone calls/emails from patients and their families, providing information, and addressing concerns.",
        "Coordinating with medical staff to ensure patients are properly set up and prepared for testing.",
      ],
    },
    {
      title: "Aide de Service",
      company_name: "McGill University Health Centrefy",
      icon: tesla,
      iconBg: "#383E56",
      date: "December 2020 - April 2022",
      points: [
        "Assisting patients with daily activities.",
        "Cleaning and maintaining patient's rooms, equipment, and other hospital areas to ensure a safe and sanitary environment.",
        "Providing support to doctors and nurses by delivering supplies and equipment, taking vital signs, and performing other tasks as needed.",
        "Communicating with patients and their families to provide information.",
      ],
    },
    // add more experiences here with other { brackets with info inside like previous}
  ];
  
  const testimonials = [
    {
      testimonial:
        "Excellent and hard working person, always willing to learn and expand his skills.",
      name: "Fabiola Cajero Silva",
      designation: "Operations Manager ",
      company: "Vuwall Technology Inc.",
      image: starbucks,
    },
    {
      testimonial:
        "I've never met a student as motivated to work on new projects and help out in teamwork setting.",
      name: "David Zhao",
      designation: "Undergraduate of Computer Science & Stats",
      company: "Mcgill University",
      image: meta,
    },
    {
      testimonial:
        "Best Hackathon teammates ever!!",
      name: "Eloise Freydier",
      designation: "Undergraduate of Computer Science & Math",
      company: "Mcgill University",
      image: meta,
    },
  ];
  
  const projects = [
    {
      name: "Movie Review App",
      description:
        "Created a REST API powered by Spring Boot and a website built with React that displays movies in a slideshow format and allows users to write reviews about each movie.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "Java",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/AxelMoranC/MovieReviewApp",
    },
    {
      name: "Wise Wallet",
      description:
        "Built a receipt scanning and expense tracking tool during a hackathon. Contributed to the development of the back end using Java and Tesseract library OCR to extract text from images. ",
      tags: [
        {
          name: "Java",
          color: "blue-text-gradient",
        },
        {
          name: "Tesseract",
          color: "green-text-gradient",
        },
        {
          name: "HTML",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/AxelMoranC/ConUHacks",
    },
    {
      name: "Library Book Archive Catalog",
      description:
        "Cleaned and organized a book archive's data and created a console-based menu system for user accessibility. Applied OOP concepts such as binary file handling and exception handling in the development.",
      tags: [
        {
          name: "Java",
          color: "blue-text-gradient",
        },
        {
          name: "File IO",
          color: "green-text-gradient",
        },
        {
          name: "OOP",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/AxelMoranC",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };