"use client";

import { NavbarOrchestra } from "@/components/NavbarOrchestra";
import { MegaFooter } from "@/components/MegaFooter";
import { motion } from "framer-motion";
import { PageHero } from "@/components/PageHero";
import { useLanguage } from "@/lib/i18n-context";
import { Methodology } from "@/components/Methodology";
import { ServicesCTA } from "@/components/ServicesCTA";

const translatedServices = [
    { id: "01", key: "saas" },
    { id: "02", key: "design" },
    { id: "03", key: "dev" },
    { id: "04", key: "ai" },
    { id: "05", key: "automation" },
    { id: "06", key: "geo" },
    { id: "07", key: "commerce" }
];

export default function ServicesPage() {
    const { t } = useLanguage();

    return (
        <main className="min-h-screen relative flex flex-col bg-zinc-950 text-white selection:bg-emerald-500 selection:text-black">
            <NavbarOrchestra />

            {/* Header */}
            <PageHero
                pretitle={t('services.header.tag')}
                title={t('services.header.title')}
                subtitle={t('services.header.subtitle')}
                videoClassName="scale-150 rotate-3"
            />

            {/* Services List */}
            <section className="py-24 px-6 md:px-24">
                <div className="container mx-auto flex flex-col gap-32">
                    {translatedServices.map((service, idx) => {
                        const content = t(`home.services_items.${service.key}`) as any;
                        return (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="grid md:grid-cols-12 gap-8 md:gap-16 border-t border-white/10 pt-16 first:border-t-0 first:pt-0"
                            >
                                {/* Left: Title + ID */}
                                <div className="md:col-span-5 md:sticky md:top-32 self-start">
                                    <span className="font-mono text-emerald-500 text-sm mb-4 block">
                                        {service.id}
                                    </span>
                                    <h2 className="text-4xl md:text-6xl font-serif font-medium leading-tight">
                                        {content.title}
                                    </h2>
                                </div>

                                {/* Right: Description + Capabilities */}
                                <div className="md:col-span-7 flex flex-col gap-12">
                                    <p className="text-xl text-zinc-400 leading-relaxed font-light">
                                        {content.desc}
                                    </p>

                                    <div>
                                        <h3 className="text-white font-bold uppercase tracking-widest text-xs mb-6 border-b border-white/10 pb-4">
                                            {t('services.core_capabilities')}
                                        </h3>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
                                            {content.caps?.map((cap: string, cIdx: number) => (
                                                <div key={cIdx} className="flex items-center gap-3 group">
                                                    <div className="w-1.5 h-1.5 bg-zinc-700 rounded-full group-hover:bg-emerald-500 transition-colors"></div>
                                                    <span className="text-zinc-400 group-hover:text-white transition-colors">
                                                        {cap}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </section>

            {/* Comparison Table Section */}
            <section className="py-24 px-6 md:px-24 bg-zinc-950 border-t border-white/5 relative overflow-hidden">
                <div className="container mx-auto max-w-6xl relative z-10">
                    <span className="font-mono text-emerald-500 text-xs uppercase tracking-widest mb-4 block">
                        {t('services.comparison.tag')}
                    </span>
                    <h2 className="text-4xl md:text-6xl font-heading font-black italic uppercase tracking-tighter mb-4">
                        {t('services.comparison.title')}
                    </h2>
                    <p className="text-zinc-400 text-lg md:text-xl font-light mb-16 max-w-2xl">
                        {t('services.comparison.subtitle')}
                    </p>

                    <div className="overflow-x-auto border border-white/10 rounded-2xl bg-zinc-900/30 backdrop-blur-md">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="border-b border-white/10">
                                    {(t('services.comparison.headers') as string[]).map((header, idx) => (
                                        <th key={idx} className="p-6 font-heading font-black italic uppercase text-xs tracking-wider text-zinc-500 select-none">
                                            {header}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {(t('services.comparison.rows') as any[]).map((row, idx) => (
                                    <tr key={idx} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors last:border-b-0">
                                        <td className="p-6 text-sm font-semibold text-white border-r border-white/5 font-mono select-all">
                                            {row.label}
                                        </td>
                                        <td className="p-6 text-sm text-emerald-400 font-bold border-r border-white/5 select-all">
                                            {row.c1}
                                        </td>
                                        <td className="p-6 text-sm text-zinc-400 border-r border-white/5 select-all">
                                            {row.c2}
                                        </td>
                                        <td className="p-6 text-sm text-zinc-500 select-all">
                                            {row.c3}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* Methodology & CTA */}
            <Methodology />
            <ServicesCTA />

            <MegaFooter />
        </main>
    );
}
