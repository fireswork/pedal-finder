"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

// 热门艺术家数据
const trendingArtists = [
  { id: "1", name: "John Mayer", genre: "Blues/Pop", songs: 12, image: "https://images.unsplash.com/photo-1571310100246-e0676f359b42?q=80&w=1287&auto=format&fit=crop" },
  { id: "2", name: "Tame Impala", genre: "Psychedelic Rock", songs: 8, image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=1470&auto=format&fit=crop" },
  { id: "3", name: "Radiohead", genre: "Alternative", songs: 10, image: "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?q=80&w=1470&auto=format&fit=crop" },
  { id: "4", name: "St. Vincent", genre: "Art Rock", songs: 6, image: "https://images.unsplash.com/photo-1511735111819-9a3f7709049c?q=80&w=1374&auto=format&fit=crop" },
  { id: "5", name: "Eric Clapton", genre: "Blues", songs: 15, image: "https://images.unsplash.com/photo-1529068755536-a5ade0dcb4e8?q=80&w=1381&auto=format&fit=crop" },
  { id: "6", name: "Pink Floyd", genre: "Progressive Rock", songs: 20, image: "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?q=80&w=1470&auto=format&fit=crop" }
];

// 热门专辑数据
const trendingAlbums = [
  { id: "1", title: "Dark Side of the Moon", artist: "Pink Floyd", year: 1973, image: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=1470&auto=format&fit=crop" },
  { id: "2", title: "Back in Black", artist: "AC/DC", year: 1980, image: "https://images.unsplash.com/photo-1593697821028-7cc59cfd7399?q=80&w=1470&auto=format&fit=crop" },
  { id: "3", title: "Nevermind", artist: "Nirvana", year: 1991, image: "https://images.unsplash.com/photo-1629276301820-0f3eedc29fd0?q=80&w=1470&auto=format&fit=crop" },
  { id: "4", title: "Rumours", artist: "Fleetwood Mac", year: 1977, image: "https://images.unsplash.com/photo-1614613533262-12e8daa265e2?q=80&w=1470&auto=format&fit=crop" },
  { id: "5", title: "Abbey Road", artist: "The Beatles", year: 1969, image: "https://images.unsplash.com/photo-1629255237644-e029baabbf5a?q=80&w=1471&auto=format&fit=crop" },
  { id: "6", title: "Thriller", artist: "Michael Jackson", year: 1982, image: "https://images.unsplash.com/photo-1614613503239-7dc546b969af?q=80&w=1470&auto=format&fit=crop" }
];

// 热门歌曲数据
const trendingSongs = [
  { id: "1", title: "Smoke on the Water", artist: "Deep Purple", year: 1972 },
  { id: "2", title: "Sweet Child O' Mine", artist: "Guns N' Roses", year: 1987 },
  { id: "3", title: "Stairway to Heaven", artist: "Led Zeppelin", year: 1971 },
  { id: "4", title: "Comfortably Numb", artist: "Pink Floyd", year: 1979 },
  { id: "5", title: "Thunderstruck", artist: "AC/DC", year: 1990 },
  { id: "6", title: "Enter Sandman", artist: "Metallica", year: 1991 }
];

export default function TrendingPage() {
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
      <div className="space-y-4">
        <h1 className="text-3xl font-bold">热门内容</h1>
        <p className="text-xl text-muted-foreground">
          探索热门艺术家、专辑和歌曲的效果器设置
        </p>
      </div>

      <div className="rounded-lg border p-6">
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
          </div>
        </div>
      </div>

      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold tracking-tight">
            热门艺术家
          </h2>
          <Link
            href="/artists"
            className="text-sm font-medium text-primary hover:underline"
          >
            查看全部
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {trendingArtists.map((artist) => (
            <Link key={artist.id} href={`/artists/${artist.id}`}>
              <div className="group rounded-lg border bg-card p-4 transition-all hover:shadow">
                <div className="relative h-40 w-full mb-3 rounded overflow-hidden">
                  <Image 
                    src={artist.image} 
                    alt={artist.name}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
                <h3 className="font-medium group-hover:text-primary">
                  {artist.name}
                </h3>
                <p className="text-sm text-muted-foreground">{artist.genre}</p>
                <p className="mt-2 text-xs text-muted-foreground">{artist.songs} 首可用歌曲</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold tracking-tight">
            热门专辑
          </h2>
          <Link
            href="/albums"
            className="text-sm font-medium text-primary hover:underline"
          >
            查看全部
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {trendingAlbums.map((album) => (
            <Link key={album.id} href={`/albums/${album.id}`}>
              <div className="group rounded-lg border bg-card p-4 transition-all hover:shadow">
                <div className="relative h-40 w-full mb-3 rounded overflow-hidden">
                  <Image 
                    src={album.image} 
                    alt={album.title}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
                <h3 className="font-medium group-hover:text-primary">
                  {album.title}
                </h3>
                <p className="text-sm text-muted-foreground">{album.artist}</p>
                <p className="mt-2 text-xs text-muted-foreground">{album.year}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold tracking-tight">热门歌曲</h2>
          <Link
            href="/songs"
            className="text-sm font-medium text-primary hover:underline"
          >
            查看全部
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
                  <div className="flex items-center gap-2">
                    <p className="text-sm text-muted-foreground">
                      {song.artist}
                    </p>
                    <span className="text-xs text-muted-foreground">•</span>
                    <p className="text-xs text-muted-foreground">
                      {song.year}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
} 