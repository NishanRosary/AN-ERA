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
                "group relative inline-flex h-12 w-full sm:w-auto animate-rainbow cursor-pointer items-center justify-center rounded-xl border-0 bg-[length:200%] px-10 py-3 font-medium text-white transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg",

                "before:absolute before:bottom-[-20%] before:left-1/2 before:z-0 before:h-1/5 before:w-3/5 before:-translate-x-1/2 before:animate-rainbow before:bg-[linear-gradient(90deg,var(--emerald-light),var(--mint-flash),var(--alpine-green),var(--emerald-light),var(--mint-flash))] before:bg-[length:200%] before:[filter:blur(calc(1rem))]",

                "bg-[linear-gradient(hsl(var(--primary)),hsl(var(--primary))),linear-gradient(hsl(var(--primary))_50%,hsl(var(--primary)/60)_80%,transparent),linear-gradient(90deg,hsl(var(--alpine-green)),hsl(var(--emerald-light)),hsl(var(--mint-flash)),hsl(var(--alpine-green)),hsl(var(--emerald-light)))]",

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
