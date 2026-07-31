"use client";

import { useState } from "react";
import SectionTitle from "@/components/custom/SectionTitle";
import projects from "@/app/data/projectsData";
import { FiArrowUpRight } from "react-icons/fi";

const INITIAL = 4;

type Props = { hideTitle?: boolean; showAll?: boolean };

const Projects = ({ hideTitle = false, showAll = false }: Props) => {
  const [expanded, setExpanded] = useState(showAll);
  const visible = expanded ? projects : projects.slice(0, INITIAL);
  const canToggle = !showAll && projects.length > INITIAL;

  return (
    <section id="projects" className="scroll-mt-20 pt-2">
      {!hideTitle && <SectionTitle title="Selected Projects" />}

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {visible.map((p) => (
          <article
            key={p.title}
            className="card-plain flex h-full flex-col p-5"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <h3 className="font-serif text-lg font-medium tracking-tight text-ink-900">
                  {p.title}
                </h3>
                <p className="mt-0.5 text-sm text-ink-600">{p.tagline}</p>
              </div>
              {p.year && (
                <span className="shrink-0 whitespace-nowrap font-mono text-[11px] text-ink-500">
                  {p.year}
                </span>
              )}
            </div>

            <p className="mt-3 text-sm leading-relaxed text-ink-600">
              {p.description}
            </p>

            {p.role && (
              <p className="mt-2 font-mono text-[11px] text-ink-500">
                {p.role}
              </p>
            )}

            {p.impact && p.impact.length > 0 && (
              <ul className="mt-3 list-disc space-y-1 pl-4 text-sm text-ink-600 marker:text-ink-300">
                {p.impact.map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
              </ul>
            )}

            <div className="mt-auto pt-4">
              <div className="flex flex-wrap gap-1.5">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded border border-ink-200 bg-ink-50 px-1.5 py-0.5 font-mono text-[10px] text-ink-600"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {p.links && p.links.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-3 border-t border-ink-100 pt-3">
                  {p.links.map((l) => (
                    <a
                      key={l.url}
                      href={l.url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 font-mono text-xs text-ink-700 hover:text-accent"
                    >
                      {l.label}
                      <FiArrowUpRight size={12} />
                    </a>
                  ))}
                </div>
              )}
            </div>
          </article>
        ))}
      </div>

      {canToggle && (
        <div className="mt-6 flex justify-center">
          <button
            onClick={() => setExpanded(!expanded)}
            className="rounded-md border border-ink-300 px-4 py-2 font-mono text-xs text-ink-700 transition-colors hover:border-ink-900 hover:text-ink-900"
          >
            {expanded
              ? "Show fewer projects"
              : `Show all ${projects.length} projects`}
          </button>
        </div>
      )}
    </section>
  );
};

export default Projects;
