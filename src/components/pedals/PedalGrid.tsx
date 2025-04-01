import React from "react";
import { PedalCard } from "./PedalCard";

interface Pedal {
  id: string;
  name: string;
  image: string;
  type: string;
}

interface PedalGridProps {
  pedals: Pedal[];
  title?: string;
}

export function PedalGrid({ pedals, title }: PedalGridProps) {
  return (
    <div className="space-y-6">
      {title && (
        <h2 className="text-2xl font-bold tracking-tight">{title}</h2>
      )}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {pedals.map((pedal) => (
          <PedalCard
            key={pedal.id}
            id={pedal.id}
            name={pedal.name}
            image={pedal.image}
            type={pedal.type}
          />
        ))}
      </div>
    </div>
  );
} 