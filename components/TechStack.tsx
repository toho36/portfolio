'use client';
'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { TECH_ICONS } from '@/lib/tech-icons';

const TechStack = () => {
    // Duplicate the icons to create a seamless loop
    const icons = [...TECH_ICONS, ...TECH_ICONS];

    return (
        <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden py-12">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 to-transparent" />
            <div className="flex w-full overflow-hidden z-10 py-4">
                <motion.div
                    className="flex gap-12 px-12"
                    animate={{
                        x: ['0%', '-50%'],
                    }}
                    transition={{
                        duration: 40,
                        ease: 'linear',
                        repeat: Infinity,
                    }}
                >
                    {icons.map((icon, index) => (
                        <div
                            key={`${icon.name}-${index}`}
                            className="relative flex flex-col items-center justify-center"
                        >
                            <motion.div
                                className="flex h-24 w-24 items-center justify-center rounded-full bg-background/80 shadow-xl backdrop-blur-sm border border-white/5"
                                animate={{
                                    y: [0, -25, 0],
                                }}
                                transition={{
                                    duration: 2 + Math.random() * 2, // Random duration between 2-4s
                                    repeat: Infinity,
                                    ease: 'easeInOut',
                                    delay: Math.random() * 2, // Random delay
                                }}
                            >
                                <Image
                                    src={icon.url}
                                    alt={icon.name}
                                    width={48}
                                    height={48}
                                    className="h-12 w-12 opacity-80 transition-opacity hover:opacity-100"
                                    unoptimized
                                />
                            </motion.div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default TechStack;
