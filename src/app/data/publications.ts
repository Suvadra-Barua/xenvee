export type Publication = {
  title: string;
  authors: string;
  venue: string;
  year: number | string;
  status?: "published" | "under-review";
  links?: { label: string; url: string }[];
  note?: string;
  highlightAuthor?: string;
};

const publications: Publication[] = [
  {
    title:
      "DualGauge: Automated Joint Security-Functionality Benchmarking of Specification-Only Code Generation by LLMs and Coding Agents",
    authors: "R. Patir, K. Guo, S. Barua, …, H. Cai",
    venue: "EMNLP 2026",
    year: "2026",
    status: "under-review",
    highlightAuthor: "S. Barua",
    note: "Automated benchmarking framework for evaluating secure code generation by large language models and coding agents.",
  },
  {
    title:
      "A Blockchain-based Decentralized Video Streaming Platform with Content Protection System",
    authors: "S. Barua, D. Talukder",
    venue:
      "23rd International Conference of Computer and Information Technology (ICCIT)",
    year: 2020,
    status: "published",
    highlightAuthor: "S. Barua",
    links: [
      {
        label: "IEEE",
        url: "https://ieeexplore.ieee.org/document/9392746",
      },
      {
        label: "DOI",
        url: "https://doi.org/10.1109/ICCIT51783.2020.9392746",
      },
    ],
  },
  {
    title:
      "OkkhorNama: BdSL Image Dataset for Real Time Object Detection Algorithms",
    authors: "D. Talukder, F. Jahara, S. Barua, M. Haque",
    venue: "IEEE Region 10 Symposium (TENSYMP)",
    year: 2021,
    status: "published",
    highlightAuthor: "S. Barua",
    links: [
      {
        label: "IEEE",
        url: "https://ieeexplore.ieee.org/document/9550907",
      },
      {
        label: "DOI",
        url: "https://doi.org/10.1109/TENSYMP52854.2021.9550907",
      },
    ],
  },
];

export default publications;
