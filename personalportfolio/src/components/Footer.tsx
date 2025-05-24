import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-gray-100 dark:bg-gray-900 py-6 text-center text-sm text-gray-500 dark:text-gray-400">
            <div className="flex justify-center gap-6 mb-2 text-lg">
                <a
                    href="https://github.com/yourgithub"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-black dark:hover:text-white"
                >
                    <FaGithub />
                </a>
                <a
                    href="https://linkedin.com/in/yourlinkedin"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-700"
                >
                    <FaLinkedin />
                </a>
            </div>
            <p>© {new Date().getFullYear()} [Your Name]. All rights reserved.</p>
        </footer>
    );
}
