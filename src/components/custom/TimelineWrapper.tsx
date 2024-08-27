import React from 'react';
import Timeline from './Timeline'; // Adjust the import path accordingly

const timelineItems = [
  {
    date: '01.07.2021',
    title: 'Title of section 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque diam non nisi semper, et elementum lorem ornare. Maecenas placerat facilisis mollis. Duis sagittis ligula in sodales vehicula.',
  },
  {
    date: '13.09.2021',
    title: 'Title of section 2',
    description: 'Libero expedita explicabo eius fugiat quia aspernatur autem laudantium error architecto recusandae natus sapiente sit nam eaque, consectetur porro molestiae ipsam an deleniti.',
  },
  {
    date: '25.11.2021',
    title: 'Title of section 3',
    description: 'Voluptatibus temporibus esse illum eum aspernatur, fugiat suscipit natus! Eum corporis illum nihil officiis tempore. Excepturi illo natus libero sit doloremque, laborum molestias rerum pariatur quam ipsam necessitatibus incidunt, explicabo.',
  },
];

const TimeLineWrapper: React.FC = () => {
  return <Timeline items={timelineItems} />;
};

export default TimeLineWrapper;
