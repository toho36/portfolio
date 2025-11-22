'use client';

import { useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PROJECTS } from '@/lib/data';

export function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const SCROLL_HEIGHT_PER_CARD = 40;
    const VISIBILITY_THRESHOLD = 2;

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>('.project-card');
      const totalScroll = cards.length * SCROLL_HEIGHT_PER_CARD;

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

            const xPercent = distance * 100;
            const scale = 1 - absDistance * 0.2;
            const opacity = 1 - absDistance * 0.5;
            const rotateY = distance * -45;

            if (absDistance < VISIBILITY_THRESHOLD) {
              gsap.set(card, {
                xPercent: xPercent,
                scale: gsap.utils.clamp(0.8, 1, scale),
                opacity: gsap.utils.clamp(0, 1, opacity),
                rotateY: rotateY,
                y: 0,
                rotateX: 0,
                zIndex: 100 - Math.round(absDistance),
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
        </div>

        <div
          ref={containerRef}
          className="perspective-1000 relative flex h-[60vh] w-full max-w-5xl items-center justify-center"
        >
          {PROJECTS.map((project, index) => {
            const image = project.cardImage;

            return (
              <Link
                href={`/projects/${project.slug}`}
                key={index}
                className="project-card absolute w-full max-w-4xl overflow-hidden rounded-2xl border border-border/50 bg-card shadow-2xl transition-colors will-change-transform hover:border-primary/50"
                style={{
                  opacity: index === 0 ? 1 : 0,
                  zIndex: 100 - index,
                }}
              >
                <div className="grid h-full min-h-[400px] md:grid-cols-2">
                  <div className="relative h-full min-h-[200px] w-full overflow-hidden bg-secondary md:min-h-full">
                    {image ? (
                      <Image
                        src={image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover transition-transform duration-500 hover:scale-105"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center text-8xl font-bold text-primary/20">
                        {project.id}
                      </div>
                    )}
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
              </Link>
            );
          })}
        </div>
      </section>
    </>
  );
}
