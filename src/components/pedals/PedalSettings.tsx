"use client";

import React from "react";
import { Tabs } from "../ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

interface Setting {
  name: string;
  value: string | number;
  range?: [number, number];
  options?: string[];
}

interface PedalSettings {
  id: string;
  name: string;
  settings: Setting[];
}

interface SongMatch {
  id: string;
  title: string;
  artist: string;
  settings: Setting[];
}

interface PedalSettingsProps {
  pedal: PedalSettings;
  songMatches: SongMatch[];
}

export function PedalSettingsDisplay({ pedal, songMatches }: PedalSettingsProps) {
  const tabs = [
    {
      id: "recommended-settings",
      label: "推荐设置",
      content: (
        <Card>
          <CardHeader>
            <CardTitle>{pedal.name} 的推荐设置</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {pedal.settings.map((setting) => (
              <div key={setting.name} className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium">{setting.name}</label>
                  <span className="text-sm">{setting.value}</span>
                </div>
                {setting.range && (
                  <input
                    type="range"
                    min={setting.range[0]}
                    max={setting.range[1]}
                    value={Number(setting.value)}
                    onChange={() => {}}
                    className="w-full"
                  />
                )}
                {setting.options && (
                  <select
                    value={setting.value.toString()}
                    onChange={() => {}}
                    className="w-full rounded-md border p-2 text-sm"
                  >
                    {setting.options.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                )}
              </div>
            ))}
          </CardContent>
        </Card>
      )
    },
    {
      id: "additional-settings",
      label: "附加设置",
      content: (
        <Card>
          <CardHeader>
            <CardTitle>附加设置</CardTitle>
          </CardHeader>
          <CardContent>
            <p>{pedal.name} 的高级设置和配置。</p>
          </CardContent>
        </Card>
      )
    },
    {
      id: "reviews",
      label: "评价",
      content: (
        <Card>
          <CardHeader>
            <CardTitle>用户评价</CardTitle>
          </CardHeader>
          <CardContent>
            <p>其他用户对 {pedal.name} 的评价和评分。</p>
          </CardContent>
        </Card>
      )
    },
    {
      id: "videos",
      label: "视频",
      content: (
        <Card>
          <CardHeader>
            <CardTitle>演示视频</CardTitle>
          </CardHeader>
          <CardContent>
            <p>{pedal.name} 的教程和演示视频。</p>
          </CardContent>
        </Card>
      )
    }
  ];

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold">{pedal.name} 设置</h2>
        <p className="text-muted-foreground">
          根据歌曲、艺术家或风格调整此踏板的设置。
        </p>
      </div>
      
      <Tabs tabs={tabs} />
      
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">使用此踏板的歌曲</h3>
        <div className="grid gap-4 md:grid-cols-2">
          {songMatches.map((song) => (
            <Card key={song.id}>
              <CardHeader className="pb-2">
                <CardTitle className="text-base font-medium">{song.title}</CardTitle>
                <p className="text-sm text-muted-foreground">{song.artist}</p>
              </CardHeader>
              <CardContent className="text-sm">
                <ul className="space-y-1">
                  {song.settings.map((setting) => (
                    <li key={setting.name} className="flex justify-between">
                      <span>{setting.name}</span>
                      <span className="font-medium">{setting.value}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
} 