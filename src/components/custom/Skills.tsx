import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import { SectionHeader } from "./SectionHeader";

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
  return (
    // <section className="bg-white w-[80%] mx-auto">
    //   <div className="py-4 mx-auto">
    //     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-2 h-full">
    //       <div className="col-span-2 sm:col-span-1 md:col-span-2  h-auto md:h-full flex flex-col ">
    // <div className="group  flex flex-col overflow-hidden rounded-2xl  bg-earth-200 px-4 py-8 flex-grow">
    //   {" "}
    //   <h3 className="z-10 text-2xl  text-earth-500 xs:text-xl md:text-2xl font-bold">
    //     BlockChain Development
    //   </h3>
    //   <ul className="space-y-1  list-disc list-inside marker:text-earth-500">
    //     {allSkills[0].skills.map((skill) => (
    //       <li className="space-y-2">
    //         {skill.label.length > 0 && (
    //           <span className="font-medium text-earth-600">
    //             {skill.label}:{" "}
    //           </span>
    //         )}
    //         <span className="text-black/70">{skill.value}</span>
    //       </li>
    //     ))}
    //   </ul>
    // </div>
    //       </div>
    //       <div className="col-span-2 sm:col-span-1 md:col-span-2 ">
    //         <div className="group  flex flex-col overflow-hidden  bg-earth-200 rounded-2xl px-4 pb-4 mb-4">
    //           <h3 className="z-10 text-2xl font-medium text-earth-500  p-4 xs:text-xl md:text-3xl">
    //             {allSkills[1].title}
    //           </h3>
    //           <ul className="space-y-1  list-disc list-inside marker:text-earth-500">
    //             {allSkills[1].skills.map((skill) => (
    //               <li className="space-y-2">
    //                 {skill.label.length > 0 && (
    //                   <span className="font-medium text-earth-600">
    //                     {skill.label}:{" "}
    //                   </span>
    //                 )}

    //                 <span className="text-black/70">{skill.value}</span>
    //               </li>
    //             ))}
    //           </ul>
    //         </div>
    //         <div className="grid gap-4 grid-cols-2 sm:grid-cols-2 2xl:grid-cols-2">
    //           <div className="group  flex flex-col overflow-hidden bg-earth-200 rounded-2xl ">
    //             <h3 className="z-10 text-2xl font-medium text-earth-500  p-4 xs:text-xl md:text-2xl">
    //               {allSkills[3].title}
    //             </h3>
    //             <ul className="space-y-1  list-disc list-inside marker:text-earth-500">
    //               {allSkills[3].skills.map((skill) => (
    //                 <li className="space-y-2">
    //                   {skill.label.length > 0 && (
    //                     <span className="font-medium text-earth-600">
    //                       {skill.label}:{" "}
    //                     </span>
    //                   )}
    //                   <span className="text-black/70">{skill.value}</span>
    //                 </li>
    //               ))}
    //             </ul>
    //           </div>
    //           <div className="group  flex flex-col overflow-hidden bg-earth-200 rounded-2xl px-4 py-4 ">
    //             <h3 className="z-10 text-2xl font-medium text-earth-500  xs:text-xl md:text-2xl">
    //               {allSkills[4].title}
    //             </h3>
    //             <ul className="space-y-1  list-disc list-inside marker:text-earth-500">
    //               {allSkills[4].skills.map((skill) => (
    //                 <li className="space-y-2">
    //                   {skill.label.length > 0 && (
    //                     <span className="font-medium text-earth-600">
    //                       {skill.label}:{" "}
    //                     </span>
    //                   )}
    //                   <span className="text-black/70">{skill.value}</span>
    //                 </li>
    //               ))}
    //             </ul>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="col-span-2 sm:col-span-1 md:col-span-2  h-auto md:h-full flex flex-col">
    //         <div className="group  flex flex-col overflow-hidden bg-earth-200 rounded-2xl px-4 pb-4  flex-grow">
    //           <h3 className="z-10 text-2xl font-medium text-earth-500  p-4 xs:text-xl md:text-3xl">
    //             {allSkills[2].title}
    //           </h3>
    //   <ul className="space-y-1  list-disc list-inside marker:text-earth-500">
    //     {allSkills[2].skills.map((skill) => (
    //       <li className="space-y-2">
    //         {skill.label.length > 0 && (
    //           <span className="font-medium text-earth-600">
    //             {skill.label}:{" "}
    //           </span>
    //         )}
    //         <span className="text-black/70">{skill.value}</span>
    //       </li>
    //     ))}
    //   </ul>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>

    // <section className=" w-[80%] mx-auto">
    //   <SectionHeader title="Skills" dir="r" />
    //   <div>
    //     <div className="parent">
    //       <div className="div1 ">
    //         <div className="group  flex flex-col overflow-hidden rounded-2xl  bg-earth-200 px-4 py-8 flex-grow">
    //           <h3 className="z-10 text-2xl  text-earth-500 xs:text-xl md:text-2xl font-bold">
    //             {allSkills[0].title}
    //           </h3>
    //           <ul className="space-y-1  list-disc list-inside marker:text-earth-500">
    //             {allSkills[0].skills.map((skill) => (
    //               <li className="space-y-2">
    //                 {skill.label.length > 0 && (
    //                   <span className="font-medium text-earth-600">
    //                     {skill.label}:{" "}
    //                   </span>
    //                 )}
    //                 <span className="text-black/70">{skill.value}</span>
    //               </li>
    //             ))}
    //           </ul>
    //         </div>
    //       </div>
    //       <div className="div2 h-full">
    //         <div className="group  flex flex-col overflow-hidden rounded-2xl  bg-earth-200 px-4 py-8 flex-grow">
    //           {" "}
    //           <h3 className="z-10 text-2xl  text-earth-500 xs:text-xl md:text-2xl font-bold">
    //             {allSkills[1].title}{" "}
    //           </h3>
    //           <ul className="space-y-1  list-disc list-inside marker:text-earth-500">
    //             {allSkills[1].skills.map((skill) => (
    //               <li className="space-y-2">
    //                 {skill.label.length > 0 && (
    //                   <span className="font-medium text-earth-600">
    //                     {skill.label}:{" "}
    //                   </span>
    //                 )}
    //                 <span className="text-black/70">{skill.value}</span>
    //               </li>
    //             ))}
    //           </ul>
    //         </div>{" "}
    //       </div>
    //       <div className="div3">
    //         <div className="group  flex flex-col overflow-hidden rounded-2xl  bg-earth-200 px-4 py-8 flex-grow">
    //           {" "}
    //           <h3 className="z-10 text-2xl  text-earth-500 xs:text-xl md:text-2xl font-bold">
    //             {allSkills[3].title}{" "}
    //           </h3>
    //           <ul className="space-y-1  list-disc list-inside marker:text-earth-500">
    //             {allSkills[3].skills.map((skill) => (
    //               <li className="space-y-2">
    //                 {skill.label.length > 0 && (
    //                   <span className="font-medium text-earth-600">
    //                     {skill.label}:{" "}
    //                   </span>
    //                 )}
    //                 <span className="text-black/70">{skill.value}</span>
    //               </li>
    //             ))}
    //           </ul>
    //         </div>
    //       </div>
    //       <div className="div4">
    //         <div className="group  flex flex-col overflow-hidden rounded-2xl  bg-earth-200 px-4 py-8 flex-grow">
    //           {" "}
    //           <h3 className="z-10 text-2xl  text-earth-500 xs:text-xl md:text-2xl font-bold">
    //             {allSkills[4].title}{" "}
    //           </h3>
    //           <ul className="space-y-1  list-disc list-inside marker:text-earth-500">
    //             {allSkills[4].skills.map((skill) => (
    //               <li className="space-y-2">
    //                 {skill.label.length > 0 && (
    //                   <span className="font-medium text-earth-600">
    //                     {skill.label}:{" "}
    //                   </span>
    //                 )}
    //                 <span className="text-black/70">{skill.value}</span>
    //               </li>
    //             ))}
    //           </ul>
    //         </div>{" "}
    //       </div>
    //       <div className="div5">
    //         <div className="group  flex flex-col overflow-hidden rounded-2xl  bg-earth-200 px-4 py-8 flex-grow">
    //           {" "}
    //           <h3 className="z-10 text-2xl  text-earth-500 xs:text-xl md:text-2xl font-bold">
    //             {allSkills[2].title}{" "}
    //           </h3>
    //           <ul className="space-y-1  list-disc list-inside marker:text-earth-500">
    //             {allSkills[2].skills.map((skill) => (
    //               <li className="space-y-2">
    //                 {skill.label.length > 0 && (
    //                   <span className="font-medium text-earth-600">
    //                     {skill.label}:{" "}
    //                   </span>
    //                 )}
    //                 <span className="text-black/70">{skill.value}</span>
    //               </li>
    //             ))}
    //           </ul>
    //         </div>{" "}
    //       </div>
    //       <div className="div6">
    //         <div className="group  flex flex-col overflow-hidden rounded-2xl  bg-earth-200 px-4 py-8 flex-grow">
    //           {" "}
    //           <h3 className="z-10 text-2xl  text-earth-500 xs:text-xl md:text-2xl font-bold">
    //             {allSkills[5].title}{" "}
    //           </h3>
    //           <ul className="space-y-1  list-disc list-inside marker:text-earth-500">
    //             {allSkills[5].skills.map((skill) => (
    //               <li className="space-y-2">
    //                 {skill.label.length > 0 && (
    //                   <span className="font-medium text-earth-600">
    //                     {skill.label}:{" "}
    //                   </span>
    //                 )}
    //                 <span className="text-black/70">{skill.value}</span>
    //               </li>
    //             ))}
    //           </ul>
    //         </div>{" "}
    //       </div>
    //     </div>
    //   </div>
    // </section>

    <section className="w-[90%] mx-auto md:w-[80%]">
      <SectionHeader title="Skills" dir="r" />
      <div>
        <div className="grid grid-cols-4 grid-rows-auto gap-x-8 gap-y-4 2xl:grid-cols-7 2xl:grid-rows-2 ">
          <div className="col-span-4 row-span-1 2xl:row-span-2 md:col-span-2">
            <div className="flex flex-col overflow-hidden rounded-2xl bg-earth-200 px-4 py-8 h-full">
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
          </div>
          <div className="col-span-4 row-span-1 md:col-span-2 2xl:col-span-3">
            <div className="flex flex-col overflow-hidden rounded-2xl bg-earth-200 px-4 py-8 h-full">
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
          </div>
          <div className="col-span-4 row-span-2 md:col-span-3 2xl:col-span-2">
            <div className="flex flex-col overflow-hidden rounded-2xl bg-earth-200 px-4 py-8 h-full">
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
          </div>
          <div className="col-span-4 row-span-1 md:col-span-1 md:row-span-2 2xl:row-span-1">
            <div className="flex flex-col overflow-hidden rounded-2xl bg-earth-200 px-4 py-8 h-full">
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
          </div>
          <div className="col-span-4 row-span-1 md:col-span-2 2xl:col-span-1">
            <div className="flex flex-col overflow-hidden rounded-2xl bg-earth-200 px-4 py-8 h-full">
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
          </div>
          <div className="col-span-4 row-span-2 md:col-span-2 2xl:col-span-1 md:row-span-1">
            <div className="flex flex-col overflow-hidden rounded-2xl bg-earth-200 px-4 py-8 h-full">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
