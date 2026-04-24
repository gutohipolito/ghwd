"use client";

import React from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { motion } from "framer-motion";

const geoUrl = "/brazil-states.geojson";

interface BrazilMapProps {
  activeStates: string[];
  selectedState: string | null;
  onStateClick: (sigla: string) => void;
}

export function BrazilMap({ activeStates, selectedState, onStateClick }: BrazilMapProps) {
  // Define state-specific coordinates and scales for native map zoom
  const stateConfigs: Record<string, { scale: number; center: [number, number] }> = {
    RS: { scale: 3200, center: [-53.5, -30] },
    SC: { scale: 4500, center: [-50.5, -27.2] },
    SP: { scale: 3500, center: [-48.5, -23.5] },
    AC: { scale: 3000, center: [-70, -9.5] },
  };

  const currentConfig = selectedState && stateConfigs[selectedState] 
    ? stateConfigs[selectedState] 
    : { scale: 850, center: [-54, -15] };

  return (
    <div className="w-full h-full flex items-center justify-center relative">
      <ComposableMap
        projection="geoMercator"
        projectionConfig={currentConfig}
        className="w-full h-full object-contain transition-all duration-1000 ease-in-out"
      >
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const sigla = geo.properties.sigla;
              const isActive = activeStates.includes(sigla);
              const isSelected = selectedState === sigla;

              // Hide or dim other states when one is selected to focus the view
              const opacity = !selectedState || isSelected ? 1 : 0.15;

              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onClick={() => isActive && onStateClick(sigla)}
                  style={{
                    default: {
                      fill: isSelected
                        ? "#10b981" // emerald-500
                        : isActive
                        ? "#047857" // emerald-700
                        : "#27272a", // zinc-800
                      stroke: isSelected ? "#ffffff" : "#3f3f46",
                      strokeWidth: isSelected ? 2 : 0.75,
                      outline: "none",
                      cursor: isActive ? "pointer" : "default",
                      opacity: opacity,
                      transition: "all 800ms cubic-bezier(0.25, 1, 0.5, 1)",
                    },
                    hover: {
                      fill: isActive ? "#34d399" : "#27272a",
                      stroke: isActive ? "#ffffff" : "#3f3f46",
                      strokeWidth: isActive ? 1.5 : 0.75,
                      outline: "none",
                      cursor: isActive ? "pointer" : "default",
                      opacity: 1,
                      transition: "all 250ms",
                    },
                    pressed: {
                      fill: isActive ? "#10b981" : "#27272a",
                      stroke: isActive ? "#ffffff" : "#3f3f46",
                      strokeWidth: 1.5,
                      outline: "none",
                    },
                  }}
                />
              );
            })
          }
        </Geographies>
      </ComposableMap>

      {/* Decorative Label for Selected State (Overlay) */}
      {selectedState && (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="absolute bottom-10 right-10 bg-black/60 backdrop-blur-xl border border-white/10 p-4 rounded-2xl pointer-events-none z-30"
        >
            <span className="text-4xl font-black text-white/20 absolute -top-6 -left-4 select-none">
                {selectedState}
            </span>
            <div className="relative z-10">
                <p className="text-[10px] font-mono text-emerald-500 uppercase tracking-[0.2em] mb-1">Target Region</p>
                <p className="text-xl font-bold text-white tracking-tight uppercase">
                    {selectedState === 'RS' ? 'Rio Grande do Sul' : 
                     selectedState === 'SP' ? 'São Paulo' : 
                     selectedState === 'SC' ? 'Santa Catarina' : 
                     selectedState === 'AC' ? 'Acre' : selectedState}
                </p>
            </div>
        </motion.div>
      )}
    </div>
  );
}


