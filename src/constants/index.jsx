import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";

import user1 from "../assets/profile-pictures/user1.png";
import user2 from "../assets/profile-pictures/user2.png";
import user3 from "../assets/profile-pictures/user3.png";
import user4 from "../assets/profile-pictures/user4.png";
import user5 from "../assets/profile-pictures/user5.png";
import user6 from "../assets/profile-pictures/user6.png";

export const navItems = [
  { label: "Features", href: "#" },
  { label: "Workflow", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "Testimonials", href: "#" },
];

export const testimonials = [
  {
    user: "Shikhar Ganeshe",
    company: "UI/UX Developer",
    image: user1,
    text: "I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations.",
  },
  {
    user: "ANUJ Soni",
    company: "Brand wale social marketings",
    image: user2,
    text: "We couldn't be happier with the outcome of our project. The team's creativity and problem-solving skills were instrumental in bringing our vision to life",
  },
  {
    user: "Surya Rawat",
    company: "Advocate Firm",
    image: user3,
    text: "Working with this company was a pleasure better than my one. Their attention to detail and commitment to excellence are commendable. I would highly recommend them to anyone looking for top-notch service.",
  },
  {
    user: "Rohit Nare",
    company: "G-Fresh",
    image: user4,
    text: "Working with the team at HK Company was a game-changer for our project. Their attention to detail and innovative solutions helped us achieve our goals faster than we thought possible. We are grateful for their expertise and professionalism!",
  },
  {
    user: "Harsh Pawar",
    company: "Valorent Creations",
    image: user5,
    text: "I am amazed by the level of professionalism and dedication shown by the team. They were able to exceed our expectations and deliver outstanding results.",
  },
  {
    user: "Devesh Nare",
    company: "Nare Agro",
    image: user6,
    text: "The team went above and beyond to ensure our project was a success. Their expertise and dedication are unmatched. I look forward to working with them again in the future.",
  },
];

export const features = [
  {
    icon: <BotMessageSquare />,
    text: "Drag-and-Drop Interface",
    description:
      "Easily design and arrange your environments with a user-friendly drag-and-drop interface.",
  },
  {
    icon: <Fingerprint />,
    text: "Multi-Platform Compatibility",
    description:
      "Build  applications that run seamlessly across multiple platforms, including mobile, desktop, and VR headsets.",
  },
  {
    icon: <ShieldHalf />,
    text: "Built-in Templates",
    description:
      "Jumpstart your  projects with a variety of built-in templates for different types of applications and environments.",
  },
  {
    icon: <BatteryCharging />,
    text: "Real-Time Preview",
    description:
      "Preview your application in real-time as you make changes, allowing for quick iterations and adjustments.",
  },
  {
    icon: <PlugZap />,
    text: "Collaboration Tools",
    description:
      "Work together with your team in real-time on VR projects, enabling seamless collaboration and idea sharing.",
  },
  {
    icon: <GlobeLock />,
    text: "Analytics Dashboard",
    description:
      "Gain valuable insights into user interactions and behavior within your applications with an integrated analytics dashboard.",
  },
];


// export const features = [
//   {
//     icon: <GlobeLock />,
//     text: "Feature One",
//     description: "Description for feature one.",
//     image: "src/assets/profile-pictures/user1.jpg", // Add your image path here
//   },
//   {
//     icon: <GlobeLock  />,
//     text: "Feature Two",
//     description: "Description for feature two.",
//     image: "src/assets/profile-pictures/user2.jpg", // Add your image path here
//   },
//   {
//     icon: <GlobeLock  />,
//     text: "Feature Three",
//     description: "Description for feature three.",
//     image: "src/assets/profile-pictures/user3.jpg", // Add your image path here
//   },
// ];


export const checklistItems = [
  {
    title: "Code merge made easy",
    description:
      "Track the performance of your apps and gain insights into user behavior.",
  },
  {
    title: "Review code without worry",
    description:
      "Track the performance of your apps and gain insights into user behavior.",
  },
  {
    title: "AI Assistance to reduce time",
    description:
      "Track the performance of your apps and gain insights into user behavior.",
  },
  {
    title: "Share work in minutes",
    description:
      "Track the performance of your apps and gain insights into user behavior.",
  },
];

export const pricingOptions = [
  {
    title: "Silver",
    price: "1000 Rs",
    features: [
      "Vercel web pages",
      "normal projects",
      "Web Analytics",
      "basic plan",
    ],
  },
  {
    title: "Gold",
    price: "5000 Rs",
    features: [
      "Proper Deployement",
      "web support",
      "Web Analytics (Advance)",
      "Private Mode",
    ],
  },
  {
    title: "Diamond",
    price: "9000 Rs",
    features: [
      "Proper Deployment",
      "Maintainance",
      "Interatactive Pages",
      "Desktop application",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];
