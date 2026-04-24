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
  // Define dynamic center and scale based on state for a "zoom" effect
  // Most clients are in South/Southeast (RS, SC, SP)
  const isSouthRegion = selectedState === 'RS' || selectedState === 'SC' || selectedState === 'SP';
  const isNorthRegion = selectedState === 'AC';

  return (
    <div className="w-full h-full flex items-center justify-center relative overflow-hidden">
      <motion.div
        animate={{
          scale: selectedState ? 1.5 : 1,
          x: selectedState ? (isNorthRegion ? 100 : -20) : 0,
          y: selectedState ? (isSouthRegion ? -120 : (isNorthRegion ? 80 : 0)) : 0,
        }}
        transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
        className="w-full h-full"
      >
        <ComposableMap
          projection="geoMercator"
          projectionConfig={{
            scale: 850,
            center: [-54, -15],
          }}
          className="w-full h-full object-contain"
        >
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => {
                const sigla = geo.properties.sigla;
                const isActive = activeStates.includes(sigla);
                const isSelected = selectedState === sigla;

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
                        stroke: isSelected ? "#ffffff" : "#3f3f46", // white stroke for selected
                        strokeWidth: isSelected ? 1.5 : 0.75,
                        outline: "none",
                        cursor: isActive ? "pointer" : "default",
                        transition: "all 500ms cubic-bezier(0.25, 1, 0.5, 1)",
                      },
                      hover: {
                        fill: isActive ? "#34d399" : "#27272a",
                        stroke: isActive ? "#ffffff" : "#3f3f46",
                        strokeWidth: isActive ? 1.5 : 0.75,
                        outline: "none",
                        cursor: isActive ? "pointer" : "default",
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
      </motion.div>

      {/* Decorative Label for Selected State (Overlay) */}
      {selectedState && (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
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

