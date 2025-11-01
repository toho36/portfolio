import Link from 'next/link';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
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
    href: 'tohoangviet1998@gmail.com',
    icon: Mail,
  },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 md:px-8 py-12">
        <div className="flex flex-col items-center justify-center gap-6 md:flex-row md:justify-between">
          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © {currentYear} Portfolio. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={
                    link.href.startsWith('http')
                      ? 'noopener noreferrer'
                      : undefined
                  }
                  className={cn(
                    'text-muted-foreground hover:text-foreground transition-colors',
                    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm'
                  )}
                  aria-label={link.name}
                >
                  <Icon className="h-5 w-5" />
                  <span className="sr-only">{link.name}</span>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Optional: Additional Links */}
        <div className="mt-8 flex flex-col items-center justify-center gap-4 border-t border-border pt-8 text-sm text-muted-foreground md:flex-row md:gap-6">
          <Link
            href="#home"
            className="hover:text-foreground transition-colors"
          >
            Home
          </Link>
          <Link
            href="#about"
            className="hover:text-foreground transition-colors"
          >
            About
          </Link>
          <Link
            href="#projects"
            className="hover:text-foreground transition-colors"
          >
            Projects
          </Link>
          <Link
            href="#contact"
            className="hover:text-foreground transition-colors"
          >
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}

