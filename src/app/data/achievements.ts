export type Achievement = {
  title: string;
  detail?: string;
  role?: string;
  year: string;
  category?: string;
  rank?: string;
  url?: string;
};

const achievements: Achievement[] = [
  {
    title: "Silver Award — Blockchain Olympiad Bangladesh",
    detail: "Project: AttoEarth — Solving Land Disputes at High Precision",
    role: "Blockchain Engineer",
    year: "2022",
    category: "Professional Category",
    rank: "Top 1%",
    url: "https://bcolbd.org/2022/winner",
  },
  {
    title: "Bronze Award — Blockchain Olympiad Bangladesh",
    detail:
      "Project: TrioChain — A Blockchain Based Passport Management System for Bangladesh",
    role: "Team Leader",
    year: "2021",
    category: "Student Category",
    rank: "Top 1.2%",
    url: "https://bcolbd.org/2021/winner",
  },
  {
    title: "Merit Award — International Blockchain Olympiad",
    year: "2021",
    category: "Student Category",
  },
  {
    title: "Technical Scholarship",
    detail: "Chittagong University of Engineering and Technology (CUET)",
    year: "2014 – 2018",
  },
  {
    title: "SSC Scholarship Award",
    detail: "Bangladesh Education Board",
    rank: "Top 1.5% nationwide",
    year: "2013 – 2015",
    url: "https://bangladeshresults.files.wordpress.com/2014/03/ssc-scholarship-2013-chittagong-board.pdf",
  },
  {
    title: "Winner — Kaptai Mathematical Olympiad",
    rank: "Top 6.25%",
    year: "2012",
  },
];

export default achievements;
