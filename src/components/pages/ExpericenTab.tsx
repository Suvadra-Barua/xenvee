import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import JobFile from "../custom/JobFile";
import { SectionHeader } from "../custom/SectionHeader";

import ExpericenTabPageData from "@/app/data/ExperienceTab";
export function ExpericenTab() {
const {professional_work,teaching_Experince,volunteer_experience,research_experience} = ExpericenTabPageData;
  return (
    <section
      id="professional-experience"
      className="section-wrapper pt-16 md:pt-28 w-[90%] md:w-[80%] mx-auto "
    >
      <SectionHeader title="Professional Experience" dir="l" />
      <Tabs defaultValue="work-experince" className="text-sm md:text-base">
        <TabsList className="grid w-full  my-4 md:w-1/2 mx-auto grid-cols-4 bg-earth-500 text-white/50 rounded-full">
        <TabsTrigger
            value="research-experience"
            className=" rounded-full data-[state=active]:text-earth-500 "
          >
            {" "}
            Research
          </TabsTrigger>
          
          <TabsTrigger
            value="work-experince"
            className=" rounded-full data-[state=active]:text-earth-500 "
          >
            {" "}
            Work
          </TabsTrigger>
          <TabsTrigger
            value="teaching"
            className="rounded-full data-[state=active]:text-earth-500"
          >
            Teaching
          </TabsTrigger>
          {/* <TabsTrigger value="pa" className="rounded-full data-[state=active]:text-earth-500" >Password</TabsTrigger> */}
          <TabsTrigger
            value="volunteer"
            className="rounded-full data-[state=active]:text-earth-500"
          >
            Volunteer
          </TabsTrigger>
        </TabsList>
        <TabsContent value="research-experience">
          <JobFile work={research_experience} />
        </TabsContent>
        <TabsContent value="work-experince">
          <JobFile work={professional_work} />
        </TabsContent>
        <TabsContent value="teaching">
          <JobFile work={teaching_Experince} />
        </TabsContent>
        <TabsContent value="volunteer">
          <JobFile work={volunteer_experience} />
        </TabsContent>
      </Tabs>
    </section>
  );
}
