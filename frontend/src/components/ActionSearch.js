import React, { useState, useEffect } from "react";
import { Input } from "./ui/input";
import { motion, AnimatePresence } from "framer-motion";
import {
    Search,
    Send,
    BarChart2,
    Globe,
    Video,
    PlaneTakeoff,
    AudioLines,
} from "lucide-react";

function useDebounce(value, delay = 500) {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => {
            clearTimeout(timer);
        };
    }, [value, delay]);

    return debouncedValue;
}

const allActions = [
    {
        id: "1",
        label: "Schedule Consultation",
        icon: <Video className="h-4 w-4 text-emerald-light" />,
        description: "Zoom / Meet",
        short: "⌘C",
        end: "Action",
    },
    {
        id: "2",
        label: "Request Audit",
        icon: <BarChart2 className="h-4 w-4 text-accent" />,
        description: "Cybersecurity",
        short: "⌘A",
        end: "Service",
    },
    {
        id: "3",
        label: "View Case Studies",
        icon: <Globe className="h-4 w-4 text-mint-flash" />,
        description: "Portfolio",
        short: "",
        end: "Page",
    },
    {
        id: "4",
        label: "Talk to AI Assistant",
        icon: <AudioLines className="h-4 w-4 text-alpine-green" />,
        description: "Jarvis",
        short: "⌘K",
        end: "Active",
    },
    {
        id: "5",
        label: "Deploy Cloud Infra",
        icon: <PlaneTakeoff className="h-4 w-4 text-emerald-light" />,
        description: "AWS / Azure",
        short: "",
        end: "Service",
    },
];

export function ActionSearchBar({ actions = allActions }) {
    const [query, setQuery] = useState("");
    const [result, setResult] = useState(null);
    const [isFocused, setIsFocused] = useState(false);
    const [isTyping, setIsTyping] = useState(false);
    const [selectedAction, setSelectedAction] = useState(null);
    const debouncedQuery = useDebounce(query, 200);

    useEffect(() => {
        if (!isFocused) {
            setResult(null);
            return;
        }

        if (!debouncedQuery) {
            setResult({ actions: allActions });
            return;
        }

        const normalizedQuery = debouncedQuery.toLowerCase().trim();
        const filteredActions = allActions.filter((action) => {
            const searchableText = action.label.toLowerCase();
            return searchableText.includes(normalizedQuery);
        });

        setResult({ actions: filteredActions });
    }, [debouncedQuery, isFocused]);

    const handleInputChange = (e) => {
        setQuery(e.target.value);
        setIsTyping(true);
    };

    const container = {
        hidden: { opacity: 0, height: 0 },
        show: {
            opacity: 1,
            height: "auto",
            transition: {
                height: {
                    duration: 0.4,
                },
                staggerChildren: 0.1,
            },
        },
        exit: {
            opacity: 0,
            height: 0,
            transition: {
                height: {
                    duration: 0.3,
                },
                opacity: {
                    duration: 0.2,
                },
            },
        },
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.3,
            },
        },
        exit: {
            opacity: 0,
            y: -10,
            transition: {
                duration: 0.2,
            },
        },
    };

    const handleFocus = () => {
        setSelectedAction(null);
        setIsFocused(true);
    };

    return (
        <div className="w-full max-w-xl mx-auto py-20 relative z-20">
            <div className="relative flex flex-col justify-start items-center min-h-[300px]">
                <div className="w-full max-w-lg sticky top-0 bg-transparent z-10 pt-4 pb-1">
                    <label
                        className="text-sm font-medium text-muted-foreground mb-4 block text-center uppercase tracking-widest"
                        htmlFor="search"
                    >
                        Try Our Command Center
                    </label>
                    <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-alpine-green via-accent to-mint-flash rounded-xl opacity-30 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 blur-md"></div>
                        <Input
                            type="text"
                            placeholder="What do you want to build?"
                            value={query}
                            onChange={handleInputChange}
                            onFocus={handleFocus}
                            onBlur={() =>
                                setTimeout(() => setIsFocused(false), 200)
                            }
                            className="relative pl-5 pr-12 py-6 text-lg rounded-xl focus-visible:ring-accent focus-visible:ring-2 border-white/10 bg-surface/90 backdrop-blur-md text-white shadow-2xl placeholder:text-muted-foreground"
                        />
                        <div className="absolute right-5 top-1/2 -translate-y-1/2 h-5 w-5">
                            <AnimatePresence mode="popLayout">
                                {query.length > 0 ? (
                                    <motion.div
                                        key="send"
                                        initial={{ y: -20, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        exit={{ y: 20, opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <Send className="w-5 h-5 text-accent" />
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="search"
                                        initial={{ y: -20, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        exit={{ y: 20, opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <Search className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>

                <div className="w-full max-w-lg absolute top-28 mt-2">
                    <AnimatePresence>
                        {isFocused && result && !selectedAction && (
                            <motion.div
                                className="w-full border rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden border-white/10 bg-card/95 backdrop-blur-xl"
                                variants={container}
                                initial="hidden"
                                animate="show"
                                exit="exit"
                            >
                                <motion.ul className="py-2">
                                    {result.actions.map((action) => (
                                        <motion.li
                                            key={action.id}
                                            className="px-4 py-3 flex items-center justify-between hover:bg-white/5 cursor-pointer transition-colors"
                                            variants={item}
                                            layout
                                            onClick={() =>
                                                setSelectedAction(action)
                                            }
                                        >
                                            <div className="flex items-center gap-3 justify-between">
                                                <div className="flex items-center gap-3">
                                                    <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-surface border border-white/5">
                                                        {action.icon}
                                                    </span>
                                                    <span className="text-sm font-semibold text-white">
                                                        {action.label}
                                                    </span>
                                                    <span className="text-xs text-muted-foreground font-mono hidden sm:inline-block">
                                                        {action.description}
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <span className="text-xs text-muted-foreground font-mono bg-surface px-2 py-1 rounded">
                                                    {action.short || "Enter"}
                                                </span>
                                            </div>
                                        </motion.li>
                                    ))}
                                </motion.ul>
                                <div className="px-4 py-3 bg-surface border-t border-white/5">
                                    <div className="flex items-center justify-between text-xs text-muted-foreground font-mono">
                                        <span>Press ⌘K to open commands</span>
                                        <span>ESC to cancel</span>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}
