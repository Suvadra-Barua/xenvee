import BlurFade from "../ui/blur-fade";
import { ResumeCard } from "../ui/resume-card";

const JobFile = () => {
  const work = [
    {
      company: "Tero Labs LLC",
      href: "https://atomic.finance",
      badges: [],
      location: "Santa Carla, USA",
      title: "Blockchain Engineer",
      logoUrl: "/atomic.png",
      start: "November 2021",
      end: "Running",
      description: `<li>Designed, developed & shipped several projects related to NFT, Blockchain & Web3</li>
<li>Implemented smart contracts with a focus on maintainability, usability, scalability, and performance</li>
<li>Facilitated Front End integration with Smart Contracts</li>
<li>Developed Smart Contracts with Solidity (ERC20, ERC721, ERC777, ERC1155)</li>
<li>Led the smart contract development for issuing governance tokens & infrastructure</li>
<li>Implement staking token based on ERC20 standard</li>
<li>Proposed architectural improvements in blockchain projects</li>
<li>Audited & assessed smart contracts for adherence to security standards (SWC Registry)</li>
<li>Designed & developed crypto accounting application for Celo with multiple wallet integrations</li>
<li>Conducted a research study on 20 L1 & 11 L2 chains based on 10 criterias including DEX, TPS, etc</li>`,
    },
    {
      company: "Ostad ",
      badges: [],
      href: "https://ostad.app/",
      location: "Dhaka, Bangladesh",
      title: "Lead Instructor",
      logoUrl: "/shopify.svg",
      start: "Aug 2023",
      end: " Dec 2023",
      description: `<li>Designed 90% of the comprehensive blockchain course module, covering fundamental to advanced concepts</li>
<li>Developed engaging and interactive course materials, including lectures, assignments, and hands-on projects</li>
<li>Led 70% of the classes, delivering high-quality instruction to a diverse group of students</li>
<li>Collaborated with other instructors and industry professionals to ensure course content was current and relevant</li>`,
    },
    {
      company: "University of Creative Technology, Chittagong",
      href: "https://nvidia.com/",
      badges: [],
      location: " Chattogram, Bangladesh",
      title: "Lecturer",
      logoUrl: "/nvidia.png",
      start: "Jul 2022",
      end: "Dec 2022",
      description: `Completed coursework in:
<li>Social and Professional Ethics in Computing</li>
<li>Introduction to Computing & Programming Laboratory</li>
<li>Web Programming Laboratory</li>`,
    },
    {
      company: "Silicon Orchard Ltd.",
      href: "https://splunk.com",
      badges: [],
      location: "Dhaka, Bangladesh",
      title: "Blockchain Intern",
      logoUrl: "/splunk.svg",
      start: "Aug 2021 ",
      end: "Oct 2021",
      description: `<li>Implemented multiple NFT projects & marketplaces</li>
<li>Developed mainly on Ethereum blockchain platform tooling</li>`,
    },
    {
      company: "BJIT Ltd",
      href: "https://li.me/",
      badges: [],
      location: "Dhaka, Bangladesh",
      title: "Trainee Engineer",
      logoUrl: "/lime.svg",
      start: "Aug 2019",
      end: "Oct 2019",
      description:
    ""    
    },
  ];
  const BLUR_FADE_DELAY = 0.04;

  return (
    <div className="w-[90%] md:w-full mx-auto flex flex-col gap-y-3">
      {work.map((work, id) => (
        <BlurFade key={work.company} delay={BLUR_FADE_DELAY * 6 + id * 0.05}>
          <ResumeCard
            key={work.company}
            logoUrl={work.logoUrl}
            altText={work.company}
            title={work.company}
            subtitle={work.title}
            href={work.href}
            badges={work.badges}
            period={`${work.start} - ${work.end ?? "Present"}`}
            description={work.description}
          />
        </BlurFade>
      ))}
    </div>
  );
};
export default JobFile;
