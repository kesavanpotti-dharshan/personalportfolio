'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { FcBriefcase, FcEditImage } from "react-icons/fc";
import projectData from '../data/projects.json';

export interface Project {
    title: string;
    description: string;
    tech: string[];
    image?: string;
    demo?: string;
    github?: string;
}
interface ModalProps {
    project: Project;
    onClose: () => void;
}

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.2, duration: 0.6 },
    }),
};

function Modal({ project, onClose }: ModalProps) {
    if (!project) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                onClick={onClose}
            >
                <motion.div
                    onClick={e => e.stopPropagation()}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.8, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white dark:bg-gray-900 text-black dark:text-white max-w-lg w-full rounded-xl shadow-xl p-6 relative"
                >
                    <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-red-500">
                        <X size={24} />
                    </button>

                    {/* {project.image && (
                        <img src={project.image} alt={project.title} className="rounded-lg mb-4 w-full" />
                    )} */}
                    <div className="flex justify-center mb-4">
                        <FcBriefcase size={64} />
                    </div>

                    <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>

                    <ul className="flex gap-2 flex-wrap mb-4">
                        {project.tech.map((tech, idx) => (
                            <li
                                key={idx}
                                className="text-sm bg-indigo-100 dark:bg-indigo-800 text-indigo-700 dark:text-indigo-200 px-2 py-1 rounded"
                            >
                                {tech}
                            </li>
                        ))}
                    </ul>

                    <div className="flex gap-4 mt-4">
                        {project.demo && (
                            <a
                                href={project.demo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 dark:text-blue-400 underline"
                            >
                                Live Demo
                            </a>
                        )}
                        {project.github && (
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 dark:text-blue-400 underline"
                            >
                                GitHub
                            </a>
                        )}
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
}

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    return (
        <div className="container mx-auto py-12">
            <h1 className="text-4xl font-bold mb-10 text-center text-gray-800 dark:text-white">Projects</h1>
            <div className="grid md:grid-cols-2 gap-8">
                {projectData.map((proj, idx) => (
                    <motion.div
                        key={proj.title}
                        custom={idx}
                        initial="hidden"
                        animate="visible"
                        variants={cardVariants}
                        className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 cursor-pointer hover:scale-105 transition"
                        onClick={() => setSelectedProject(proj)}
                    >
                        {/* {proj.image && (
                            <img src={proj.image} alt={proj.title} className="rounded-lg mb-4 w-full" />
                        )} */}
                        <div className="flex justify-center mb-4">
                            <FcEditImage size={32} />
                        </div>
                        <h3 className="text-xl font-bold mb-2">{proj.title}</h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-2">{proj.description}</p>
                        <div className="flex gap-2 flex-wrap">
                            {proj.tech.map((tech, idx) => (
                                <span key={idx} className="text-xs bg-indigo-100 dark:bg-indigo-800 text-indigo-700 dark:text-indigo-200 px-2 py-1 rounded">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
            {selectedProject && (
                <Modal project={selectedProject} onClose={() => setSelectedProject(null)} />
            )}
        </div>
    );
}