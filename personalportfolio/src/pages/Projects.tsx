'use client';

import { motion } from 'framer-motion';
import Modal from '../components/Modal';
import { useState } from 'react';

const projects = [
    {
        title: 'AI Resume Enhancer',
        description: 'A tool to rewrite resumes using OpenAI and .NET Core API.',
        tech: ['.NET Core', 'React', 'OpenAI'],
        image: '/resume-enhancer.png',
        demo: 'https://your-resume-demo.vercel.app',
        github: 'https://github.com/yourname/resume-enhancer',
    },
    {
        title: 'LCA Insights',
        description: 'Web app to analyze H1B LCA data with visual dashboards.',
        tech: ['Next.js', 'Tailwind', 'Chart.js'],
        image: '/lca-insights.png',
        demo: 'https://lca-insights.vercel.app',
        github: 'https://github.com/yourname/lca-insights',
    },
];

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.2, duration: 0.6 },
    }),
};

export default function Projects() {
    const [selected, setSelected] = useState(null);

    return (
        <section className="py-16 px-4 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-10 text-center">Projects</h2>

            <div className="grid gap-8 md:grid-cols-2">
                {projects.map((project, i) => (
                    <motion.div
                        key={i}
                        custom={i}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={cardVariants}
                        whileHover={{ scale: 1.03, boxShadow: '0 8px 30px rgba(0,0,0,0.12)' }}
                        transition={{ type: 'spring', stiffness: 300 }}
                        className="cursor-pointer bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md border border-gray-200 dark:border-gray-700"
                        onClick={() => setSelected(project)}
                    >
                        <h3 className="text-2xl font-semibold text-indigo-600 dark:text-indigo-400">
                            {project.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 mt-2">{project.description}</p>
                        <ul className="flex gap-2 mt-4 flex-wrap">
                            {project.tech.map((tech, idx) => (
                                <li
                                    key={idx}
                                    className="text-sm bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-200 px-2 py-1 rounded"
                                >
                                    {tech}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>

            {/* Modal */}
            {selected && <Modal project={selected} onClose={() => setSelected(null)} />}
        </section>
    );
}
