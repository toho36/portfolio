export interface TechIcon {
    name: string;
    url: string;
}

// Using a light gray color for all icons to match the dark theme aesthetic
const ICON_COLOR = 'A1A1AA'; // zinc-400

export const TECH_ICONS: TechIcon[] = [
    {
        name: 'HTML',
        url: `https://cdn.simpleicons.org/html5/${ICON_COLOR}`,
    },

    {
        name: 'JavaScript',
        url: `https://cdn.simpleicons.org/javascript/${ICON_COLOR}`,
    },
    {
        name: 'TypeScript',
        url: `https://cdn.simpleicons.org/typescript/${ICON_COLOR}`,
    },
    {
        name: 'React',
        url: `https://cdn.simpleicons.org/react/${ICON_COLOR}`,
    },
    {
        name: 'Next.js',
        url: `https://cdn.simpleicons.org/nextdotjs/${ICON_COLOR}`,
    },
    {
        name: 'Tailwind CSS',
        url: `https://cdn.simpleicons.org/tailwindcss/${ICON_COLOR}`,
    },
    {
        name: 'Framer Motion',
        url: `https://cdn.simpleicons.org/framer/${ICON_COLOR}`,
    },
    {
        name: 'Shadcn',
        url: `https://cdn.simpleicons.org/shadcnui/${ICON_COLOR}`, // Attempting shadcnui, fallback might be needed
    },
    {
        name: 'Figma',
        url: `https://cdn.simpleicons.org/figma/${ICON_COLOR}`,
    },
    {
        name: 'GitHub',
        url: `https://cdn.simpleicons.org/github/${ICON_COLOR}`,
    },
    {
        name: 'Slack',
        url: `https://cdn.simpleicons.org/slack/${ICON_COLOR}`,
    },
    {
        name: 'Notion',
        url: `https://cdn.simpleicons.org/notion/${ICON_COLOR}`,
    },
    {
        name: 'Claude',
        url: `https://cdn.simpleicons.org/anthropic/${ICON_COLOR}`,
    },
    {
        name: 'ChatGPT',
        url: `https://cdn.simpleicons.org/openai/${ICON_COLOR}`,
    },
    {
        name: 'Cursor',
        url: `https://cdn.simpleicons.org/cursor/${ICON_COLOR}`, // Might not exist, will check
    },
    {
        name: 'Antigravity',
        url: `https://cdn.simpleicons.org/spacex/${ICON_COLOR}`, // Using SpaceX as a cool "Antigravity" proxy
    },
];
