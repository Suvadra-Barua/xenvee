import React from 'react';

// Types for better reusability
interface TimelineItemProps {
  date: string;
  items: {
    icon?: JSX.Element;
    title: string;
    description?: string;
    avatar?: string;
    author?: string;
  }[];
}

interface TimelineProps {
  data: TimelineItemProps[];
}

const Timeline: React.FC<TimelineProps> = ({ data }) => {
  return (
    <div className='bg-earth-400'>
      {data.map((timelineItem, index) => (
        <div key={index}>
          {/* Heading */}
          <div className="ps-2 my-2 first:mt-0">
            <h3 className="text-xs font-medium uppercase text-gray-500">
              {timelineItem.date}
            </h3>
          </div>
          {/* End Heading */}

          {timelineItem.items.map((item, itemIndex) => (
            <div key={itemIndex} className="flex gap-x-3">
              {/* Icon */}
              <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-earth-500">
                <div className="relative z-10 size-7 flex justify-center items-center">
                  <div className="size-2 rounded-full bg-earth-700"></div>
                </div>
              </div>
              {/* End Icon */}

              {/* Right Content */}
              <div className="grow pt-0.5 pb-8">
                <h3 className="flex gap-x-1.5 font-semibold text-gray-800">
                  {item.icon && (
                    <span className="shrink-0 size-4 mt-1">
                      {item.icon}
                    </span>
                  )}
                  {item.title}
                </h3>
                {item.description && (
                  <p className="mt-1 text-sm text-gray-600">{item.description}</p>
                )}
                {item.author && (
                  <button
                    type="button"
                    className="mt-1 -ms-1 p-1 inline-flex items-center gap-x-2 text-xs rounded-lg border border-transparent text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
                  >
                    {item.avatar && (
                      <img
                        className="shrink-0 size-4 rounded-full"
                        src={item.avatar}
                        alt="Avatar"
                      />
                    )}
                    {item.author}
                  </button>
                )}
              </div>
              {/* End Right Content */}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Timeline;
