import { LanguageProvider } from "@/lib/i18n-context";
import { ModalProvider } from "@/lib/modal-context";
import { ContactModal } from "@/components/ContactModal";
import { StructuredData } from "@/components/StructuredData";
import type { Metadata } from "next";
import { Inter, Outfit, Playfair_Display } from "next/font/google"; // Import fonts
import "./globals.css";
import { SmoothScroll } from "@/components/SmoothScroll";
import { GoogleAnalytics } from '@next/third-parties/google';

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
    title: {
        default: "GHWD | Global Digital Partner",
        template: "%s | GHWD"
    },
    description: "We engineer digital nervous systems for the world's most ambitious brands. Experts in Next.js, Headless Commerce, and High-Performance Digital Ecosystems.",
    keywords: ["Digital Agency", "Next.js Experts", "Headless Commerce", "Digital Transformation", "GHWD", "Web Development Brazil", "Global Talent"],
    authors: [{ name: "GHWD Team" }],
    creator: "GHWD",
    publisher: "GHWD",
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    metadataBase: new URL('https://ghwd.com.br'), // Replace with actual domain
    alternates: {
        canonical: '/',
        languages: {
            'en-US': '/en',
            'es-ES': '/es',
            'pt-PT': '/pt',
        },
    },
    openGraph: {
        title: "GHWD | Global Digital Partner",
        description: "Engineering digital nervous systems for ambitious brands.",
        url: 'https://ghwd.com.br',
        siteName: 'GHWD',
        images: [
            {
                url: '/og-image.png', // Ensure this exists
                width: 1200,
                height: 630,
                alt: 'GHWD | Global Digital Partner',
            },
        ],
        locale: 'pt_BR',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: "GHWD | Global Digital Partner",
        description: "Engineering digital nervous systems for ambitious brands.",
        images: ['/og-image.png'],
        creator: '@ghwd',
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    icons: {
        icon: '/favicon.ico',
        shortcut: '/favicon-16x16.png',
        apple: '/apple-touch-icon.png',
    },
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
                    <StructuredData />
                    <GoogleAnalytics gaId="G-9MVP22YZZM" />
                    <ModalProvider>
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

                        <ContactModal />
                    </ModalProvider>
                </LanguageProvider>
            </body>
        </html>
    );
}
