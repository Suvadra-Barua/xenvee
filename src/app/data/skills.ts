export type SkillGroup = {
  title: string;
  items: string[];
};

const skills: SkillGroup[] = [
  {
    title: "Blockchain",
    items: [
      "Solidity",
      "Hardhat",
      "Truffle",
      "Foundry",
      "OpenZeppelin",
      "PRBMath",
      "Ethereum",
      "Celo",
      "Polygon",
      "Chainlink",
      "Provable",
      "DFNS",
      "Fireblocks",
      "Minipay",
    ],
  },
  {
    title: "Web",
    items: [
      "TypeScript",
      "JavaScript",
      "React",
      "Next.js",
      "Node.js",
      "Express",
      "Flask",
      "PostgreSQL",
      "Jest",
      "Mocha",
      "Chai",
    ],
  },
  {
    title: "Languages",
    items: ["C", "C++", "C#", "Python", "TypeScript", "Solidity"],
  },
  {
    title: "Research & Interests",
    items: [
      "Programming Languages",
      "Software Security",
      "Blockchain Systems",
      "Cryptography",
      "Machine Learning",
    ],
  },
  {
    title: "Storage & Infra",
    items: ["IPFS", "Ceramic", "Git/GitHub"],
  },
  {
    title: "Payment Systems",
    items: ["Stripe", "Bridge"],
  },
  {
    title: "Design & PM",
    items: ["Figma", "Jira", "Trello", "Asana"],
  },
];

const courses = [
  {
    title: "Blockchain: Foundations and Use Cases",
    institution: "ConsenSys Academy",
  },
  {
    title: "Decentralized Applications (DAPPs)",
    institution: "University at Buffalo",
  },
  {
    title: "Algorithmic Tool Box",
    institution: "University of California San Diego",
  },
  {
    title: "Python Data Structures",
    institution: "University of Michigan",
  },
];

export default skills;
export { courses };
