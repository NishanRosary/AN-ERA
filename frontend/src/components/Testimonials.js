import React from "react";
import { cn } from "../lib/utils";
import { TestimonialCard } from "./ui/testimonial-card";

export function TestimonialsSection({
    title,
    description,
    testimonials,
    className
}) {
    return (
        <section className={cn(
            "bg-transparent text-foreground relative z-10",
            "py-24 sm:py-32 px-0 overflow-hidden",
            className
        )}>
            <div className="mx-auto flex flex-col items-center gap-4 text-center sm:gap-16 w-full">
                <div className="flex flex-col items-center gap-4 px-4 sm:gap-8">
                    <h2 className="max-w-[720px] text-4xl font-heading font-bold text-black dark:text-white leading-tight sm:text-6xl sm:leading-tight tracking-tight">
                        {title}
                    </h2>
                    <p className="text-lg max-w-[600px] font-medium text-muted-foreground sm:text-xl">
                        {description}
                    </p>
                </div>

                <div className="relative flex w-full flex-col items-center justify-center overflow-hidden py-10">
                    <div className="group flex overflow-hidden p-2 [--gap:2rem] [gap:var(--gap)] flex-row w-full max-w-[100vw]">
                        <div className="flex shrink-0 w-max justify-around [gap:var(--gap)] animate-marquee flex-row group-hover:[animation-play-state:paused] hover:cursor-grab active:cursor-grabbing">
                            {[...Array(2)].map((_, setIndex) => (
                                <React.Fragment key={setIndex}>
                                    {testimonials.map((testimonial, i) => (
                                        <TestimonialCard
                                            key={`${setIndex}-${i}`}
                                            {...testimonial}
                                        />
                                    ))}
                                </React.Fragment>
                            ))}
                        </div>
                    </div>

                    <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-1/4 bg-gradient-to-r from-background to-transparent sm:block z-10" />
                    <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/4 bg-gradient-to-l from-background to-transparent sm:block z-10" />
                </div>
            </div>
        </section>
    )
}
