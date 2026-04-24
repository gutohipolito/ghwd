"use client";

import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { useLanguage } from "@/lib/i18n-context";
import { useModal } from "@/lib/modal-context";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

export function NavbarOrchestra() {
    const { scrollY } = useScroll();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const { t } = useLanguage();
    const { openModal } = useModal();

    useMotionValueEvent(scrollY, "change", (latest) => {
        setIsScrolled(latest > 50);
    });

    return (
        <>
            <motion.nav
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 md:px-12 py-6 transition-all duration-500",
                    isScrolled
                        ? "bg-white/80 backdrop-blur-md border-b border-black/5 py-4"
                        : "bg-transparent border-transparent"
                )}
            >
                <Link href="/" className="group relative">
                    <div 
                        className={cn(
                            "h-7 md:h-8 w-32 md:w-44 transition-all duration-500 ease-in-out",
                            isScrolled 
                                ? "bg-black" 
                                : "bg-gradient-to-br from-white via-white to-zinc-400"
                        )}
                        style={{
                            maskImage: 'url(/ghwd-new-logo.png)',
                            WebkitMaskImage: 'url(/ghwd-new-logo.png)',
                            maskSize: 'contain',
                            WebkitMaskSize: 'contain',
                            maskRepeat: 'no-repeat',
                            WebkitMaskRepeat: 'no-repeat'
                        }}
                    />
                </Link>

                {/* Desktop Menu */}
                <ul className={cn(
                    "hidden md:flex gap-8 items-center transition-colors duration-300",
                    isScrolled ? "text-zinc-600" : "text-zinc-300"
                )}>
                    {[
                        { href: '/products', label: t('nav.products') },
                        { href: '/services', label: t('nav.services') },
                        { href: '/partners', label: t('nav.clients') },
                        { href: '/about', label: t('nav.about') }
                    ].map((item) => (
                        <li key={item.href}>
                            <Link
                                href={item.href}
                                className="relative group overflow-hidden font-heading font-black italic uppercase tracking-tighter text-base hover:text-emerald-500 transition-colors duration-300 pb-1"
                            >
                                <span className="relative z-10">{item.label}</span>
                                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-emerald-500 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out shadow-[0_0_10px_rgba(16,185,129,0.8)]" />
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* CTA & Mobile Toggle */}
                <div className="flex items-center gap-4">

                    {/* Language Switcher Desktop */}
                    <div className="hidden md:block">
                        <LanguageSwitcher />
                    </div>

                    <button
                        onClick={openModal}
                        className={cn(
                            "hidden md:flex items-center gap-2 px-5 py-2 border rounded-full transition-all duration-300 text-sm font-semibold group",
                            isScrolled
                                ? "border-black text-black hover:bg-black hover:text-white"
                                : "border-white/20 bg-white/10 text-white hover:bg-white hover:text-black"
                        )}
                    >
                        <span>{t('nav.start')}</span>
                        <ArrowUpRight className="w-4 h-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                    </button>

                    {/* Language Switcher Mobile (Icon Only) */}
                    <div className="md:hidden">
                        <LanguageSwitcher />
                    </div>

                    <button
                        aria-label="Toggle Menu"
                        className={cn(
                            "md:hidden z-50 relative p-2 transition-colors",
                            isScrolled ? "text-black" : "text-white"
                        )}
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-40 bg-black/95 backdrop-blur-2xl flex flex-col justify-center items-center md:hidden"
                    >
                        <div className="flex flex-col gap-8 text-center">
                            <Link href="/" onClick={() => setMobileMenuOpen(false)} className="text-4xl font-heading font-bold text-white hover:text-emerald-400 transition-colors">{t('nav.home')}</Link>
                            <Link href="/products" onClick={() => setMobileMenuOpen(false)} className="text-4xl font-heading font-bold text-white hover:text-emerald-400 transition-colors">{t('nav.products')}</Link>
                            <Link href="/services" onClick={() => setMobileMenuOpen(false)} className="text-4xl font-heading font-bold text-white hover:text-emerald-400 transition-colors">{t('nav.services')}</Link>
                            <Link href="/partners" onClick={() => setMobileMenuOpen(false)} className="text-4xl font-heading font-bold text-white hover:text-emerald-400 transition-colors">{t('nav.clients')}</Link>
                            <Link href="/about" onClick={() => setMobileMenuOpen(false)} className="text-4xl font-heading font-bold text-white hover:text-emerald-400 transition-colors">{t('nav.about')}</Link>

                            <div className="mt-8">
                                <button
                                    onClick={() => {
                                        setMobileMenuOpen(false);
                                        openModal();
                                    }}
                                    className="px-8 py-3 bg-emerald-400 text-black rounded-full text-xl font-bold inline-block"
                                >
                                    {t('nav.start_project')}
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
