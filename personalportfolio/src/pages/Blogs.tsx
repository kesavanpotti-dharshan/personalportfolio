'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const blogs = Array.from({ length: 12 }).map((_, i) => ({
    title: `Blog Post ${i + 1}`,
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel felis nec nulla porta.',
    date: `2025-05-${(i + 1).toString().padStart(2, '0')}`,
    tags: ['Next.js', 'React', 'Tailwind'],
}));

export default function Blogs() {
    const [search, setSearch] = useState('');
    const [visibleCount, setVisibleCount] = useState(6);

    const filteredBlogs = blogs.filter((b) =>
        b.title.toLowerCase().includes(search.toLowerCase())
    );

    const handleLoadMore = () => setVisibleCount((prev) => prev + 3);

    return (
        <section className="py-16 px-4 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-center">Blog</h2>

            {/* Search */}
            <input
                type="text"
                placeholder="Search blogs..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full max-w-md mx-auto block mb-10 p-2 border border-gray-300 rounded-md dark:bg-gray-800 dark:text-white"
            />

            {/* Blogs Grid */}
            <div className="grid gap-8 md:grid-cols-2">
                {filteredBlogs.slice(0, visibleCount).map((blog, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md border border-gray-200 dark:border-gray-700"
                    >
                        <h3 className="text-2xl font-semibold text-indigo-600 dark:text-indigo-400">{blog.title}</h3>
                        <p className="text-sm text-gray-400 mb-2">{blog.date}</p>
                        <p className="text-gray-600 dark:text-gray-300 mb-3">{blog.excerpt}</p>
                        <ul className="flex gap-2 flex-wrap">
                            {blog.tags.map((tag, idx) => (
                                <li
                                    key={idx}
                                    className="text-sm bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-200 px-2 py-1 rounded"
                                >
                                    {tag}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>

            {/* Load More */}
            {visibleCount < filteredBlogs.length && (
                <div className="flex flex-col items-center mt-12">
                    <div className="w-24 h-1 bg-gray-600 dark:bg-gray-700 rounded-full mb-6"></div>
                    <motion.button
                        onClick={handleLoadMore}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        className="text-sm bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-200 px-2 py-1 rounded shadow-md hover:bg-indigo-200 dark:hover:bg-indigo-800 transition duration-300"
                    >
                        Load More
                    </motion.button>
                </div>
            )}
        </section>
    );
}
