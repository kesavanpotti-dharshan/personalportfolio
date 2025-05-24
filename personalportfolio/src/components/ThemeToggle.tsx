'use client';

import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

export default function ThemeToggle() {
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        const stored = localStorage.getItem('theme') || 'light';
        setTheme(stored);
        document.documentElement.classList.toggle('dark', stored === 'dark');
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
        document.documentElement.classList.toggle('dark', newTheme === 'dark');
    };

    return (
        <button
            onClick={toggleTheme}
            className="text-gray-800 dark:text-yellow-300 hover:text-blue-600 dark:hover:text-white transition"
            aria-label="Toggle Theme"
        >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
        </button>
    );
}
