import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import profile from '../data/profile.json';

const iconMap: Record<string, React.ReactNode> = {
    FaGithub: <FaGithub />,
    FaLinkedin: <FaLinkedin />,
    FaTwitter: <FaTwitter />,
};

export default function About() {
    return (
        <section className="flex flex-col items-center text-center py-20 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-2xl opacity-60 animate-blob -z-10"></div>
            <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob animation-delay-2000 -z-10"></div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="flex flex-col items-center"
            >
                {/* Avatar or profile image (optional) */}
                {/* <img src="/avatar.png" alt="Profile" className="w-28 h-28 rounded-full border-4 border-blue-400 shadow-lg mb-6 object-cover" /> */}

                <h1 className="text-4xl font-extrabold mb-2 text-blue-700 dark:text-blue-300 drop-shadow-lg">
                    About Me
                </h1>
                <p className="text-lg mb-2 text-gray-700 dark:text-gray-200">
                    <span className="font-semibold text-blue-600">Name:</span> {profile.name}
                </p>
                <p className="text-lg mb-4 text-gray-700 dark:text-gray-200">
                    <span className="font-semibold text-blue-600">Title:</span> {profile.title}
                </p>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-base mb-8 text-gray-600 dark:text-gray-300 leading-relaxed text-center max-w-2xl"
                >
                    {profile.bio}
                </motion.p>

                <div className="w-full">
                    {/* Skills */}
                    <div className="mb-10">
                        <h2 className="text-2xl font-semibold mb-3 text-indigo-700 dark:text-indigo-300">
                            <span>Skills</span>
                        </h2>
                        <ul className="flex flex-wrap gap-3">
                            {profile.skills.map((skill: string, idx: number) => (
                                <li
                                    key={idx}
                                    className="bg-indigo-100 dark:bg-indigo-800 text-indigo-700 dark:text-indigo-200 px-4 py-2 rounded-full text-sm font-medium shadow"
                                >
                                    {skill}
                                </li>
                            ))}
                        </ul>
                    </div>
                    {/* Social Links */}
                    <div>
                        <h2 className="text-2xl font-semibold mb-3 text-indigo-700 dark:text-indigo-300">
                            Social Connections
                        </h2>
                        <ul className="flex flex-wrap gap-3 justify-center">
                            {profile.socials &&
                                profile.socials.map(
                                    (social: { platform: string; url: string; icon: string }) => (
                                        <li key={social.platform}>
                                            <a
                                                href={social.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200 font-medium shadow hover:bg-blue-200 dark:hover:bg-blue-800 transition"
                                            >
                                                {iconMap[social.icon]} {social.platform}
                                            </a>
                                        </li>
                                    )
                                )}
                        </ul>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
