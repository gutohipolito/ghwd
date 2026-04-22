"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { ArrowRight, Check } from "lucide-react";
import { useLanguage } from "@/lib/i18n-context";

type Option = {
    labelKey: string;
    value: string;
    points: number;
};

type Step = {
    titleKey: string;
    hintKey: string;
    options: Option[];
};

const steps: Step[] = [
    {
        titleKey: "contact.qualification.steps.0.title",
        hintKey: "contact.qualification.steps.0.hint",
        options: [
            { labelKey: "contact.qualification.steps.0.options.0", value: "landing", points: 1 },
            { labelKey: "contact.qualification.steps.0.options.1", value: "site", points: 1 },
            { labelKey: "contact.qualification.steps.0.options.2", value: "ecommerce", points: 2 },
            { labelKey: "contact.qualification.steps.0.options.3", value: "redesign", points: 2 },
            { labelKey: "contact.qualification.steps.0.options.4", value: "outro", points: 0 },
        ],
    },
    {
        titleKey: "contact.qualification.steps.1.title",
        hintKey: "contact.qualification.steps.1.hint",
        options: [
            { labelKey: "contact.qualification.steps.1.options.0", value: "ativo", points: 2 },
            { labelKey: "contact.qualification.steps.1.options.1", value: "abrindo", points: 1 },
            { labelKey: "contact.qualification.steps.1.options.2", value: "ideia", points: 0 },
        ],
    },
    {
        titleKey: "contact.qualification.steps.2.title",
        hintKey: "contact.qualification.steps.2.hint",
        options: [
            { labelKey: "contact.qualification.steps.2.options.0", value: "urgente", points: 2 },
            { labelKey: "contact.qualification.steps.2.options.1", value: "1-2meses", points: 2 },
            { labelKey: "contact.qualification.steps.2.options.2", value: "sempressa", points: 0 },
        ],
    },
    {
        titleKey: "contact.qualification.steps.3.title",
        hintKey: "contact.qualification.steps.3.hint",
        options: [
            { labelKey: "contact.qualification.steps.3.options.0", value: "ate1500", points: 0 },
            { labelKey: "contact.qualification.steps.3.options.1", value: "1500-4000", points: 1 },
            { labelKey: "contact.qualification.steps.3.options.2", value: "4000-8000", points: 2 },
            { labelKey: "contact.qualification.steps.3.options.3", value: "acima8000", points: 2 },
            { labelKey: "contact.qualification.steps.3.options.4", value: "naoseibudget", points: 1 },
        ],
    },
    {
        titleKey: "contact.qualification.steps.4.title",
        hintKey: "contact.qualification.steps.4.hint",
        options: [
            { labelKey: "contact.qualification.steps.4.options.0", value: "whatsapp", points: 1 },
            { labelKey: "contact.qualification.steps.4.options.1", value: "email", points: 1 },
            { labelKey: "contact.qualification.steps.4.options.2", value: "videocall", points: 2 },
        ],
    },
];

export function QualificationForm() {
    const { t } = useLanguage();
    const [currentStep, setCurrentStep] = useState(0);
    const [answers, setAnswers] = useState<Record<number, Option>>({});
    const [formData, setFormData] = useState({
        nome: "",
        tel: "",
        email: "",
        negocio: ""
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSelect = (option: Option) => {
        setAnswers({ ...answers, [currentStep]: option });
    };

    const nextStep = () => {
        if (currentStep < steps.length) {
            setCurrentStep(currentStep + 1);
        }
    };

    const prevStep = () => {
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1);
        }
    };

    const calculateScore = () => {
        return Object.values(answers).reduce((acc, curr) => acc + curr.points, 0);
    };

    const getResult = () => {
        const score = calculateScore();
        const firstName = formData.nome.split(" ")[0];
        
        if (score >= 7) {
            return {
                tier: "hot",
                title: t('contact.qualification.results.hot_title').replace('{name}', firstName),
                desc: t('contact.qualification.results.hot_desc'),
                waMsg: t('contact.qualification.results.wa_hot')
            };
        } else if (score >= 4) {
            return {
                tier: "warm",
                title: t('contact.qualification.results.warm_title').replace('{name}', firstName),
                desc: t('contact.qualification.results.warm_desc'),
                waMsg: t('contact.qualification.results.wa_warm')
            };
        } else {
            return {
                tier: "cold",
                title: t('contact.qualification.results.cold_title').replace('{name}', firstName),
                desc: t('contact.qualification.results.cold_desc'),
                waMsg: t('contact.qualification.results.wa_cold')
            };
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitted(true);
    };

    if (isSubmitted) {
        const result = getResult();
        const waLink = `https://wa.me/5554999221230?text=${encodeURIComponent(
            `Olá! Me chamo ${formData.nome}${formData.negocio ? ` e represento ${formData.negocio}` : ""}.\n` +
            `Preenchi o formulário do site e meu projeto é: ${t(answers[0]?.labelKey) || "-"}.\n` +
            `Budget considerado: ${t(answers[3]?.labelKey) || "-"}.\n` +
            `${result.waMsg}`
        )}`;

        return (
            <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-zinc-900/50 border border-white/10 p-8 md:p-12 rounded-3xl backdrop-blur-xl max-w-2xl mx-auto text-center"
            >
                <div className={cn(
                    "w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8 text-3xl border-2",
                    result.tier === 'hot' ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-500" :
                    result.tier === 'warm' ? "bg-amber-500/10 border-amber-500/30 text-amber-500" :
                    "bg-zinc-500/10 border-zinc-500/30 text-zinc-500"
                )}>
                    {result.tier === 'hot' ? '' : result.tier === 'warm' ? '✨' : '👋'}
                </div>
                <h2 className="text-3xl md:text-4xl font-serif mb-4">{result.title}</h2>
                <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
                    {result.desc}
                </p>

                <div className="bg-white/5 border border-white/5 rounded-2xl p-6 text-left space-y-4 mb-8">
                    <div className="flex justify-between items-center text-sm">
                        <span className="text-zinc-500">{t('contact.qualification.results.meta_project')}</span>
                        <span className="text-white font-medium">{t(answers[0]?.labelKey)}</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                        <span className="text-zinc-500">{t('contact.qualification.results.meta_deadline')}</span>
                        <span className="text-white font-medium">{t(answers[2]?.labelKey)}</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                        <span className="text-zinc-500">{t('contact.qualification.results.meta_investment')}</span>
                        <span className="text-white font-medium">{t(answers[3]?.labelKey)}</span>
                    </div>
                </div>

                {result.tier !== 'cold' ? (
                    <a 
                        href={waLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 bg-emerald-500 text-black px-10 py-4 rounded-full font-bold hover:bg-white transition-all duration-300"
                    >
                        {t('contact.qualification.buttons.whatsapp')}
                        <ArrowRight className="w-5 h-5" />
                    </a>
                ) : (
                    <p className="text-zinc-500 text-sm">
                        {t('contact.qualification.results.cold_footer')}
                    </p>
                )}
            </motion.div>
        );
    }

    return (
        <div className="max-w-2xl mx-auto w-full">
            {/* Progress */}
            <div className="flex items-center gap-2 mb-12">
                {[0, 1, 2, 3, 4, 5].map((s) => (
                    <div 
                        key={s}
                        className={cn(
                            "h-1.5 transition-all duration-500 rounded-full",
                            s < currentStep ? "bg-emerald-500 w-8" :
                            s === currentStep ? "bg-white w-12" : "bg-white/10 w-4"
                        )}
                    />
                ))}
                <span className="ml-auto text-[10px] font-mono uppercase tracking-widest text-zinc-500">
                    {t('contact.qualification.step_label')} {currentStep + 1} {t('contact.qualification.of_label')} 6
                </span>
            </div>

            <AnimatePresence mode="wait">
                {currentStep < steps.length ? (
                    <motion.div
                        key={currentStep}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.4 }}
                        className="bg-zinc-900/50 border border-white/10 p-8 md:p-12 rounded-3xl backdrop-blur-xl"
                    >
                        <span className="text-[10px] font-mono text-emerald-500 uppercase tracking-[0.2em] mb-4 block">
                            {t('contact.qualification.question_label')} 0{currentStep + 1}
                        </span>
                        <h2 className="text-2xl md:text-3xl font-serif mb-2">{t(steps[currentStep].titleKey)}</h2>
                        <p className="text-zinc-500 text-sm mb-8">{t(steps[currentStep].hintKey)}</p>

                        <div className="space-y-3">
                            {steps[currentStep].options.map((option) => (
                                <button
                                    key={option.value}
                                    onClick={() => handleSelect(option)}
                                    className={cn(
                                        "w-full flex items-center justify-between p-5 rounded-2xl border transition-all duration-300 text-left group",
                                        answers[currentStep]?.value === option.value
                                            ? "bg-emerald-500/10 border-emerald-500/50 text-white"
                                            : "bg-white/5 border-white/5 hover:border-white/20 text-zinc-400"
                                    )}
                                >
                                    <div className="flex items-center gap-4">
                                        <span className="text-base font-medium">{t(option.labelKey)}</span>
                                    </div>
                                    <div className={cn(
                                        "w-5 h-5 rounded-full border flex items-center justify-center transition-all",
                                        answers[currentStep]?.value === option.value
                                            ? "bg-emerald-500 border-emerald-500"
                                            : "border-white/20 group-hover:border-white/40"
                                    )}>
                                        {answers[currentStep]?.value === option.value && <Check className="w-3 h-3 text-black stroke-[3]" />}
                                    </div>
                                </button>
                            ))}
                        </div>

                        <div className="flex items-center justify-between mt-12 pt-8 border-t border-white/5">
                            <button 
                                onClick={prevStep}
                                className={cn(
                                    "text-zinc-500 hover:text-white transition-colors text-sm font-medium",
                                    currentStep === 0 && "opacity-0 pointer-events-none"
                                )}
                            >
                                ← {t('contact.qualification.buttons.back')}
                            </button>
                            <button 
                                onClick={nextStep}
                                disabled={!answers[currentStep]}
                                className="flex items-center gap-2 bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-emerald-500 hover:text-white transition-all disabled:opacity-30"
                            >
                                {t('contact.qualification.buttons.continue')}
                                <ArrowRight className="w-4 h-4" />
                            </button>
                        </div>
                    </motion.div>
                ) : (
                    <motion.div
                        key="contact-data"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="bg-zinc-900/50 border border-white/10 p-8 md:p-12 rounded-3xl backdrop-blur-xl"
                    >
                        <span className="text-[10px] font-mono text-emerald-500 uppercase tracking-[0.2em] mb-4 block">
                            {t('contact.qualification.last_step')}
                        </span>
                        <h2 className="text-2xl md:text-3xl font-serif mb-2">{t('contact.qualification.contact_data_title')}</h2>
                        <p className="text-zinc-500 text-sm mb-8">{t('contact.qualification.contact_data_subtitle')}</p>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="space-y-2">
                                <label className="text-[10px] uppercase tracking-widest text-zinc-500 ml-1">{t('contact.qualification.fields.name')}</label>
                                <input 
                                    required
                                    type="text" 
                                    value={formData.nome}
                                    onChange={(e) => setFormData({...formData, nome: e.target.value})}
                                    placeholder={t('contact.qualification.fields.name_placeholder')}
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white focus:outline-none focus:border-emerald-500 transition-colors"
                                />
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-[10px] uppercase tracking-widest text-zinc-500 ml-1">{t('contact.qualification.fields.whatsapp')}</label>
                                    <input 
                                        required
                                        type="tel" 
                                        value={formData.tel}
                                        onChange={(e) => setFormData({...formData, tel: e.target.value})}
                                        placeholder="(11) 99999-9999"
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white focus:outline-none focus:border-emerald-500 transition-colors"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] uppercase tracking-widest text-zinc-500 ml-1">{t('contact.qualification.fields.email')}</label>
                                    <input 
                                        required
                                        type="email" 
                                        value={formData.email}
                                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                                        placeholder="seu@email.com"
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white focus:outline-none focus:border-emerald-500 transition-colors"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] uppercase tracking-widest text-zinc-500 ml-1">{t('contact.qualification.fields.company')}</label>
                                <input 
                                    type="text" 
                                    value={formData.negocio}
                                    onChange={(e) => setFormData({...formData, negocio: e.target.value})}
                                    placeholder={t('contact.qualification.fields.company_placeholder')}
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white focus:outline-none focus:border-emerald-500 transition-colors"
                                />
                            </div>

                            <div className="flex items-center justify-between mt-12 pt-8 border-t border-white/5">
                                <button 
                                    type="button"
                                    onClick={prevStep}
                                    className="text-zinc-500 hover:text-white transition-colors text-sm font-medium"
                                >
                                    ← {t('contact.qualification.buttons.back')}
                                </button>
                                <button 
                                    type="submit"
                                    className="flex items-center gap-2 bg-emerald-500 text-black px-8 py-3 rounded-full font-bold hover:bg-white transition-all shadow-lg shadow-emerald-500/20"
                                >
                                    {t('contact.qualification.buttons.submit')}
                                    <ArrowRight className="w-4 h-4" />
                                </button>
                            </div>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
