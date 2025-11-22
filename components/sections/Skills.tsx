'use client';

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

import { SKILL_CATEGORIES } from '@/lib/data';

export function Skills() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Staggered entrance for categories
      gsap.from('.skill-category', {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
      });

      // Floating animation for individual skills
      gsap.utils.toArray<HTMLElement>('.skill-item').forEach((item, i) => {
        gsap.to(item, {
          y: -5,
          duration: 1.5 + Math.random(),
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: Math.random() * 0.5,
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="mx-auto max-w-6xl px-4 py-20 md:px-8"
    >
      <h2 className="mb-12 bg-gradient-to-r from-primary to-accent bg-clip-text text-center text-3xl font-bold text-transparent md:text-4xl">
        Technical Skills
      </h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {SKILL_CATEGORIES.map((category, idx) => (
          <div
            key={idx}
            className="skill-category space-y-4 rounded-xl border border-white/5 bg-secondary/20 p-6 backdrop-blur-sm transition-colors hover:border-primary/30"
          >
            <h3 className="border-b border-border pb-2 text-xl font-bold text-primary">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <div
                  key={skill}
                  className="skill-item cursor-default rounded-md border border-white/5 bg-background/50 px-3 py-1.5 text-sm font-medium shadow-sm transition-all hover:scale-125 hover:bg-primary hover:text-primary-foreground"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
