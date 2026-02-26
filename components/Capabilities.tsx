"use client";

import { motion } from "framer-motion";
import {
    Layout,
    Compass,
    Code2,
    LineChart,
    ShieldCheck,
    Scan,
    Target,
    Cpu,
    Zap,
    ArrowUpRight
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function Capabilities() {
    return (
        <section className="relative py-32 container mx-auto px-4 md:px-6 z-10" id="services">

            {/* Section Header */}
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                <div className="relative">
                    <div className="absolute -left-6 top-2 w-1 h-12 bg-emerald-500/50 hidden md:block" />
                    <h2 className="text-4xl md:text-6xl font-heading font-black tracking-tighter text-white uppercase">
                        Capabilities <span className="text-emerald-500">//</span> Warfare
                    </h2>
                    <p className="text-zinc-400 font-mono text-sm mt-4 tracking-wider max-w-xl">
                        DEPLOYING DIGITAL ARSENALS TO DOMINATE MARKET SHARE. <br />
                        <span className="text-emerald-500/80">STATUS: READY FOR DEPLOYMENT</span>
                    </p>
                </div>

                <Link
                    href="/services"
                    className="group flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 hover:border-emerald-500/50 hover:bg-emerald-500/10 transition-all duration-300 rounded-sm"
                >
                    <span className="font-mono text-xs uppercase tracking-widest text-emerald-400 group-hover:text-emerald-300">
                        Full Inventory
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-emerald-500 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Link>
            </div>

            {/* Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[300px]">

                {/* Card 1: Design (Psychological Ops) - Large */}
                <TechCard
                    colSpan="md:col-span-8"
                    title="Psychological Ops"
                    subtitle="UI/UX & Product Design"
                    icon={<Layout className="w-6 h-6" />}
                    description="We don't design screens. We architect addictively fluid user journeys that hijack attention and convert obsession into revenue."
                    stats={["Retention: +40%", "Conversion: +25%"]}
                    image="https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=2668&auto=format&fit=crop"
                />

                {/* Card 2: Strategy (Battle Plans) - Tall */}
                <TechCard
                    colSpan="md:col-span-4"
                    title="Battle Plans"
                    subtitle="Strategy & Roadmaps"
                    icon={<Compass className="w-6 h-6" />}
                    description="Data-weaponized strategy. We find the vacuum in the market and build the bridge to own it."
                    stats={["Market Gap: Identified", "Plan: Attack"]}
                    image="https://images.unsplash.com/photo-1614064641938-3bcee529cfc4?q=80&w=2668&auto=format&fit=crop"
                />

                {/* Card 3: Engineering (Heavy Artillery) - Tall */}
                <TechCard
                    colSpan="md:col-span-4"
                    title="Heavy Artillery"
                    subtitle="Engineering & Infrastructure"
                    icon={<Cpu className="w-6 h-6" />}
                    description="Next.js & VTEX infrastructure built to handle millions of requests. Speed is our religion."
                    stats={["Uptime: 99.99%", "Latency: <100ms"]}
                    video="https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-lines-and-dots-18040-large.mp4"
                />

                {/* Card 4: Growth (Loot/Revenue) - Large */}
                <TechCard
                    colSpan="md:col-span-4"
                    title="Loot & Revenue"
                    subtitle="CRO & Growth"
                    icon={<LineChart className="w-6 h-6" />}
                    description="Scientific CRO. We turn traffic into capital through ruthless experimentation."
                    stats={["ROI: +400%", "CAC: -30%"]}
                    image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2669&auto=format&fit=crop"
                />

                {/* Card 5: Proof (Confirmed Kills) - Large */}
                <TechCard
                    colSpan="md:col-span-4"
                    title="Confirmed Kills"
                    subtitle="Case Studies"
                    icon={<ShieldCheck className="w-6 h-6" />}
                    description="View our declassified mission reports. $500M+ generated for clients."
                    stats={["Missions: 50+", "Success: 100%"]}
                    image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2668&auto=format&fit=crop"
                />

            </div>
        </section>
    );
}

function TechCard({
    colSpan,
    title,
    subtitle,
    icon,
    description,
    stats,
    video,
    image
}: {
    colSpan: string;
    title: string;
    subtitle: string;
    icon: React.ReactNode;
    description: string;
    stats?: string[];
    video?: string;
    image?: string;
}) {
    return (
        <div
            className={cn(
                "group relative border border-white/10 bg-zinc-900/30 overflow-hidden transition-colors duration-500 hover:border-emerald-500/30 hover:bg-zinc-900/50",
                colSpan
            )}
        >
            {/* Background Media (Very Subtle) */}
            <div className="absolute inset-0 z-0">
                {video ? (
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-700 filter grayscale scale-105"
                    >
                        <source src={video} type="video/mp4" />
                    </video>
                ) : image ? (
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-700 filter grayscale scale-105"
                    />
                ) : null}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/90 to-black/40" />
            </div>

            {/* Content Container */}
            <div className="relative h-full p-8 flex flex-col justify-between z-10">
                {/* Header */}
                <div className="flex justify-between items-start">
                    <div className="p-2 text-emerald-500/80 bg-emerald-500/5 rounded-sm border border-emerald-500/10">
                        {icon}
                    </div>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-600 border border-white/5 py-1 px-2 bg-black/40 backdrop-blur-md">
                        {subtitle}
                    </span>
                </div>

                {/* Body */}
                <div className="flex flex-col gap-6">
                    <div>
                        <h3 className="text-2xl font-bold font-heading text-white mb-3 tracking-tight">
                            {title}
                        </h3>
                        <p className="text-zinc-500 text-sm leading-relaxed max-w-sm">
                            {description}
                        </p>
                    </div>

                    {/* Stats - Static Display */}
                    {stats && (
                        <div className="grid grid-cols-2 gap-4 border-t border-white/5 pt-4">
                            {stats.map((stat, i) => (
                                <div key={i} className="flex flex-col">
                                    <span className="font-mono text-[9px] text-zinc-700 uppercase mb-1">
                                        Data Point {i + 1}
                                    </span>
                                    <span className="font-mono text-xs text-zinc-300 font-bold">
                                        {stat}
                                    </span>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
