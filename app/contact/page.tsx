"use client";

import { NavbarOrchestra } from "@/components/NavbarOrchestra";
import { MegaFooter } from "@/components/MegaFooter";
import { motion } from "framer-motion";
import { PageHero } from "@/components/PageHero";
import { useLanguage } from "@/lib/i18n-context";

export default function ContactPage() {
    const { t, language } = useLanguage();

    return (
        <main className="min-h-screen relative flex flex-col bg-zinc-950 text-white selection:bg-emerald-500 selection:text-black">
            <NavbarOrchestra />

            <PageHero
                pretitle={t('contact.header.tag')}
                title={t('contact.header.title')}
                subtitle={t('contact.header.subtitle')}
            />

            <section className="py-24 px-6 md:px-24 bg-zinc-950 relative z-10">
                <div className="container mx-auto grid lg:grid-cols-12 gap-16">

                    {/* Left: Context */}
                    <div className="lg:col-span-4">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="space-y-12"
                        >
                            <div>
                                <h3 className="text-white font-bold uppercase tracking-widest text-xs mb-6 border-b border-white/10 pb-4">
                                    {t('contact.direct_contact')}
                                </h3>
                                <div className="space-y-8">
                                    <div>
                                        <span className="block text-xs uppercase tracking-widest text-zinc-500 mb-2">{t('contact.form.email')}</span>
                                        <a href="mailto:hello@digital.unit" className="text-xl hover:text-emerald-500 transition-colors">hello@digital.unit</a>
                                    </div>
                                    <div className="pt-4 border-t border-white/5">
                                        <p className="text-sm text-zinc-500 leading-relaxed">
                                            {language === 'pt' ? 'Operamos como uma unidade digital global, sem fronteiras físicas. Atendendo em 4 fusos horários.' : language === 'es' ? 'Operamos como una unidad digital global, sin fronteras físicas. Atendiendo en 4 husos horarios.' : 'Operating as a global digital unit, without physical borders. Serving across 4 time zones.'}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right: The Form */}
                    <div className="lg:col-span-8">
                        <motion.form
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="bg-white/5 border border-white/10 p-8 md:p-12 rounded-3xl backdrop-blur-sm shadow-2xl"
                        >
                            <div className="grid md:grid-cols-2 gap-8 mb-8">
                                <div className="space-y-2">
                                    <label className="text-xs uppercase tracking-widest text-zinc-400">{t('contact.form.name')}</label>
                                    <input type="text" className="w-full bg-transparent border-b border-white/20 py-2 text-xl focus:border-emerald-500 focus:outline-none transition-colors" placeholder="John Doe" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs uppercase tracking-widest text-zinc-400">{t('contact.form.company')}</label>
                                    <input type="text" className="w-full bg-transparent border-b border-white/20 py-2 text-xl focus:border-emerald-500 focus:outline-none transition-colors" placeholder="Acme Inc." />
                                </div>
                            </div>

                            <div className="space-y-2 mb-8">
                                <label className="text-xs uppercase tracking-widest text-zinc-400">{t('contact.form.email')}</label>
                                <input type="email" className="w-full bg-transparent border-b border-white/20 py-2 text-xl focus:border-emerald-500 focus:outline-none transition-colors" placeholder="john@acme.com" />
                            </div>

                            <div className="grid md:grid-cols-2 gap-8 mb-8">
                                <div className="space-y-2">
                                    <label className="text-xs uppercase tracking-widest text-zinc-400">{t('contact.form.project_type')}</label>
                                    <select className="w-full bg-transparent border-b border-white/20 py-2 text-xl focus:border-emerald-500 focus:outline-none transition-colors [&>option]:bg-zinc-900">
                                        <option>{language === 'pt' ? 'Produto Digital' : language === 'es' ? 'Producto Digital' : 'Digital Product'}</option>
                                        <option>E-Commerce</option>
                                        <option>{language === 'pt' ? 'Experiência de Marca' : language === 'es' ? 'Experiencia de Marca' : 'Brand Experience'}</option>
                                        <option>{language === 'pt' ? 'Consultoria' : language === 'es' ? 'Consultoría' : 'Consulting'}</option>
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs uppercase tracking-widest text-zinc-400">{t('contact.form.budget')}</label>
                                    <select className="w-full bg-transparent border-b border-white/20 py-2 text-xl focus:border-emerald-500 focus:outline-none transition-colors [&>option]:bg-zinc-900">
                                        <option>R$ 50k - R$ 100k</option>
                                        <option>R$ 100k - R$ 300k</option>
                                        <option>R$ 300k+</option>
                                        <option>{language === 'pt' ? 'Não revelado' : language === 'es' ? 'No revelado' : 'Undisclosed'}</option>
                                    </select>
                                </div>
                            </div>

                            <div className="space-y-2 mb-12">
                                <label className="text-xs uppercase tracking-widest text-zinc-400">{t('contact.form.ambition')}</label>
                                <textarea className="w-full bg-transparent border-b border-white/20 py-2 text-xl focus:border-emerald-500 focus:outline-none transition-colors min-h-[100px] resize-none" placeholder={language === 'pt' ? 'Queremos disruptar...' : language === 'es' ? 'Queremos irrumpir...' : 'We want to disrupt...'}></textarea>
                            </div>

                            <button type="submit" className="w-full py-4 bg-white text-black font-bold uppercase tracking-widest hover:bg-emerald-500 hover:text-white transition-all rounded-full">
                                {t('contact.form.submit')}
                            </button>
                        </motion.form>
                    </div>

                </div>
            </section>

            <MegaFooter />
        </main>
    );
}
