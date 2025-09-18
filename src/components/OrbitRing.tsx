import React from "react";
import "../styles/effects.css";

type Icon = { src: string; alt: string };
type Props = { icons: Icon[]; radius?: number; size?: number; speed?: number; reverse?: boolean; className?: string };

export default function OrbitRing({ icons, radius=120, size=32, speed=18, reverse=false, className="" }: Props){
  return (
    <div aria-hidden className={`orbit ${reverse ? "reverse" : ""} ${className}`}
         style={{ ['--r' as any]: radius, ['--sz' as any]: size, ['--spd' as any]: `${speed}s` }}>
      {icons.map((ic, i) => (
        <img key={i} src={ic.src} alt={ic.alt}
             data-i={i} style={{ ['--angle' as any]: `${(360/icons.length)*i}deg` }} />
      ))}
    </div>
  );
}
