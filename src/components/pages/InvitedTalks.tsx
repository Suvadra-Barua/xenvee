import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SectionHeader } from "../custom/SectionHeader";
import BlurFade from "../ui/blur-fade";
import parse from "html-react-parser";
import InvitedTalksPageData from "@/app/data/invitedTalks";
const { InvitedTalksData, ECActivites } = InvitedTalksPageData;
const BLUR_FADE_DELAY = 0.04;
const InvitedTalks = () => {
  return (
    <section
      id="participation-presentations"
      className="section-wrapper pt-16 md:pt-28 w-[90%] md:w-[80%]  mx-auto "
    >
      <SectionHeader title="Participation & Presentations" dir="r" />
      <Tabs
        defaultValue="extracurricular-activities"
        className="text-sm md:text-base"
      >
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
            Invited Talks{" "}
          </TabsTrigger>
        </TabsList>
        <TabsContent value="extracurricular-activities">
          <div className="w-full  flex flex-col gap-4 text-xs md:text-sm">
            {ECActivites.map((publication, index) => (
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
            {InvitedTalksData.map((award, index) => (
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
