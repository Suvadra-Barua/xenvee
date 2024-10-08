import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SectionHeader } from "../custom/SectionHeader";
import BlurFade from "../ui/blur-fade";
import parse from "html-react-parser";
import prestigePageData from "@/app/data/prestige";
const BLUR_FADE_DELAY = 0.04;
const Prestige = () => {
  const { publications, awards, newsItems } = prestigePageData;
  return (
    <section
      id="prestige"
      className="section-wrapper pt-16 md:pt-28 w-[90%] md:w-[80%]  mx-auto "
    >
      <SectionHeader title="Prestige" dir="r" />
      <Tabs defaultValue="publication" className="text-sm md:text-base">
        <TabsList className="grid w-full  my-4 md:w-1/2 mx-auto grid-cols-3 bg-earth-500 text-white/50 rounded-full">
          <TabsTrigger
            value="publication"
            className=" rounded-full data-[state=active]:text-earth-500 "
          >
            {" "}
            Publication
          </TabsTrigger>
          <TabsTrigger
            value="awards"
            className="rounded-full data-[state=active]:text-earth-500"
          >
            Awards & Scholarship
          </TabsTrigger>
          <TabsTrigger
            value="features"
            className="rounded-full data-[state=active]:text-earth-500"
          >
            Features{" "}
          </TabsTrigger>
        </TabsList>
        <TabsContent value="publication">
          <div className="w-full  flex flex-col gap-4 text-xs md:text-sm">
            {publications.map((publication, index) => (
              <BlurFade
                key={publication.title}
                delay={BLUR_FADE_DELAY * 6 + index * 0.05}
              >
                <div className="rounded-lg border text-card-foreground shadow-sm  p-4 bg-earth-50">
                  <h3 className="font-bold">
                    {publication.title}{" "}
                    <a href={publication.url}>
                      <i>
                        <u>[link]</u>
                      </i>
                    </a>
                  </h3>
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
        <TabsContent value="awards">
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
        <TabsContent value="features">
          <div className="w-full  flex flex-col gap-4 text-xs md:text-sm">
            {newsItems.map((award, index) => (
              <BlurFade key={index} delay={BLUR_FADE_DELAY * 6 + index * 0.05}>
                <a href={award.link} target="_blank" className="rounded-lg border text-card-foreground shadow-sm  p-4 bg-earth-50 flex flex-col md:flex-row md:justify-between md:gap-4">
                  <div>
                  <p className="font-bold mb-2 text-lg">{parse(award.description)}</p>
                  {award.tags && award.tags.length > 0 && award.tags.map((tag) => (<span  className="font-semibold text-earth-700/70">{tag}  </span>))}
                  <p>{award.date}</p>
                  </div>
                  <div>
                    <a href={award.link}>
                      <img
                        src={award.image}
                        alt="news"
                        className="h-32 w-72 rounded-lg object-fill"
                      />
                    </a>
                  </div>
                  
                </a>
              </BlurFade>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </section>
  );
};

export default Prestige;
