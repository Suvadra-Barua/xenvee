export type Talk = {
  title: string;
  venue: string;
  year: string;
  type?: "talk" | "workshop";
};

const talks: Talk[] = [
  {
    title: "A Roadshow To Blockchain Olympiad Bangladesh",
    venue: "Varendra University (Webinar)",
    year: "2022",
    type: "talk",
  },
  {
    title: "All About Blockchain Olympiad",
    venue: "CUET Computer Club (Webinar)",
    year: "2022",
    type: "talk",
  },
  {
    title: "All About Blockchain & Smart Contract Development with Solidity",
    venue: "CUET Computer Club · 3-day workshop, 40+ students",
    year: "2022",
    type: "workshop",
  },
];

export default talks;
