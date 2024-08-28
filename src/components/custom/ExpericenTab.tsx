import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import JobFile from "./JobFile"
import { SectionHeader } from "./SectionHeader";

export function ExpericenTab() {
  const professional_work = [
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
  const teaching_Experince = [
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
  ]
  const volunteer_experience = [    {
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
  },]
  return (
    <section id="professional-experience" className="section-wrapper pt-16 md:pt-28  md:w-[80%]  md:mx-auto ">
        <SectionHeader title="Experience" dir="l" />
    <Tabs defaultValue="work-experince" className="text-sm md:text-base">
      <TabsList className="grid w-full  my-4 md:w-1/2 mx-auto grid-cols-3 bg-earth-500 text-white/50 rounded-full">
        <TabsTrigger value="work-experince" className=" rounded-full data-[state=active]:text-earth-500 "> Work</TabsTrigger>
        <TabsTrigger value="teaching" className="rounded-full data-[state=active]:text-earth-500" >Teaching</TabsTrigger>
        {/* <TabsTrigger value="pa" className="rounded-full data-[state=active]:text-earth-500" >Password</TabsTrigger> */}
        <TabsTrigger value="volunteer" className="rounded-full data-[state=active]:text-earth-500" >Volunteer</TabsTrigger>
      </TabsList>
      <TabsContent value="work-experince">
        <JobFile work={professional_work}/>
      </TabsContent>
      <TabsContent value="teaching">
      <JobFile work={teaching_Experince}/>
      </TabsContent>
      <TabsContent value="volunteer">
      <JobFile work={volunteer_experience}/>
      </TabsContent>
    </Tabs>
    </section>
  )
}
