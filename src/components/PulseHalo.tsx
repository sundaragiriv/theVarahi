import React from "react";
import "../styles/effects.css";

type Props = { color?: string; opacity?: number; size?: number; className?: string };
export default function PulseHalo({ color="#0070F2", opacity=0.16, size=320, className="" }: Props){
  return (
    <div
      aria-hidden
      className={`halo ${className}`}
      style={{ ['--color' as any]: color, ['--op' as any]: opacity, ['--size' as any]: `${size}px` }}
    />
  );
}
