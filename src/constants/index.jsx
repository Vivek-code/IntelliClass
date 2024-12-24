import { ScanEye } from "lucide-react";
import { Headset } from "lucide-react";
import { Brain } from "lucide-react";
import { ClipboardMinus } from "lucide-react";
import { ChartNoAxesCombined } from "lucide-react";
import { TvMinimal } from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const navItems = [
  { label: "Features", href: "/features" },
  { label: "Workflow", href: "/workflow" },
  { label: "Testimonials", href: "/testimonials" },
];

export const testimonials = [
  {
    user: "John Doe",
    company: "Greenwood High",
    image: user1,
    text: "The Smart Attendance system has made attendance tracking effortless. Facial recognition ensures accuracy, and it saves us so much time every morning!",
  },
  {
    user: "Jane Smith",
    company: "Innovative Learning Solutions",
    image: user2,
    text: "The AI Assistance for Educators has been a game-changer! It helps with teaching, student queries, and administrative tasks, allowing me to focus more on quality education.",
  },
  {
    user: "David Johnson",
    company: "Quantum Education",
    image: user3,
    text: "The paperless education system has transformed our reporting process. Effortless Report Assessment provides detailed, AI-driven insights, making feedback tailored and impactful.",
  },
  {
    user: "Ronee Brown",
    company: "Fusion Academy",
    image: user4,
    text: "Our students are more engaged than ever, thanks to Gamified Learning. The quizzes and challenges make learning interactive and fun, boosting overall participation",
  },
  {
    user: "Michael Wilson",
    company: "Visionary Learning Hub",
    image: user5,
    text: "Implementing this system has streamlined our operations. Smart Attendance and AI Assistance have increased efficiency across the board, and the results speak for themselves.",
  },
  {
    user: "Emily Davis",
    company: "St Lawrence School",
    image: user6,
    text: "The combination of innovative tools, like AI-driven reporting and gamified learning, has completely modernized our approach. It's exciting to see how much more engaged our students are!",
  },
];

export const features = [
  {
    icon: <ScanEye />,
    text: "Facial Recognition Attendance",
    description:
      " Automate attendance with AI-powered facial recognition for quick, accurate, and contactless tracking of student and staff presence.",
  },
  {
    icon: <Brain />,
    text: "AI Assitant for Learning Support",
    description:
      "Provide personalized learning guidance, answer student queries, and assist teachers with administrative tasks using an intelligent AI assistant.",
  },
  {
    icon: <ClipboardMinus />,
    text: "Smart Report Assesment",
    description:
      "Generate detailed, AI-driven performance assessments and feedback for students, enabling tailored educational improvements.",
  },
  {
    icon: <Headset />,
    text: "Gamified Learning Experience",
    description:
      "Increase student engagement through interactive, game-like activities and challenges that make learning fun and competitive.",
  },
  {
    icon: <ChartNoAxesCombined />,
    text: "Real-Time Performance Analytics",
    description:
      "Track individual and class-level progress with dynamic dashboards that display real-time insights and trends.",
  },
  {
    icon: <TvMinimal />,
    text: "Analytics Dashboard",
    description:
      "Gain valuable insights into user interactions and behavior within your VR applications with an integrated analytics dashboard.",
  },
];

export const checklistItems = [
  {
    title: "Smart Attendance Made Easy",
    description:
      "Automate attendance with a camera-based system powered by facial recognition for quick and accurate tracking.",
  },
  {
    title: "AI Assistance for Educators",
    description:
      "Get personalized support for teaching, student queries, and administrative tasks, reducing workload and improving efficiency.",
  },
  {
    title: "Effortless Report Assessment",
    description:
      "Generate insightful and AI-driven performance reports with minimal effort, ensuring tailored feedback for every student.",
  },
  {
    title: "Engage with Gamified Learning",
    description:
      "Transform learning into an interactive and fun experience through gamified quizzes, challenges, and activities.",
  },
];

export const pricingOptions = [
  {
    title: "Free",
    price: "$0",
    features: [
      "Private board sharing",
      "5 Gb Storage",
      "Web Analytics",
      "Private Mode",
    ],
  },
  {
    title: "Pro",
    price: "$10",
    features: [
      "Private board sharing",
      "10 Gb Storage",
      "Web Analytics (Advance)",
      "Private Mode",
    ],
  },
  {
    title: "Enterprise",
    price: "$200",
    features: [
      "Private board sharing",
      "Unlimited Storage",
      "High Performance Network",
      "Private Mode",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Facial Recognition" },
  { href: "#", text: "AI Assistance Tutorials" },
  { href: "#", text: "Gamified Learning Playbook" },
  { href: "#", text: "Performance Report Template" },
];

export const platformLinks = [
  { href: "#", text: "Features Overview" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "AI Tools for Educator" },
  { href: "#", text: "Reports and Analytics" },
  { href: "#", text: "Modules" },
];

export const communityLinks = [
  { href: "#", text: "Educator Forum" },
  { href: "#", text: "Webinar and Training Sessions" },
  { href: "#", text: "Student Engagement Meetups" },
  { href: "#", text: "Hackathons for EdTech Innovators" },
  { href: "#", text: "Conference on Future Education" },
];
