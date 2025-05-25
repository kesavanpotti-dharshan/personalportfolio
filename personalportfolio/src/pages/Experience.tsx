// components/ExperienceTimeline.tsx
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Modal from '../components/Modal';
// import { FcDownRight } from "react-icons/fc";


type Experience = {
    title: string;
    company: string;
    duration: string;
    location: string;
    description: string[];
    tech: string[];
};
const experiences: Experience[] = [
    {
        title: "Lead .NET Developer",
        company: "Infosys",
        duration: "Aug 2020 - Present",
        location: "Bangalore, India",
        description: [
            "Built and maintained enterprise web portals for infrastructure management.",
            "Led automation initiatives using AssistEdge and C#.",
            "Interfaced with cross-functional teams to ensure on-time delivery."
        ],
        tech: [".NET Core", "React", "SQL Server", "Azure"],
    },
    {
        title: "Senior Software Engineer",
        company: "TCS",
        duration: "Jul 2015 - Jul 2020",
        location: "Chennai, India",
        description: [
            "Developed scalable APIs and internal tools for invoice processing.",
            "Created RPA solutions to improve business efficiency."
        ],
        tech: ["C#", "MVC", "JavaScript", "AssistEdge"],
    },
    {
        title: "Senior Software Engineer",
        company: "TCS",
        duration: "Jul 2015 - Jul 2020",
        location: "Chennai, India",
        description: [
            "Developed scalable APIs and internal tools for invoice processing.",
            "Created RPA solutions to improve business efficiency."
        ],
        tech: ["C#", "MVC", "JavaScript", "AssistEdge"],
    },
    {
        title: "Senior Software Engineer",
        company: "TCS",
        duration: "Jul 2015 - Jul 2020",
        location: "Chennai, India",
        description: [
            "Developed scalable APIs and internal tools for invoice processing.",
            "Created RPA solutions to improve business efficiency."
        ],
        tech: ["C#", "MVC", "JavaScript", "AssistEdge"],
    },
    {
        title: "Senior Software Engineer",
        company: "TCS",
        duration: "Jul 2015 - Jul 2020",
        location: "Chennai, India",
        description: [
            "Developed scalable APIs and internal tools for invoice processing.",
            "Created RPA solutions to improve business efficiency."
        ],
        tech: ["C#", "MVC", "JavaScript", "AssistEdge"],
    },
    {
        title: "Senior Software Engineer",
        company: "TCS",
        duration: "Jul 2015 - Jul 2020",
        location: "Chennai, India",
        description: [
            "Developed scalable APIs and internal tools for invoice processing.",
            "Created RPA solutions to improve business efficiency."
        ],
        tech: ["C#", "MVC", "JavaScript", "AssistEdge"],
    },
];

export default function ExperienceTimeline() {
    const [selected, setSelected] = useState<Experience | null>(null);

    return (
        <section className="py-16 px-4 max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-10 text-center">Experience</h2>
            <div className="relative border-l-2 border-indigo-500 dark:border-indigo-400">
                {experiences.map((exp, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.2 }}
                        className="ml-6 mb-10 cursor-pointer"
                        onClick={() => setSelected(exp)}
                    >
                        <div className="absolute w-4 h-4 bg-indigo-500 dark:bg-indigo-400 rounded-full -left-2 top-1.5"></div>
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
                <Modal
                    project={{
                        title: selected.title,
                        description: selected.description.join("\n"),
                        tech: selected.tech,
                        image: "/experience-placeholder.png", // optional placeholder
                        demo: '',
                        github: '',
                    }}
                    onClose={() => setSelected(null)}
                />
            )}
        </section>
    );
}
