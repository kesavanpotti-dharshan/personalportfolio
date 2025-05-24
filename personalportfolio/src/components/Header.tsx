import { Link, useLocation } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";
// import ThemeToggle from "./ThemeToggle";

export default function Header() {
    const { pathname } = useLocation();

    const navItems = [
        { label: "Home", path: "/" },
        { label: "About", path: "/about" },
        { label: "Projects", path: "/projects" },
        { label: "Blogs", path: "/blogs" },
        { label: "Contact", path: "/contact" },
    ];

    return (
        <header className="sticky top-0 left-0 right-0 z-50 bg-gray-100 dark:bg-gray-800 shadow-sm w-full">
            <div className="w-full px-4 py-4 flex items-center justify-between h-20">
                {/* Logo or name */}
                <Link to="/" className="text-xl font-bold text-blue-600">
                    Dharshan.dev
                </Link>

                {/* Navigation */}
                <nav className="flex items-center gap-7 text-gray-700 dark:text-gray-300">
                    {navItems.map((item) => (
                        <Link
                            key={item.path}
                            to={item.path}
                            className={`hover:text-blue-600 transition ${pathname === item.path ? "font-semibold text-blue-600" : ""
                                }`}
                        >
                            {item.label}
                        </Link>
                    ))}

                    {/* Icons */}
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
                    {/* <ThemeToggle /> */}
                </nav>
            </div>
        </header>
    );
}
