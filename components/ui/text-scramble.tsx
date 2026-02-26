"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

const CHARS = "-_~`!@#$%^&*()+=[]{}|;:,.<>?/";

interface TextScrambleProps {
    children: string;
    className?: string;
    duration?: number;
    speed?: number;
    delay?: number;
}

export function TextScramble({
    children,
    className,
    duration = 0.8,
    speed = 0.04,
    delay = 0
}: TextScrambleProps) {
    const [text, setText] = useState("");
    const [isScrambling, setIsScrambling] = useState(false);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (isInView && !isScrambling) {
            setTimeout(() => {
                scramble();
            }, delay * 1000);
        }
    }, [isInView]);

    const scramble = () => {
        setIsScrambling(true);
        let pos = 0;

        // Calculate total steps based on duration and speed
        const totalSteps = duration / speed;
        let step = 0;

        const interval = setInterval(() => {
            const scrambled = children.split("")
                .map((char, index) => {
                    if (index < pos) {
                        return char;
                    }
                    return CHARS[Math.floor(Math.random() * CHARS.length)];
                })
                .join("");

            setText(scrambled);
            pos += children.length / totalSteps;

            if (pos >= children.length) {
                clearInterval(interval);
                setText(children);
            }

            step++;
        }, speed * 1000);
    };

    return (
        <motion.span
            ref={ref}
            className={className}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
        >
            {text}
        </motion.span>
    );
}
