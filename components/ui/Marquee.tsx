"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface MarqueeProps {
    children: ReactNode;
    direction?: "left" | "right";
    speed?: number;
    className?: string;
}

export function Marquee({ children, direction = "left", speed = 50, className = "" }: MarqueeProps) {
    return (
        <div className={`overflow-hidden flex whitespace-nowrap ${className}`}>
            <motion.div
                className="flex flex-shrink-0 gap-4 px-4"
                initial={{ x: direction === "left" ? "0%" : "-100%" }}
                animate={{ x: direction === "left" ? "-100%" : "0%" }}
                transition={{
                    repeat: Infinity,
                    ease: "linear",
                    duration: speed,
                }}
            >
                {children}
            </motion.div>
            <motion.div
                className="flex flex-shrink-0 gap-4 px-4"
                initial={{ x: direction === "left" ? "0%" : "-100%" }}
                animate={{ x: direction === "left" ? "-100%" : "0%" }}
                transition={{
                    repeat: Infinity,
                    ease: "linear",
                    duration: speed,
                }}
            >
                {children}
            </motion.div>
        </div>
    );
}
