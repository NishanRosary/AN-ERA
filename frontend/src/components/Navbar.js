import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { useTheme } from "../hooks/use-theme";
import { Moon, Sun } from "lucide-react";

export function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { theme, toggleTheme } = useTheme();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${scrolled
                    ? "bg-background/80 backdrop-blur-[20px] border-border py-4"
                    : "bg-transparent border-transparent py-6"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2 group">
                        <span className="text-2xl font-heading font-bold text-foreground tracking-widest group-hover:text-accent transition-colors">
                            AN<span className="text-accent">-</span>ERA
                        </span>
                    </Link>

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center gap-8">
                        {["Services", "Work", "About", "Pricing"].map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                            >
                                {item}
                            </a>
                        ))}
                    </div>

                    {/* CTA & Theme Toggle */}
                    <div className="hidden md:flex items-center gap-4">
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-full hover:bg-muted transition-colors text-foreground"
                            aria-label="Toggle theme"
                        >
                            {theme === "light" ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
                        </button>
                        <Button className="bg-primary/90 hover:bg-accent text-primary-foreground rounded-full px-6 transition-all duration-300 hover:shadow-[0_0_20px_rgba(62,207,122,0.4)]">
                            Get Started
                        </Button>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <div className="md:hidden">
                        <div className="flex items-center gap-2">
                            <button
                                onClick={toggleTheme}
                                className="p-2 rounded-full hover:bg-muted transition-colors text-foreground"
                                aria-label="Toggle theme"
                            >
                                {theme === "light" ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
                            </button>
                            <button
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                className="text-foreground hover:text-accent transition-colors"
                            >
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                {mobileMenuOpen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                )}
                            </svg>
                        </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full h-screen bg-background/95 backdrop-blur-xl border-t border-[rgba(62,207,122,0.08)] pt-4 z-40">
                    <div className="flex flex-col items-center gap-8 py-8 px-4">
                        {["Services", "Work", "About", "Pricing"].map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                className="text-2xl font-heading font-semibold text-foreground hover:text-accent transition-colors w-full text-center py-2 relative group"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {item}
                                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-accent transition-all group-hover:w-16"></span>
                            </a>
                        ))}
                        <Button className="mt-4 bg-primary text-white w-full max-w-[200px] rounded-full py-6 text-lg">
                            Get Started
                        </Button>
                    </div>
                </div>
            )}
        </nav>
    );
}
