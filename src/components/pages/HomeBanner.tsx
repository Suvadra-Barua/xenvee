import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ReactNode } from "react";
import BlurFade from "../ui/blur-fade";
const HomeBanner = () => {
  return (
    <section
      className="section-wrapper flex flex-col lg:flex-row w-[90%] md:w-[80%] mx-auto gap-4 md:gap-0 lg:mb-16" id="persona"
    >
      <div className="lg:w-3/5 order-2 lg:order-1 ">
        <MyDetails />
      </div>
      <div className="relative lg:w-2/5 flex justify-center lg:justify-end  items-center order-1 lg:order-2">
        <Image
          className="rounded-full border-4 border-dotted border-black bg-earth-300 md:mt-20"
          src="/Suvadra_cool.png"
          alt="Suvadra Barua"
          width={300}
          height={300}
        />
      </div>
    </section>
  );
};

interface StaticHeightBoxProps {
  children?: ReactNode;
}
const BLUR_FADE_DELAY = 0.5;
const TabDeatils: React.FC<StaticHeightBoxProps> = ({ children }) => {
  return (
    <BlurFade delay={BLUR_FADE_DELAY}>
      <div
        className={`flex items-center justify-center h-[55%] text-white rounded-sm `}
      >
        {children}
      </div>
    </BlurFade>
  );
};
const MyDetails = () => {
  return (
    <>
      <h1 className="text-2xl md:text-4xl font-bold my-2 ">
        Hello, I'm Suvadra Barua
      </h1>
      <h4 className="text-lg md:text-xl font-semibold mb-4">
        Software Engineer
      </h4>
      <Tabs
        defaultValue="about-me"
        className="md:mx-auto text-sm md:text-base h-full"
      >
        <TabsList className="grid w-full  my-4 md:w-3/4 mx-auto grid-cols-3 bg-earth-500 text-white/50 rounded-full">
          <TabsTrigger
            value="about-me"
            className=" rounded-full data-[state=active]:text-earth-500 text-sm "
          >
            {" "}
            About Me
          </TabsTrigger>
          <TabsTrigger
            value="research-agenda"
            className="rounded-full data-[state=active]:text-earth-500 text-sm -mx-2 md:mx-0"
          >
            Research Agenda
          </TabsTrigger>
          <TabsTrigger
            value="education"
            className="rounded-full data-[state=active]:text-earth-500 text-sm "
          >
            Education
          </TabsTrigger>
        </TabsList>
        <TabsContent value="about-me">
          <TabDeatils>
            {" "}
            <article className="text-sm md:text-base text-black/90 text-justify">
              With over 2 years of experience in designing, developing, and
              deploying decentralized applications (DApps) on Celo, Ethereum,
              and other blockchain platforms, my approach to project selection
              is centered around continuous learning and adaptability. I don't
              limit myself to projects based solely on existing knowledge;
              instead, I actively seek opportunities for acquiring new skills
              and insights. I engage in frontend, backend, ML etc. development
              tasks, demonstrating a willingness to explore and learn new areas.
              While I may not consider myself a pro in every aspect, I thrive on
              the challenge of mastering new technologies. Additionally, I have
              a proven ability to mentor and educate others about blockchain
              technology and smart contracts
            </article>
          </TabDeatils>
        </TabsContent>
        <TabsContent value="research-agenda">
          <TabDeatils>
            {" "}
            <p className="text-sm md:text-base text-black/90 text-justify">
              As recent advancements within AI continue to transform the
              capabilities of edge devices, they present unique challenges and
              opportunities in computing. My research agenda is dedicated to
              pioneering advanced AI models that are not only generalizable and
              interpretable but also reliable enough for critical medical
              applications. A key aspect of my research agenda is to improve the
              affordability and accuracy of medical devices, with the goal of
              making these technologies accessible in underprivileged regions
              worldwide. While my primary interest is in healthcare, I also
              possess a keen curiosity in autonomous vehicle technologies.{" "}
              <br />
              <br />
              To know more about my research, please visit{" "}
              <a href="/publications">Research Page.</a>
            </p>
          </TabDeatils>
        </TabsContent>
        <TabsContent value="education">
          <TabDeatils>
            {" "}
            <p className="text-sm md:text-base text-black/90 text-justify">
              As recent advancements within AI continue to transform the
              capabilities of edge devices, they present unique challenges and
              opportunities in computing. My research agenda is dedicated to
              pioneering advanced AI models that are not only generalizable and
              interpretable but also reliable enough for critical medical
              applications. A key aspect of my research agenda is to improve the
              affordability and accuracy of medical devices, with the goal of
              making these technologies accessible in underprivileged regions
              worldwide. While my primary interest is in healthcare, I also
              possess a keen curiosity in autonomous vehicle technologies.{" "}
              <br />
              <br />
              To know more about my research, please visit{" "}
              <a href="/publications">Research Page.</a>
            </p>
          </TabDeatils>
        </TabsContent>
      </Tabs>
    </>
  );
};

export default HomeBanner;
