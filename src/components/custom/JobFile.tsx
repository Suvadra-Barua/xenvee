import { Work } from "@/lib/types";
import BlurFade from "../ui/blur-fade";
import { ResumeCard } from "../ui/resume-card";

interface JobFileProps {
  work: Work[];
}

const JobFile: React.FC<JobFileProps> = ({ work }) => {
  const BLUR_FADE_DELAY = 0.04;

  return (
    <div className=" md:w-full mx-auto flex flex-col gap-y-3">
      {work.map((item, id) => (
        <BlurFade key={item.company} delay={BLUR_FADE_DELAY * 6 + id * 0.05}>
          <ResumeCard
            key={item.company}
            logoUrl={item.logoUrl}
            altText={item.company}
            title={item.company}
            subtitle={item.title}
            href={item.href}
            badges={item.badges}
            period={`${item.start} - ${item.end ?? "Present"}`}
            description={item.description}
          />
        </BlurFade>
      ))}
    </div>
  );
};

export default JobFile;
