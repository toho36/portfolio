'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';

// Dynamically import UnicornScene to avoid SSR issues with WebGL
const UnicornScene = dynamic(() => import('unicornstudio-react'), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/20" />
  ),
});

export function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      id="home"
      className="relative flex h-screen w-full items-center justify-center overflow-hidden bg-background"
    >
      <div className="absolute inset-0 z-0 overflow-hidden">
        {mounted && (
          <div className="h-full w-full origin-center scale-[1.15]">
            <UnicornScene
              projectId="h9gI0NeOEXCdITG3ENmR"
              className="h-full w-full"
            />
          </div>
        )}
        {/* Overlay to ensure text readability */}
        <div className="absolute inset-0 bg-background/60 backdrop-blur-[2px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl">
            Bc. Hoang Viet To
            <span className="mt-4 block text-2xl font-normal text-primary md:text-3xl">
              FullStack Developer
            </span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground md:text-xl"
        >
          Driven by curiosity. Building efficient solutions. Passionate about
          technology and continuous learning.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex flex-col justify-center gap-4 sm:flex-row"
        >
          <a
            href="#contact"
            className="rounded-full bg-primary px-8 py-3 font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Contact Me
          </a>
          <a
            href="#projects"
            className="rounded-full bg-secondary px-8 py-3 font-medium text-secondary-foreground transition-colors hover:bg-secondary/80"
          >
            View Work
          </a>
        </motion.div>
      </div>
    </section>
  );
}
