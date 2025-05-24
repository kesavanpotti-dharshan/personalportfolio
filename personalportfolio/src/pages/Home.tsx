import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import avatar from '../assets/avatar.png';

export default function Home() {
    return (
        <section className="flex flex-col items-center text-center py-20 relative overflow-hidden">
            {/* Decorative background blobs */}
            <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-2xl opacity-60 animate-blob -z-10"></div>
            <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob animation-delay-2000 -z-10"></div>

            {/* Avatar */}
            <img
                src={avatar}
                alt="Dharshan Kesavan Potti"
                className="w-32 h-32 rounded-full border-4 border-blue-500 shadow-lg mb-6 object-cover"
            />

            <h1 className="text-5xl font-extrabold mb-4 text-gray-800 dark:text-white drop-shadow-lg">
                Hi, I'm <span className="text-blue-600">Dharshan Kesavan Potti</span>
            </h1>
            <h2 className="text-2xl font-semibold text-gray-600 dark:text-gray-300 mb-6 tracking-wide">
                Full Stack .NET Developer <span className="mx-2">|</span> C# <span className="mx-2">|</span> React <span className="mx-2">|</span> Azure
            </h2>
            <p className="max-w-2xl text-lg text-gray-700 dark:text-gray-400 mb-10 leading-relaxed">
                I build scalable enterprise applications using modern <span className="font-semibold text-blue-600">.NET</span> and <span className="font-semibold text-blue-600">frontend technologies</span>.
                <br />
                <span className="inline-block mt-2">Let's connect and create something <span className="text-purple-600 font-semibold">amazing</span>!</span>
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-10">
                <Link
                    to="/projects"
                    className="bg-white border border-blue-600 text-blue-600 px-8 py-3 rounded-full font-semibold shadow-md hover:bg-blue-50 transition"
                >
                    View Projects
                </Link>
                <Link
                    to="/blogs"
                    className="bg-white border border-blue-600 text-blue-600 px-8 py-3 rounded-full font-semibold shadow-md hover:bg-blue-50 transition"
                >
                    View Blogs
                </Link>
                <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white border border-blue-600 text-blue-600 px-8 py-3 rounded-full font-semibold shadow-md hover:bg-blue-50 transition"
                >
                    Download Résumé
                </a>
            </div>

            <div className="flex gap-8 text-3xl text-gray-600 dark:text-gray-300 mb-2">
                <a
                    href="https://github.com/yourgithub"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-black dark:hover:text-white transition"
                    aria-label="GitHub"
                >
                    <FaGithub />
                </a>
                <a
                    href="https://linkedin.com/in/yourlinkedin"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-700 transition"
                    aria-label="LinkedIn"
                >
                    <FaLinkedin />
                </a>
                <a
                    href="mailto:your@email.com"
                    className="hover:text-red-500 transition"
                    aria-label="Email"
                >
                    <FaEnvelope />
                </a>
            </div>
            <span className="text-sm text-gray-400 mt-2">Open to new opportunities & collaborations</span>
        </section>
    );
}
