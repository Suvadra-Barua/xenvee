"use client"
import { SectionHeader } from "../custom/SectionHeader";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import parse from "html-react-parser";
import BlurFade from "../ui/blur-fade";
import { motion } from "framer-motion";
const Icon = () => {
  return (
    <>
      <svg
        className="w-3.5 h-3.5 me-2 text-earth-500 dark:text-earth-400 flex-shrink-0"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
      </svg>
    </>
  );
};
const Skills = () => {
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

  const BLUR_FADE_DELAY = 0.04;
  return (
    <section
      id="professional-development"
      className="section-wrapper pt-16 md:pt-28 md:w-[80%] w-[90%] mx-auto"
    >
      <SectionHeader title="Professional Development" dir="r" />

      <Tabs defaultValue="technical" className="text-sm md:text-base">
        <TabsList className="grid w-full  my-4 md:w-1/2 mx-auto grid-cols-3 bg-earth-500 text-white/50 rounded-full">
          <TabsTrigger
            value="technical"
            className=" rounded-full data-[state=active]:text-earth-500 "
          >
            {" "}
            Technical
          </TabsTrigger>
          <TabsTrigger
            value="courses"
            className="rounded-full data-[state=active]:text-earth-500"
          >
            Online Courses
          </TabsTrigger>
          <TabsTrigger
            value="workshop"
            className="rounded-full data-[state=active]:text-earth-500"
          >
            Training 
          </TabsTrigger>
        </TabsList>
        <TabsContent value="technical">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <div className="grid grid-cols-4 grid-rows-auto gap-x-8 gap-y-4 2xl:grid-cols-7 2xl:grid-rows-2">
              <motion.div
                className="col-span-4 row-span-1 2xl:row-span-2 md:col-span-2"
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex flex-col overflow-hidden rounded-2xl bg-earth-50 px-4 py-8 h-full">
                  <h3 className="text-2xl text-earth-500 xs:text-xl md:text-2xl font-bold">
                    {allSkills[0].title}
                  </h3>
                  <ul className="space-y-1 list-disc list-inside marker:text-earth-500">
                    {allSkills[0].skills.map((skill) => (
                      <li className="space-y-2">
                        {skill.label.length > 0 && (
                          <span className="font-medium text-earth-600">
                            {skill.label}:{" "}
                          </span>
                        )}
                        <span className="text-black/70">{skill.value}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
              <motion.div
                className="col-span-4 row-span-1 md:col-span-2 2xl:col-span-3"
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex flex-col overflow-hidden rounded-2xl bg-earth-50 px-4 py-8 h-full">
                  <h3 className="text-2xl text-earth-500 xs:text-xl md:text-2xl font-bold">
                    {allSkills[1].title}
                  </h3>
                  <ul className="space-y-1 list-disc list-inside marker:text-earth-500">
                    {allSkills[1].skills.map((skill) => (
                      <li className="space-y-2">
                        {skill.label.length > 0 && (
                          <span className="font-medium text-earth-600">
                            {skill.label}:{" "}
                          </span>
                        )}
                        <span className="text-black/70">{skill.value}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
              <motion.div
                className="col-span-4 row-span-2 md:col-span-3 2xl:col-span-2"
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex flex-col overflow-hidden rounded-2xl bg-earth-50 px-4 py-8 h-full">
                  <h3 className="text-2xl text-earth-500 xs:text-xl md:text-2xl font-bold">
                    {allSkills[2].title}
                  </h3>
                  <ul className="space-y-1 list-disc list-inside marker:text-earth-500">
                    {allSkills[2].skills.map((skill) => (
                      <li className="space-y-2">
                        {skill.label.length > 0 && (
                          <span className="font-medium text-earth-600">
                            {skill.label}:{" "}
                          </span>
                        )}
                        <span className="text-black/70">{skill.value}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
              <motion.div
                className="col-span-4 row-span-1 md:col-span-1 md:row-span-2 2xl:row-span-1"
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex flex-col overflow-hidden rounded-2xl bg-earth-50 px-4 py-8 h-full">
                  <h3 className="text-2xl text-earth-500 xs:text-xl md:text-2xl font-bold">
                    {allSkills[4].title}
                  </h3>
                  <ul className="space-y-1 list-disc list-inside marker:text-earth-500">
                    {allSkills[4].skills.map((skill) => (
                      <li className="space-y-2">
                        {skill.label.length > 0 && (
                          <span className="font-medium text-earth-600">
                            {skill.label}:{" "}
                          </span>
                        )}
                        <span className="text-black/70">{skill.value}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
              <motion.div
                className="col-span-4 row-span-1 md:col-span-2 2xl:col-span-1"
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex flex-col overflow-hidden rounded-2xl bg-earth-50 px-4 py-8 h-full">
                  <h3 className="text-2xl text-earth-500 xs:text-xl md:text-2xl font-bold">
                    {allSkills[3].title}
                  </h3>
                  <ul className="space-y-1 list-disc list-inside marker:text-earth-500">
                    {allSkills[3].skills.map((skill) => (
                      <li className="space-y-2">
                        {skill.label.length > 0 && (
                          <span className="font-medium text-earth-600">
                            {skill.label}:{" "}
                          </span>
                        )}
                        <span className="text-black/70">{skill.value}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
              <motion.div
                className="col-span-4 row-span-2 md:col-span-2 2xl:col-span-1 md:row-span-1"
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex flex-col overflow-hidden rounded-2xl bg-earth-50 px-4 py-8 h-full">
                  <h3 className="text-2xl text-earth-500 xs:text-xl md:text-2xl font-bold">
                    {allSkills[5].title}
                  </h3>
                  <ul className="space-y-1 list-disc list-inside marker:text-earth-500">
                    {allSkills[5].skills.map((skill) => (
                      <li className="space-y-2">
                        {skill.label.length > 0 && (
                          <span className="font-medium text-earth-600">
                            {skill.label}:{" "}
                          </span>
                        )}
                        <span className="text-black/70">{skill.value}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </TabsContent>
        <TabsContent value="workshop">
          <ol className="mt-4 space-y-4 text-left text-gray-800 dark:text-gray-800 ">
            {trainingWorkShop.map((course, index) => {
              return (
                <BlurFade
                  key={index}
                  delay={BLUR_FADE_DELAY * 6 + index * 0.05}
                >
                  <li className="flex items-center gap-6 space-x-3 my-4 bg-earth-50 rounded-2xl p-4">
                    <span>{course.year}</span>
                    <a href={course.url}>
                      <span>{course.content}</span>
                    </a>
                  </li>
                </BlurFade>
              );
            })}
          </ol>
        </TabsContent>
        <TabsContent value="courses">
          <ol className="mt-4 space-y-4 text-left text-gray-800 dark:text-gray-800">
            {OnlineCourses.map((course, index) => {
              return (
                <BlurFade
                  key={index}
                  delay={BLUR_FADE_DELAY * 6 + index * 0.05}
                >
                  <a href={course.link}>
                    <li className="flex items-center space-x-3 rtl:space-x-reverse p-4 bg-earth-50 my-4 rounded-2xl">
                      <Icon />
                      <span>{parse(course.title)}</span>
                    </li>
                  </a>
                </BlurFade>
              );
            })}
          </ol>
        </TabsContent>
      </Tabs>
    </section>
  );
};

export default Skills;
