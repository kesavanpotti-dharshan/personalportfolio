// components/ExperienceTimeline.tsx
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import ExperienceModal from '../components/ExperienceModal';
import experienceData from '../data/experiences.json';


// import { FcDownRight } from "react-icons/fc";


type Experience = {
    title: string;
    company: string;
    duration: string;
    location: string;
    description: string[];
    tech: string[];
};

export default function Experiences() {
    const [selected, setSelected] = useState<Experience | null>(null);

    return (
        <section className="py-16 px-4 max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-10 text-center">Experience</h2>
            <div className="relative border-l-2 border-indigo-500 dark:border-indigo-400">
                {experienceData.map((exp, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.2 }}
                        className="ml-6 mb-10 cursor-pointer"
                        onClick={() => setSelected(exp)}
                    >
                        <motion.div
                            className="absolute w-4 h-4 bg-indigo-500 dark:bg-indigo-400 rounded-full -left-2 top-1.5"
                            animate={{ scale: [0, 1.2, 1] }}
                            transition={{ duration: 0.3 }}
                        />
                        <h3 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400">
                            {exp.title} @ {exp.company}
                        </h3>
                        <p className="text-gray-500 dark:text-gray-400">
                            {exp.duration} • {exp.location}
                        </p>
                    </motion.div>

                ))}
            </div>

            {/* Modal */}
            {selected && (
                <ExperienceModal
                    experience={selected}
                    onClose={() => setSelected(null)}
                />
            )}
        </section>
    );
}
