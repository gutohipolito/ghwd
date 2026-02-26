"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";

interface Client {
    name: string;
    image: string;
}

interface DissolveGridProps {
    clients: Client[];
    interval?: number;
}

export function DissolveGrid({ clients, interval = 5000 }: DissolveGridProps) {
    const [index, setIndex] = useState(0);
    const BATCH_SIZE = 4;

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + BATCH_SIZE) % Math.ceil(clients.length / BATCH_SIZE * BATCH_SIZE));
        }, interval);

        return () => clearInterval(timer);
    }, [clients.length, interval]);

    if (index >= clients.length && index !== 0) {
        setIndex(0);
    }

    // Fill with empty items if batch is partial to keep grid structure?
    // Not strictly necessary if we just let `AnimatePresence` handle keys.
    const visibleClients = clients.slice(index, index + BATCH_SIZE);

    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15, // Sequential stagger
                duration: 0.5
            }
        },
        exit: {
            opacity: 0,
            transition: {
                staggerChildren: 0.02,
                staggerDirection: -1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, filter: "blur(4px)", scale: 0.95 },
        show: { opacity: 1, filter: "blur(0px)", scale: 1, transition: { duration: 0.8, ease: "easeOut" as const } },
        exit: { opacity: 0, filter: "blur(0px)", scale: 1, transition: { duration: 0.2, ease: "linear" as const } }
    };

    return (
        <div className="h-64 md:h-80 w-full relative">
            <AnimatePresence mode="wait">
                <motion.div
                    key={index}
                    variants={containerVariants}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                    className="absolute inset-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {visibleClients.map((client, i) => (
                        <motion.div
                            key={`${index}-${i}`}
                            variants={itemVariants}
                            className="relative bg-zinc-900/50 border border-white/5 rounded-2xl flex items-center justify-center p-8 hover:border-emerald-500/30 transition-colors group h-full w-full"
                        >
                            {/* Increased height to h-48 (was h-32) for larger logo presence */}
                            <div className="relative w-full h-48 opacity-60 group-hover:opacity-100 transition-opacity duration-500">
                                <Image
                                    src={client.image}
                                    alt={client.name}
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </AnimatePresence>
        </div>
    );
}
