"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface ScrambleHyperlinkProps {
    href: string;
    text: string;
    className?: string;
    scrambleSpeed?: number;
}

const CYPHER_CHARS = "0123456789!@#$%^&*()_+-=[]{}|;:,.<>/?";

export function ScrambleHyperlink({
    href,
    text,
    className,
    scrambleSpeed = 30,
}: ScrambleHyperlinkProps) {
    const [displayText, setDisplayText] = useState(text);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    const startScramble = () => {
        let iteration = 0;

        clearInterval(intervalRef.current as NodeJS.Timeout);

        intervalRef.current = setInterval(() => {
            setDisplayText((prev) =>
                text
                    .split("")
                    .map((char, index) => {
                        if (index < iteration) {
                            return text[index];
                        }
                        return CYPHER_CHARS[Math.floor(Math.random() * CYPHER_CHARS.length)];
                    })
                    .join("")
            );

            if (iteration >= text.length) {
                clearInterval(intervalRef.current as NodeJS.Timeout);
            }

            iteration += 1 / 3;
        }, scrambleSpeed);
    };

    const stopScramble = () => {
        clearInterval(intervalRef.current as NodeJS.Timeout);
        setDisplayText(text);
    };

    return (
        <Link
            href={href}
            className={cn("relative inline-block overflow-hidden transition-colors duration-300 font-mono text-sm uppercase tracking-wider hover:text-emerald-500", className)}
            onMouseEnter={startScramble}
            onMouseLeave={stopScramble}
        >
            {displayText}
        </Link>
    );
}
