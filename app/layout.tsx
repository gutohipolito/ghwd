import { LanguageProvider } from "@/lib/i18n-context";
import type { Metadata } from "next";
import { Inter, Outfit, Playfair_Display } from "next/font/google"; // Import fonts
import "./globals.css";
import { SmoothScroll } from "@/components/SmoothScroll";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
});

const outfit = Outfit({
    subsets: ["latin"],
    variable: "--font-outfit",
});

const playfair = Playfair_Display({
    subsets: ["latin"],
    variable: "--font-playfair",
});

export const metadata: Metadata = {
    title: "GHWD | Global Digital Partner",
    description: "We engineer digital nervous systems for the world's most ambitious brands.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-BR">
            <body
                className={`${inter.variable} ${outfit.variable} ${playfair.variable} antialiased`}
            >
                <LanguageProvider>
                    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
                        {/* Primary Acid Green Blob - More intense, liquid movement */}
                        <div className="absolute top-[-25%] left-[-10%] w-[70%] h-[70%] bg-[#33d06c] rounded-full mix-blend-screen filter blur-[150px] opacity-[0.12] animate-pulse-slow"></div>

                        {/* Secondary Green/White Flow - Replacing Purple */}
                        <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-[#1a4d2e] rounded-full mix-blend-screen filter blur-[180px] opacity-[0.08] animate-pulse-slow delay-1000"></div>

                        {/* Sharp Accent Beam - Optional "Signal" feel */}
                        <div className="absolute top-[20%] right-[10%] w-[300px] h-[300px] bg-[#33d06c] rounded-full mix-blend-overlay filter blur-[100px] opacity-[0.05] animate-pulse"></div>
                    </div>
                    <div className="noise-bg"></div>

                    <SmoothScroll>
                        {children}
                    </SmoothScroll>
                </LanguageProvider>
            </body>
        </html>
    );
}
