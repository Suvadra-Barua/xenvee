import React from 'react';
import Timeline from './Timeline-old'; // Adjust the import path accordingly

const timelineData = [
  {
    date: '1 Aug, 2023',
    items: [
      {
        title: 'Created "Preline in React" task',
        description: 'Find more detailed instructions here.',
        avatar: 'https://images.unsplash.com/photo-1659482633369-9fe69af50bfb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8auto=format&fit=facearea&facepad=3&w=320&h=320&q=80',
        author: 'James Collins',
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
            <polyline points="14 2 14 8 20 8"></polyline>
            <line x1="16" x2="8" y1="13" y2="13"></line>
            <line x1="16" x2="8" y1="17" y2="17"></line>
            <line x1="10" x2="8" y1="9" y2="9"></line>
          </svg>
        ),
      },
      {
        title: 'Release v5.2.0 quick bug fix 🐞',
        author: 'Alex Gregarov',
        avatar: '',
        icon: null,
      },
    ],
  },
  {
    date: '31 Jul, 2023',
    items: [
      {
        title: 'Take a break ⛳️',
        description: 'Just chill for now... 😉',
        icon: null,
      },
    ],
  },
];

const TimeLineWrapper: React.FC = () => {
    //@ts-ignore
  return <Timeline data={timelineData} />;
};

export default TimeLineWrapper;
