'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface Experience {
    title: string;
    company: string;
    duration: string;
    location: string;
    description: string[];
    tech: string[];
}

interface Props {
    experience: Experience;
    onClose: () => void;
}

export default function ExperienceModal({ experience, onClose }: Props) {
    return (
        <AnimatePresence>
            <motion.div
                className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center px-4"
                onClick={onClose}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                <motion.div
                    className="bg-white dark:bg-zinc-900 text-black dark:text-white max-w-2xl w-full p-6 rounded-2xl shadow-xl relative"
                    onClick={(e) => e.stopPropagation()}
                    initial={{ opacity: 0, y: -40, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -30, scale: 0.95 }}
                    transition={{ duration: 0.35, ease: 'easeInOut' }}
                >
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 text-gray-400 hover:text-red-500"
                    >
                        <X size={24} />
                    </button>


                    <h2 className="text-2xl font-bold mb-1">{experience.title}</h2>
                    <p className="text-lg font-medium text-indigo-600 dark:text-indigo-400 mb-1">
                        {experience.company}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                        {experience.duration} • {experience.location}
                    </p>

                    <h3 className="font-semibold text-lg mb-2">Responsibilities</h3>
                    <div className="overflow-y-auto max-h-[70vh] p-6 custom-scrollbar">
                        <ul className="list-disc list-inside text-sm space-y-2 text-gray-700 dark:text-gray-300">
                            {experience.description.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>
                    </div>


                    <h3 className="font-semibold text-lg mt-4 mb-2">Technologies</h3>
                    <div className="flex flex-wrap gap-2">
                        {experience.tech.map((tech, i) => (
                            <span
                                key={i}
                                className="bg-indigo-100 dark:bg-indigo-800 text-indigo-700 dark:text-indigo-200 px-2 py-1 text-xs rounded-full"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
}
