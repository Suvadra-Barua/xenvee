export type NewsItem = {
  date: string;
  body: string;
};

const news: NewsItem[] = [
  {
    date: "May 2026",
    body: "Co-authored <em>DualGauge</em>, an automated joint security-functionality benchmarking framework for LLM-generated code, submitted to <strong>EMNLP 2026</strong>.",
  },
  {
    date: "Jun 2025",
    body: "Joined the <strong>Software Reliability and Security (SRest) Lab</strong> at the <strong>University at Buffalo</strong> as a Research Assistant, working with Dr. Haipeng Cai.",
  },
  {
    date: "Nov 2023",
    body: "Started as Core Developer at <strong>Creative Crowdfunding Protocol</strong>, contributing to a Web3 payments platform that now powers $15M+ in annual crowdfunding.",
  },
  {
    date: "Jul 2022",
    body: "Won <strong>Silver Award</strong> (top 1%) in the Professional category at <em>Blockchain Olympiad Bangladesh</em> for project <em>AttoEarth</em>.",
  },
  {
    date: "Mar 2021",
    body: "Won <strong>Bronze Award</strong> (top 1.2%) in the Student category at <em>Blockchain Olympiad Bangladesh</em> for project <em>TrioChain</em>.",
  },
  {
    date: "2021",
    body: "Paper <em>OkkhorNama: BdSL Image Dataset for Real Time Object Detection Algorithms</em> published at <strong>IEEE TENSYMP 2021</strong>.",
  },
  {
    date: "2020",
    body: "First publication — <em>A Blockchain based Decentralized Video Streaming Platform with Content Protection System</em> — accepted at <strong>ICCIT 2020</strong>.",
  },
];

export default news;
