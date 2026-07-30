"use client";

import { useState } from "react";
import SectionTitle from "@/components/custom/SectionTitle";
import allExperience, { type ExperienceItem } from "@/app/data/experience";
import { FiArrowUpRight } from "react-icons/fi";

type TabKey = "research" | "work" | "teaching";

const tabs: { key: TabKey; label: string }[] = [
  { key: "research", label: "Research" },
  { key: "work", label: "Work" },
  { key: "teaching", label: "Teaching" },
];

const Row = ({ item }: { item: ExperienceItem }) => (
  <li className="grid grid-cols-1 gap-4 border-b border-ink-100 py-6 last:border-0 md:grid-cols-[160px_1fr]">
    <div className="font-mono text-xs text-ink-500">
      {item.start} — {item.end}
      {item.type && (
        <span className="mt-1 block text-[11px] text-ink-400">{item.type}</span>
      )}
    </div>
    <div>
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h3 className="text-[15px] text-ink-900">{item.role}</h3>
        {item.location && (
          <span className="font-mono text-[11px] text-ink-500">
            {item.location}
          </span>
        )}
      </div>
      <p className="mt-0.5 text-sm text-ink-600">
        {item.orgUrl ? (
          <a
            href={item.orgUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 hover:text-ink-900"
          >
            {item.org}
            <FiArrowUpRight size={12} />
          </a>
        ) : (
          item.org
        )}
      </p>
      <ul className="mt-3 list-disc space-y-1.5 pl-4 text-sm leading-relaxed text-ink-600 marker:text-ink-300">
        {item.bullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
    </div>
  </li>
);

const Experience = () => {
  const [active, setActive] = useState<TabKey>("research");
  const items = allExperience[active];

  return (
    <section id="experience" className="scroll-mt-20 pt-20">
      <SectionTitle
        index="02"
        title="Experience"
        subtitle="Research, industry, and teaching"
      />

      <div
        className="mb-6 inline-flex rounded-md border border-ink-200 bg-white p-0.5"
        role="tablist"
      >
        {tabs.map((t) => (
          <button
            key={t.key}
            onClick={() => setActive(t.key)}
            className={`rounded px-3 py-1.5 font-mono text-xs transition-colors ${
              active === t.key
                ? "bg-ink-900 text-ink-50"
                : "text-ink-600 hover:text-ink-900"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      <ul className="rounded-lg border border-ink-200 bg-white px-6">
        {items.map((item) => (
          <Row key={`${item.org}-${item.role}-${item.start}`} item={item} />
        ))}
      </ul>
    </section>
  );
};

export default Experience;
