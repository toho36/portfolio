'use client';

import { PROJECTS } from '@/lib/data';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { use } from 'react';

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = use(params);
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const features = project.features || [];
  const longDescription = project.longDescription || project.description;
  const detailImages = project.detailImages || [];

  return (
    <main className="min-h-screen bg-background px-6 py-24 md:px-12 lg:px-24">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href="/#projects"
            className="mb-8 inline-flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Link>

          <div className="mb-8 flex flex-col gap-6 text-center">
            <h1 className="text-4xl font-bold text-foreground md:text-6xl">
              {project.title}
            </h1>

            {project.externalLink && (
              <div className="flex justify-center">
                <a
                  href={project.externalLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-full bg-primary px-8 py-3 text-base font-medium text-primary-foreground transition-all hover:scale-105 hover:bg-primary/90"
                >
                  Visit Site <ExternalLink className="ml-2 h-5 w-5" />
                </a>
              </div>
            )}
          </div>

          <div className="prose prose-lg dark:prose-invert mx-auto mb-12 text-center text-muted-foreground">
            <p className="text-xl leading-relaxed">{longDescription}</p>
          </div>

          <div className="mb-12 text-center">
            <h2 className="mb-6 text-2xl font-semibold text-foreground">
              Technologies
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-full bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {features.length > 0 && (
            <div className="mb-12 rounded-2xl border border-border/50 bg-card p-8 shadow-lg">
              <h2 className="mb-6 text-center text-2xl font-semibold text-foreground">
                Key Features
              </h2>
              <ul className="grid gap-4 text-left md:grid-cols-2">
                {features.map((feature: string, index: number) => (
                  <li
                    key={index}
                    className="flex items-start text-muted-foreground"
                  >
                    <span className="mr-2 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Detail Images */}
          {detailImages.length > 0 && (
            <div className="space-y-8">
              {detailImages.map((image: string, index: number) => (
                <div
                  key={index}
                  className="overflow-hidden rounded-xl border border-border/50 bg-card shadow-2xl"
                >
                  <div className="relative aspect-video w-full">
                    <Image
                      src={image}
                      alt={`${project.title} Preview ${index + 1}`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                      className="object-cover"
                      unoptimized
                      loading="lazy"
                    />
                  </div>
                </div>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </main>
  );
}
