const allSkills = [
    {
      title: "Blockchain ",
      skills: [
        { label: "Language", value: "Solidity" },
        { label: "Framework", value: "Truffle, Hardhat, Foundry" },
        { label: "Library", value: "OpenZeppelin, PRBMath" },
        {
          label: "Others",
          value: "Remix, Metamask, Infura, Minipay, Custodial Wallet(DFNS)",
        },
        { label: "Chain", value: "Ethereum, Celo, Polygon" },
      ],
    },
    {
      title: "Core Concepts",
      skills: [
        { label: "Consensus Algorithms", value: "PoW, PoS, PBFT" },
        { label: "", value: ["Cryptocurrency, Defi, NFT"] },
        { label: "", value: ["Smart Contract Security"] },
        { label: "", value: ["OOP"] },
      ],
    },
    {
      title: "Web Development",
      skills: [
        { label: "Problem Solving", value: "C, Python" },
        { label: "Language", value: "HTML, CSS, JavaScript, Python" },
        { label: "Front-end", value: "React, Next.js" },
        { label: "Back-end", value: "Express" },
        { label: "Testing", value: "Jest, Mocha, Chai" },
        { label: "Database", value: "PostgreSQL" },
        { label: "Version Control", value: "Github" },
      ],
    },
    {
      title: "Blockchain Oracle",
      skills: [{ label: "", value: ["Chainlink", "Provable"] }],
    },
    {
      title: "Decentralized Storage",
      skills: [{ label: "", value: ["IPFS", "Ceramic"] }],
    },
    {
      title: "Project Management",
      skills: [{ label: "", value: ["Atlassian Jira & Trello", "Asana"] }],
    },
  ];
  const OnlineCourses = [
    {
      title:
        "Reinforcement Learning Specialization - <i>University of Alberta (Online)</i>",
      link: "",
    },
    {
      title: "Machine Learning - <i>Stanford University (Online)</i>",
      link: "",
    },
    {
      title:
        "Deep Learning Specialization - <i>Deep Learning Specialization</i>",
      link: "",
    },
    {
      title:
        "TensorFlow Data and Deployment Specialization - <i>DeepLearning.ai</i>",
      link: "",
    },
    {
      title:
        "DeepLearning.AI TensorFlow Developer Specialization - <i>DeepLearning.ai</i>",
      link: "",
    },
    {
      title:
        "Introduction to Quantum Computing, - <i>2020 Qiskit Global Summer School, IBM Qiskit</i>",
      link: "",
    },
  ];

  const trainingWorkShop = [
    {
      content:
        "Cisco CCNA Exploration 1 - IICT, Chittagong University of Engineering & Technology",
      year: "2018",
      url: "",
    },
    {
      content:
        "Machine Learning, Deep Learning and Artificial Intelligence with Python  Bangladesh Hi-Tech Park Authority",
      year: "2019",
      url: "",
    },
    {
      content: "Ethical Hacking and Blockchain, IEEE CUETSB",
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