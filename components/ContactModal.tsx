"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useModal } from "@/lib/modal-context";
import { QualificationForm } from "./QualificationForm";

export function ContactModal() {
    const { isOpen, closeModal } = useModal();

    // Prevent scrolling when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeModal}
                        className="absolute inset-0 bg-black/80 backdrop-blur-md"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-zinc-950 border border-white/10 rounded-[2rem] shadow-2xl shadow-emerald-500/10 custom-scrollbar"
                    >
                        {/* Video Background (Optional, like the page had) */}
                        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
                            <video
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="w-full h-full object-cover"
                            >
                                <source src="https://videos.pexels.com/video-files/3163534/3163534-uhd_2560_1440_30fps.mp4" type="video/mp4" />
                            </video>
                            <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-transparent to-zinc-950" />
                        </div>

                        {/* Close Button */}
                        <button
                            onClick={closeModal}
                            className="absolute top-6 right-6 z-50 p-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full transition-colors group"
                        >
                            <X className="w-6 h-6 text-zinc-500 group-hover:text-white transition-colors" />
                        </button>

                        <div className="relative z-10 p-6 md:p-12">
                            <QualificationForm />
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
