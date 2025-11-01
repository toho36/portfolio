import Link from 'next/link';
import { Github, Linkedin, Mail } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SocialLink {
  name: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}

const socialLinks: SocialLink[] = [
  {
    name: 'GitHub',
    href: 'https://github.com/toho36',
    icon: Github,
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/hoangvietto/',
    icon: Linkedin,
  },
  {
    name: 'Email',
    href: 'mailto:tohoangviet1998@gmail.com',
    icon: Mail,
  },
];

const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className={cn('border-t border-border bg-background')}>
      <div className={cn('container-custom py-12')}>
        <div
          className={cn(
            'flex flex-col items-center justify-center gap-6',
            'md:flex-row md:justify-between'
          )}
        >
          <p className="text-sm text-muted-foreground">
            © {CURRENT_YEAR} Portfolio. All rights reserved.
          </p>

          <nav className="flex items-center gap-4" aria-label="Social links">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              const isExternal = link.href.startsWith('http');
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  target={isExternal ? '_blank' : undefined}
                  rel={isExternal ? 'noopener noreferrer' : undefined}
                  className={cn(
                    'text-muted-foreground transition-colors hover:text-foreground',
                    'rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2'
                  )}
                  aria-label={link.name}
                >
                  <Icon className="h-5 w-5" />
                  <span className="sr-only">{link.name}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        <nav
          className={cn(
            'mt-8 flex flex-col items-center justify-center gap-4',
            'border-t border-border pt-8 text-sm text-muted-foreground',
            'md:flex-row md:gap-6'
          )}
          aria-label="Footer navigation"
        >
          <Link
            href="#home"
            className="transition-colors hover:text-foreground"
          >
            Home
          </Link>
          <Link
            href="#about"
            className="transition-colors hover:text-foreground"
          >
            About
          </Link>
          <Link
            href="#projects"
            className="transition-colors hover:text-foreground"
          >
            Projects
          </Link>
          <Link
            href="#contact"
            className="transition-colors hover:text-foreground"
          >
            Contact
          </Link>
        </nav>
      </div>
    </footer>
  );
}
