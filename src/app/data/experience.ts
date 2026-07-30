export type ExperienceItem = {
  role: string;
  org: string;
  orgUrl?: string;
  location?: string;
  start: string;
  end: string;
  type?: string;
  bullets: string[];
};

export const researchExperience: ExperienceItem[] = [
  {
    role: "Research Assistant",
    org: "Software Reliability and Security (SRest) Lab, University at Buffalo",
    orgUrl: "https://cse.buffalo.edu/",
    location: "Remote",
    start: "Jun 2025",
    end: "Present",
    bullets: [
      "Conducting research at the intersection of programming languages and software security.",
      "Co-authored DualGauge, a paper on automated benchmarking for secure code generation, submitted to EMNLP 2026.",
    ],
  },
];

export const workExperience: ExperienceItem[] = [
  {
    role: "Core Developer",
    org: "Creative Crowdfunding Protocol",
    orgUrl: "https://www.oaknetwork.org/",
    location: "NY, USA · Remote",
    start: "Nov 2023",
    end: "Present",
    type: "Contract",
    bullets: [
      "Built backend services for payment gateways (Stripe, Bridge) exposing APIs over custodial wallets.",
      "Implemented and audited smart contracts powering the crowdfunding protocol.",
      "Shipped user interfaces for internal demos and partner integrations.",
    ],
  },
  {
    role: "Smart Contract Engineer",
    org: "Mavu Labs",
    orgUrl: "https://mavu.xyz/",
    location: "San Mateo, CA · Remote",
    start: "Nov 2023",
    end: "Present",
    type: "Part-time",
    bullets: [
      "Implemented smart contracts for an NFT project on Ethereum.",
      "Focused on Ethereum tooling and platform integration.",
    ],
  },
  {
    role: "Software Engineer",
    org: "Universal Machine Inc.",
    orgUrl: "https://universalmachine.io/",
    location: "San Mateo, CA · Remote",
    start: "Nov 2021",
    end: "Nov 2023",
    type: "Full-time",
    bullets: [
      "Led research, analysis, and benchmarking across multiple Web3 initiatives.",
      "Shipped NFT, blockchain, and Web3 projects with a strong emphasis on maintainability, scalability, and security.",
      "Contributed across full-stack (frontend, backend, Web3), moving fluidly between layers as projects required.",
    ],
  },
];

export const teachingExperience: ExperienceItem[] = [
  {
    role: "Lead Instructor",
    org: "Ostad",
    orgUrl: "https://ostad.app/en/course/blockchain-development",
    location: "Dhaka, Bangladesh",
    start: "Aug 2023",
    end: "Dec 2023",
    type: "Contract",
    bullets: [
      "Designed 90% of a comprehensive blockchain course module — fundamentals through advanced topics.",
      "Authored lectures, assignments, and hands-on projects for a diverse cohort.",
      "Delivered 70% of the classes.",
    ],
  },
  {
    role: "Adjunct Lecturer",
    org: "University of Creative Technology",
    orgUrl: "https://www.uctc.edu.bd/",
    location: "Chattogram, Bangladesh",
    start: "Jul 2022",
    end: "Dec 2022",
    type: "Part-time",
    bullets: [
      "Taught Social and Professional Ethics in Computing.",
      "Ran the Introduction to Computing & Programming Laboratory.",
      "Ran the Web Programming Laboratory.",
    ],
  },
  {
    role: "Mentor",
    org: "KolpoKoushol",
    orgUrl: "https://kolpokoushol.org/",
    location: "Dhaka, Bangladesh",
    start: "Oct 2023",
    end: "Oct 2023",
    bullets: [
      "Guided mentees drawn from the top 5% of a national applicant pool on turning ideas into shipped projects.",
    ],
  },
  {
    role: "Workshop Instructor",
    org: "CUET Computer Club",
    location: "Chattogram, Bangladesh",
    start: "Dec 2022",
    end: "Dec 2022",
    bullets: [
      "Ran a 3-day workshop for 40+ students on ‘All About Blockchain & Smart Contract Development with Solidity’.",
    ],
  },
];

export const allExperience = {
  research: researchExperience,
  work: workExperience,
  teaching: teachingExperience,
};

export default allExperience;
