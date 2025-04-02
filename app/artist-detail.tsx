import { ArrowLeft, Music, Play } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ArtistDetail() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-50 to-white">
      <header className="sticky top-0 z-50 w-full border-b border-zinc-200 bg-white/80 backdrop-blur-sm">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold tracking-tight">🎸 PedalFinder</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="/pedals" className="text-sm font-medium transition-colors hover:text-zinc-900/70">
              Pedals
            </Link>
            <Link href="/artists" className="text-sm font-medium transition-colors hover:text-zinc-900/70">
              Artists
            </Link>
            <Link href="/genres" className="text-sm font-medium transition-colors hover:text-zinc-900/70">
              Genres
            </Link>
            <Link href="/about" className="text-sm font-medium transition-colors hover:text-zinc-900/70">
              About
            </Link>
          </nav>
          <button className="block md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <line x1="4" x2="20" y1="12" y2="12"></line>
              <line x1="4" x2="20" y1="6" y2="6"></line>
              <line x1="4" x2="20" y1="18" y2="18"></line>
            </svg>
            <span className="sr-only">Toggle menu</span>
          </button>
        </div>
      </header>

      <div className="container px-4 py-8 md:px-6 md:py-12">
        <Link
          href="/artists"
          className="inline-flex items-center text-sm font-medium text-zinc-500 hover:text-zinc-900 mb-6"
        >
          <ArrowLeft className="mr-1 h-4 w-4" />
          Back to Artists
        </Link>

        <div className="relative mb-12 overflow-hidden rounded-xl bg-gradient-to-r from-zinc-900 to-zinc-700 p-6 md:p-8 lg:p-12">
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-900 to-zinc-700 opacity-90"></div>
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=1469&auto=format&fit=crop')] bg-cover bg-center opacity-30 mix-blend-overlay"></div>
          <div className="relative z-10 grid gap-6 md:grid-cols-[1fr_2fr] md:gap-12 lg:grid-cols-[300px_1fr]">
            <div className="aspect-square overflow-hidden rounded-lg bg-zinc-100 shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1470&auto=format&fit=crop"
                alt="John Mayer"
                width={300}
                height={300}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h1 className="text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">John Mayer</h1>
              <p className="mt-2 text-lg text-zinc-300">Blues Rock</p>
              <p className="mt-4 max-w-3xl text-zinc-300">
                John Mayer is known for his virtuosic guitar playing, blending blues, rock, and pop into a distinctive
                style. His tone is characterized by warm, clean sounds with tasteful overdrive and carefully selected
                effects pedals.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <span className="inline-flex items-center rounded-full bg-zinc-800/60 px-3 py-1 text-sm font-medium text-zinc-300">
                  Blues
                </span>
                <span className="inline-flex items-center rounded-full bg-zinc-800/60 px-3 py-1 text-sm font-medium text-zinc-300">
                  Rock
                </span>
                <span className="inline-flex items-center rounded-full bg-zinc-800/60 px-3 py-1 text-sm font-medium text-zinc-300">
                  Pop
                </span>
                <span className="inline-flex items-center rounded-full bg-zinc-800/60 px-3 py-1 text-sm font-medium text-zinc-300">
                  Soul
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-[2fr_1fr]">
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold tracking-tight">Signature Pedals</h2>
              <p className="mt-2 text-zinc-500">The effects pedals that define John Mayer's sound</p>

              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                <div className="group relative overflow-hidden rounded-lg border border-zinc-200 bg-white shadow-sm transition-all hover:shadow-md">
                  <div className="aspect-square overflow-hidden p-4">
                    <Image
                      src="https://images.unsplash.com/photo-1558098329-a11cff621064?q=80&w=1470&auto=format&fit=crop"
                      alt="Keeley Katana Boost"
                      width={200}
                      height={200}
                      className="h-full w-full object-contain transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4 border-t border-zinc-100">
                    <h3 className="font-semibold">Keeley Katana Boost</h3>
                    <p className="text-sm text-zinc-500 mt-1">Clean boost with transparent tone</p>
                    <div className="mt-3 flex items-center justify-between">
                      <span className="text-sm font-medium">Used on: Continuum</span>
                      <Link href="/pedals/keeley-katana" className="text-sm font-medium text-zinc-900 hover:underline">
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="group relative overflow-hidden rounded-lg border border-zinc-200 bg-white shadow-sm transition-all hover:shadow-md">
                  <div className="aspect-square overflow-hidden p-4">
                    <Image
                      src="https://images.unsplash.com/photo-1550123217-aad9257b5509?q=80&w=1470&auto=format&fit=crop"
                      alt="Ibanez TS10 Tube Screamer"
                      width={200}
                      height={200}
                      className="h-full w-full object-contain transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4 border-t border-zinc-100">
                    <h3 className="font-semibold">Ibanez TS10 Tube Screamer</h3>
                    <p className="text-sm text-zinc-500 mt-1">Vintage overdrive with mid-boost</p>
                    <div className="mt-3 flex items-center justify-between">
                      <span className="text-sm font-medium">Used on: Where The Light Is</span>
                      <Link href="/pedals/ibanez-ts10" className="text-sm font-medium text-zinc-900 hover:underline">
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="group relative overflow-hidden rounded-lg border border-zinc-200 bg-white shadow-sm transition-all hover:shadow-md">
                  <div className="aspect-square overflow-hidden p-4">
                    <Image
                      src="https://images.unsplash.com/photo-1516924962500-2b4b3b99ea02?q=80&w=1470&auto=format&fit=crop"
                      alt="Way Huge Aqua-Puss Analog Delay"
                      width={200}
                      height={200}
                      className="h-full w-full object-contain transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4 border-t border-zinc-100">
                    <h3 className="font-semibold">Way Huge Aqua-Puss Analog Delay</h3>
                    <p className="text-sm text-zinc-500 mt-1">Warm analog delay with character</p>
                    <div className="mt-3 flex items-center justify-between">
                      <span className="text-sm font-medium">Used on: Born and Raised</span>
                      <Link
                        href="/pedals/way-huge-aqua-puss"
                        className="text-sm font-medium text-zinc-900 hover:underline"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="group relative overflow-hidden rounded-lg border border-zinc-200 bg-white shadow-sm transition-all hover:shadow-md">
                  <div className="aspect-square overflow-hidden p-4">
                    <Image
                      src="https://images.unsplash.com/photo-1612225330812-01a9c6b355ec?q=80&w=1470&auto=format&fit=crop"
                      alt="Strymon BlueSky Reverb"
                      width={200}
                      height={200}
                      className="h-full w-full object-contain transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4 border-t border-zinc-100">
                    <h3 className="font-semibold">Strymon BlueSky Reverb</h3>
                    <p className="text-sm text-zinc-500 mt-1">High-fidelity reverb with multiple modes</p>
                    <div className="mt-3 flex items-center justify-between">
                      <span className="text-sm font-medium">Used on: Paradise Valley</span>
                      <Link
                        href="/pedals/strymon-bluesky"
                        className="text-sm font-medium text-zinc-900 hover:underline"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold tracking-tight">Popular Songs</h2>
              <p className="mt-2 text-zinc-500">Songs that showcase John Mayer's pedal usage</p>

              <div className="mt-6 space-y-3">
                <div className="flex items-center justify-between rounded-lg border border-zinc-200 bg-white p-4 hover:bg-zinc-50">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 overflow-hidden rounded">
                      <Image
                        src="https://images.unsplash.com/photo-1605296867304-46d324a329da?q=80&w=1470&auto=format&fit=crop"
                        alt="Gravity"
                        width={48}
                        height={48}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-medium">Gravity</div>
                      <div className="text-sm text-zinc-500">Continuum (2006)</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Music className="h-4 w-4 text-zinc-400" />
                      <span className="text-sm text-zinc-500">Blues Rock</span>
                    </div>
                    <button className="rounded-full bg-zinc-100 p-2 hover:bg-zinc-200">
                      <Play className="h-4 w-4" />
                      <span className="sr-only">Play</span>
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between rounded-lg border border-zinc-200 bg-white p-4 hover:bg-zinc-50">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 overflow-hidden rounded">
                      <Image
                        src="https://images.unsplash.com/photo-1576201836106-dbca79490179?q=80&w=1470&auto=format&fit=crop"
                        alt="Slow Dancing in a Burning Room"
                        width={48}
                        height={48}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-medium">Slow Dancing in a Burning Room</div>
                      <div className="text-sm text-zinc-500">Continuum (2006)</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Music className="h-4 w-4 text-zinc-400" />
                      <span className="text-sm text-zinc-500">Blues Rock</span>
                    </div>
                    <button className="rounded-full bg-zinc-100 p-2 hover:bg-zinc-200">
                      <Play className="h-4 w-4" />
                      <span className="sr-only">Play</span>
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between rounded-lg border border-zinc-200 bg-white p-4 hover:bg-zinc-50">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 overflow-hidden rounded">
                      <Image
                        src="https://images.unsplash.com/photo-1544568130-34b99f140589?q=80&w=1470&auto=format&fit=crop"
                        alt="Neon"
                        width={48}
                        height={48}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-medium">Neon</div>
                      <div className="text-sm text-zinc-500">Room for Squares (2001)</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Music className="h-4 w-4 text-zinc-400" />
                      <span className="text-sm text-zinc-500">Pop Rock</span>
                    </div>
                    <button className="rounded-full bg-zinc-100 p-2 hover:bg-zinc-200">
                      <Play className="h-4 w-4" />
                      <span className="sr-only">Play</span>
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between rounded-lg border border-zinc-200 bg-white p-4 hover:bg-zinc-50">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 overflow-hidden rounded">
                      <Image
                        src="https://images.unsplash.com/photo-1519682337058-a94d519337bc?q=80&w=1470&auto=format&fit=crop"
                        alt="Waiting on the World to Change"
                        width={48}
                        height={48}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-medium">Waiting on the World to Change</div>
                      <div className="text-sm text-zinc-500">Continuum (2006)</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Music className="h-4 w-4 text-zinc-400" />
                      <span className="text-sm text-zinc-500">Pop Rock</span>
                    </div>
                    <button className="rounded-full bg-zinc-100 p-2 hover:bg-zinc-200">
                      <Play className="h-4 w-4" />
                      <span className="sr-only">Play</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="rounded-lg border border-zinc-200 bg-white p-6">
              <h3 className="text-lg font-semibold">Pedalboard Setup</h3>
              <div className="mt-4 aspect-video overflow-hidden rounded-lg bg-zinc-100">
                <Image
                  src="https://images.unsplash.com/photo-1635372779934-8c2892916a71?q=80&w=1470&auto=format&fit=crop"
                  alt="John Mayer's Pedalboard"
                  width={500}
                  height={300}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="mt-4 text-sm text-zinc-600">
                <p>John Mayer's pedalboard has evolved throughout his career, but typically includes:</p>
                <ul className="mt-2 list-disc pl-5 space-y-1">
                  <li>Keeley Katana Boost</li>
                  <li>Ibanez TS10 Tube Screamer</li>
                  <li>Way Huge Aqua-Puss Analog Delay</li>
                  <li>Strymon BlueSky Reverb</li>
                  <li>Boss Tremolo TR-2</li>
                  <li>Q-Tron Plus Envelope Filter</li>
                </ul>
              </div>
            </div>

            <div className="rounded-lg border border-zinc-200 bg-white p-6">
              <h3 className="text-lg font-semibold">Similar Artists</h3>
              <div className="mt-4 grid gap-4">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 overflow-hidden rounded-full">
                    <Image
                      src="https://images.unsplash.com/photo-1635093889391-98954a555918?q=80&w=1470&auto=format&fit=crop"
                      alt="Eric Clapton"
                      width={40}
                      height={40}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-medium">Eric Clapton</div>
                    <div className="text-sm text-zinc-500">Blues Rock</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 overflow-hidden rounded-full">
                    <Image
                      src="https://images.unsplash.com/photo-1547948848-4c948a940094?q=80&w=1470&auto=format&fit=crop"
                      alt="Stevie Ray Vaughan"
                      width={40}
                      height={40}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-medium">Stevie Ray Vaughan</div>
                    <div className="text-sm text-zinc-500">Blues</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 overflow-hidden rounded-full">
                    <Image
                      src="https://images.unsplash.com/photo-1616763355855-44943c45410f?q=80&w=1470&auto=format&fit=crop"
                      alt="Gary Clark Jr."
                      width={40}
                      height={40}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-medium">Gary Clark Jr.</div>
                    <div className="text-sm text-zinc-500">Blues Rock</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-zinc-200 bg-white p-6">
              <h3 className="text-lg font-semibold">Recommended Albums</h3>
              <div className="mt-4 grid gap-4">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 overflow-hidden rounded">
                    <Image
                      src="https://images.unsplash.com/photo-1576766411944-9096555f19b9?q=80&w=1470&auto=format&fit=crop"
                      alt="Continuum"
                      width={48}
                      height={48}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-medium">Continuum</div>
                    <div className="text-sm text-zinc-500">2006</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 overflow-hidden rounded">
                    <Image
                      src="https://images.unsplash.com/photo-1576766411944-9096555f19b9?q=80&w=1470&auto=format&fit=crop"
                      alt="Where The Light Is"
                      width={48}
                      height={48}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-medium">Where The Light Is (Live)</div>
                    <div className="text-sm text-zinc-500">2008</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 overflow-hidden rounded">
                    <Image
                      src="https://images.unsplash.com/photo-1576766411944-9096555f19b9?q=80&w=1470&auto=format&fit=crop"
                      alt="Born and Raised"
                      width={48}
                      height={48}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-medium">Born and Raised</div>
                    <div className="text-sm text-zinc-500">2012</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

