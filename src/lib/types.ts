// src/ui/resume-card.tsx or wherever the interface is defined
export interface ResumeCardProps {
    company?: string;
    logoUrl: string;
    altText: string;
    title: string;
    subtitle?: string;
    href?: string;
    badges?: readonly string[];
    period: string;
    description?: string;
    location:string;
    start:string;
    end:string;
  }
  export interface Work {
    company: string;
    href: string;
    badges: string[];
    location: string;
    title: string;
    logoUrl: string;
    start: string;
    end?: string; // `end` is optional
    description: string;
  }
  