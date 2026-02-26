"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const clients = [
    { name: "Besni", logo: "https://ghwd.com.br/lista-clientes/cliente-besni-ghwd.png" },
    { name: "Grendene", logo: "https://ghwd.com.br/lista-clientes/cliente-grendene-ghwd.png" },
    { name: "Cyrela", logo: "https://ghwd.com.br/lista-clientes/clientes-ghwd-cyrela.png" },
    { name: "Hard Rock Cafe", logo: "https://ghwd.com.br/lista-clientes/clientes-ghwd-hard-rock-cafe-gramado.png" },
    { name: "Avery Dennison", logo: "https://ghwd.com.br/lista-clientes/cliente-avery-dennison-ghwd.png" },
    { name: "SuperCarros", logo: "https://ghwd.com.br/lista-clientes/clientes-ghwd-supercarros.png" },
    { name: "Verse", logo: "https://ghwd.com.br/lista-clientes/clientes-ghwd-verse.png" },
    { name: "Fasolo", logo: "https://ghwd.com.br/lista-clientes/clientes-ghwd-fasolo.png" },
];

export const ClientMarquee = () => {
    return (
        <section className="py-10 bg-black overflow-hidden relative border-y border-white/5">
            <div className="flex w-max">
                <motion.div
                    className="flex gap-16 px-8 min-w-full"
                    animate={{ x: "-100%" }}
                    transition={{
                        duration: 30,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                >
                    {[...clients, ...clients].map((client, idx) => (
                        <div key={`${client.name}-${idx}`} className="relative h-12 w-32 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                            <Image
                                src={client.logo}
                                alt={client.name}
                                fill
                                className="object-contain"
                            />
                        </div>
                    ))}
                    {/* Duplicate for seamless loop */}
                    {[...clients, ...clients].map((client, idx) => (
                        <div key={`${client.name}-duplicate-${idx}`} className="relative h-12 w-32 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                            <Image
                                src={client.logo}
                                alt={client.name}
                                fill
                                className="object-contain"
                            />
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Fade Edges */}
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10"></div>
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10"></div>
        </section>
    );
};
