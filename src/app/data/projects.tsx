const projects = [
  {
    title: "Co:Create",
    imgSrc: "project-imgs/Autograph.gif",
    code: "https://www.github.com",
    projectLink: "https://supernova-frontend-pi.vercel.app/",
    tech: ["Solidity", "Hardhat"],
    description: "A primitive for fostering NFT application ecosystems",
    modalContent: (
      <>
        <p>
          - Developed the smart contracts & facilitated front end integration
          for the first initial prototype(Autograph) of NFT protocol to secure a
          25 Million USD seed round led by the top Web3 VC firm, a16z.
        </p>
        <p>
          - Conducted a research study on 20 L1 & 11 L2 chains based on 10
          criterias including DEX, TPS, etc.
        </p>
        <p>
          - Created system & functional architecture on the protocol interaction
          with DAO governance tokens & DEX.
        </p>
      </>
    ),
  },
  {
    title: "Astral Protocol / Kolektivo",
    imgSrc: "project-imgs/Astral.png",
    code: "https://www.github.com",
    projectLink: "https://www.kolektivo.co/",
    tech: ["IPFS", "Ceramic", "Truffle"],
    description: "A location-based decentralized application",
    modalContent: (
      <>
        <p>
          Worked with Astral team on location-based decentralized web to
          facilitate local regenerative economies
        </p>
        <p>
          Integrated decentralized file storage (IPFS & Ceramic) with blockchain
          using oracle services.
        </p>
        <p>
          Conducted a research to benchmark decentralized storage platforms
          (IPFS and Ceramic).
        </p>
      </>
    ),
  },
  {
    title: "Web3-Credit-Scoring",
    imgSrc: "project-imgs/web3-credit-scoring.gif",
    code: "https://www.github.com",
    projectLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    tech: ["Python", "Solidity", "ReactJs", "ML", "Blockchain"],
    description:
      "An R&D project focused on integrating web3 and machine learning through three approaches to determine a web3 credit score",
    modalContent: (
      <>
        <p>Played a key role in researching and developing :</p>
        <p>
          1. On-Chain Data: - Explored and extracted lending and borrowing
          histories from Moola Market and Aave on-chain data. - Implemented
          smart contracts for secure data extraction, ensuring transparency in
          decentralized finance activities.
        </p>
        <p>
          2. Features: - Extracted features by analyzing Moola Market's and
          Aave's data
        </p>
        <p>
          3. ML Model: - Implemented machine learning algorithms for predicting
          credit score
        </p>
        <p>
          4. Score: - Designed a scoring framework combining ML insights with
          transparent on-chain data from Moola Market and Aave. - Developed a
          user-friendly interface for clear presentation of Web3 credit scores.
        </p>
        <p>
          5. Development Challenges: - Addressed interoperability challenges
          between Web2 and Web3 technologies. - Ensured security and privacy in
          handling sensitive on-chain data from Moola Market and Aave.
        </p>
        <p>
          6. Adaptability: - Stayed updated on the evolving Web3 landscape,
          adapting the credit scoring system to changes in decentralized
          technologies and lending dynamics.
        </p>
      </>
    ),
  },
  {
    title: "AttoEarth(Spatial Data Registry)",
    imgSrc: "project-imgs/Quadtree.gif",
    code: "https://www.github.com",
    projectLink: "https://attoearth-demo.vercel.app/",
    tech: ["R&D", "Solidity", "Hardhat", "Node.js"],
    description:
      "AttoEarth represents a decentralized geospatial map data protocol designed to create highly efficient map data for seamless integration into web3 applications. Leveraging the decentralized capabilities of blockchain technology, AttoEarth stores map data on a public ledger, enabling its utilization in intricate spatial queries within smart contracts. The core elements of the AttoEarth protocol are meticulously crafted to facilitate rapid and resource-efficient range and point queries directly from smart contracts, essentially serving as a GIS engine tailored to operate within the Ethereum Virtual Machine (EVM)",
    modalContent: (
      <>
        <p>
          Implemented Quadtree in Solidity. I faced a significant challenge
          during the implementation of a Quadtree on the smart contract level.
          This challenge involved optimizing it for efficiency on multiple
          fronts, including gas consumption and the storage of Illinois School
          Locations as node points within the Quadtree.
        </p>
      </>
    ),
  },
  {
    title: "Minipay-Microwork",
    imgSrc: "project-imgs/Microwork.gif",
    code: "https://www.github.com",
    projectLink: "noProjects",
    tech: ["Next.js", "Solidity", "Hardhat"],
    description:
      "This project is currently under development to support MiniPay ambassadors in performing microwork. Suppliers can create new jobs, and workers can start tasks. Upon successful completion, they will automatically receive rewards in MAVU (ERC-20) and cUSD tokens.",
    modalContent: (
      <>
        <p>
          Developed the smart contracts & facilitated front end integration{" "}
        </p>
        <p>
          Implemented a vector similarity algorithm in Solidity to recommend
          jobs based on worker profiles. The algorithm also provides worker
          recommendations for specific jobs based on the required skills.
        </p>
      </>
    ),
  },
  {
    title: "Tempo ",
    imgSrc: "project-imgs/Tempo.png",
    code: "https://www.github.com",
    projectLink: "https://www.hellotempo.com/",
    tech: ["Python", "FastAPI", "SQLAlchemy"],
    description:
      "A project designed to facilitate membership services for electric bike owners",
    modalContent: (
      <>
        <p>
          Conducted research on various oracle systems, including Chainlink,
          RedStone, and Band, to select the most suitable oracle platform for
          Tempo.
        </p>
        <p>
          Engaged in the development of both oracle and reverse oracle
          solutions.
        </p>
        <p>Designed and implemented application-based oracle functionality.</p>
      </>
    ),
  },
  {
    title: "Minipay-Payroll",
    imgSrc: "project-imgs/example-project.jpg",
    code: "https://www.github.com",
    projectLink: "noProject",
    tech: ["Python", "FastAPI", "SQLAlchemy"],
    description:
      "A payroll app to manage payments for Minipay ambassadors in cUSD",
    modalContent: (
      <>
        <p>
          Developed a Next.js application integrated with a smart contract on
          the Celo mainnet to efficiently facilitate bulk CUSD transfers to over
          2000 Minipay ambassadors monthly.
        </p>
      </>
    ),
  },
  {
    title: "Crowdsplit",
    imgSrc: "project-imgs/example-project.jpg",
    code: "https://www.github.com",
    projectLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    tech: ["Python", "FastAPI", "SQLAlchemy"],
    description: "A decentralized open-source crowdfunding for all creators",
    modalContent: (
      <>
        <p>Alright, you got me. I&apos;m all out of paint references.</p>
        <p>
          Point is, use this space to explain a bit further WHAT this project
          is, as well as what YOU contributed to it.
        </p>
        <p>You get the idea. Now more lorem {":)"}</p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur
          quia officia odio nulla consectetur aperiam ad tempora magni magnam
          nesciunt.
        </p>
        <p>
          Fuga id sapiente facere ipsa eius exercitationem officiis deleniti,
          rerum dolorum. Deserunt soluta modi culpa animi.
        </p>
      </>
    ),
  },
  {
    title: "Paint Reference 4",
    imgSrc: "project-imgs/example-project.jpg",
    code: "https://www.github.com",
    projectLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    tech: ["Python", "FastAPI", "SQLAlchemy"],
    description:
      "I couldn't think of another paint reference app, so here we are. I think you get the idea, right? Use your imagination 🌈",
    modalContent: (
      <>
        <p>Alright, you got me. I&apos;m all out of paint references.</p>
        <p>
          Point is, use this space to explain a bit further WHAT this project
          is, as well as what YOU contributed to it.
        </p>
        <p>You get the idea. Now more lorem {":)"}</p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur
          quia officia odio nulla consectetur aperiam ad tempora magni magnam
          nesciunt.
        </p>
        <p>
          Fuga id sapiente facere ipsa eius exercitationem officiis deleniti,
          rerum dolorum. Deserunt soluta modi culpa animi.
        </p>
      </>
    ),
  },
  {
    title: "Paint Reference 4",
    imgSrc: "project-imgs/example-project.jpg",
    code: "https://www.github.com",
    projectLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    tech: ["Python", "FastAPI", "SQLAlchemy"],
    description:
      "I couldn't think of another paint reference app, so here we are. I think you get the idea, right? Use your imagination 🌈",
    modalContent: (
      <>
        <p>Alright, you got me. I&apos;m all out of paint references.</p>
        <p>
          Point is, use this space to explain a bit further WHAT this project
          is, as well as what YOU contributed to it.
        </p>
        <p>You get the idea. Now more lorem {":)"}</p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur
          quia officia odio nulla consectetur aperiam ad tempora magni magnam
          nesciunt.
        </p>
        <p>
          Fuga id sapiente facere ipsa eius exercitationem officiis deleniti,
          rerum dolorum. Deserunt soluta modi culpa animi.
        </p>
      </>
    ),
  },
  {
    title: "Paint Reference 4",
    imgSrc: "project-imgs/example-project.jpg",
    code: "https://www.github.com",
    projectLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    tech: ["Python", "FastAPI", "SQLAlchemy"],
    description:
      "I couldn't think of another paint reference app, so here we are. I think you get the idea, right? Use your imagination 🌈",
    modalContent: (
      <>
        <p>Alright, you got me. I&apos;m all out of paint references.</p>
        <p>
          Point is, use this space to explain a bit further WHAT this project
          is, as well as what YOU contributed to it.
        </p>
        <p>You get the idea. Now more lorem {":)"}</p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur
          quia officia odio nulla consectetur aperiam ad tempora magni magnam
          nesciunt.
        </p>
        <p>
          Fuga id sapiente facere ipsa eius exercitationem officiis deleniti,
          rerum dolorum. Deserunt soluta modi culpa animi.
        </p>
      </>
    ),
  },
  {
    title: "Paint Reference 4",
    imgSrc: "project-imgs/example-project.jpg",
    code: "https://www.github.com",
    projectLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    tech: ["Python", "FastAPI", "SQLAlchemy"],
    description:
      "I couldn't think of another paint reference app, so here we are. I think you get the idea, right? Use your imagination 🌈",
    modalContent: (
      <>
        <p>Alright, you got me. I&apos;m all out of paint references.</p>
        <p>
          Point is, use this space to explain a bit further WHAT this project
          is, as well as what YOU contributed to it.
        </p>
        <p>You get the idea. Now more lorem {":)"}</p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur
          quia officia odio nulla consectetur aperiam ad tempora magni magnam
          nesciunt.
        </p>
        <p>
          Fuga id sapiente facere ipsa eius exercitationem officiis deleniti,
          rerum dolorum. Deserunt soluta modi culpa animi.
        </p>
      </>
    ),
  },
];

export default projects;
