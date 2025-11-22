'use client';

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

import { EXPERIENCES } from '@/lib/data';

export function Experience() {
  const sectionRef = useRef<HTMLElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      itemsRef.current.forEach((item, index) => {
        if (!item) return;

        gsap.fromTo(
          item,
          { opacity: 0, x: -50 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: item,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
            delay: index * 0.1,
          }
        );
      });
    }, sectionRef);

    ScrollTrigger.refresh();

    return () => ctx.revert();
  }, [sectionRef]);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative z-0 mx-auto max-w-6xl bg-background px-4 py-20 md:px-8"
    >
      <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
        Experience
      </h2>

      <div className="relative ml-4 space-y-12 border-l-2 border-gray-200 dark:border-gray-700 md:ml-8">
        {EXPERIENCES.map((exp, index) => (
          <div
            key={index}
            ref={(el) => {
              itemsRef.current[index] = el;
            }}
            className="relative pl-8 md:pl-12"
          >
            <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full border-4 border-background bg-primary" />

            <div className="mb-2 flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
              <h3 className="text-xl font-bold">{exp.title}</h3>
              <span className="rounded-full bg-secondary/50 px-3 py-1 text-sm font-medium text-muted-foreground">
                {exp.startDate} — {exp.endDate}
              </span>
            </div>

            <div className="mb-2 text-lg font-semibold text-primary">
              {exp.company}
            </div>
            <p className="mb-4 max-w-2xl text-muted-foreground">
              {exp.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {exp.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-md bg-secondary px-2 py-1 text-xs"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
