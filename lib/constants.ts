export const SITE_NAME = 'Portfolio';
export const AUTHOR_NAME = 'To Hoang Viet';
export const JOB_TITLE = 'Full Stack Developer';

export const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  'https://portfolio-pied-eight-38.vercel.app';

export const META_DESCRIPTION =
  'Personal portfolio website showcasing projects, skills, and experience in web development. View my work and get in touch for collaboration opportunities.';

export const NAVIGATION_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
] as const;

export const SOCIAL_LINKS = [
  {
    name: 'GitHub',
    href: 'https://github.com/toho36',
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/hoangvietto/',
  },
  {
    name: 'Email',
    href: 'mailto:tohoangviet1998@gmail.com',
  },
] as const;

export const SCROLL_THRESHOLD = 20;
export const HEADER_OFFSET = 80;
