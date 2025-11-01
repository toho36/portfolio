import { Section } from '@/components/Section';
import { SectionContent } from '@/components/SectionContent';

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
        <SectionContent title="About">
          <p className="text-muted-foreground">
            This is a placeholder for the about section. Content will be added
            in Phase 3.
          </p>
        </SectionContent>
      </Section>

      <Section id="projects" variant="default">
        <SectionContent title="Projects" centerContent>
          <p className="text-muted-foreground">
            Projects will be showcased here. Content will be added in Phase 3.
          </p>
        </SectionContent>
      </Section>

      <Section id="contact" variant="alt">
        <SectionContent title="Contact" centerContent>
          <p className="text-muted-foreground">
            Contact form and information will be added here in Phase 6.
          </p>
        </SectionContent>
      </Section>
    </>
  );
}
