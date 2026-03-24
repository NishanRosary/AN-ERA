import React, { useState, useRef } from "react";
import { Button, buttonVariants } from "./ui/button";
import { Label } from "./ui/label";
import { Switch } from "./ui/switch";
import { useMediaQuery } from "../hooks/use-media-query";
import { cn } from "../lib/utils";
import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";
import { Link } from "react-router-dom";
import confetti from "canvas-confetti";
import NumberFlow from "@number-flow/react";

export function Pricing({
    plans,
    title = "Flexible & Transparent Pricing",
    description = "Choose the plan that best fits your enterprise needs.\nAll plans include unlimited support and access to our core platforms.",
}) {
    const [isMonthly, setIsMonthly] = useState(true);
    const isDesktop = useMediaQuery("(min-width: 768px)");
    const switchRef = useRef(null);

    const handleToggle = (checked) => {
        setIsMonthly(!checked);
        if (checked && switchRef.current) {
            const rect = switchRef.current.getBoundingClientRect();
            const x = rect.left + rect.width / 2;
            const y = rect.top + rect.height / 2;

            confetti({
                particleCount: 80,
                spread: 70,
                origin: {
                    x: x / window.innerWidth,
                    y: y / window.innerHeight,
                },
                colors: [
                    "#2D6A4F",
                    "#3ECF7A",
                    "#52E09C",
                    "#F0FFF6",
                ],
                ticks: 200,
                gravity: 1.2,
                decay: 0.94,
                startVelocity: 30,
                shapes: ["circle"],
                zIndex: 100,
            });
        }
    };

    return (
        <section id="pricing" className="py-24 sm:py-32 relative z-10 flex flex-col items-center">
            <div className="container max-w-7xl mx-auto px-4 md:px-6">
                <div className="text-center space-y-4 mb-16">
                    <h2 className="text-4xl font-heading font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                        {title}
                    </h2>
                    <p className="text-muted-foreground text-lg whitespace-pre-line max-w-2xl mx-auto">
                        {description}
                    </p>
                </div>

                <div className="flex justify-center items-center gap-3 mb-16">
                    <span className={`text-sm font-medium ${isMonthly ? 'text-foreground' : 'text-muted-foreground'}`}>Monthly billing</span>
                    <Label className="relative inline-flex items-center cursor-pointer">
                        <Switch
                            ref={switchRef}
                            checked={!isMonthly}
                            onCheckedChange={handleToggle}
                            className="data-[state=checked]:bg-accent data-[state=unchecked]:bg-card border-border"
                        />
                    </Label>
                    <span className={`text-sm font-medium ${!isMonthly ? 'text-foreground' : 'text-muted-foreground'}`}>
                        Annual billing <span className="text-accent underline decoration-accent/50 underline-offset-4">(Save 20%)</span>
                    </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 max-w-6xl mx-auto">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={index}
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={
                                isDesktop
                                    ? {
                                        y: plan.isPopular ? -20 : 0,
                                        opacity: 1,
                                        x: index === 2 ? -20 : index === 0 ? 20 : 0,
                                        scale: index === 0 || index === 2 ? 0.95 : 1.05,
                                    }
                                    : { opacity: 1, y: 0 }
                            }
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{
                                duration: 0.8,
                                type: "spring",
                                stiffness: 80,
                                damping: 20,
                                delay: index * 0.1,
                            }}
                            className={cn(
                                `rounded-3xl border border-border p-8 backdrop-blur-xl bg-card/80 dark:bg-card/30 flex flex-col relative overflow-hidden transition-all duration-300`,
                                plan.isPopular ? "border-accent/50 shadow-[0_0_40px_rgba(62,207,122,0.15)] ring-1 ring-accent" : "hover:border-accent/20 hover:bg-card",
                                index === 0 || index === 2 ? "z-0" : "z-10 shadow-2xl",
                            )}
                        >
                            {plan.isPopular && (
                                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-alpine-green via-accent to-mint-flash"></div>
                            )}
                            {plan.isPopular && (
                                <div className="absolute top-4 right-4 bg-primary/20 border border-primary/30 text-accent text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1">
                                    <Star className="w-3 h-3 fill-accent" />
                                    Popular
                                </div>
                            )}

                            <div className="flex-1 flex flex-col">
                                <p className="text-lg font-heading font-semibold text-foreground/90">
                                    {plan.name}
                                </p>

                                <div className="mt-6 flex flex-col">
                                    <div className="flex items-baseline gap-1">
                                        <span className="text-5xl font-mono font-bold tracking-tight text-foreground">
                                            <NumberFlow
                                                value={isMonthly ? Number(plan.price) : Number(plan.yearlyPrice)}
                                                format={{ style: "currency", currency: "USD", minimumFractionDigits: 0 }}
                                            />
                                        </span>
                                        {plan.period && (
                                            <span className="text-sm font-medium text-muted-foreground">
                                                /{plan.period}
                                            </span>
                                        )}
                                    </div>
                                    <p className="mt-2 text-sm text-foreground/60 h-5">
                                        {isMonthly ? "Billed monthly" : "Billed annually ($" + plan.yearlyPrice * 12 + "/yr)"}
                                    </p>
                                </div>

                                <div className="my-8 flex-1">
                                    <ul className="space-y-4">
                                        {plan.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-start gap-3">
                                                <Check className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                                                <span className="text-sm text-foreground/80">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <Link
                                    to={plan.href}
                                    className={cn(
                                        buttonVariants({ variant: plan.isPopular ? "default" : "outline" }),
                                        "w-full py-6 text-base font-semibold rounded-xl transition-all duration-300 group",
                                        plan.isPopular
                                            ? "bg-accent hover:bg-mint-flash text-white dark:text-dark-bg shadow-lg shadow-accent/20"
                                            : "bg-background/50 hover:bg-card hover:text-foreground border-border"
                                    )}
                                >
                                    {plan.buttonText}
                                    <motion.span
                                        className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1"
                                    >
                                        →
                                    </motion.span>
                                </Link>

                                <p className="mt-4 text-xs text-center text-muted-foreground">
                                    {plan.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
