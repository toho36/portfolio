'use client';

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin';

gsap.registerPlugin(ScrollTrigger, TextPlugin);

import { ABOUT_CONTENT } from '@/lib/data';

export function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const text = ABOUT_CONTENT.text;

      gsap.to('.typewriter-text', {
        text: {
          value: text,
          delimiter: '',
        },
        duration: 4,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        },
      });

      gsap.from('.about-content', {
        opacity: 0,
        y: 30,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="mx-auto max-w-4xl px-4 py-20 text-center md:px-8"
    >
      <div className="about-content space-y-8">
        <h2 className="mb-8 text-3xl font-bold md:text-4xl">About Me</h2>

        <div className="flex min-h-[120px] items-center justify-center">
          <p className="text-xl font-medium leading-relaxed text-muted-foreground md:text-2xl">
            {/* Typewriter effect will be handled by GSAP in useEffect */}
            <span className="typewriter-text"></span>
            <span className="cursor animate-pulse">|</span>
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 pt-8">
          {ABOUT_CONTENT.hobbies.map((hobby) => (
            <span
              key={hobby}
              className="rounded-full border border-primary/20 px-4 py-2 text-sm font-medium transition-colors hover:bg-primary/10"
            >
              {hobby}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
