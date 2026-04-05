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

const API_BASE_URL = process.env.REACT_APP_API_URL || "";

const iconMap = {
    video: Video,
    "bar-chart-2": BarChart2,
    globe: Globe,
    "audio-lines": AudioLines,
    "plane-takeoff": PlaneTakeoff,
};

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

const fallbackActions = [
    {
        id: "1",
        label: "Schedule Consultation",
        icon: "video",
        description: "Zoom / Meet",
        short: "Ctrl+C",
        end: "Action",
        href: "#pricing",
    },
    {
        id: "2",
        label: "Request Audit",
        icon: "bar-chart-2",
        description: "Cybersecurity",
        short: "Ctrl+A",
        end: "Service",
        href: "#services",
    },
    {
        id: "3",
        label: "View Case Studies",
        icon: "globe",
        description: "Portfolio",
        short: "Enter",
        end: "Page",
        href: "#work",
    },
    {
        id: "4",
        label: "Talk to AI Assistant",
        icon: "audio-lines",
        description: "Jarvis",
        short: "Ctrl+K",
        end: "Active",
        href: "#work",
    },
    {
        id: "5",
        label: "Deploy Cloud Infra",
        icon: "plane-takeoff",
        description: "AWS / Azure",
        short: "Enter",
        end: "Service",
        href: "#services",
    },
];

function ActionIcon({ icon }) {
    const Icon = iconMap[icon] || Search;

    return <Icon className="h-4 w-4 text-accent" />;
}

export function ActionSearchBar({ actions = fallbackActions }) {
    const [query, setQuery] = useState("");
    const [result, setResult] = useState(null);
    const [isFocused, setIsFocused] = useState(false);
    const [selectedAction, setSelectedAction] = useState(null);
    const [status, setStatus] = useState("idle");
    const debouncedQuery = useDebounce(query, 200);

    useEffect(() => {
        if (!isFocused) {
            setResult(null);
            return;
        }

        let ignore = false;

        async function loadActions() {
            try {
                setStatus("loading");

                const searchParams = new URLSearchParams();

                if (debouncedQuery.trim()) {
                    searchParams.set("q", debouncedQuery.trim());
                }

                const response = await fetch(
                    `${API_BASE_URL}/api/actions${searchParams.toString() ? `?${searchParams.toString()}` : ""}`
                );

                if (!response.ok) {
                    throw new Error(`Request failed with ${response.status}`);
                }

                const payload = await response.json();

                if (!ignore) {
                    setResult({ actions: payload.actions });
                    setStatus("online");
                }
            } catch (error) {
                const normalizedQuery = debouncedQuery.toLowerCase().trim();
                const filteredActions = actions.filter((action) => {
                    const searchableText = `${action.label} ${action.description}`.toLowerCase();
                    return searchableText.includes(normalizedQuery);
                });

                if (!ignore) {
                    setResult({ actions: filteredActions });
                    setStatus("fallback");
                }
            }
        }

        loadActions();

        return () => {
            ignore = true;
        };
    }, [actions, debouncedQuery, isFocused]);

    const handleInputChange = (e) => {
        setQuery(e.target.value);
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

    const handleActionSelect = (action) => {
        setSelectedAction(action);

        if (action.href) {
            window.location.assign(action.href);
        }
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
                            className="relative pl-5 pr-12 py-6 text-lg rounded-xl focus-visible:ring-accent focus-visible:ring-2 border-border bg-card/90 backdrop-blur-md text-foreground shadow-2xl placeholder:text-muted-foreground"
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
                                className="w-full border rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden border-border bg-card/95 backdrop-blur-xl"
                                variants={container}
                                initial="hidden"
                                animate="show"
                                exit="exit"
                            >
                                <motion.ul className="py-2">
                                    {result.actions.map((action) => (
                                        <motion.li
                                            key={action.id}
                                            className="px-4 py-3 flex items-center justify-between hover:bg-muted cursor-pointer transition-colors"
                                            variants={item}
                                            layout
                                            onClick={() => handleActionSelect(action)}
                                        >
                                            <div className="flex items-center gap-3 justify-between">
                                                <div className="flex items-center gap-3">
                                                    <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-background border border-border">
                                                        <ActionIcon icon={action.icon} />
                                                    </span>
                                                    <span className="text-sm font-semibold text-foreground">
                                                        {action.label}
                                                    </span>
                                                    <span className="text-xs text-muted-foreground font-mono hidden sm:inline-block">
                                                        {action.description}
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <span className="text-xs text-muted-foreground font-mono bg-background px-2 py-1 rounded border border-border">
                                                    {action.short || "Enter"}
                                                </span>
                                            </div>
                                        </motion.li>
                                    ))}
                                </motion.ul>
                                <div className="px-4 py-3 bg-muted/50 border-t border-border">
                                    <div className="flex items-center justify-between text-xs text-muted-foreground font-mono">
                                        <span>{status === "fallback" ? "Offline search fallback" : "Live backend search"}</span>
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
