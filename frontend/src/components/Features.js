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

    return (
        <div className="wrapper-3d pt-20 pb-40">
            <div className="inner-3d" style={{ "--quantity": features.length }}>
                {features.map((feature, index) => (
                    <div
                        key={index}
                        className="card-3d group"
                        style={{
                            "--index": index,
                            "--color-card": feature.color,
                        }}
                    >
                        <div className="img-bg" />
                        <div className="card-content">
                            <div 
                                className="mb-6 p-4 rounded-full bg-background/50 border border-border group-hover:border-accent group-hover:text-accent transition-all duration-300 dark:shadow-[0_0_20px_rgba(62,207,122,0.2)]"
                                style={{ color: `rgb(${feature.color})` }}
                            >
                                {feature.icon}
                            </div>
                            <h3 className="text-lg md:text-xl font-heading font-bold mb-3 text-foreground tracking-tight">
                                {feature.title}
                            </h3>
                            <p className="text-xs md:text-sm text-center text-muted-foreground font-medium leading-relaxed px-2">
                                {feature.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            {/* Added a subtle glow effect behind the carousel */}
            <div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 blur-[120px] rounded-full pointer-events-none -z-10" />
        </div>
    );
}
