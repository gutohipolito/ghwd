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
    RS: { scale: 3200, center: [-53.5, -30] as [number, number] },
    SC: { scale: 4500, center: [-50.5, -27.2] as [number, number] },
    SP: { scale: 3500, center: [-48.5, -23.5] as [number, number] },
    AC: { scale: 3000, center: [-70, -9.5] as [number, number] },
  };

  const currentConfig: { scale: number; center: [number, number] } = selectedState && stateConfigs[selectedState] 
    ? stateConfigs[selectedState] 
    : { scale: 850, center: [-54, -15] as [number, number] };

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

    </div>
  );
}


