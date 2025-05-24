import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
    {
        title: "AI-Powered Email Enhancer",
        description:
            "Built with .NET Core API + React + OpenAI to rewrite and improve user emails.",
        stack: [".NET Core", "React", "OpenAI", "Tailwind"],
        github: "https://github.com/yourname/email-enhancer",
        demo: "https://email-enhancer-demo.vercel.app",
    },
    {
        title: "H-1B LCA Filing Explorer",
        description:
            "A dashboard to explore U.S. H-1B LCA filings using filters and charts. ASP.NET Core + SQL + Chart.js.",
        stack: ["ASP.NET Core", "SQL Server", "Chart.js", "React"],
        github: "https://github.com/yourname/h1b-lca-explorer",
        demo: "",
    },
    // Add more projects here
];

export default function Projects() {
    return (
        <section className="max-w-6xl mx-auto px-4 py-16">
            <h1 className="text-4xl font-bold text-center mb-10 text-gray-800 dark:text-white">
                Projects
            </h1>
            <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {projects.map((project, i) => (
                    <div
                        key={i}
                        className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 flex flex-col justify-between hover:shadow-2xl transition"
                    >
                        <div>
                            <h2 className="text-2xl font-semibold mb-2 text-blue-600">{project.title}</h2>
                            <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.stack.map((tech, j) => (
                                    <span
                                        key={j}
                                        className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300 px-2 py-1 rounded"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="flex gap-4 mt-4">
                            {project.github && (
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white"
                                >
                                    <FaGithub size={20} />
                                </a>
                            )}
                            {project.demo && (
                                <a
                                    href={project.demo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-600 dark:text-gray-300 hover:text-blue-600"
                                >
                                    <FaExternalLinkAlt size={20} />
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
