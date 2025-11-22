'use client';

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

import { PROJECTS } from '@/lib/data';

export function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>('.project-card');
      const totalScroll = cards.length * 40; // Reduced to 40vh per card for faster scrolling

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top top',
        end: `+=${totalScroll}%`,
        pin: true,
        anticipatePin: 1,
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress * (cards.length - 1);

          cards.forEach((card, i) => {
            const distance = i - progress;
            const absDistance = Math.abs(distance);

            // Horizontal 3D Effect (Left to Right)
            const xPercent = distance * 100; // Move fully horizontally
            const scale = 1 - absDistance * 0.2;
            const opacity = 1 - absDistance * 0.5;
            const rotateY = distance * -45;

            // Only animate visible cards
            if (absDistance < 2) {
              gsap.set(card, {
                xPercent: xPercent,
                scale: gsap.utils.clamp(0.8, 1, scale),
                opacity: gsap.utils.clamp(0, 1, opacity),
                rotateY: rotateY,
                y: 0, // Reset vertical
                rotateX: 0, // Reset vertical rotation
                zIndex: 100 - Math.round(absDistance), // High internal z-index
                display: 'block',
                transformOrigin: 'center center',
              });
            } else {
              gsap.set(card, { display: 'none' });
            }
          });
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <div id="projects" className="h-px w-full scroll-mt-24" />
      <section
        ref={sectionRef}
        className="perspective-1000 relative z-10 flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-background"
      >
        <div className="absolute left-0 top-10 z-20 w-full text-center">
          <h2 className="bg-gradient-to-r from-primary to-accent bg-clip-text text-3xl font-bold text-transparent md:text-4xl">
            Featured Projects
          </h2>
          <p className="mt-2 text-muted-foreground">Scroll to explore</p>
        </div>

        <div
          ref={containerRef}
          className="perspective-1000 relative flex h-[60vh] w-full max-w-5xl items-center justify-center"
        >
          {PROJECTS.map((project, index) => (
            <div
              key={index}
              className="project-card absolute w-full max-w-3xl overflow-hidden rounded-2xl border border-border/50 bg-card shadow-2xl will-change-transform"
              style={{
                opacity: index === 0 ? 1 : 0,
                zIndex: 100 - index,
              }}
            >
              <div className="grid h-full min-h-[400px] md:grid-cols-2">
                <div className="flex flex-col items-center justify-center border-r border-white/5 bg-secondary p-8 text-center">
                  <div className="mb-4 text-8xl font-bold text-primary/20">
                    {project.id}
                  </div>
                  <div className="rounded-full border border-primary/20 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary/80">
                    {project.role}
                  </div>
                </div>

                <div className="flex flex-col justify-center p-8">
                  <h3 className="mb-4 text-2xl font-bold text-foreground">
                    {project.title}
                  </h3>
                  <p className="mb-6 leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-md bg-secondary/50 px-3 py-1.5 text-xs font-medium text-secondary-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
