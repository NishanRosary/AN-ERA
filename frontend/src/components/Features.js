import React from "react";
import { cn } from "../lib/utils";
import {
    Code2,
    Cloud,
    Shield,
    Smartphone,
    Database,
    Headset,
    RefreshCcw,
    Sparkles
} from "lucide-react";

export function Features() {
    const features = [
        {
            title: "Built for visionaries",
            description: "Engineered for startups, enterprises, dreamers, thinkers and doers.",
            icon: <Sparkles className="w-6 h-6" />,
        },
        {
            title: "Immersive Experiences",
            description: "World-class web and mobile applications that captivate and convert.",
            icon: <Smartphone className="w-6 h-6" />,
        },
        {
            title: "Scalable Architecture",
            description: "Infinite scale on AWS, Azure, and GCP. Pay only for what you use.",
            icon: <Cloud className="w-6 h-6" />,
        },
        {
            title: "Ironclad Security",
            description: "Military-grade encryption and 24/7 penetration testing guarantees.",
            icon: <Shield className="w-6 h-6" />,
        },
        {
            title: "Next-Gen Stack",
            description: "React, Next.js, and specialized WebGL shaders for a premium feel.",
            icon: <Code2 className="w-6 h-6" />,
        },
        {
            title: "Data Analytics",
            description: "Turn your messy data streams into actionable insights effortlessly.",
            icon: <Database className="w-6 h-6" />,
        },
        {
            title: "24/7 Premium Support",
            description: "We are available 100% of the time to assist with your infrastructure.",
            icon: <Headset className="w-6 h-6" />,
        },
        {
            title: "Agile Delivery",
            description: "Rapid iteration cycles ensuring you beat your competitors to market.",
            icon: <RefreshCcw className="w-6 h-6" />,
        },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 py-10 max-w-7xl mx-auto">
            {features.map((feature, index) => (
                <Feature key={feature.title} {...feature} index={index} />
            ))}
        </div>
    );
}

const Feature = ({ title, description, icon, index }) => {
    return (
        <div
            className={cn(
                "flex flex-col lg:border-r py-10 relative group/feature border-border transition-colors duration-300",
                (index === 0 || index === 4) && "lg:border-l border-border",
                index < 4 && "lg:border-b border-border"
            )}
        >
            {index < 4 && (
                <div className="opacity-0 group-hover/feature:opacity-100 transition duration-500 absolute inset-0 h-full w-full bg-gradient-to-t from-accent/10 to-transparent pointer-events-none" />
            )}
            {index >= 4 && (
                <div className="opacity-0 group-hover/feature:opacity-100 transition duration-500 absolute inset-0 h-full w-full bg-gradient-to-b from-accent/10 to-transparent pointer-events-none" />
            )}
            <div className="mb-4 relative z-10 px-10 text-primary group-hover/feature:text-accent transition-colors duration-300 dark:drop-shadow-[0_0_15px_rgba(62,207,122,0.5)]">
                {icon}
            </div>
            <div className="text-xl font-heading font-bold mb-2 relative z-10 px-10">
                <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-border group-hover/feature:bg-accent transition-all duration-300 origin-center" />
                <span className="group-hover/feature:translate-x-2 transition duration-300 inline-block text-foreground/90">
                    {title}
                </span>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs relative z-10 px-10 group-hover/feature:text-foreground/70 transition-colors duration-300 leading-relaxed font-medium">
                {description}
            </p>
        </div>
    );
};
