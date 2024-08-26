import { ExpericenTab } from "@/components/custom/ExpericenTab";
import Heading from "@/components/custom/Heading";
import HomeBanner from "@/components/custom/HomeBanner";
import JobExperience from "@/components/custom/JobExpereince";
import JobFile from "@/components/custom/JobFile";

export default function Home() {
  const experiences = [
    {
      jobNumber: 1,
      jobTitle: 'Blockchain Engineer',
      company: 'Tero Labs LLC',
      location: 'Santa Carla, USA',
      startDate: 'Nov 2021',
      endDate: 'Present',
      employmentType: 'Full-time',
      points: [
        'Designed, developed & shipped several projects related to NFT, Blockchain & Web3',
        'Implemented smart contracts with a focus on maintainability, usability, scalability, and performance',
        'Facilitated Front End integration with Smart Contracts',
        'Developed Smart Contracts with Solidity (ERC20, ERC721, ERC777, ERC1155)',
        'Led the smart contract development for issuing governance tokens & infrastructure',
        'Implemented staking token based on ERC20 standard',
        'Proposed architectural improvements in blockchain projects',
        'Audited & assessed smart contracts for adherence to security standards (SWC Registry)',
        'Designed & developed crypto accounting application for Celo with multiple wallet integrations',
        'Conducted a research study on 20 L1 & L2 chains based on 10 criteria including DEX, TPS, etc.',
      ],
    },
    {
      jobNumber: 2,
      jobTitle: 'Lead Instructor',
      company: 'Ostad',
      location: 'Dhaka, Bangladesh',
      startDate: 'Aug 2023',
      endDate: 'Dec 2023',
      employmentType: 'Contract',
      points: [
        'Designed 90% of the comprehensive blockchain course module, covering fundamental to advanced concepts',
        'Developed engaging and interactive course materials, including lectures, assignments, and hands-on projects',
        'Led 70% of the classes, delivering high-quality instruction to a diverse group of students',
        'Collaborated with other instructors and industry professionals to ensure course content was current and relevant',
      ],
    },
  ];
  return (
    <main>
      <Heading />
      <HomeBanner/>
      <ExpericenTab/>
      {/* {experiences.map((experience) => (
        <JobExperience
          key={experience.jobNumber}
          jobNumber={experience.jobNumber}
          jobTitle={experience.jobTitle}
          company={experience.company}
          location={experience.location}
          startDate={experience.startDate}
          endDate={experience.endDate}
          employmentType={experience.employmentType}
          points={experience.points}
        />
      ))} */}
      {/* <JobFile/> */}

    </main>
  );
}
