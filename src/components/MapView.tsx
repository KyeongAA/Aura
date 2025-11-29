import React from "react";
import { getColorFromDotType } from "../utils/constants";
import type { AuraRecord } from "../types";
import mapPlaceholder from "../assets/map-placeholder.png";

interface MapViewProps {
  records: AuraRecord[];
  mode?: "all" | "my";
}

export function MapView({
  records,
  mode = "all",
}: MapViewProps) {
  return (
    <div className="relative w-full h-full">
      {/* 임시 지도 이미지 */}
      <div className="w-full h-full flex items-center justify-center bg-[#f5f5f5]">
        <img
          src={mapPlaceholder}
          alt="Seoul Map Placeholder"
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
}