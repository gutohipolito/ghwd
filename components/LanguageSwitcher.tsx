"use client";

import { useLanguage, Language } from "@/lib/i18n-context";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Globe } from "lucide-react";

export function LanguageSwitcher({ className }: { className?: string }) {
    const { language, setLanguage } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);

    const languages: { code: Language; label: string; flag: string }[] = [
        { code: 'pt', label: 'Português', flag: '🇧🇷' },
        { code: 'pt-pt', label: 'Português', flag: '🇵🇹' },
        { code: 'en', label: 'English', flag: '🇺🇸' },
        { code: 'es', label: 'Español', flag: '🇪🇸' },
    ];

    const currentLang = languages.find(l => l.code === language);

    return (
        <div className={cn("relative z-50", className)}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-colors backdrop-blur-md"
            >
                <span className="text-sm">{currentLang?.flag}</span>
                <span className="text-xs font-mono uppercase text-zinc-400 hidden md:block">
                    {language}
                </span>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full mt-2 right-0 bg-zinc-900 border border-white/10 rounded-xl shadow-xl overflow-hidden min-w-[140px]"
                    >
                        <div className="p-1 flex flex-col gap-0.5">
                            {languages.map((lang) => (
                                <button
                                    key={lang.code}
                                    onClick={() => {
                                        setLanguage(lang.code);
                                        setIsOpen(false);
                                    }}
                                    className={cn(
                                        "flex items-center gap-3 px-3 py-2 text-sm text-left rounded-lg transition-colors w-full",
                                        language === lang.code
                                            ? "bg-white/10 text-white"
                                            : "text-zinc-400 hover:text-white hover:bg-white/5"
                                    )}
                                >
                                    <span className="text-base">{lang.flag}</span>
                                    <span>{lang.label}</span>
                                </button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Backdrop to close when clicking outside */}
            {isOpen && (
                <div
                    className="fixed inset-0 z-[-1]"
                    onClick={() => setIsOpen(false)}
                />
            )}
        </div>
    );
}
