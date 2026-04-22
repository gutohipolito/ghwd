"use client";

import Link from "next/link";
import { MoveRight, Send, ArrowUpRight } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { useLanguage } from "@/lib/i18n-context";
import { useModal } from "@/lib/modal-context";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { motion, useSpring, useMotionValue, useTransform } from "framer-motion";

const CITIES = [
    { name: "São Paulo", lat: -23.5505, lon: -46.6333, timeZone: "America/Sao_Paulo" },
    { name: "New York", lat: 40.7128, lon: -74.0060, timeZone: "America/New_York" },
    { name: "Lisbon", lat: 38.7223, lon: -9.1393, timeZone: "Europe/Lisbon" },
    { name: "Madrid", lat: 40.4168, lon: -3.7038, timeZone: "Europe/Madrid" },
];

export function MegaFooter() {
    const { t } = useLanguage();
    const { openModal } = useModal();
    const [now, setNow] = useState<Date | null>(null);
    const [cityIndex, setCityIndex] = useState(0);
    const [weatherData, setWeatherData] = useState<{ [key: string]: string }>({});
    const footerRef = useRef<HTMLElement>(null);

    // Mouse Tracking for Parallax
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const handleMouseMove = (e: React.MouseEvent) => {
        const { clientX, clientY } = e;
        const { left, top, width, height } = footerRef.current?.getBoundingClientRect() || { left: 0, top: 0, width: 0, height: 0 };
        const x = (clientX - left) / width;
        const y = (clientY - top) / height;
        mouseX.set(x - 0.5);
        mouseY.set(y - 0.5);
    };

    const parallaxX = useSpring(useTransform(mouseX, [-0.5, 0.5], [-50, 50]), { stiffness: 100, damping: 30 });
    const parallaxY = useSpring(useTransform(mouseY, [-0.5, 0.5], [-20, 20]), { stiffness: 100, damping: 30 });

    useEffect(() => {
        setNow(new Date());
        const timeInterval = setInterval(() => setNow(new Date()), 1000);

        const fetchWeather = async () => {
            const newWeatherData: { [key: string]: string } = { ...weatherData };
            for (const city of CITIES) {
                try {
                    const controller = new AbortController();
                    const timeoutId = setTimeout(() => controller.abort(), 5000); // 5s timeout

                    const res = await fetch(
                        `https://api.open-meteo.com/v1/forecast?latitude=${city.lat}&longitude=${city.lon}&current=temperature_2m`,
                        { signal: controller.signal }
                    );
                    clearTimeout(timeoutId);

                    if (!res.ok) throw new Error("Network response was not ok");
                    
                    const data = await res.json();
                    if (data?.current?.temperature_2m !== undefined) {
                        newWeatherData[city.name] = `${Math.round(data.current.temperature_2m)}°C`;
                    }
                } catch (e) {
                    // Silently fail if weather is unavailable to avoid console noise
                    // The UI will simply not show the temperature for this city
                    if (!newWeatherData[city.name]) {
                        newWeatherData[city.name] = "--°C";
                    }
                }
            }
            setWeatherData(newWeatherData);
        };
        fetchWeather();
        const weatherInterval = setInterval(fetchWeather, 1800000);

        const rotationInterval = setInterval(() => {
            setCityIndex((prev) => (prev + 1) % CITIES.length);
        }, 4000);

        return () => {
            clearInterval(timeInterval);
            clearInterval(weatherInterval);
            clearInterval(rotationInterval);
        };
    }, []);

    const currentCity = CITIES[cityIndex];
    const currentTemp = weatherData[currentCity.name];

    const timeString = now ? now.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        timeZone: currentCity.timeZone,
        timeZoneName: 'short'
    }) : "Loading...";

    return (
        <footer
            ref={footerRef}
            onMouseMove={handleMouseMove}
            className="relative min-h-[80vh] bg-zinc-950 flex flex-col justify-between p-6 md:p-16 md:pb-8 overflow-hidden border-t border-white/[0.05]"
        >
            {/* Parallax Background Branding */}
            {/* Background Video - Geometric Particles & Plexus */}
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover opacity-20 grayscale brightness-125 contrast-125"
                >
                    <source src="https://videos.pexels.com/video-files/3130182/3130182-uhd_2560_1440_30fps.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-zinc-950/40" /> {/* Dark overlay for contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent" />
            </div>

            {/* Grain Overlay */}
            <div className="absolute inset-0 opacity-[0.1] mix-blend-overlay pointer-events-none bg-[url('/noise.svg')]"></div>

            <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col h-full justify-between gap-20">
                {/* Upper Section: Core CTA */}
                <div className="flex flex-col md:flex-row justify-between items-start gap-12 border-b border-white/[0.05] pb-20">
                    <div className="max-w-3xl">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-6xl md:text-[8rem] font-heading font-black text-white leading-[0.9] tracking-tightest mb-8"
                        >
                            {t('hero.we_build')}<br />
                            <span className="text-emerald-500">{t('hero.results')}</span>
                        </motion.h2>
                        <p className="text-zinc-500 font-medium text-lg md:text-xl max-w-xl">
                            {t('footer.tagline')}
                        </p>
                    </div>

                    <div className="flex flex-col items-end gap-6 md:pt-4">
                        <button
                            onClick={openModal}
                            className="group flex items-center gap-4 bg-emerald-500 text-black px-12 py-5 rounded-full text-lg font-bold hover:bg-white transition-all duration-300 shadow-xl shadow-emerald-500/10"
                        >
                            <span>{t('hero.start_project')}</span>
                            <ArrowUpRight className="group-hover:rotate-45 transition-transform duration-300" />
                        </button>
                        <LanguageSwitcher />
                    </div>
                </div>

                {/* Middle Section: Navigation */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
                    {/* Navigation Columns */}
                    <div className="md:col-span-12 grid grid-cols-2 md:grid-cols-4 gap-8">
                        {/* Sitemap */}
                        <div className="space-y-6">
                            <h4 className="text-zinc-600 font-bold text-[10px] uppercase tracking-[0.2em]">{t('footer.sitemap')}</h4>
                            <div className="flex flex-col gap-4">
                                {[
                                    { name: t('nav.home'), href: "/" },
                                    { name: t('nav.services'), href: "/services" },
                                    { name: t('nav.about'), href: "/about" }
                                ].map((item) => (
                                    <Link key={item.name} href={item.href} className="text-zinc-400 hover:text-white transition-colors text-sm">
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Products */}
                        <div className="space-y-6">
                            <h4 className="text-zinc-600 font-bold text-[10px] uppercase tracking-[0.2em]">{t('footer.products')}</h4>
                            <div className="flex flex-col gap-4">
                                {['Velocity', 'Synapse', 'Obsidian', 'X-Ray', 'Wholesale', 'Edge'].map((product) => (
                                    <Link key={product} href="/products" className="text-zinc-400 hover:text-white transition-colors text-sm">
                                        {product}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Presence */}
                        <div className="space-y-6">
                            <h4 className="text-zinc-600 font-bold text-[10px] uppercase tracking-[0.2em]">{t('footer.presence')}</h4>
                            <div className="flex flex-col gap-4">
                                {CITIES.map((city) => (
                                    <div key={city.name} className="flex flex-col gap-1">
                                        <span className="text-zinc-400 text-sm">{city.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Compliance */}
                        <div className="space-y-6">
                            <h4 className="text-zinc-600 font-bold text-[10px] uppercase tracking-[0.2em]">{t('footer.compliance')}</h4>
                            <div className="flex flex-col gap-4">
                                {[
                                    { name: t('footer.privacy'), href: "/privacy" },
                                    { name: t('footer.terms'), href: "/terms" },
                                    { name: t('footer.cookies'), href: "/cookies" }
                                ].map((item) => (
                                    <Link key={item.name} href={item.href} className="text-zinc-400 hover:text-white transition-colors text-sm">
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar: Metadata */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-12 border-t border-white/[0.05] text-[10px] text-zinc-600 font-medium uppercase tracking-[0.15em]">
                    <div className="flex items-center gap-4">
                        <span>© 2026 GHWD. ALL RIGHTS RESERVED.</span>
                        <span className="hidden md:block opacity-20">|</span>
                        <span>AUTHORITY FORGED IN CODE</span>
                    </div>

                    <div className="flex flex-wrap items-center justify-center md:justify-end gap-6">
                        <div className="flex items-center gap-2">
                            <div className="w-1 h-1 bg-emerald-500 rounded-full"></div>
                            <span>{currentCity.name}</span>
                        </div>
                        <div className="tabular-nums flex items-center gap-2">
                            <span className="opacity-30">LCL:</span>
                            {timeString.replace('BRT', '')}
                        </div>
                        {currentTemp && (
                            <div className="text-emerald-500/80 font-bold">
                                {currentTemp}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </footer>
    );
}
