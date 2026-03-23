import React from "react";
import { cn } from "../../lib/utils";

export function RainbowButton({
    children,
    className,
    ...props
}) {
    return (
        <button
            className={cn(
                "group relative inline-flex h-12 w-full sm:w-auto animate-rainbow cursor-pointer items-center justify-center rounded-xl border-0 bg-[length:200%] px-10 py-3 font-medium text-white transition-all duration-300 transform hover:scale-105 active:scale-95",

                "before:absolute before:bottom-[-20%] before:left-1/2 before:z-0 before:h-1/5 before:w-3/5 before:-translate-x-1/2 before:animate-rainbow before:bg-[linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))] before:bg-[length:200%] before:[filter:blur(calc(1rem))]",

                "bg-[linear-gradient(#050E09,#050E09),linear-gradient(#050E09_50%,rgba(5,14,9,0.6)_80%,rgba(5,14,9,0)),linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))]",

                className,
            )}
            {...props}
        >
            <span className="relative z-10 flex items-center justify-center gap-2 font-semibold text-lg tracking-wide">
                {children}
            </span>
        </button>
    );
}
