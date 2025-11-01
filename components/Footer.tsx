import Link from 'next/link';
import { Github, Linkedin, Mail } from 'lucide-react';
import { cn } from '@/lib/utils';
import { SOCIAL_LINKS, NAVIGATION_LINKS, SITE_NAME } from '@/lib/constants';

interface SocialLinkWithIcon {
  name: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}

const SOCIAL_ICON_MAP: Record<
  string,
  React.ComponentType<{ className?: string }>
> = {
  GitHub: Github,
  LinkedIn: Linkedin,
  Email: Mail,
};

const CURRENT_YEAR = new Date().getFullYear();

const socialLinksWithIcons: SocialLinkWithIcon[] = SOCIAL_LINKS.map((link) => ({
  ...link,
  icon: SOCIAL_ICON_MAP[link.name] || Mail,
}));

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
            © {CURRENT_YEAR} {SITE_NAME}. All rights reserved.
          </p>

          <nav className="flex items-center gap-4" aria-label="Social links">
            {socialLinksWithIcons.map((link) => {
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
                    'rounded-sm p-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
                    'md:p-2'
                  )}
                  aria-label={link.name}
                >
                  <Icon className="h-6 w-6 md:h-5 md:w-5" />
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
          {NAVIGATION_LINKS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
