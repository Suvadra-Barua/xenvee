import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SectionHeader } from "../custom/SectionHeader";
import BlurFade from "../ui/blur-fade";
import parse from 'html-react-parser';
const publications = [
  {
    title:
      "A Blockchain based Decentralized Video Streaming Platform with Content Protection System",
    authors: "Suvadra Barua, Dipon Talukder",
    journal:
      "23rd International Conference on Computer and Information Technology (ICCIT)",
    year: 2020,
    doi: "10.1109/ICCIT51783.2020.9392746",
  },
  {
    title:
      "OkkhorNama: BdSL Image Dataset For Real Time Object Detection Algorithms",
    authors: "Dipon Talukder, Fatima Jahara, Suvadra Barua, Md. Mokammel Haque",
    journal: "IEEE Region 10 Symposium (TENSYMP)",
    year: 2021,
    doi: "10.1109/TENSYMP52854.2021.9550907",
  },
  // Add more publications as needed
];
const awards = [
  `<div><b>Silver Award | Professional Category | Blockchain Olympiad Bangladesh, 2022 ⇗</b>'
<div>Project : AttoEarth - Solving Land Disputes at a High Precision</div>
Role: Blockchain Engineer</div>`,
  `Bronze Award | Student Category | Blockchain Olympiad Bangladesh, 2021 ⇗
Project : TrioChain -  A Blockchain Based Passport Management System for Bangladesh
Role: Team Leader`,
  `Merit Award | Student Category | International  Blockchain Olympiad Bangladesh, 2021`,
  `Technical Scholarship | Chittagong University of Engineering and Technology (CUET) ,2014-2018`,
  `Secondary School Certificate (SSC) Scholarship Award | Bangladesh Education Board, 2013-2015 ⇗`,
  `Winner | Kaptai Mathematical Olympiad, 2012`,
];
const BLUR_FADE_DELAY = 0.04;
const InvitedTalks = () => {
  return (
    <section
      id="participation-presentations"
      className="section-wrapper pt-16 md:pt-28 w-[90%] md:w-[80%]  mx-auto "
    >
      <SectionHeader title="Participation & Presentations" dir="r" />
      <Tabs defaultValue="extracurricular-activities" className="text-sm md:text-base">
        <TabsList className="grid w-full  my-4 md:w-1/2 mx-auto grid-cols-2 bg-earth-500 text-white/50 rounded-full">
          <TabsTrigger
            value="extracurricular-activities"
            className=" rounded-full data-[state=active]:text-earth-500 "
          >
            {" "}
            Extracurricular Activities
          </TabsTrigger>
          <TabsTrigger
            value="talks"
            className="rounded-full data-[state=active]:text-earth-500"
          >
Invited Talks          </TabsTrigger>
        </TabsList>
        <TabsContent value="extracurricular-activities">
          <div className="w-full  flex flex-col gap-4 text-xs md:text-sm">
            {publications.map((publication, index) => (
              <BlurFade
                key={publication.title}
                delay={BLUR_FADE_DELAY * 6 + index * 0.05}
              >
                <div className="rounded-lg border text-card-foreground shadow-sm  p-4 bg-earth-50">
                  <h3 className="font-bold">{publication.title}</h3>
                  <div className="font-medium">{publication.authors}</div>
                  <div className="">
                    {publication.journal}, {publication.year}{" "}
                  </div>
                  <div className="">{publication.doi}</div>
                </div>
              </BlurFade>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="talks">
          <div className="w-full  flex flex-col gap-4 text-xs md:text-sm">
            {awards.map((award, index) => (
              <BlurFade key={index} delay={BLUR_FADE_DELAY * 6 + index * 0.05}>
                <div className="rounded-lg border text-card-foreground shadow-sm  p-4 bg-earth-50">
                  {parse(award)}
                </div>
              </BlurFade>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </section>
  );
};

export default InvitedTalks;
