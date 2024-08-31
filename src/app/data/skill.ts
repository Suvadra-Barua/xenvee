const allSkills = [
    {
      title: "Blockchain Development",
      skills: [
        { label: "Language", value: "Solidity" },
        { label: "Framework", value: "Truffle, Hardhat, Foundry" },
        { label: "Library", value: "OpenZeppelin, PRBMath" },
        { label: "Chain", value: "Ethereum, Celo, Polygon" },
        { label: "Oracle", value: "Chainlink, Provable" },
        { label: "Others", value: "Remix, Metamask, Custodial, Wallet (DFNS, Fireblocks), Minipay" },
      ],
    },
    {
      title: "Web Development",
      skills: [
        { label: "Language", value: "HTML, CSS, JavaScript" },
        { label: "Front-end", value: "React, Next.js" },
        { label: "Back-end", value: "Express, Flask" },
        { label: "Testing", value: "Jest, Mocha, Chai" },
        { label: "Database", value: "PostgreSQL" },
      ],
    },
    {
      title: "Fields",
      skills: [
        { label: "", value: "Blockchain" },
        { label: "", value: ["Cryptography"] },
        { label: "", value: ["Web Development"] },
        { label: "", value: ["Machine Learning"] },
      ],
    },
    {
      title: "Decentralized Storage",
      skills: [{ label: "", value: ["IPFS"] },{ label: "", value: ["Ceramic"] }],
    },
    {
      title: "Others",
      skills: [{ label: "Problem Solving", value: ["C, Python"] },{ label: "Version Control", value: ["Github"] }],
    },
    {
      title: "Project Management",
      skills: [{ label: "", value: ["Atlassian Jira & Trello"] },{ label: "", value: ["Asana"] }],
    },
  ];
  const OnlineCourses = [
    {
      title:
        " Interactivity with JavaScript | <i> University of Michigan (Online)</i>",
      link: "",
    },
    {
      title:
        "Algorithmic Tool Box | <i>University of California San Diego (Online)</i>",
      link: "",
    },
    {
      title:
        "Python Data Structures | University of Michigan (Online) <i>University of Michigan (Online)</i>",
      link: "",
    },
    {
      title: "Blockchain: Foundations and Use Cases | <i>ConsenSys Academy (Online)</i>",
      link: "",
    },
    {
      title:
        "Blockchain Basics | <i>University at Buffalo(Online)</i>",
      link: "",
    },
    {
      title:
        "Smart Contract | <i>| University at Buffalo(Online)</i>",
      link: "",
    },
    {
      title:
        "Decentralized Applications (DAPPs) | <i>University at Buffalo (Online) </i>",
      link: "",
    },
  ];

  const trainingWorkShop = [
    {
      content: "Android Control Robot - IEEE",
      year: "2017",
      url: "",
    },
    {
      content:
        "Cisco CCNA Exploration 1 - IICT, Chittagong University of Engineering & Technology",
      year: "2018",
      url: "",
    },
    {
      content: "Workshop on Blockchain - IEEE",
      year: "2018",
      url: "",
    },
    {
      content:
        "Training on Blockchain - ICT Ministry and Hi-Tech Park Authority of Bangladesh",
      year: "2019",
      url: "",
    },
    {
      content:
        "Workshop on Ethical Hacking - ICT Ministry and Hi-Tech Park Authority of Bangladesh",
      year: "2019",
      url: "",
    },
    {
      content:
        "Foundations in Digital Forensic  - ICT Ministry and Hi-Tech Park Authority of Bangladesh",
      year: "2019",
      url: "",
    },
  ];


  const  skillsPageData = {
    allSkills,
    OnlineCourses,
    trainingWorkShop

  }

  export default skillsPageData;