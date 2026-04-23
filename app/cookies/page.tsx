"use client";

import { LegalLayout } from "@/components/LegalLayout";
import { useState } from "react";
import { motion } from "framer-motion";
import { Save } from "lucide-react";
import { useLanguage } from "@/lib/i18n-context";

type CookieType = 'essential' | 'analytics' | 'marketing' | 'functional';

interface CookieValues {
    essential: boolean;
    analytics: boolean;
    marketing: boolean;
    functional: boolean;
}

export default function CookieSettings() {
    const { t } = useLanguage();
    const [cookies, setCookies] = useState<CookieValues>({
        essential: true, // Always true and disabled
        analytics: true,
        marketing: false,
        functional: true
    });

    const [isSaved, setIsSaved] = useState(false);

    const toggleCookie = (type: CookieType) => {
        if (type === 'essential') return;
        setCookies(prev => ({ ...prev, [type]: !prev[type] }));
        setIsSaved(false);
    };

    const handleSave = () => {
        // Here we would typically save to localStorage or backend
        console.log("Saving preferences:", cookies);

        // Simulation
        setIsSaved(true);
        setTimeout(() => setIsSaved(false), 3000);
    };

    return (
        <LegalLayout
            title={t('legal.cookies.title')}
            subtitle={t('legal.cookies.subtitle')}
            lastUpdated={t('legal.last_update_date')}
        >
            <p className="mb-8">
                {t('legal.cookies.desc')}
            </p>

            <div className="space-y-6 my-12 not-prose">

                {/* Essential Cookies */}
                <CookieCard
                    title={t('legal.cookies.types.essential.title')}
                    description={t('legal.cookies.types.essential.desc')}
                    isEnabled={cookies.essential}
                    isLocked={true}
                    onToggle={() => toggleCookie('essential')}
                    lockedLabel={t('legal.status')}
                />

                {/* Functional Cookies */}
                <CookieCard
                    title={t('legal.cookies.types.functional.title')}
                    description={t('legal.cookies.types.functional.desc')}
                    isEnabled={cookies.functional}
                    onToggle={() => toggleCookie('functional')}
                />

                {/* Analytics Cookies */}
                <CookieCard
                    title={t('legal.cookies.types.analytics.title')}
                    description={t('legal.cookies.types.analytics.desc')}
                    isEnabled={cookies.analytics}
                    onToggle={() => toggleCookie('analytics')}
                />

                {/* Marketing Cookies */}
                <CookieCard
                    title={t('legal.cookies.types.marketing.title')}
                    description={t('legal.cookies.types.marketing.desc')}
                    isEnabled={cookies.marketing}
                    onToggle={() => toggleCookie('marketing')}
                />

                <div className="pt-8 border-t border-white/10 flex items-center justify-between">
                    <button
                        onClick={handleSave}
                        className="group flex items-center gap-3 bg-emerald-500 text-black px-8 py-3 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-emerald-400 transition-colors"
                    >
                        <Save className="w-4 h-4" />
                        {isSaved ? t('legal.cookies.saved') : t('legal.cookies.save')}
                    </button>

                    <button
                        onClick={() => setCookies({ essential: true, analytics: false, marketing: false, functional: false })}
                        className="text-zinc-500 hover:text-white text-sm underline underline-offset-4 transition-colors"
                    >
                        {t('legal.cookies.reject')}
                    </button>
                </div>

            </div>

            <h3>{t('legal.cookies.title')}</h3>
            <p>
                {t('legal.cookies.retention')}
            </p>
        </LegalLayout>
    );
}

// Subcomponent for the Toggle UI
function CookieCard({ title, description, isEnabled, isLocked = false, onToggle, lockedLabel = "Obrigatório" }: {
    title: string;
    description: string;
    isEnabled: boolean;
    isLocked?: boolean;
    onToggle: () => void;
    lockedLabel?: string;
}) {
    return (
        <div className="bg-zinc-900/50 border border-white/5 rounded-lg p-6 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:border-white/10 transition-colors">
            <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                    <h4 className="text-white font-bold text-lg">{title}</h4>
                    {isLocked && <span className="text-[10px] bg-zinc-800 text-zinc-400 px-2 py-0.5 rounded uppercase tracking-wider">{lockedLabel}</span>}
                </div>
                <p className="text-zinc-500 text-sm leading-relaxed">{description}</p>
            </div>

            <div className="flex items-center">
                <button
                    onClick={onToggle}
                    disabled={isLocked}
                    className={`relative w-14 h-8 rounded-full transition-colors duration-300 focus:outline-none ${isEnabled ? 'bg-emerald-500' : 'bg-zinc-700'} ${isLocked ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}`}
                >
                    <motion.div
                        className="absolute top-1 left-1 bg-white w-6 h-6 rounded-full shadow-md"
                        animate={{ x: isEnabled ? 24 : 0 }}
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                </button>
            </div>
        </div>
    );
}
