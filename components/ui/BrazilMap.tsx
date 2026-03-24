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
  return (
    <div className="w-full h-full flex items-center justify-center relative">
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{
          scale: 800,
          center: [-54, -15],
        }}
        className="w-full max-h-full object-contain"
        style={{ width: "100%", height: "100%" }}
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
                      stroke: "#3f3f46", // zinc-700
                      strokeWidth: 0.75,
                      outline: "none",
                      cursor: isActive ? "pointer" : "default",
                      transition: "all 250ms",
                    },
                    hover: {
                      fill: isActive ? "#34d399" : "#27272a", // emerald-400 : zinc-800
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

      {/* Decorative Blinking Dots for Active States */}
      <div className="absolute inset-0 pointer-events-none">
         {/* We can rely on just the map colored fills to show active instead of complex math to position HTML dots over SVG */}
      </div>
    </div>
  );
}
