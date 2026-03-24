import React from 'react';
import { Link } from 'react-router-dom';

export function Footer() {
    return (
        <footer className="bg-background border-t border-border pt-16 pb-8 px-4 sm:px-6 lg:px-8 relative z-10 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
                    <div className="lg:col-span-2">
                        <Link to="/" className="flex items-center gap-2 mb-6">
                            <span className="text-3xl font-heading font-bold text-foreground tracking-widest">
                                AN<span className="text-accent">-</span>ERA
                            </span>
                        </Link>
                        <p className="text-muted-foreground max-w-sm text-sm leading-relaxed">
                            A full-service technology company offering World-Class Website Development, Mobile App Development, Cloud Services, Cybersecurity, and Data Analytics.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-foreground font-semibold mb-4 text-sm tracking-wider uppercase">Services</h3>
                        <ul className="space-y-3">
                            {['Web Development', 'Mobile Apps', 'Cloud Architecture', 'Cybersecurity', 'Data Analytics'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-sm text-muted-foreground hover:text-accent transition-colors">{item}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-foreground font-semibold mb-4 text-sm tracking-wider uppercase">Company</h3>
                        <ul className="space-y-3">
                            {['About Us', 'Careers', 'Blog', 'Contact'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-sm text-muted-foreground hover:text-accent transition-colors">{item}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-foreground font-semibold mb-4 text-sm tracking-wider uppercase">Legal</h3>
                        <ul className="space-y-3">
                            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-sm text-muted-foreground hover:text-accent transition-colors">{item}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-muted-foreground">
                        © {new Date().getFullYear()} AN-Era. All rights reserved.
                    </p>
                    <div className="flex gap-6">
                        <a href="#" className="text-muted-foreground hover:text-accent transition-colors">LinkedIn</a>
                        <a href="#" className="text-muted-foreground hover:text-accent transition-colors">GitHub</a>
                        <a href="#" className="text-muted-foreground hover:text-accent transition-colors">Twitter</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
