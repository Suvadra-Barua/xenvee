const publications = [
  {
    title:
      "A Blockchain based Decentralized Video Streaming Platform with Content Protection System ",
    authors: "Suvadra Barua, Dipon Talukder",
    journal:
      "23rd International Conference on Computer and Information Technology (ICCIT)",
    year: 2020,
    doi: "10.1109/ICCIT51783.2020.9392746",
    url: "https://ieeexplore.ieee.org/document/9392746",
  },
  {
    title:
      "OkkhorNama: BdSL Image Dataset For Real Time Object Detection Algorithms",
    authors: "Dipon Talukder, Fatima Jahara, Suvadra Barua, Md. Mokammel Haque",
    journal: "IEEE Region 10 Symposium (TENSYMP)",
    year: 2021,
    doi: "10.1109/TENSYMP52854.2021.9550907",
    url: "https://ieeexplore.ieee.org/document/9550907",
  },
  // Add more publications as needed
];
const awards = [
  `<div><b>Silver Award | Professional Category | Blockchain Olympiad Bangladesh, 2022 </b><a href="https://bcolbd.org/2022/winner" target="_blank"><u>[link]</u></a>
  <div>Project : AttoEarth - Solving Land Disputes at a High Precision</div>
  Role: Blockchain Engineer</div>`,
  `<div><b>Bronze Award | Student Category | Blockchain Olympiad Bangladesh, 2021</b> <a href="https://bcolbd.org/2021/winner" target="_blank"><u>[link]</u></a>
  <div>Project : TrioChain -  A Blockchain Based Passport Management System for Bangladesh</div>
  Role: Team Leader</div>`,
  `Merit Award | Student Category | International  Blockchain Olympiad Bangladesh, 2021`,
  `Technical Scholarship | Chittagong University of Engineering and Technology (CUET) ,2014-2018`,
  `Secondary School Certificate (SSC) Scholarship Award | Bangladesh Education Board, 2013-2015 <a href="https://bangladeshresults.files.wordpress.com/2014/03/ssc-scholarship-2013-chittagong-board.pdf" target="_blank"><u>[link]</u></a>`,
  `Winner | Kaptai Mathematical Olympiad, 2012`,
];

const newsItems = [
  {
    id: 1,
    description:
      "The Silver Award went to team Universal Machine for their project titled ‘AttoEarth.’",
    image: "https://ibtbd.net/wp-content/uploads/2022/07/ict2@3x.png",
    date: "2022-07-07",
    tags: ["Blockchain", "Olympiad", "Silver", "AttoEarth"],
    link: "https://ibtbd.net/new-horizons/",
  },
  {
    id: 2,
    description:
      "“TrioChain” of the Chittagong University of Engineering and Technology (CUET) bagged the bronze.",
    image: "https://www.bracu.ac.bd/sites/default/files/news-image/1_10.jpg",
    date: "2021-03-07",
    tags: ["Blockchain", "Olympiad", "Broze", "TrioChain", "Passport"],
    link: "https://www.bracu.ac.bd/news/blockchain-olympiad-bangladesh-2021-held",
  },
  // Add more news items as needed
];

const prestigePageData = {
  publications,
  awards,
  newsItems,
};

export default prestigePageData;
