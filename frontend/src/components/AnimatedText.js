import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function AnimatedTextCycle({
    words,
    interval = 3000,
    className = "",
}) {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
        }, interval);

        return () => clearInterval(timer);
    }, [interval, words.length]);

    const containerVariants = {
        hidden: {
            y: 40,
            opacity: 0,
            filter: "blur(8px)",
            rotateX: -45,
        },
        visible: {
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
            rotateX: 0,
            transition: {
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1] // Custom snappy easing
            }
        },
        exit: {
            y: -40,
            opacity: 0,
            filter: "blur(8px)",
            rotateX: 45,
            transition: {
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1]
            }
        },
    };

    return (
        <div className="relative inline-grid [grid-template-areas:'stack'] overflow-visible w-full max-w-max">
            <AnimatePresence mode="popLayout" initial={false}>
                <motion.span
                    key={currentIndex}
                    className={`col-start-1 row-start-1 text-primary dark:text-accent ${className}`}
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    style={{ whiteSpace: "nowrap", transformOrigin: "center" }}
                >
                    {words[currentIndex]}
                </motion.span>
            </AnimatePresence>
        </div>
    );
}
