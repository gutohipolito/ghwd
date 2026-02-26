"use client";

import { useEffect, useRef } from "react";

export function Noise() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let w = (canvas.width = window.innerWidth);
        let h = (canvas.height = window.innerHeight);

        const resize = () => {
            w = canvas.width = window.innerWidth;
            h = canvas.height = window.innerHeight;
        };

        window.addEventListener("resize", resize);

        const loop = () => {
            if (!ctx) return;

            const idata = ctx.createImageData(w, h);
            const buffer32 = new Uint32Array(idata.data.buffer);
            const len = buffer32.length;

            for (let i = 0; i < len; i++) {
                if (Math.random() < 0.5) {
                    // High alpha for visibility, blended via CSS
                    buffer32[i] = 0xffffffff;
                }
            }

            ctx.putImageData(idata, 0, 0);
            requestAnimationFrame(loop);
        };

        const frameId = requestAnimationFrame(loop);

        return () => {
            window.removeEventListener("resize", resize);
            cancelAnimationFrame(frameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 z-50 pointer-events-none opacity-[0.03] mix-blend-overlay w-full h-full"
        />
    );
}
