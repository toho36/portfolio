import { cn } from '@/lib/utils';

interface SectionProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'alt' | 'dark';
  fullWidth?: boolean;
}

export function Section({
  id,
  children,
  className,
  variant = 'default',
  fullWidth = false,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        'py-16 md:py-24 lg:py-32',
        {
          'bg-background': variant === 'default',
          'bg-muted/30': variant === 'alt',
          'bg-muted': variant === 'dark',
        },
        className
      )}
    >
      <div
        className={cn(
          'mx-auto px-6 md:px-8',
          fullWidth ? 'w-full' : 'max-w-7xl'
        )}
      >
        {children}
      </div>
    </section>
  );
}
