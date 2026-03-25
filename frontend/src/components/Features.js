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
import "./Features.css";

export function Features() {
    const features = [
        {
            title: "Built for visionaries",
            description: "Engineered for startups, enterprises, and dreamers.",
            icon: <Sparkles className="w-8 h-8" />,
            color: "62, 207, 122" // #3ECF7A (Accent)
        },
        {
            title: "Immersive Experiences",
            description: "World-class web and mobile applications.",
            icon: <Smartphone className="w-8 h-8" />,
            color: "45, 106, 79" // Alpine Green
        },
        {
            title: "Scalable Architecture",
            description: "Infinite scale on AWS, Azure, and GCP.",
            icon: <Cloud className="w-8 h-8" />,
            color: "62, 207, 122"
        },
        {
            title: "Ironclad Security",
            description: "Military-grade encryption and testing.",
            icon: <Shield className="w-8 h-8" />,
            color: "45, 106, 79"
        },
        {
            title: "Next-Gen Stack",
            description: "React, Next.js, and specialized WebGL.",
            icon: <Code2 className="w-8 h-8" />,
            color: "62, 207, 122"
        },
        {
            title: "Data Analytics",
            description: "Turn messy data into actionable insights.",
            icon: <Database className="w-8 h-8" />,
            color: "45, 106, 79"
        },
        {
            title: "Premium Support",
            description: "Available 100% of the time to assist.",
            icon: <Headset className="w-8 h-8" />,
            color: "62, 207, 122"
        },
        {
            title: "Agile Delivery",
            description: "Rapid iteration cycles to beat competitors.",
            icon: <RefreshCcw className="w-8 h-8" />,
            color: "45, 106, 79"
        },
    ];

    // Duplicate features for seamless loop
    const displayFeatures = [...features, ...features];

    return (
        <div className="wrapper-3d pt-20 pb-40">
            <div className="marquee-3d">
                <div className="inner-marquee-3d">
                    {displayFeatures.map((feature, index) => (
                        <div
                            key={index}
                            className="card-3d group"
                            style={{
                                "--color-card": feature.color,
                            }}
                        >
                            <div className="flip-content">
                                {/* The "back" side in CSS is visible first */}
                                <div className="flip-back-side">
                                    <div className="flip-overlay bg-card group-hover:bg-primary/[0.03] dark:group-hover:bg-primary/[0.08] flex flex-col items-center justify-center p-8 text-center transition-colors duration-500">
                                        <div 
                                            className="mb-8 p-6 rounded-full bg-background/50 border border-border/40 group-hover:scale-110 transition-transform duration-500 shadow-[0_0_30px_rgba(62,207,122,0.1)]"
                                            style={{ color: `rgb(${feature.color})` }}
                                        >
                                            {feature.icon}
                                        </div>
                                        <h3 className="text-xl md:text-2xl font-heading font-bold text-foreground tracking-tight">
                                            {feature.title}
                                        </h3>
                                        <div className="mt-4 px-4 py-1 rounded-full bg-accent/10 border border-accent/20 text-[10px] font-mono text-accent uppercase tracking-[0.2em]">
                                            Expertise
                                        </div>
                                    </div>
                                </div>

                                {/* The "front" side in CSS shows on hover */}
                                <div className="flip-front-side">
                                    <div className="flip-overlay bg-card group-hover:bg-primary/[0.05] dark:group-hover:bg-primary/[0.1] flex flex-col items-center justify-center p-8 text-center transition-colors duration-500">
                                        <h3 className="text-lg font-heading font-bold mb-4 text-accent uppercase tracking-wider">
                                            {feature.title}
                                        </h3>
                                        <p className="text-sm md:text-base text-muted-foreground font-medium leading-relaxed">
                                            {feature.description}
                                        </p>
                                        <div className="mt-8 flex gap-2">
                                            <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                                            <div className="w-2 h-2 rounded-full bg-accent/60 animate-pulse delay-75" />
                                            <div className="w-2 h-2 rounded-full bg-accent/30 animate-pulse delay-150" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
