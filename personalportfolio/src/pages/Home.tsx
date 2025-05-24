import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Home() {
    return (
        <section className="flex flex-col items-center text-center py-16">
            <h1 className="text-5xl font-bold mb-4 text-gray-800 dark:text-white">
                Hi, I'm <span className="text-blue-600">[Your Name]</span>
            </h1>
            <h2 className="text-2xl font-medium text-gray-600 dark:text-gray-300 mb-6">
                Full Stack .NET Developer | C# | React | Azure
            </h2>
            <p className="max-w-2xl text-gray-700 dark:text-gray-400 mb-8">
                I build scalable enterprise applications using modern .NET and frontend technologies. Let's connect and create something amazing!
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-8">
                <Link to="/projects" className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition">
                    View Projects
                </Link>
                <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-blue-600 text-blue-600 px-6 py-2 rounded-full hover:bg-blue-50 transition"
                >
                    Download Résumé
                </a>
            </div>

            <div className="flex gap-6 text-2xl text-gray-600 dark:text-gray-300">
                <a href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer" className="hover:text-black dark:hover:text-white">
                    <FaGithub />
                </a>
                <a href="https://linkedin.com/in/yourlinkedin" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700">
                    <FaLinkedin />
                </a>
                <a href="mailto:your@email.com" className="hover:text-red-500">
                    <FaEnvelope />
                </a>
            </div>
        </section>
    );
}
