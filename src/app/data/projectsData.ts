export type ProjectItem = {
  title: string;
  tagline: string;
  description: string;
  role?: string;
  impact?: string[];
  tech: string[];
  links?: { label: string; url: string }[];
  year?: string;
};

const projects: ProjectItem[] = [
  {
    title: "Crowdsplit",
    tagline: "Web3 payment API service for crowdfunding platforms",
    year: "2023 – Present",
    description:
      "Payment API service tailored for crowdfunding platforms, enabling fiat-to-token and token-to-fiat flows through custodial wallet infrastructure.",
    role: "Core Developer, Creative Crowdfunding Protocol",
    impact: [
      "Powers $15M in annual crowdfunding across a 3M+ user public beta, primarily in LATAM.",
      "Integration in progress with Kickstarter ($800M/year) and major platforms across Japan and the Global South.",
      "Led technical initiatives to scale the platform for a rapidly growing emerging-markets user base.",
    ],
    tech: ["Fireblocks", "DFNS", "Express.js", "Jest", "Stripe", "Bridge"],
    links: [{ label: "Website", url: "https://www.oaknetwork.org/" }],
  },
  {
    title: "Mavu",
    tagline: "Microwork rewards inside Minipay",
    year: "2023 – 2024",
    description:
      "Application within Minipay that lets users complete microwork tasks and earn crypto rewards, built in collaboration with Opera and IDEO.",
    impact: [
      "Launched to 6M users across Africa.",
      "Implemented a vector-similarity algorithm in Solidity to match workers and jobs.",
    ],
    tech: ["Next.js", "Solidity", "Hardhat", "Celo", "Minipay"],
  },
  {
    title: "Co:Create",
    tagline: "Primitive for NFT application ecosystems",
    year: "2022 – 2023",
    description:
      "Smart contracts and frontend integration for Autograph, the first prototype of the Co:Create NFT protocol.",
    impact: [
      "Contributed to the prototype that helped secure a $25M seed round led by a16z.",
      "Ran a comparative study of 20 L1 and 11 L2 chains across 10 criteria (DEX, TPS, etc.).",
      "Designed system and functional architecture for protocol interaction with DAO governance tokens and DEX.",
    ],
    tech: ["Solidity", "Hardhat", "React", "Ethers.js"],
    links: [
      {
        label: "Demo",
        url: "https://supernova-frontend-pi.vercel.app/",
      },
    ],
  },
  {
    title: "AttoEarth / Astral Protocol",
    tagline: "Location-based decentralized application",
    year: "2021 – 2022",
    description:
      "Decentralized geospatial map data protocol enabling range and point queries directly from smart contracts — a GIS engine for the EVM.",
    impact: [
      "Designed a gas-optimized Quadtree in Solidity capable of storing up to 2M points.",
      "Benchmarked decentralized storage platforms (IPFS, Ceramic) for map data.",
      "Integrated decentralized file storage with blockchain via oracle services.",
    ],
    tech: ["Solidity", "Hardhat", "IPFS", "Ceramic", "Node.js"],
    links: [{ label: "Demo", url: "https://attoearth-demo.vercel.app/" }],
  },
  {
    title: "Web3 Credit Scoring",
    tagline: "ML-based credit scoring on on-chain lending data",
    year: "2022",
    description:
      "R&D project integrating Web3 and machine learning through three approaches to determine a Web3 credit score.",
    impact: [
      "Built a hybrid scoring system combining predictive ML models with traditional credit metrics and on-chain behavioural data.",
      "Extracted and analysed lending and borrowing histories from Moola Market and Aave Protocol.",
    ],
    tech: ["Python", "Solidity", "React", "Machine Learning"],
  },
  {
    title: "Tempo",
    tagline: "Oracle infrastructure for e-bike membership",
    year: "2022",
    description:
      "Membership services for electric bike owners — including both oracle and reverse-oracle solutions.",
    impact: [
      "Researched Chainlink, RedStone, and Band to select the right oracle platform.",
      "Designed and shipped application-based oracle and reverse-oracle functionality.",
    ],
    tech: ["Solidity", "Web3.js", "Chainlink", "RedStone", "Node.js"],
    links: [{ label: "Website", url: "https://www.hellotempo.com/" }],
  },
  {
    title: "Minipay Payroll",
    tagline: "Bulk cUSD payroll for Minipay ambassadors",
    year: "2024",
    description:
      "Next.js app integrated with a Celo smart contract to facilitate monthly bulk cUSD transfers to 2000+ Minipay ambassadors.",
    tech: ["Next.js", "PostgreSQL", "Solidity", "Celo"],
  },
  {
    title: "Sage",
    tagline: "Web3 AI engine demo",
    year: "2024",
    description:
      "Frontend and smart-contract integration for a Web3 AI engine, including tokenomics design.",
    tech: ["React", "Solidity", "Hardhat", "Ethers.js"],
    links: [
      {
        label: "Demo",
        url: "https://web3-ai-engine-demo.vercel.app/",
      },
    ],
  },
];

export default projects;
