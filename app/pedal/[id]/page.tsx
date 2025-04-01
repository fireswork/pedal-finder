"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, Music, Star, Settings, Disc3, Heart, Share2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { Slider } from "@/components/ui/slider"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function PedalDetailPage({ params }: { params: { id: string } }) {
  const [favorited, setFavorited] = useState(false)

  // In a real app, you would fetch the pedal data based on the ID
  const pedal = {
    id: params.id,
    name: "Tube Screamer TS9",
    brand: "Ibanez",
    description:
      "The Ibanez Tube Screamer is a guitar overdrive pedal that has become a classic in the world of electric guitar effects. Known for its distinctive mid-boosted tone, the Tube Screamer adds warmth, sustain, and a touch of compression to your guitar signal. It's particularly effective for blues, rock, and country playing, and it's often used to push tube amplifiers into natural overdrive.",
    image: "/placeholder.svg?height=500&width=500",
    price: "$99.99",
    rating: 4.8,
    reviewCount: 1243,
    features: [
      "Classic mid-boosted overdrive",
      "Tone, Level, and Drive controls",
      "True bypass switching",
      "Durable metal chassis",
      "Powered by 9V battery or adapter",
    ],
    settings: [
      { name: "Drive", value: 60, min: 0, max: 100 },
      { name: "Tone", value: 50, min: 0, max: 100 },
      { name: "Level", value: 75, min: 0, max: 100 },
    ],
    genres: ["Blues", "Rock", "Country", "Pop"],
    artistSettings: [
      {
        artist: "John Mayer",
        song: "Slow Dancing in a Burning Room",
        album: "Continuum",
        image: "/placeholder.svg?height=60&width=60",
        settings: [
          { name: "Drive", value: 40 },
          { name: "Tone", value: 60 },
          { name: "Level", value: 70 },
        ],
      },
      {
        artist: "Stevie Ray Vaughan",
        song: "Pride and Joy",
        album: "Texas Flood",
        image: "/placeholder.svg?height=60&width=60",
        settings: [
          { name: "Drive", value: 70 },
          { name: "Tone", value: 50 },
          { name: "Level", value: 80 },
        ],
      },
      {
        artist: "The Edge",
        song: "Where the Streets Have No Name",
        album: "The Joshua Tree",
        image: "/placeholder.svg?height=60&width=60",
        settings: [
          { name: "Drive", value: 30 },
          { name: "Tone", value: 70 },
          { name: "Level", value: 65 },
        ],
      },
    ],
    similarSongs: [
      {
        title: "Gravity",
        artist: "John Mayer",
        album: "Where the Light Is",
        image: "/placeholder.svg?height=60&width=60",
      },
      {
        title: "Lenny",
        artist: "Stevie Ray Vaughan",
        album: "Texas Flood",
        image: "/placeholder.svg?height=60&width=60",
      },
      {
        title: "Sultans of Swing",
        artist: "Dire Straits",
        album: "Dire Straits",
        image: "/placeholder.svg?height=60&width=60",
      },
      {
        title: "Layla (Unplugged)",
        artist: "Eric Clapton",
        album: "Unplugged",
        image: "/placeholder.svg?height=60&width=60",
      },
    ],
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/80">
      <header className="border-b">
        <div className="container flex h-16 items-center px-4 sm:px-6">
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

      <div className="container px-4 py-6 md:py-8">
        <Link href="/" className="inline-flex items-center text-sm font-medium hover:underline">
          <ChevronLeft className="mr-1 h-4 w-4" />
          Back to Pedals
        </Link>
      </div>

      <div className="container px-4 pb-12">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col gap-4">
            <div className="overflow-hidden rounded-lg border bg-background">
              <div className="relative aspect-square">
                <Image src={pedal.image || "/placeholder.svg"} alt={pedal.name} fill className="object-contain p-6" />
              </div>
            </div>
            <div className="grid grid-cols-4 gap-2">
              {[...Array(4)].map((_, i) => (
                <button key={i} className="overflow-hidden rounded-md border bg-background">
                  <div className="relative aspect-square">
                    <Image
                      src={pedal.image || "/placeholder.svg"}
                      alt={`${pedal.name} view ${i + 1}`}
                      fill
                      className="object-contain p-2"
                    />
                  </div>
                </button>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div>
              <h1 className="text-2xl font-bold sm:text-3xl">{pedal.name}</h1>
              <div className="mt-1 text-lg font-medium text-muted-foreground">{pedal.brand}</div>
              <div className="mt-4 flex items-center gap-4">
                <div className="flex items-center">
                  <Star className="h-5 w-5 fill-primary text-primary" />
                  <Star className="h-5 w-5 fill-primary text-primary" />
                  <Star className="h-5 w-5 fill-primary text-primary" />
                  <Star className="h-5 w-5 fill-primary text-primary" />
                  <Star className="h-5 w-5 fill-primary/50 text-primary" />
                  <span className="ml-2 text-sm font-medium">{pedal.rating}</span>
                </div>
                <div className="text-sm text-muted-foreground">{pedal.reviewCount} reviews</div>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {pedal.genres.map((genre) => (
                  <Badge key={genre} variant="secondary">
                    {genre}
                  </Badge>
                ))}
              </div>
            </div>
            <Separator />
            <div>
              <h2 className="font-medium">Description</h2>
              <p className="mt-2 text-muted-foreground">{pedal.description}</p>
            </div>
            <div>
              <h2 className="font-medium">Features</h2>
              <ul className="mt-2 grid gap-1 text-muted-foreground">
                {pedal.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-auto flex gap-4">
              <Button
                variant="outline"
                size="icon"
                className={favorited ? "text-red-500" : ""}
                onClick={() => setFavorited(!favorited)}
              >
                <Heart className={`h-5 w-5 ${favorited ? "fill-red-500" : ""}`} />
                <span className="sr-only">Favorite</span>
              </Button>
              <Button variant="outline" size="icon">
                <Share2 className="h-5 w-5" />
                <span className="sr-only">Share</span>
              </Button>
              <Button className="flex-1">Find Similar Pedals</Button>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <Tabs defaultValue="settings">
            <TabsList className="w-full justify-start">
              <TabsTrigger value="settings" className="flex items-center gap-2">
                <Settings className="h-4 w-4" />
                Artist Settings
              </TabsTrigger>
              <TabsTrigger value="similar" className="flex items-center gap-2">
                <Music className="h-4 w-4" />
                Similar Songs
              </TabsTrigger>
              <TabsTrigger value="albums" className="flex items-center gap-2">
                <Disc3 className="h-4 w-4" />
                Albums Using This Pedal
              </TabsTrigger>
            </TabsList>
            <TabsContent value="settings" className="mt-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {pedal.artistSettings.map((artistSetting, index) => (
                  <Card key={index}>
                    <CardHeader className="flex flex-row items-center gap-4 pb-2">
                      <Avatar>
                        <AvatarImage src={artistSetting.image} alt={artistSetting.artist} />
                        <AvatarFallback>{artistSetting.artist[0]}</AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="text-base">{artistSetting.artist}</CardTitle>
                        <CardDescription className="text-xs">{artistSetting.song}</CardDescription>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-4">
                        {artistSetting.settings.map((setting, settingIndex) => (
                          <div key={settingIndex}>
                            <div className="mb-2 flex items-center justify-between">
                              <span className="text-sm font-medium">{setting.name}</span>
                              <span className="text-sm text-muted-foreground">{setting.value}%</span>
                            </div>
                            <Slider defaultValue={[setting.value]} max={100} step={1} disabled />
                          </div>
                        ))}
                      </div>
                      <Button variant="outline" className="mt-4 w-full text-sm">
                        Apply These Settings
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="similar" className="mt-6">
              <div className="grid gap-4">
                {pedal.similarSongs.map((song, index) => (
                  <div key={index} className="flex items-center gap-4 rounded-lg border p-4">
                    <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-md">
                      <Image src={song.image || "/placeholder.svg"} alt={song.title} fill className="object-cover" />
                    </div>
                    <div>
                      <h3 className="font-medium">{song.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {song.artist} - {song.album}
                      </p>
                    </div>
                    <Button variant="ghost" size="sm" className="ml-auto">
                      View Settings
                    </Button>
                  </div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="albums" className="mt-6">
              <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {[1, 2, 3, 4, 5, 6].map((album) => (
                  <Link href="#" key={album} className="group">
                    <div className="overflow-hidden rounded-lg">
                      <div className="relative aspect-square overflow-hidden rounded-lg">
                        <Image
                          src={`/placeholder.svg?height=300&width=300`}
                          alt={`Album ${album}`}
                          fill
                          className="object-cover transition-transform group-hover:scale-105"
                        />
                      </div>
                      <div className="mt-2">
                        <h3 className="font-medium">Album Title {album}</h3>
                        <p className="text-sm text-muted-foreground">Artist Name</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <footer className="border-t py-6 md:py-10">
        <div className="container flex flex-col items-center justify-between gap-4 px-4 text-center md:flex-row md:text-left">
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

