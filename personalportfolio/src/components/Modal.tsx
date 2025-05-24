'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

export default function Modal({ project, onClose }) {
    if (!project) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                onClick={onClose} // closes modal when clicking outside
            >
                <motion.div
                    onClick={(e) => e.stopPropagation()} // prevent modal close when clicking inside
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.8, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white dark:bg-gray-900 text-black dark:text-white max-w-lg w-full rounded-xl shadow-xl p-6 relative"
                >
                    {/* Close Button */}
                    <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-red-500">
                        <X size={24} />
                    </button>

                    {/* Optional Image */}
                    {project.image && (
                        <img src={project.image} alt={project.title} className="rounded-lg mb-4 w-full" />
                    )}

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

                    {/* Links */}
                    <div className="flex gap-4 mt-4">
                        {project.demo && (
                            <a
                                href={project.demo}
                                target="_blank"
                                className="text-blue-600 dark:text-blue-400 underline"
                            >
                                Live Demo
                            </a>
                        )}
                        {project.github && (
                            <a
                                href={project.github}
                                target="_blank"
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
