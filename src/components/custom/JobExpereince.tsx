// components/JobExperience.tsx
import React from 'react';

interface JobExperienceProps {
  jobNumber: number;
  jobTitle: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  employmentType: string;
  points: string[];
}

const JobExperience: React.FC<JobExperienceProps> = ({
  jobNumber,
  jobTitle,
  company,
  location,
  startDate,
  endDate,
  employmentType,
  points,
}) => {
  return (
    <div className="flex items-start p-4  bg-white my-4">
      <div className="text-xl font-bold text-gray-800 w-6">{jobNumber}</div>
      <div className="ml-4">
        <h3 className="text-xl font-semibold text-black">{jobTitle}</h3>
        <p className="text-gray-600">
          {company} | {location}
        </p>
        <p className="text-sm text-gray-500">
          {startDate} - {endDate} | {employmentType}
        </p>
        <ul className="list-disc ml-5 mt-2 text-gray-700">
          {points.map((point, index) => (
            <li key={index} className="mt-1">
              {point}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default JobExperience;
