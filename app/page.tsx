import { Section } from '@/components/Section';

export default function Home() {
  return (
    <>
      <Section
        id="home"
        variant="default"
        className="pb-16 pt-32 md:pb-24 md:pt-40"
      >
        <div className="flex flex-col items-center justify-center space-y-6 text-center">
          <h1 className="font-bold">Welcome to My Portfolio</h1>
          <p className="max-w-2xl text-lg text-muted-foreground md:text-xl">
            I&apos;m a developer passionate about creating beautiful, functional
            web experiences.
          </p>
        </div>
      </Section>

      <Section id="about" variant="alt">
        <div className="space-y-4">
          <h2 className="mb-8 text-center">About</h2>
          <div className="mx-auto max-w-3xl space-y-4">
            <p className="text-muted-foreground">
              This is a placeholder for the about section. Content will be added
              in Phase 3.
            </p>
          </div>
        </div>
      </Section>

      <Section id="projects" variant="default">
        <div className="space-y-4">
          <h2 className="mb-8 text-center">Projects</h2>
          <div className="mx-auto max-w-3xl">
            <p className="text-center text-muted-foreground">
              Projects will be showcased here. Content will be added in Phase 3.
            </p>
          </div>
        </div>
      </Section>

      <Section id="contact" variant="alt">
        <div className="space-y-4">
          <h2 className="mb-8 text-center">Contact</h2>
          <div className="mx-auto max-w-3xl">
            <p className="text-center text-muted-foreground">
              Contact form and information will be added here in Phase 6.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
