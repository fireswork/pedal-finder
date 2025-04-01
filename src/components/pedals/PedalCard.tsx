"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface PedalCardProps {
  id: string;
  name: string;
  image: string;
  type: string;
  className?: string;
}

export function PedalCard({ id, name, image, type, className }: PedalCardProps) {
  return (
    <Link href={`/pedals/${id}`}>
      <div 
        className={cn(
          "group relative flex flex-col overflow-hidden rounded-lg border bg-white shadow transition-all hover:shadow-md",
          className
        )}
      >
        <div className="relative aspect-square overflow-hidden bg-gray-100">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover transition-transform group-hover:scale-105"
            unoptimized
          />
        </div>
        <div className="flex flex-1 flex-col justify-between p-4">
          <div>
            <h3 className="font-medium text-lg">{name}</h3>
            <p className="text-sm text-muted-foreground">{type}</p>
          </div>
        </div>
      </div>
    </Link>
  );
} 