"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Search, Music, Disc3, TrendingUp, Zap, ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

export default function PedalFinderPage() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/80">
      <header className="border-b">
        <div className="container flex h-16 items-center px-4 sm:px-6 mx-auto">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <Music className="h-6 w-6" />
            <span>PedalFinder</span>
          </Link>
          <nav className="ml-auto flex gap-4 sm:gap-6">
            <Link href="#" className="text-sm font-medium hover:underline">
              Pedals
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline">
              Artists
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline">
              Genres
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline">
              About
            </Link>
          </nav>
        </div>
      </header>

      <section className="container px-4 py-12 md:py-24 lg:py-32 mx-auto">
        <div className="mx-auto flex max-w-[980px] flex-col items-center gap-4 text-center">
          <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:text-6xl lg:leading-[1.1]">
            Find the Perfect Pedal for Your Sound
          </h1>
          <p className="max-w-[750px] text-lg text-muted-foreground sm:text-xl">
            Discover effects pedals based on your favorite artists, songs, or the sound you want to create.
          </p>
          <div className="flex w-full max-w-sm items-center space-x-2">
            <Input
              type="text"
              placeholder="Search artists, songs, or sounds..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="h-12"
            />
            <Button type="submit" size="icon" className="h-12 w-12">
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Button>
          </div>
        </div>
      </section>

      <section className="container px-4 py-8 md:py-12 mx-auto">
        <Tabs defaultValue="artists" className="w-full">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold tracking-tight">Explore By</h2>
            <TabsList>
              <TabsTrigger value="artists" className="text-sm">
                <Music className="mr-2 h-4 w-4" />
                Artists
              </TabsTrigger>
              <TabsTrigger value="albums" className="text-sm">
                <Disc3 className="mr-2 h-4 w-4" />
                Albums
              </TabsTrigger>
              <TabsTrigger value="trending" className="text-sm">
                <TrendingUp className="mr-2 h-4 w-4" />
                Trending
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="artists" className="mt-6">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
              {trendingArtists.map((artist) => (
                <Link href={`/artist/${artist.id}`} key={artist.id} className="group">
                  <div className="overflow-hidden rounded-lg">
                    <div className="relative aspect-square overflow-hidden rounded-lg">
                      <Image
                        src={artist.image || "/placeholder.svg"}
                        alt={artist.name}
                        fill
                        className="object-cover transition-transform group-hover:scale-105"
                      />
                    </div>
                    <div className="mt-2">
                      <h3 className="font-medium">{artist.name}</h3>
                      <p className="text-sm text-muted-foreground">{artist.genre}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            <div className="mt-6 text-center">
              <Button variant="outline">View All Artists</Button>
            </div>
          </TabsContent>

          <TabsContent value="albums" className="mt-6">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
              {trendingAlbums.map((album) => (
                <Link href={`/album/${album.id}`} key={album.id} className="group">
                  <div className="overflow-hidden rounded-lg">
                    <div className="relative aspect-square overflow-hidden rounded-lg">
                      <Image
                        src={album.image || "/placeholder.svg"}
                        alt={album.title}
                        fill
                        className="object-cover transition-transform group-hover:scale-105"
                      />
                    </div>
                    <div className="mt-2">
                      <h3 className="font-medium">{album.title}</h3>
                      <p className="text-sm text-muted-foreground">{album.artist}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            <div className="mt-6 text-center">
              <Button variant="outline">View All Albums</Button>
            </div>
          </TabsContent>

          <TabsContent value="trending" className="mt-6">
            <div className="grid gap-4 md:grid-cols-2">
              {trendingSearches.map((item) => (
                <Card key={item.id} className="overflow-hidden">
                  <div className="flex">
                    <div className="relative h-24 w-24 shrink-0 overflow-hidden sm:h-32 sm:w-32">
                      <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                    </div>
                    <CardHeader>
                      <CardTitle>{item.title}</CardTitle>
                      <CardDescription>{item.description}</CardDescription>
                      <div className="flex flex-wrap gap-2 pt-2">
                        {item.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardHeader>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </section>

      <section className="container px-4 py-8 md:py-12 mx-auto">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold tracking-tight">Featured Pedals</h2>
          <Link href="/pedals" className="flex items-center text-sm font-medium hover:underline">
            View All
            <ChevronRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {featuredPedals.map((pedal) => (
            <Card key={pedal.id} className="overflow-hidden">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image src={pedal.image || "/placeholder.svg"} alt={pedal.name} fill className="object-cover" />
              </div>
              <CardHeader>
                <CardTitle>{pedal.name}</CardTitle>
                <CardDescription>{pedal.brand}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm">{pedal.description}</p>
                <div className="mt-4">
                  <h4 className="text-sm font-medium">Used by:</h4>
                  <div className="mt-2 flex -space-x-2">
                    {pedal.usedBy.map((artist, index) => (
                      <Avatar key={index} className="border-2 border-background">
                        <AvatarImage src={artist.image} alt={artist.name} />
                        <AvatarFallback>{artist.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                    ))}
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Explore Settings</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      <section className="container px-4 py-8 md:py-12 lg:py-16 mx-auto">
        <div className="rounded-lg bg-muted p-6 md:p-10">
          <div className="grid gap-6 md:grid-cols-2 md:gap-10">
            <div>
              <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Most Searched Prompts</h2>
              <p className="mt-2 text-muted-foreground">
                Discover what others are looking for and find inspiration for your sound.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              {popularPrompts.map((prompt, index) => (
                <div key={index} className="flex items-center gap-4 rounded-lg border bg-background p-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Zap className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium">{prompt}</p>
                  </div>
                  <Button variant="ghost" size="icon">
                    <Search className="h-4 w-4" />
                    <span className="sr-only">Search</span>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t py-6 md:py-10">
        <div className="container flex flex-col items-center justify-between gap-4 px-4 text-center md:flex-row md:text-left mx-auto">
          <div className="flex flex-col gap-2">
            <Link href="/" className="flex items-center gap-2 font-bold">
              <Music className="h-5 w-5" />
              <span>PedalFinder</span>
            </Link>
            <p className="text-sm text-muted-foreground">Find the perfect pedal for your sound. © 2024 PedalFinder.</p>
          </div>
          <div className="flex gap-4">
            <Link href="#" className="text-sm font-medium hover:underline">
              Privacy
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline">
              Terms
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

// Sample data
const trendingArtists = [
  { id: 1, name: "John Mayer", genre: "Blues Rock", image: "https://images.unsplash.com/photo-1571310100246-e0676f359b42?q=80&w=1287&auto=format&fit=crop" },
  { id: 2, name: "St. Vincent", genre: "Art Rock", image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=1470&auto=format&fit=crop" },
  { id: 3, name: "Kevin Parker", genre: "Psychedelic", image: "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?q=80&w=1470&auto=format&fit=crop" },
  { id: 4, name: "The Edge", genre: "Rock", image: "https://images.unsplash.com/photo-1511735111819-9a3f7709049c?q=80&w=1374&auto=format&fit=crop" },
  { id: 5, name: "David Gilmour", genre: "Progressive Rock", image: "https://images.unsplash.com/photo-1529068755536-a5ade0dcb4e8?q=80&w=1381&auto=format&fit=crop" },
]

const trendingAlbums = [
  { id: 1, title: "Continuum", artist: "John Mayer", image: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=1470&auto=format&fit=crop" },
  { id: 2, title: "Currents", artist: "Tame Impala", image: "https://images.unsplash.com/photo-1629276301820-0f3eedc29fd0?q=80&w=1470&auto=format&fit=crop" },
  { id: 3, title: "Masseduction", artist: "St. Vincent", image: "https://images.unsplash.com/photo-1614613533262-12e8daa265e2?q=80&w=1470&auto=format&fit=crop" },
  { id: 4, title: "The Dark Side of the Moon", artist: "Pink Floyd", image: "https://images.unsplash.com/photo-1629255237644-e029baabbf5a?q=80&w=1471&auto=format&fit=crop" },
]

const trendingSearches = [
  {
    id: 1,
    title: "Blues Overdrive Tones",
    description: "Warm, smooth overdrive for blues solos",
    image: "https://images.unsplash.com/photo-1550291652-6ea9114a47b1?q=80&w=1364&auto=format&fit=crop",
    tags: ["Blues", "Overdrive", "Warm"],
  },
  {
    id: 2,
    title: "Ambient Soundscapes",
    description: "Ethereal, spacious reverb and delay combinations",
    image: "https://images.unsplash.com/photo-1551969014-7d2c4cddf0b6?q=80&w=1288&auto=format&fit=crop",
    tags: ["Ambient", "Reverb", "Delay"],
  },
  {
    id: 3,
    title: "Modern Metal Distortion",
    description: "High-gain, tight distortion for modern metal",
    image: "https://images.unsplash.com/photo-1567603452239-496d340bc01f?q=80&w=1287&auto=format&fit=crop",
    tags: ["Metal", "Distortion", "High-gain"],
  },
  {
    id: 4,
    title: "Funk Wah Sounds",
    description: "Dynamic wah tones for funk rhythm playing",
    image: "https://images.unsplash.com/photo-1561644304-68f8f39bb1cf?q=80&w=1160&auto=format&fit=crop",
    tags: ["Funk", "Wah", "Rhythm"],
  },
]

const featuredPedals = [
  {
    id: 1,
    name: "Tube Screamer TS9",
    brand: "Ibanez",
    description: "Classic overdrive pedal known for its warm, smooth mid-boosted tone.",
    image: "https://images.unsplash.com/photo-1550291652-6ea9114a47b1?q=80&w=1364&auto=format&fit=crop",
    usedBy: [
      { name: "John Mayer", image: "https://images.unsplash.com/photo-1571310100246-e0676f359b42?q=80&w=1287&auto=format&fit=crop" },
      { name: "Stevie Ray Vaughan", image: "https://images.unsplash.com/photo-1529068755536-a5ade0dcb4e8?q=80&w=1381&auto=format&fit=crop" },
      { name: "The Edge", image: "https://images.unsplash.com/photo-1511735111819-9a3f7709049c?q=80&w=1374&auto=format&fit=crop" },
    ],
  },
  {
    id: 2,
    name: "Big Muff Pi",
    brand: "Electro-Harmonix",
    description: "Iconic fuzz pedal with rich, creamy sustain perfect for solos.",
    image: "https://images.unsplash.com/photo-1558098329-a11cff621064?q=80&w=1290&auto=format&fit=crop",
    usedBy: [
      { name: "David Gilmour", image: "https://images.unsplash.com/photo-1529068755536-a5ade0dcb4e8?q=80&w=1381&auto=format&fit=crop" },
      { name: "Jack White", image: "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?q=80&w=1470&auto=format&fit=crop" },
      { name: "Billy Corgan", image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=1470&auto=format&fit=crop" },
    ],
  },
  {
    id: 3,
    name: "Carbon Copy",
    brand: "MXR",
    description: "Analog delay pedal with warm, dark repeats and modulation.",
    image: "https://images.unsplash.com/photo-1551969014-7d2c4cddf0b6?q=80&w=1288&auto=format&fit=crop",
    usedBy: [
      { name: "The Edge", image: "https://images.unsplash.com/photo-1511735111819-9a3f7709049c?q=80&w=1374&auto=format&fit=crop" },
      { name: "Kevin Parker", image: "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?q=80&w=1470&auto=format&fit=crop" },
      { name: "St. Vincent", image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=1470&auto=format&fit=crop" },
    ],
  },
  {
    id: 4,
    name: "Strymon BigSky",
    brand: "Strymon",
    description: "High-end reverb pedal with multiple algorithms for expansive soundscapes.",
    image: "https://images.unsplash.com/photo-1588599376442-3cbf9c67449e?q=80&w=1287&auto=format&fit=crop",
    usedBy: [
      { name: "Radiohead", image: "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?q=80&w=1470&auto=format&fit=crop" },
      { name: "Tycho", image: "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?q=80&w=1470&auto=format&fit=crop" },
      { name: "Sigur Rós", image: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=1470&auto=format&fit=crop" },
    ],
  },
]

const popularPrompts = [
  "How to sound like John Mayer on 'Slow Dancing in a Burning Room'",
  "Best pedals for shoegaze guitar tones",
  "Ambient guitar pedal settings for post-rock",
  "How to get David Gilmour's tone from 'Comfortably Numb'",
  "Pedals used on Tame Impala's 'Currents' album",
]

