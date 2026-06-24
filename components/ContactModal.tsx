"use client";

import React, { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useModal } from "@/lib/modal-context";
import { QualificationForm } from "./QualificationForm";

export function ContactModal() {
    const { isOpen, closeModal } = useModal();
    const modalRef = useRef<HTMLDivElement>(null);
    const previousActiveElement = useRef<HTMLElement | null>(null);

    // Prevent scrolling and manage focus when modal is open
    useEffect(() => {
        if (isOpen) {
            previousActiveElement.current = document.activeElement as HTMLElement;
            
            // Focus on close button or container initially
            setTimeout(() => {
                if (modalRef.current) {
                    const focusable = modalRef.current.querySelectorAll<HTMLElement>(
                        'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex="0"]'
                    );
                    if (focusable.length > 0) {
                        focusable[0].focus();
                    } else {
                        modalRef.current.focus();
                    }
                }
            }, 50);

            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
            if (previousActiveElement.current) {
                previousActiveElement.current.focus();
            }
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    // Handle keydown for Escape and Tab Focus Trap
    useEffect(() => {
        if (!isOpen) return;

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                closeModal();
                return;
            }

            if (e.key === "Tab" && modalRef.current) {
                const focusable = Array.from(
                    modalRef.current.querySelectorAll<HTMLElement>(
                        'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex="0"]'
                    )
                );
                
                if (focusable.length === 0) return;

                const firstElement = focusable[0];
                const lastElement = focusable[focusable.length - 1];

                if (e.shiftKey) {
                    // Shift + Tab
                    if (document.activeElement === firstElement) {
                        lastElement.focus();
                        e.preventDefault();
                    }
                } else {
                    // Tab
                    if (document.activeElement === lastElement) {
                        firstElement.focus();
                        e.preventDefault();
                    }
                }
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [isOpen, closeModal]);

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
                        ref={modalRef}
                        tabIndex={-1}
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-zinc-950 border border-white/10 rounded-[2rem] shadow-2xl shadow-emerald-500/10 custom-scrollbar outline-none overscroll-contain"
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
                            aria-label="Fechar modal de contato"
                            className="absolute top-6 right-6 z-50 p-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full transition-colors group"
                        >
                            <X className="w-6 h-6 text-zinc-500 group-hover:text-white transition-colors" />
                        </button>

                        <div className="relative z-10 p-4 sm:p-6 md:p-12">
                            <QualificationForm />
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
