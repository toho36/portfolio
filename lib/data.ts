export const ABOUT_CONTENT = {
  text: "Driven by curiosity and a passion for efficiency. I love solving complex problems and building streamlined solutions. When I'm not coding, I'm exploring psychology or playing volleyball.",
  hobbies: ['Volleyball', 'Frisbee', 'Workout', 'Gaming', 'Piano', 'Debates'],
};

export const SKILL_CATEGORIES = [
  {
    title: 'Languages',
    skills: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'C++'],
  },
  {
    title: 'Frontend',
    skills: [
      'React',
      'Next.js',
      'Material-UI (MUI)',
      'Tailwind CSS',
      'Framer Motion',
      'GSAP',
    ],
  },
  {
    title: 'Backend',
    skills: ['NestJS', '.NET', 'SQL', 'MSSQL', 'Node.js'],
  },
  {
    title: 'Tools',
    skills: ['Git', 'BitBucket', 'Asana', 'Insomnia', 'NX monorepo', 'AWS'],
  },
];

export const PROJECTS = [
  {
    title: 'Property Management Platform',
    description:
      'Comprehensive administration platform for property management and mail processing.',
    tech: ['NestJS', 'React 19', 'MSSQL', 'AWS'],
    role: 'Full Stack Developer',
    id: '01',
  },
  {
    title: 'Responsive Map Application',
    description:
      'Interactive map interface with complex form integrations for city services.',
    tech: ['React', '.NET', 'GIS'],
    role: 'Frontend Developer',
    id: '02',
  },
  {
    title: 'Job Portal Web App',
    description: 'Responsive web application for job seekers and employers.',
    tech: ['Next.js', 'MUI', 'React'],
    role: 'Frontend Developer',
    id: '03',
  },
];

export interface ExperienceItem {
  title: string;
  company: string;
  startDate: string;
  endDate: string;
  location: string;
  description: string;
  skills: string[];
}

export const EXPERIENCES: ExperienceItem[] = [
  {
    title: 'Full Stack Developer',
    company: 'Qest Technologies s.r.o.',
    startDate: 'May 2025',
    endDate: 'Present',
    location: 'Prague, Czech Republic',
    description:
      'Currently developing a comprehensive Czech administration platform for property management and mail processing systems.',
    skills: ['NestJS', 'TypeScript', 'React 19', 'Material-UI', 'AWS', 'NX'],
  },
  {
    title: 'Frontend Developer',
    company: 'TSK Praha',
    startDate: 'March 2024',
    endDate: 'May 2025',
    location: 'Prague, Czech Republic',
    description:
      'As a Front-End Developer, I created a responsive map and complex forms.',
    skills: ['HTML5', 'JavaScript', 'React', '.NET'],
  },
  {
    title: 'Frontend Developer',
    company: 'QuickJobs',
    startDate: 'May 2023',
    endDate: 'March 2024',
    location: 'Prague, Czech Republic',
    description:
      'As a Front-End developer, I built responsive web applications based on provided designs.',
    skills: ['NextJS', 'React', 'MUI', 'BitBucket'],
  },
  {
    title: 'IT Analyst / uuApp Designer',
    company: 'Unicorn Systems a.s.',
    startDate: 'October 2022',
    endDate: 'April 2023',
    location: 'Prague, Czech Republic',
    description:
      "Contributed to organization's success by leveraging analytical skills and technical expertise.",
    skills: ['Insomnia', 'Javascript', 'Work estimation'],
  },
  {
    title: 'Bartender',
    company: 'Loving hut',
    startDate: 'July 2018',
    endDate: 'October 2018',
    location: 'Prague, Czech Republic',
    description:
      'As a bartender, I was taking care of the bar section, from preparing drinks to handling the finances.',
    skills: ['Customer Service', 'Finance Handling', 'Cleanup'],
  },
  {
    title: 'Operator',
    company: 'Coolcentrum s.r.o.',
    startDate: 'July 2016',
    endDate: 'August 2016',
    location: 'Prague, Czech Republic',
    description:
      'My main task as the operator was to convince customers to buy the offered product.',
    skills: ['Communication', 'Sales'],
  },
];

export interface EducationItem {
  degree: string;
  school: string;
  startDate: string;
  endDate: string;
  description: string[];
}

export const EDUCATION: EducationItem[] = [
  {
    degree: 'Bachelor level diploma IT',
    school: 'Prague University of Economics and Business',
    startDate: '2019',
    endDate: '2022',
    description: [
      'Analyze a project and choose a technical solution',
      'Design technical architecture using UML diagrams',
      'Create web projects/apps with JavaScript (React/Redux)',
      'SQL database management',
    ],
  },
  {
    degree: 'High school automobile and informatics – branch IT',
    school: 'HSAI',
    startDate: '2015',
    endDate: '2019',
    description: ['C++', 'HTML / CSS', 'SQL databases', 'Computer Hardware'],
  },
];
