import { Hero } from '@/components/sections/Hero';
import { Skills } from '@/components/sections/Skills';
import { Experience } from '@/components/sections/Experience';
import { Education } from '@/components/sections/Education';
import { About } from '@/components/sections/About';
import { Projects } from '@/components/sections/Projects';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />

      {/* Placeholder for Contact until Phase 6 */}
      <section id="contact" className="bg-background py-20 text-center">
        <h2 className="mb-4 text-3xl font-bold">Contact</h2>
        <p className="text-muted-foreground">Contact form coming soon.</p>
      </section>
    </main>
  );
}
