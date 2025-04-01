"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { PedalSettingsDisplay } from "@/components/pedals/PedalSettings";

// 这在真实应用中会从数据库获取
const getPedalData = (id: string) => {
  // 模拟踏板数据
  return {
    id,
    name: "Boss DS-1 Distortion",
    image: "https://images.unsplash.com/photo-1567603452239-496d340bc01f?q=80&w=1287&auto=format&fit=crop",
    type: "Distortion",
    description: "BOSS DS-1 失真效果器是一款经典的失真踏板，为吉他和键盘声音提供更强烈的失真效果。它特别适合用于摇滚和重金属音乐风格。",
    settings: [
      { name: "Level", value: 7, range: [0, 10] as [number, number] },
      { name: "Tone", value: 5, range: [0, 10] as [number, number] },
      { name: "Distortion", value: 8, range: [0, 10] as [number, number] }
    ]
  };
};

// 这在真实应用中会从数据库获取
const getSongMatches = (pedalId: string) => {
  // 模拟匹配歌曲
  return [
    {
      id: "1",
      title: "Sweet Child O' Mine",
      artist: "Guns N' Roses",
      settings: [
        { name: "Level", value: 8 },
        { name: "Tone", value: 6 },
        { name: "Distortion", value: 9 }
      ]
    },
    {
      id: "2",
      title: "Smells Like Teen Spirit",
      artist: "Nirvana",
      settings: [
        { name: "Level", value: 7 },
        { name: "Tone", value: 4 },
        { name: "Distortion", value: 10 }
      ]
    },
    {
      id: "3",
      title: "Enter Sandman",
      artist: "Metallica",
      settings: [
        { name: "Level", value: 8 },
        { name: "Tone", value: 5 },
        { name: "Distortion", value: 7 }
      ]
    },
    {
      id: "4",
      title: "Paranoid",
      artist: "Black Sabbath",
      settings: [
        { name: "Level", value: 6 },
        { name: "Tone", value: 7 },
        { name: "Distortion", value: 8 }
      ]
    }
  ];
};

export default function PedalPage({ params }: { params: { id: string } }) {
  const pedal = getPedalData(params.id);
  const songMatches = getSongMatches(params.id);

  return (
    <div className="space-y-8">
      <div className="grid gap-6 md:grid-cols-[2fr_3fr]">
        <div className="relative aspect-square overflow-hidden rounded-lg bg-muted">
          <Image 
            src={pedal.image} 
            alt={pedal.name}
            fill
            className="object-cover"
            unoptimized
          />
        </div>
        <div className="space-y-4">
          <div>
            <h1 className="text-3xl font-bold">{pedal.name}</h1>
            <p className="text-muted-foreground">{pedal.type} 效果器</p>
          </div>
          <p>{pedal.description}</p>
          <div className="flex flex-wrap gap-2">
            <Link
              href={`/pedals?type=${pedal.type}`}
              className="inline-flex h-8 items-center rounded-md border border-input bg-background px-3 text-xs font-medium"
            >
              {pedal.type}
            </Link>
          </div>
        </div>
      </div>

      <PedalSettingsDisplay pedal={pedal} songMatches={songMatches} />

      <div className="space-y-4">
        <h2 className="text-2xl font-bold">相关效果器</h2>
        <div className="flex items-center overflow-x-auto space-x-4 pb-4">
          {[
            {id: "2", name: "Tube Screamer", type: "Overdrive", image: "https://images.unsplash.com/photo-1550291652-6ea9114a47b1?q=80&w=1364&auto=format&fit=crop"},
            {id: "3", name: "Big Muff Pi", type: "Fuzz", image: "https://images.unsplash.com/photo-1558098329-a11cff621064?q=80&w=1290&auto=format&fit=crop"},
            {id: "4", name: "Phase 90", type: "Phaser", image: "https://images.unsplash.com/photo-1511298341002-15d91b5d09b7?q=80&w=1287&auto=format&fit=crop"},
            {id: "5", name: "Carbon Copy", type: "Delay", image: "https://images.unsplash.com/photo-1551969014-7d2c4cddf0b6?q=80&w=1288&auto=format&fit=crop"}
          ].map((relatedPedal) => (
            <Link key={relatedPedal.id} href={`/pedals/${relatedPedal.id}`} className="min-w-[200px]">
              <div className="group rounded-lg border bg-card p-3 transition-all hover:shadow">
                <div className="relative w-full h-32 mb-2 rounded overflow-hidden">
                  <Image 
                    src={relatedPedal.image} 
                    alt={relatedPedal.name}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
                <h3 className="font-medium group-hover:text-primary">
                  {relatedPedal.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {relatedPedal.type}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
} 