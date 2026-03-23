import React from "react";
import { cn } from "../lib/utils";
import { Sparkles, Code2, Shield, Cloud, Smartphone, Database } from "lucide-react";

function DisplayCard({
    className,
    icon = <Sparkles className="size-4 text-accent" />,
    title = "Featured",
    description = "Discover amazing content",
    date = "Just now",
    iconClassName = "text-accent",
    titleClassName = "text-accent",
}) {
    return (
        <div
            className={cn(
                "relative flex h-40 w-[24rem] -skew-y-[4deg] select-none flex-col justify-between rounded-2xl border border-white/10 bg-surface/80 backdrop-blur-md px-6 py-5 transition-all duration-700 after:absolute after:-right-1 after:top-[-5%] after:h-[110%] after:w-[20rem] after:bg-gradient-to-l after:from-background after:to-transparent after:content-[''] hover:border-accent/40 hover:bg-card [&>*]:flex [&>*]:items-center [&>*]:gap-2 shadow-2xl",
                className
            )}
        >
            <div>
                <span className="relative inline-flex items-center justify-center rounded-lg bg-primary/20 p-2 border border-primary/30">
                    {icon}
                </span>
                <p className={cn("text-xl font-heading font-semibold ml-3", titleClassName)}>{title}</p>
            </div>
            <p className="text-lg text-foreground/90 whitespace-nowrap">{description}</p>
            <p className="text-sm font-mono text-muted-foreground">{date}</p>
        </div>
    );
}

export function Features({ cards }) {
    const defaultCards = [
        {
            title: "Web Development",
            description: "Next-gen immersive web apps",
            date: "React / Next.js / Three.js",
            icon: <Code2 className="size-5 text-accent" />,
            className: "[grid-area:stack] hover:-translate-y-10 z-[3] before:absolute before:inset-0 before:rounded-2xl before:bg-background/40 hover:before:opacity-0 before:transition-opacity before:duration-700 hover:scale-105",
        },
        {
            title: "Cybersecurity",
            description: "Enterprise-grade protection",
            date: "Audit / Penetration Pro",
            icon: <Shield className="size-5 text-emerald-light" />,
            className: "[grid-area:stack] translate-x-12 translate-y-12 hover:-translate-y-2 z-[2] before:absolute before:inset-0 before:rounded-2xl before:bg-background/60 hover:before:opacity-0 before:transition-opacity before:duration-700 hover:scale-105",
        },
        {
            title: "Cloud Services",
            description: "Infinite scalable infrastructure",
            date: "AWS / Azure / GCP",
            icon: <Cloud className="size-5 text-mint-flash" />,
            className: "[grid-area:stack] translate-x-24 translate-y-24 hover:translate-y-10 z-[1] hover:scale-105",
        },
    ];

    const displayCards = cards || defaultCards;

    return (
        <div className="grid [grid-template-areas:'stack'] place-items-center opacity-100 animate-in fade-in-0 duration-700 perspective-[1000px]">
            {displayCards.map((cardProps, index) => (
                <DisplayCard key={index} {...cardProps} />
            ))}
        </div>
    );
}
