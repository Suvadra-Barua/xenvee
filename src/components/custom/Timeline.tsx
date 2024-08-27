import React from 'react';
import BlurFade from '../ui/blur-fade';

interface TimelineItem {
  date: string;
  title: string;
  description: string;
}

interface TimelineProps {
  items: TimelineItem[];
}
const BLUR_FADE_DELAY = 0.04;


const Timeline: React.FC<TimelineProps> = ({ items }) => {
  return (
    
    <div className='bg-white p-8 rounded-sm'>
    <ol className="border-s border-earth-500 dark:border-neutral-500">
      {items.map((item, index) => (
        <BlurFade delay={BLUR_FADE_DELAY * 6 + index * 0.05}>
        <li key={index} className=''>
          <div className="flex-start flex items-center pt-3 ">
            <div className="-ms-[5px] me-3 h-[9px] w-[9px] rounded-full bg-earth-300 dark:bg-neutral-500"></div>
            <p className="text-sm text-neutral-500 dark:text-neutral-300">
              {item.date}
            </p>
          </div>
          <div className="mb-6 ms-4 mt-2">
            <h4 className="mb-1.5 text-xl font-semibold">{item.title}</h4>
            <p className="mb-3 text-neutral-500 dark:text-neutral-300">
              {item.description}
            </p>
          </div>
        </li>
        </BlurFade>
      ))}
    </ol>
    </div>
  );
};

export default Timeline;
