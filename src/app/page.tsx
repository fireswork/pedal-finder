"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { PedalGrid } from "@/components/pedals/PedalGrid";
import { Button } from "@/components/ui/button";

// 热门踏板数据
const trendingPedals = [
  {
    id: "1",
    name: "Boss DS-1 Distortion",
    image: "https://images.unsplash.com/photo-1567603452239-496d340bc01f?q=80&w=1287&auto=format&fit=crop",
    type: "Distortion",
  },
  {
    id: "2",
    name: "MXR Phase 90",
    image: "https://images.unsplash.com/photo-1511298341002-15d91b5d09b7?q=80&w=1287&auto=format&fit=crop",
    type: "Phaser",
  },
  {
    id: "3",
    name: "Electro-Harmonix Big Muff Pi",
    image: "https://images.unsplash.com/photo-1558098329-a11cff621064?q=80&w=1290&auto=format&fit=crop",
    type: "Fuzz",
  },
  {
    id: "4",
    name: "Ibanez Tube Screamer TS9",
    image: "https://images.unsplash.com/photo-1550291652-6ea9114a47b1?q=80&w=1364&auto=format&fit=crop",
    type: "Overdrive",
  },
];

// 热门艺术家数据
const trendingArtists = [
  { id: "1", name: "John Mayer", genre: "Blues/Pop" },
  { id: "2", name: "Tame Impala", genre: "Psychedelic Rock" },
  { id: "3", name: "Radiohead", genre: "Alternative" },
  { id: "4", name: "St. Vincent", genre: "Art Rock" },
];

// 热门歌曲数据
const trendingSongs = [
  { id: "1", title: "Smoke on the Water", artist: "Deep Purple" },
  { id: "2", title: "Sweet Child O' Mine", artist: "Guns N' Roses" },
  { id: "3", title: "Stairway to Heaven", artist: "Led Zeppelin" },
  { id: "4", title: "Comfortably Numb", artist: "Pink Floyd" },
];

export default function Home() {
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("guitar-pedals");

  // 左侧边栏的音乐风格分类
  const genreCategories = [
    { id: "classic-rock", label: "Classic Rock" },
    { id: "jazz", label: "Jazz" },
    { id: "country", label: "Country" }
  ];

  // 乐器分类按钮
  const instrumentCategories = [
    { id: "guitar-pedals", label: "Guitar Pedals" },
    { id: "guitar", label: "Guitar" },
    { id: "drums", label: "Drums" }
  ];

  return (
    <div className="space-y-8">
      <section className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">
          Effects Pedal Experience
        </h1>
        <p className="text-xl text-muted-foreground">
          Find the perfect pedal settings based on your favorite music.
        </p>
      </section>

      <section className="rounded-lg border p-6">
        <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] gap-8">
          {/* 左侧 - 音乐风格选择 */}
          <div className="border rounded-lg p-4">
            <div className="space-y-2">
              {genreCategories.map(genre => (
                <p 
                  key={genre.id} 
                  className={genre.id === "classic-rock" ? "font-medium" : ""}
                >
                  {genre.label}
                </p>
              ))}
            </div>
          </div>
          
          {/* 右侧 - 搜索和展示 */}
          <div className="space-y-6">
            {/* 搜索输入框 */}
            <div>
              <input
                type="text"
                placeholder="Prompt"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full rounded-lg border p-3"
              />
            </div>
            
            {/* 乐器分类按钮 */}
            <div className="flex gap-4">
              {instrumentCategories.map((category) => (
                <Button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  className="flex-1"
                >
                  {category.label}
                </Button>
              ))}
            </div>
            
            {/* 踏板板图像 */}
            <div className="relative">
              <div className="rounded-lg overflow-hidden border">
                <Image 
                  src="https://images.unsplash.com/photo-1595187275470-51702335ef92?q=80&w=2071&auto=format&fit=crop" 
                  alt="Guitar pedal board" 
                  width={800}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
              <p className="text-center text-sm text-muted-foreground mt-2">
                Above image representation whats in store (TBD)
              </p>
            </div>
            
            {/* 描述 */}
            <div className="border rounded-lg p-3 text-center">
              <p>Based on Prompt we highlight effects from store pedal board or find similar</p>
              <p>Customer chooses a given pedal and we guide on its settings</p>
            </div>
            
            {/* 设置选项卡 */}
            <div className="border rounded-lg overflow-hidden">
              <div className="flex border-b">
                <button className="flex-1 py-3 px-4 bg-white font-medium border-r">Recommended Settings</button>
                <button className="flex-1 py-3 px-4 bg-gray-50 border-r">Additional Settings</button>
                <button className="flex-1 py-3 px-4 bg-gray-50 border-r">Reviews</button>
                <button className="flex-1 py-3 px-4 bg-gray-50">Videos</button>
              </div>
              <div className="p-6 h-36">
                {/* 选定选项卡的内容区域 */}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold tracking-tight">Trending Pedals</h2>
          <Link
            href="/pedals"
            className="text-sm font-medium text-primary hover:underline"
          >
            View all
          </Link>
        </div>
        <PedalGrid pedals={trendingPedals} />
      </section>

      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold tracking-tight">
            Trending Artists
          </h2>
          <Link
            href="/artists"
            className="text-sm font-medium text-primary hover:underline"
          >
            View all
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {trendingArtists.map((artist) => (
            <Link key={artist.id} href={`/artists/${artist.id}`}>
              <div className="group rounded-lg border bg-card p-4 transition-all hover:shadow">
                <h3 className="font-medium group-hover:text-primary">
                  {artist.name}
                </h3>
                <p className="text-sm text-muted-foreground">{artist.genre}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold tracking-tight">Trending Songs</h2>
          <Link
            href="/songs"
            className="text-sm font-medium text-primary hover:underline"
          >
            View all
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {trendingSongs.map((song) => (
            <Link key={song.id} href={`/songs/${song.id}`}>
              <div className="group flex items-center gap-4 rounded-lg border bg-card p-4 transition-all hover:shadow">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9 18V5l12-2v13" />
                    <circle cx="6" cy="18" r="3" />
                    <circle cx="18" cy="16" r="3" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium group-hover:text-primary">
                    {song.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {song.artist}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
} 