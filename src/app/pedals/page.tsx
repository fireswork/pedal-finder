"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { PedalGrid } from "@/components/pedals/PedalGrid";
import { Button } from "@/components/ui/button";

// 踏板数据
const pedals = [
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
  {
    id: "5",
    name: "Boss DD-7 Digital Delay",
    image: "https://images.unsplash.com/photo-1551969014-7d2c4cddf0b6?q=80&w=1288&auto=format&fit=crop",
    type: "Delay",
  },
  {
    id: "6",
    name: "TC Electronic Hall of Fame Reverb",
    image: "https://images.unsplash.com/photo-1588599376442-3cbf9c67449e?q=80&w=1287&auto=format&fit=crop",
    type: "Reverb",
  },
  {
    id: "7",
    name: "Dunlop Cry Baby Wah",
    image: "https://images.unsplash.com/photo-1561644304-68f8f39bb1cf?q=80&w=1160&auto=format&fit=crop",
    type: "Wah",
  },
  {
    id: "8",
    name: "EarthQuaker Devices Plumes",
    image: "https://images.unsplash.com/photo-160659942360-71d96b8d3be3?q=80&w=1287&auto=format&fit=crop",
    type: "Overdrive",
  },
];

// 效果器类型过滤
const filterTypes = [
  "All",
  "Distortion",
  "Overdrive",
  "Fuzz",
  "Delay",
  "Reverb",
  "Modulation",
];

export default function PedalsPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  // 在实际应用中，你会根据 searchParams 进行过滤
  const typeFilter = typeof searchParams.type === 'string' ? searchParams.type : 'All';
  
  // 根据类型过滤踏板（如果不是"All"）
  const filteredPedals = typeFilter === 'All' 
    ? pedals 
    : pedals.filter(pedal => pedal.type === typeFilter);

  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("guitar-pedals");

  const categories = [
    { id: "classic-rock", label: "Classic Rock" },
    { id: "jazz", label: "Jazz" },
    { id: "country", label: "Country" }
  ];

  const instrumentCategories = [
    { id: "guitar-pedals", label: "Guitar Pedals" },
    { id: "guitar", label: "Guitar" },
    { id: "drums", label: "Drums" }
  ];

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold">效果器踏板</h1>
        <p className="text-xl text-muted-foreground">
          浏览我们的吉他效果器踏板收藏
        </p>
      </div>

      <div className="rounded-lg border p-6">
        <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] gap-8">
          {/* 左侧 - 音乐风格选择 */}
          <div className="border rounded-lg p-4">
            <div className="space-y-2">
              <p className="font-medium">Classic Rock</p>
              <p>Jazz</p>
              <p>Country</p>
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
                商城中的效果器踏板展示
              </p>
            </div>
            
            {/* 描述 */}
            <div className="border rounded-lg p-3 text-center">
              <p>基于搜索提示，我们会从商城中高亮显示相关的效果器或寻找类似的产品</p>
              <p>用户选择特定的踏板后，我们会指导其设置相关参数</p>
            </div>
            
            {/* 设置选项卡 */}
            <div className="border rounded-lg overflow-hidden">
              <div className="flex border-b">
                <button className="flex-1 py-3 px-4 bg-white font-medium border-r">推荐设置</button>
                <button className="flex-1 py-3 px-4 bg-gray-50 border-r">附加设置</button>
                <button className="flex-1 py-3 px-4 bg-gray-50 border-r">评价</button>
                <button className="flex-1 py-3 px-4 bg-gray-50">视频</button>
              </div>
              <div className="p-6 h-36">
                {/* 这里是选定选项卡的内容区域 */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex overflow-auto pb-2 space-x-2">
          {filterTypes.map((type) => (
            <Link
              key={type}
              href={`/pedals${type === "All" ? "" : `?type=${type}`}`}
              className={`inline-flex h-9 items-center rounded-md px-4 py-2 text-sm font-medium transition-colors ${
                type === typeFilter
                  ? "bg-primary text-primary-foreground"
                  : "border border-input bg-background hover:bg-accent hover:text-accent-foreground"
              }`}
            >
              {type}
            </Link>
          ))}
        </div>
      </div>

      <PedalGrid 
        pedals={filteredPedals} 
        title={typeFilter === 'All' ? '所有踏板' : `${typeFilter} 踏板`} 
      />
    </div>
  );
} 