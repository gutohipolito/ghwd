"use client";

import { LegalLayout } from "@/components/LegalLayout";
import { useLanguage } from "@/lib/i18n-context";

export default function TermsOfService() {
    const { t } = useLanguage();
    return (
        <LegalLayout
            title={t('legal.terms.title')}
            subtitle={t('legal.terms.subtitle')}
            lastUpdated={t('legal.last_update_date')}
        >
            <div className="space-y-12">
                <p className="text-xl text-white/80 leading-relaxed max-w-3xl border-l-2 border-emerald-500 pl-8 py-2">
                    {t('legal.terms.intro')}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose">
                    {(t('legal.terms.sections') as any[]).map((section, idx) => (
                        <div 
                            key={idx} 
                            className="group p-10 border border-white/5 rounded-[40px] bg-zinc-900/20 backdrop-blur-2xl hover:bg-zinc-900/40 hover:border-emerald-500/20 transition-all duration-500"
                        >
                            <h3 className="text-emerald-500 font-mono text-[10px] uppercase tracking-[0.3em] mb-6 block opacity-80 group-hover:opacity-100 transition-opacity">
                                {section.title}
                            </h3>
                            <p className="text-zinc-400 leading-relaxed font-light text-lg">
                                {section.content}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="p-10 border border-white/5 rounded-[40px] bg-emerald-500/[0.02] backdrop-blur-2xl mt-12 not-prose">
                    <h3 className="text-white font-heading italic uppercase font-bold text-2xl mb-4 tracking-tighter">
                        {t('contact.direct_contact')}
                    </h3>
                    <p className="text-zinc-400 font-light text-lg">
                        legal@ghwd.digital
                    </p>
                </div>
            </div>
        </LegalLayout>
    );
}
