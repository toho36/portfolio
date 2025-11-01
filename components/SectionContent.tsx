import { cn } from '@/lib/utils';

interface SectionContentProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
  contentClassName?: string;
  centerContent?: boolean;
}

export function SectionContent({
  title,
  children,
  className,
  contentClassName,
  centerContent = false,
}: SectionContentProps) {
  return (
    <div className={cn('space-y-4', className)}>
      {title && <h2 className="mb-8 text-center">{title}</h2>}
      <div
        className={cn(
          'mx-auto max-w-3xl',
          centerContent && 'text-center',
          contentClassName
        )}
      >
        {children}
      </div>
    </div>
  );
}
