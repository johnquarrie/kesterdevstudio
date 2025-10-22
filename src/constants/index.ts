import { IoLogoInstagram } from "react-icons/io5";
import { FaXTwitter, FaYoutube } from "react-icons/fa6";
// import { FaLinkedinIn, FaXTwitter, FaYoutube } from "react-icons/fa6";
import { BiLogoFacebook } from "react-icons/bi";
import images from "@/public/images";

export const navLinks = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Portfolio",
    href: "/portfolio",
  },
];

export const network_images = [
  { src: "/images/icons/BV.svg", alt: "Logo 1" },
  { src: "/images/icons/ZENITH.svg", alt: "Logo 2" },
  { src: "/images/icons/SLIBR.svg", alt: "Logo 3" },
  { src: "/images/icons/CRISP.svg", alt: "Logo 4" },
  { src: "/images/icons/FANPAGE.svg", alt: "Logo 5" },
  { src: "/images/icons/NEXUS.svg", alt: "Logo 6" },
];

export const services = [
  {
    title: "Web Development",
    description:
      "We build fast, responsive, and scalable websites that do more than look good, they perform. Whether it's a sleek landing page or a complex platform, our sites are designed to impress and built to last.",
    image: "/images/services/web_dev.jpg",
  },
  {
    title: "2D/3D Animation",
    description:
      "We bring stories to life with dynamic 2D and 3D animations. From characters to explainer videos to full environments, our animations add depth, emotion, and energy to every project.",
    image: "/images/services/animation.jpg",
  },
  {
    title: "App Development",
    description:
      "We turn ideas into powerful mobile and desktop apps, built for performance, designed for people. Whether it’s iOS, Android, or cross-platform, we craft apps that stand out and scale.",
    image: "/images/services/app.jpg",
  },
  {
    title: "UI/UX Design",
    description:
      "We design digital experiences that feel natural and look stunning. From user flows to final interfaces, we make sure every click, scroll, and tap feels effortless — and unforgettable.",
    image: "/images/services/ui.jpg",
  },
  {
    title: "Web3 & Blockchain",
    description:
      "We help you tap into the decentralized future. From smart contracts to NFT platforms and dApps, we build secure, scalable blockchain solutions that push boundaries and create real value.",
    image: "/images/services/web3.jpg",
  },
  {
    title: "Game Development",
    description:
      "From concept to code, we create engaging games that entertain, challenge, and captivate. Whether it's 2D or 3D, mobile or desktop, we build worlds players love to explore.",
    image: "/images/services/game.jpg",
  },
];

export const testimonials = [
  {
    name: "Sarah Clumps",
    position: "Business Owner, Clumps Kitchen",
    rating: 5,
    image: "/images/testimonials/test2.jpg",
    statement:
      "“Kester Dev Studios brought our vision to life better than we imagined. The design, the animations, the flow, everything was top-tier. Smooth process throughout.”",
  },
  {
    name: "Samuel Dormandy",
    position: "CEO, Fimex Group",
    rating: 5,
    image: "/images/testimonials/test1.jpg",
    statement:
      "“They built our app, our website, and even custom 3D elements. The quality and attention to detail were incredible. Will definitely work with them again.”",
  },
  {
    name: "Ashley West",
    position: "Product Manager, Canty Co.",
    rating: 4,
    image: "/images/testimonials/test3.jpg",
    statement:
      "“We needed a full-stack team that could handle both design and development, and Kester delivered. Creative, professional, and fast. Highly recommend.”",
  },
];

export const team = [
  {
    name: "Kester Adeyelu",
    role: "CTO, 3D Expert & Dev",
    image: "/images/crew/kester.png",
  },
  {
    name: "Olajitan Iretomiwa",
    role: "Product Designer/ Wordpress Designer",
    image: "/images/crew/tommy.jpg",
  },
  // {
  //   name: "Opia Precious",
  //   role: "Senior Fullstack Developer",
  //   image: "/images/crew/opia.jpg",
  // },
  {
    name: "John Quarrie",
    role: "Senior Full Stack Blockchain Developer",
    image: "/images/crew/john.jpg",
  },
  {
    name: "Ibironke Marvelous",
    role: "2D Artist and Animator",
    image: "/images/crew/marv.jpg",
  },
  {
    name: "Kimson Osaghae",
    role: "Lead 2D Generalist",
    image: "/images/crew/kimson.jpg",
  },
];

export const reasons = [
  {
    title: "All-in-One",
    description:
      "From apps and games to web, AI, blockchain, and animation, we handle it all in one place, so you don’t need to coordinate multiple teams.",
    icon: "/images/icons/all-in-one.svg",
  },
  {
    title: "Creative & Technical",
    description:
      "We mix strong visual design with expert development to build digital products that look amazing and work perfectly.",
    icon: "/images/icons/c-a-t.svg",
  },
  {
    title: "Custom-Built",
    description:
      "Every project is made from scratch to match your brand, goals, and audience, no shortcuts, no copy-paste work.",
    icon: "/images/icons/c-b.svg",
  },
  {
    title: "Impact-Driven",
    description:
      "We focus on results. Whether it’s engaging users or solving real problems, we create work that makes a difference.",
    icon: "/images/icons/i-d.svg",
  },
];

export const faqs = [
  {
    question: "Can you handle both design and development for my project?",
    answer:
      "Yes, we offer full-cycle product development including UI/UX design, frontend & backend development, and deployment. You can work with us for the entire project or specific parts.",
  },
  {
    question:
      "Do you build games from scratch or only help with certain parts?",
    answer:
      "We do both. We can build a complete game from concept to launch or assist with specific components like game design, development, UI, or backend services.",
  },
  {
    question: "How long does a typical project take to complete?",
    answer:
      "The timeline depends on the project scope and complexity. Most projects take between 4 to 12 weeks, but larger projects may take longer.",
  },
  {
    question:
      "Do you work with startups, individuals, or only large companies?",
    answer:
      "We work with startups, solo entrepreneurs, small businesses, and large enterprises. Every project, regardless of size, receives the same level of dedication and expertise.",
  },
  {
    question:
      "Do you offer ongoing support or maintenance after a project is done?",
    answer:
      "Yes, we provide ongoing support, bug fixes, performance monitoring, and feature updates after your project goes live to ensure long-term success.",
  },
  {
    question: "What is your process for starting a new project?",
    answer:
      "Our process includes an initial consultation, project discovery, requirement gathering, design prototypes, iterative development, testing, and deployment. We keep you involved every step of the way.",
  },
];

export const tags = [
  "games",
  "apps",
  "web",
  "ai & bots",
  "web3 & blockchain",
  "software",
  "2d/3d design",
  "modeling & animation",
];

export const socials = [
  // {
  //   icon: IoLogoTiktok,
  //   url: "#",
  // },
  {
    icon: IoLogoInstagram,
    url: "https://www.instagram.com/kesterstudios",
  },
  {
    icon: FaXTwitter,
    url: "https://x.com/kester2danim",
  },
  {
    icon: BiLogoFacebook,
    url: "https://www.facebook.com/kesterstudios",
  },
  {
    icon: FaYoutube,
    url: "https://youtube.com/@kesterstudio",
  },
  // {
  //   icon: FaLinkedinIn,
  //   url: "https://www.linkedin.com/company/kester-studios/",
  // },
];

export const portfolio = [
  {
    id: 1,
    image: images.portfolio.port1,
    tag: "UI/UX / DEVELOPMENT / 3D",
    category: "3D Design",
    name: "Example Project",
    description: "A platform design about a shopping website",
  },
  {
    id: 2,
    image: images.portfolio.port2,
    tag: "UI/UX / DEVELOPMENT",
    category: "App Development",
    name: "Web3.Future",
    description: "A platform design about a shopping website",
  },
  {
    id: 3,
    image: images.portfolio.port3,
    tag: "UI/UX / DEVELOPMENT",
    category: "Blockchain Development",
    name: "Example Project",
    description: "A platform design about a shopping website",
  },
  {
    id: 4,
    image: images.portfolio.port4,
    tag: "UI/UX / DEVELOPMENT",
    category: "Game Development",
    name: "Example Project",
    description: "A platform design about a shopping website",
  },
];

export const Details = [
  {
    id: 1,
    image: images.portfolio.port1,
    tag: "UI/UX / DEVELOPMENT / 3D",
    category: "3D Design",
    title: "Example Project",
    description: "A platform design about a shopping website",
    services: ["Branding", "Strategy", "UI/UX Design", "Web Design"],
    problem:
      "Users struggled to track finances across multiple accounts with outdated dashboards and poor information hierarchy.",
    solution:
      "We designed a clean, modular interface that supports dynamic account linking, personalized budget visuals, and adaptive notifications for better financial insights.",
  },
  {
    id: 2,
    image: images.portfolio.port2,
    tag: "UI/UX / DEVELOPMENT",
    category: "App Development",
    title: "Web3.Future",
    description: "A platform design about a shopping website",
    services: [
      "Blockchain Integration",
      "UI/UX Design",
      "Security",
      "Smart Contracts",
    ],
    problem:
      "Users lacked a simple and secure interface to manage their crypto assets and interact with decentralized applications.",
    solution:
      "We built a secure wallet with biometric authentication and seamless DApp integration, improving transaction visibility and user trust.",
  },
  {
    id: 3,
    image: images.portfolio.port3,
    tag: "UI/UX / DEVELOPMENT",
    category: "Blockchain Development",
    title: "Example Project",
    description: "A platform design about a shopping website",
    services: ["Game Design", "3D Animation", "Mobile Development", "UI Art"],
    problem:
      "The game lacked an engaging storyline and compelling visuals, leading to low retention among beta testers.",
    solution:
      "Our team redesigned the narrative arc, introduced multiplayer co-op gameplay, and upgraded character animations to enhance immersion.",
  },
  {
    id: 4,
    image: images.portfolio.port4,
    tag: "UI/UX / DEVELOPMENT",
    category: "Game Development",
    title: "Example Project",
    description: "A platform design about a shopping website",
    services: [
      "UX Research",
      "SEO Optimization",
      "Responsive Design",
      "Content Strategy",
    ],
    problem:
      "The website had high bounce rates due to poor mobile experience and lack of clear property filters.",
    solution:
      "We redesigned the site to prioritize mobile usability and implemented intuitive filtering, boosting user engagement and conversions.",
  },
];
