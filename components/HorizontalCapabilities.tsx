"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
    Layout,
    Compass,
    Code2,
    LineChart,
    ShieldCheck,
    Cpu,
    ArrowUpRight
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function HorizontalCapabilities() {
    return (
        <section className="relative py-20 z-10 overflow-hidden bg-zinc-950" id="services">

            {/* Header - Staggered Layout */}
            <div className="container mx-auto px-4 md:px-12 mb-16 flex flex-col md:flex-row items-end justify-between gap-8">
                <div>
                    <h2 className="text-[12vw] md:text-[8rem] leading-[0.8] font-black text-zinc-900 absolute left-[-4%] select-none z-0 pointer-events-none opacity-50 mix-blend-exclusion">
                        ARSENAL
                    </h2>
                    <h2 className="relative z-10 text-4xl md:text-6xl font-black text-white tracking-tighter mix-blend-difference">
                        CAPABILITIES <span className="text-emerald-500">.</span>
                    </h2>
                    <p className="relative z-10 text-zinc-400 font-mono text-xs md:text-sm mt-4 max-w-lg border-l-2 border-emerald-500 pl-4 ml-2">
                        DEPLOYING DIGITAL ARSENALS TO DOMINATE MARKET SHARE.
                        <br />
                        <span className="text-emerald-500 font-bold">STATUS: READY FOR DEPLOYMENT</span>
                    </p>
                </div>

                <div className="relative z-10">
                    <Link
                        href="/services"
                        className="flex items-center gap-3 px-6 py-3 border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-0"
                    >
                        <span className="font-mono text-xs uppercase tracking-widest font-black">Full Inventory</span>
                        <ArrowUpRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>

            {/* Horizontal Scroll Container - Brutalist */}
            <div className="w-full overflow-x-auto pb-12 hide-scrollbar snap-x snap-mandatory px-4 md:px-12">
                <div className="flex gap-1 md:gap-0 w-max">

                    {/* Card 1: Design */}
                    <RadicalCard
                        title="Psychological Ops"
                        subtitle="UI/UX Design"
                        icon={<Layout className="w-8 h-8" />}
                        description="We don't design screens. We architect fluid user journeys that hijack attention."
                        tags={["Retention +40%", "Conversion +25%"]}
                        image="https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=2668&auto=format&fit=crop"
                        index={0}
                    />

                    {/* Card 2: Strategy */}
                    <RadicalCard
                        title="Battle Plans"
                        subtitle="Strategy"
                        icon={<Compass className="w-8 h-8" />}
                        description="Data-weaponized strategy. We find the vacuum in the market and build the bridge to own it."
                        tags={["Gap Identified", "Mode: Attack"]}
                        image="https://images.unsplash.com/photo-1614064641938-3bcee529cfc4?q=80&w=2668&auto=format&fit=crop"
                        index={1}
                    />

                    {/* Card 3: Engineering */}
                    <RadicalCard
                        title="Heavy Artillery"
                        subtitle="Engineering"
                        icon={<Cpu className="w-8 h-8" />}
                        description="Next.js & VTEX infrastructure built to handle millions of requests. Speed is our religion."
                        tags={["Uptime 99.99%", "<100ms"]}
                        video="https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-lines-and-dots-18040-large.mp4"
                        index={2}
                    />

                    {/* Card 4: Growth */}
                    <RadicalCard
                        title="Loot & Revenue"
                        subtitle="Growth"
                        icon={<LineChart className="w-8 h-8" />}
                        description="Scientific CRO. We turn traffic into capital through ruthless experimentation."
                        tags={["ROI +400%", "CAC -30%"]}
                        image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2669&auto=format&fit=crop"
                        index={3}
                    />

                    {/* Card 5: Case Studies */}
                    <RadicalCard
                        title="Confirmed Kills"
                        subtitle="Cases"
                        icon={<ShieldCheck className="w-8 h-8" />}
                        description="View our declassified mission reports. $500M+ generated for clients."
                        tags={["50+ Missions", "100% Success"]}
                        image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2668&auto=format&fit=crop"
                        index={4}
                    />
                </div>
            </div>

        </section>
    );
}

function RadicalCard({
    title,
    subtitle,
    icon,
    description,
    tags,
    video,
    image,
    index
}: {
    title: string;
    subtitle: string;
    icon: React.ReactNode;
    description: string;
    tags: string[];
    video?: string;
    image?: string;
    index: number;
}) {
    return (
        <div className="snap-center relative flex-shrink-0 w-[90vw] md:w-[500px] h-[600px] border-r border-white/20 bg-zinc-900 overflow-hidden group hover:z-10 transition-all duration-300">

            {/* Media Background - Grayscale until hover */}
            <div className="absolute inset-0 z-0 select-none">
                {video ? (
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover opacity-30 grayscale contrast-125 group-hover:grayscale-0 group-hover:opacity-60 transition-all duration-300"
                    >
                        <source src={video} type="video/mp4" />
                    </video>
                ) : image ? (
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover opacity-30 grayscale contrast-125 group-hover:grayscale-0 group-hover:opacity-60 transition-all duration-300"
                    />
                ) : null}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
            </div>

            {/* Content - Brutalist Overlay */}
            <div className="relative z-10 h-full p-8 flex flex-col justify-between group-hover:invert transition-all duration-0">

                {/* Number */}
                <span className="text-8xl font-black text-white/5 absolute top-0 right-0 p-4 select-none">
                    0{index + 1}
                </span>

                {/* Top Badge */}
                <div className="border-l-4 border-emerald-500 pl-4">
                    <span className="font-mono text-xs uppercase tracking-[0.2em] text-emerald-500 font-bold block mb-2">
                        {subtitle}
                    </span>
                    <h3 className="text-4xl font-black text-white leading-[0.9] uppercase transform group-hover:skew-x-2 transition-transform">
                        {title}
                    </h3>
                </div>

                {/* Bottom Info */}
                <div>
                    <div className="mb-8">
                        {icon}
                    </div>
                    <p className="text-zinc-300 text-sm leading-relaxed mb-6 font-mono border-t border-white/10 pt-4">
                        {description}
                    </p>

                    {/* Tags */}
                    <div className="flex gap-2 flex-wrap">
                        {tags.map((tag, i) => (
                            <span key={i} className="text-[10px] font-bold font-mono text-black bg-white px-2 py-1 uppercase">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            {/* Hover Border Glow */}
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-emerald-500 pointer-events-none transition-colors duration-0" />
        </div>
    )
}
