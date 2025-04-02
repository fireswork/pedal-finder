import { ArrowLeft } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ExplorePage({ searchParams }: { searchParams: { category?: string } }) {
  const category = searchParams.category || "all"

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
            <Link
              href="/explore"
              className="text-sm font-medium transition-colors hover:text-zinc-900/70 font-semibold"
            >
              Explore
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
        <Link href="/" className="inline-flex items-center text-sm font-medium text-zinc-500 hover:text-zinc-900 mb-6">
          <ArrowLeft className="mr-1 h-4 w-4" />
          Back to Home
        </Link>

        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight mb-4">
            {category === "instruments"
              ? "Browse by Instrument"
              : category === "genres"
                ? "Browse by Music Genre"
                : category === "artists"
                  ? "Browse by Artist"
                  : category === "songs"
                    ? "Browse by Song"
                    : "Explore Pedals"}
          </h1>

          <div className="flex flex-wrap gap-2 mb-8">
            <Link
              href="/explore?category=all"
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                category === "all" ? "bg-zinc-900 text-white" : "bg-zinc-100 text-zinc-900 hover:bg-zinc-200"
              }`}
            >
              All
            </Link>
            <Link
              href="/explore?category=instruments"
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                category === "instruments" ? "bg-zinc-900 text-white" : "bg-zinc-100 text-zinc-900 hover:bg-zinc-200"
              }`}
            >
              Instruments
            </Link>
            <Link
              href="/explore?category=genres"
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                category === "genres" ? "bg-zinc-900 text-white" : "bg-zinc-100 text-zinc-900 hover:bg-zinc-200"
              }`}
            >
              Genres
            </Link>
            <Link
              href="/explore?category=artists"
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                category === "artists" ? "bg-zinc-900 text-white" : "bg-zinc-100 text-zinc-900 hover:bg-zinc-200"
              }`}
            >
              Artists
            </Link>
            <Link
              href="/explore?category=songs"
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                category === "songs" ? "bg-zinc-900 text-white" : "bg-zinc-100 text-zinc-900 hover:bg-zinc-200"
              }`}
            >
              Songs
            </Link>
          </div>
        </div>

        {category === "instruments" && (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <div className="group relative overflow-hidden rounded-lg border border-zinc-200 bg-white shadow-sm transition-all hover:shadow-md">
              <div className="aspect-video overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1550123217-aad9257b5509?q=80&w=1470&auto=format&fit=crop"
                  alt="Guitar Pedals"
                  width={400}
                  height={225}
                  className="h-full w-full object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold">Guitar Pedals</h3>
                <p className="text-sm text-zinc-500 mt-1">Effects pedals for electric guitar</p>
              </div>
              <Link href="/pedals?type=guitar" className="absolute inset-0 focus:outline-none">
                <span className="sr-only">View Guitar Pedals</span>
              </Link>
            </div>

            <div className="group relative overflow-hidden rounded-lg border border-zinc-200 bg-white shadow-sm transition-all hover:shadow-md">
              <div className="aspect-video overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1445985543470-41fba5c3144a?q=80&w=1470&auto=format&fit=crop"
                  alt="Bass Pedals"
                  width={400}
                  height={225}
                  className="h-full w-full object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold">Bass Pedals</h3>
                <p className="text-sm text-zinc-500 mt-1">Effects pedals for bass guitar</p>
              </div>
              <Link href="/pedals?type=bass" className="absolute inset-0 focus:outline-none">
                <span className="sr-only">View Bass Pedals</span>
              </Link>
            </div>

            <div className="group relative overflow-hidden rounded-lg border border-zinc-200 bg-white shadow-sm transition-all hover:shadow-md">
              <div className="aspect-video overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?q=80&w=1470&auto=format&fit=crop"
                  alt="Synth Pedals"
                  width={400}
                  height={225}
                  className="h-full w-full object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold">Synth Pedals</h3>
                <p className="text-sm text-zinc-500 mt-1">Effects pedals for synthesizers</p>
              </div>
              <Link href="/pedals?type=synth" className="absolute inset-0 focus:outline-none">
                <span className="sr-only">View Synth Pedals</span>
              </Link>
            </div>

            <div className="group relative overflow-hidden rounded-lg border border-zinc-200 bg-white shadow-sm transition-all hover:shadow-md">
              <div className="aspect-video overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1543443258-92b04ad5ec4b?q=80&w=1470&auto=format&fit=crop"
                  alt="Vocal Pedals"
                  width={400}
                  height={225}
                  className="h-full w-full object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold">Vocal Pedals</h3>
                <p className="text-sm text-zinc-500 mt-1">Effects pedals for vocals</p>
              </div>
              <Link href="/pedals?type=vocal" className="absolute inset-0 focus:outline-none">
                <span className="sr-only">View Vocal Pedals</span>
              </Link>
            </div>
          </div>
        )}

        {category === "genres" && (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <div className="group relative overflow-hidden rounded-lg border border-zinc-200 bg-white shadow-sm transition-all hover:shadow-md">
              <div className="aspect-video overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1470&auto=format&fit=crop"
                  alt="Blues"
                  width={400}
                  height={225}
                  className="h-full w-full object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold">Blues</h3>
                <p className="text-sm text-zinc-500 mt-1">Pedals for blues guitar tones</p>
              </div>
              <Link href="/pedals?genre=blues" className="absolute inset-0 focus:outline-none">
                <span className="sr-only">View Blues Pedals</span>
              </Link>
            </div>

            <div className="group relative overflow-hidden rounded-lg border border-zinc-200 bg-white shadow-sm transition-all hover:shadow-md">
              <div className="aspect-video overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?q=80&w=1470&auto=format&fit=crop"
                  alt="Rock"
                  width={400}
                  height={225}
                  className="h-full w-full object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold">Rock</h3>
                <p className="text-sm text-zinc-500 mt-1">Pedals for rock guitar tones</p>
              </div>
              <Link href="/pedals?genre=rock" className="absolute inset-0 focus:outline-none">
                <span className="sr-only">View Rock Pedals</span>
              </Link>
            </div>

            <div className="group relative overflow-hidden rounded-lg border border-zinc-200 bg-white shadow-sm transition-all hover:shadow-md">
              <div className="aspect-video overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1501612780327-45045538702b?q=80&w=1470&auto=format&fit=crop"
                  alt="Psychedelic"
                  width={400}
                  height={225}
                  className="h-full w-full object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold">Psychedelic</h3>
                <p className="text-sm text-zinc-500 mt-1">Pedals for psychedelic sounds</p>
              </div>
              <Link href="/pedals?genre=psychedelic" className="absolute inset-0 focus:outline-none">
                <span className="sr-only">View Psychedelic Pedals</span>
              </Link>
            </div>

            <div className="group relative overflow-hidden rounded-lg border border-zinc-200 bg-white shadow-sm transition-all hover:shadow-md">
              <div className="aspect-video overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=1470&auto=format&fit=crop"
                  alt="Jazz"
                  width={400}
                  height={225}
                  className="h-full w-full object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold">Jazz</h3>
                <p className="text-sm text-zinc-500 mt-1">Pedals for jazz guitar tones</p>
              </div>
              <Link href="/pedals?genre=jazz" className="absolute inset-0 focus:outline-none">
                <span className="sr-only">View Jazz Pedals</span>
              </Link>
            </div>

            <div className="group relative overflow-hidden rounded-lg border border-zinc-200 bg-white shadow-sm transition-all hover:shadow-md">
              <div className="aspect-video overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1493676304819-0d7a8d026dcf?q=80&w=1470&auto=format&fit=crop"
                  alt="Metal"
                  width={400}
                  height={225}
                  className="h-full w-full object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold">Metal</h3>
                <p className="text-sm text-zinc-500 mt-1">Pedals for metal guitar tones</p>
              </div>
              <Link href="/pedals?genre=metal" className="absolute inset-0 focus:outline-none">
                <span className="sr-only">View Metal Pedals</span>
              </Link>
            </div>

            <div className="group relative overflow-hidden rounded-lg border border-zinc-200 bg-white shadow-sm transition-all hover:shadow-md">
              <div className="aspect-video overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=1631&auto=format&fit=crop"
                  alt="Progressive"
                  width={400}
                  height={225}
                  className="h-full w-full object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold">Progressive</h3>
                <p className="text-sm text-zinc-500 mt-1">Pedals for progressive rock/metal</p>
              </div>
              <Link href="/pedals?genre=progressive" className="absolute inset-0 focus:outline-none">
                <span className="sr-only">View Progressive Pedals</span>
              </Link>
            </div>

            <div className="group relative overflow-hidden rounded-lg border border-zinc-200 bg-white shadow-sm transition-all hover:shadow-md">
              <div className="aspect-video overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1571330735066-03aaa9429d89?q=80&w=1470&auto=format&fit=crop"
                  alt="Ambient"
                  width={400}
                  height={225}
                  className="h-full w-full object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold">Ambient</h3>
                <p className="text-sm text-zinc-500 mt-1">Pedals for ambient soundscapes</p>
              </div>
              <Link href="/pedals?genre=ambient" className="absolute inset-0 focus:outline-none">
                <span className="sr-only">View Ambient Pedals</span>
              </Link>
            </div>

            <div className="group relative overflow-hidden rounded-lg border border-zinc-200 bg-white shadow-sm transition-all hover:shadow-md">
              <div className="aspect-video overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=1470&auto=format&fit=crop"
                  alt="Country"
                  width={400}
                  height={225}
                  className="h-full w-full object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold">Country</h3>
                <p className="text-sm text-zinc-500 mt-1">Pedals for country guitar tones</p>
              </div>
              <Link href="/pedals?genre=country" className="absolute inset-0 focus:outline-none">
                <span className="sr-only">View Country Pedals</span>
              </Link>
            </div>
          </div>
        )}

        {category === "artists" && (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {/* Artist cards similar to the homepage, but more of them */}
            <div className="group relative overflow-hidden rounded-lg border border-zinc-200 bg-white shadow-sm transition-all hover:shadow-md">
              <div className="aspect-square overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1470&auto=format&fit=crop"
                  alt="John Mayer"
                  width={400}
                  height={400}
                  className="h-full w-full object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold">John Mayer</h3>
                <p className="text-sm text-zinc-500">Blues Rock</p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
              <div className="absolute inset-0 flex items-end p-4 opacity-0 transition-opacity group-hover:opacity-100">
                <button className="w-full rounded-full bg-white px-4 py-2 text-sm font-medium text-zinc-900 shadow-sm hover:bg-white/90">
                  View Pedals
                </button>
              </div>
            </div>

            {/* More artist cards would go here */}
          </div>
        )}

        {category === "songs" && (
          <div className="space-y-4">
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
                  <div className="text-sm text-zinc-500">John Mayer - Continuum (2006)</div>
                </div>
              </div>
              <Link href="/songs/gravity" className="rounded-full bg-zinc-100 p-2 hover:bg-zinc-200">
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
                  className="h-4 w-4"
                >
                  <path d="m9 18 6-6-6-6"></path>
                </svg>
                <span className="sr-only">View Song</span>
              </Link>
            </div>

            <div className="flex items-center justify-between rounded-lg border border-zinc-200 bg-white p-4 hover:bg-zinc-50">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 overflow-hidden rounded">
                  <Image
                    src="https://images.unsplash.com/photo-1611955493983-356db1577115?q=80&w=1470&auto=format&fit=crop"
                    alt="Smells Like Teen Spirit"
                    width={48}
                    height={48}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-medium">Smells Like Teen Spirit</div>
                  <div className="text-sm text-zinc-500">Nirvana - Nevermind (1991)</div>
                </div>
              </div>
              <Link href="/songs/smells-like-teen-spirit" className="rounded-full bg-zinc-100 p-2 hover:bg-zinc-200">
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
                  className="h-4 w-4"
                >
                  <path d="m9 18 6-6-6-6"></path>
                </svg>
                <span className="sr-only">View Song</span>
              </Link>
            </div>

            <div className="flex items-center justify-between rounded-lg border border-zinc-200 bg-white p-4 hover:bg-zinc-50">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 overflow-hidden rounded">
                  <Image
                    src="https://images.unsplash.com/photo-1635242948313-7b640949b825?q=80&w=1470&auto=format&fit=crop"
                    alt="Californication"
                    width={48}
                    height={48}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-medium">Californication</div>
                  <div className="text-sm text-zinc-500">Red Hot Chili Peppers - Californication (1999)</div>
                </div>
              </div>
              <Link href="/songs/californication" className="rounded-full bg-zinc-100 p-2 hover:bg-zinc-200">
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
                  className="h-4 w-4"
                >
                  <path d="m9 18 6-6-6-6"></path>
                </svg>
                <span className="sr-only">View Song</span>
              </Link>
            </div>

            {/* More song items would go here */}
          </div>
        )}

        {category === "all" && (
          <div className="space-y-12">
            <div>
              <h2 className="text-2xl font-bold tracking-tight mb-6">Popular Instruments</h2>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                <div className="group relative overflow-hidden rounded-lg border border-zinc-200 bg-white shadow-sm transition-all hover:shadow-md">
                  <div className="aspect-video overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1550123217-aad9257b5509?q=80&w=1470&auto=format&fit=crop"
                      alt="Guitar Pedals"
                      width={400}
                      height={225}
                      className="h-full w-full object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold">Guitar Pedals</h3>
                    <p className="text-sm text-zinc-500 mt-1">Effects pedals for electric guitar</p>
                  </div>
                  <Link href="/pedals?type=guitar" className="absolute inset-0 focus:outline-none">
                    <span className="sr-only">View Guitar Pedals</span>
                  </Link>
                </div>

                <div className="group relative overflow-hidden rounded-lg border border-zinc-200 bg-white shadow-sm transition-all hover:shadow-md">
                  <div className="aspect-video overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1445985543470-41fba5c3144a?q=80&w=1470&auto=format&fit=crop"
                      alt="Bass Pedals"
                      width={400}
                      height={225}
                      className="h-full w-full object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold">Bass Pedals</h3>
                    <p className="text-sm text-zinc-500 mt-1">Effects pedals for bass guitar</p>
                  </div>
                  <Link href="/pedals?type=bass" className="absolute inset-0 focus:outline-none">
                    <span className="sr-only">View Bass Pedals</span>
                  </Link>
                </div>

                <div className="group relative overflow-hidden rounded-lg border border-zinc-200 bg-white shadow-sm transition-all hover:shadow-md">
                  <div className="aspect-video overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?q=80&w=1470&auto=format&fit=crop"
                      alt="Synth Pedals"
                      width={400}
                      height={225}
                      className="h-full w-full object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold">Synth Pedals</h3>
                    <p className="text-sm text-zinc-500 mt-1">Effects pedals for synthesizers</p>
                  </div>
                  <Link href="/pedals?type=synth" className="absolute inset-0 focus:outline-none">
                    <span className="sr-only">View Synth Pedals</span>
                  </Link>
                </div>

                <div className="group relative overflow-hidden rounded-lg border border-zinc-200 bg-white shadow-sm transition-all hover:shadow-md">
                  <div className="aspect-video overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1543443258-92b04ad5ec4b?q=80&w=1470&auto=format&fit=crop"
                      alt="Vocal Pedals"
                      width={400}
                      height={225}
                      className="h-full w-full object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold">Vocal Pedals</h3>
                    <p className="text-sm text-zinc-500 mt-1">Effects pedals for vocals</p>
                  </div>
                  <Link href="/pedals?type=vocal" className="absolute inset-0 focus:outline-none">
                    <span className="sr-only">View Vocal Pedals</span>
                  </Link>
                </div>
              </div>
              <div className="mt-4 text-center">
                <Link
                  href="/explore?category=instruments"
                  className="inline-flex h-10 items-center justify-center rounded-md border border-zinc-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-zinc-100 hover:text-zinc-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950"
                >
                  View All Instruments
                </Link>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold tracking-tight mb-6">Popular Genres</h2>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                <div className="group relative overflow-hidden rounded-lg border border-zinc-200 bg-white shadow-sm transition-all hover:shadow-md">
                  <div className="aspect-video overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1470&auto=format&fit=crop"
                      alt="Blues"
                      width={400}
                      height={225}
                      className="h-full w-full object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold">Blues</h3>
                    <p className="text-sm text-zinc-500 mt-1">Pedals for blues guitar tones</p>
                  </div>
                  <Link href="/pedals?genre=blues" className="absolute inset-0 focus:outline-none">
                    <span className="sr-only">View Blues Pedals</span>
                  </Link>
                </div>

                <div className="group relative overflow-hidden rounded-lg border border-zinc-200 bg-white shadow-sm transition-all hover:shadow-md">
                  <div className="aspect-video overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?q=80&w=1470&auto=format&fit=crop"
                      alt="Rock"
                      width={400}
                      height={225}
                      className="h-full w-full object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold">Rock</h3>
                    <p className="text-sm text-zinc-500 mt-1">Pedals for rock guitar tones</p>
                  </div>
                  <Link href="/pedals?genre=rock" className="absolute inset-0 focus:outline-none">
                    <span className="sr-only">View Rock Pedals</span>
                  </Link>
                </div>

                <div className="group relative overflow-hidden rounded-lg border border-zinc-200 bg-white shadow-sm transition-all hover:shadow-md">
                  <div className="aspect-video overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1501612780327-45045538702b?q=80&w=1470&auto=format&fit=crop"
                      alt="Psychedelic"
                      width={400}
                      height={225}
                      className="h-full w-full object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold">Psychedelic</h3>
                    <p className="text-sm text-zinc-500 mt-1">Pedals for psychedelic sounds</p>
                  </div>
                  <Link href="/pedals?genre=psychedelic" className="absolute inset-0 focus:outline-none">
                    <span className="sr-only">View Psychedelic Pedals</span>
                  </Link>
                </div>

                <div className="group relative overflow-hidden rounded-lg border border-zinc-200 bg-white shadow-sm transition-all hover:shadow-md">
                  <div className="aspect-video overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=1470&auto=format&fit=crop"
                      alt="Jazz"
                      width={400}
                      height={225}
                      className="h-full w-full object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold">Jazz</h3>
                    <p className="text-sm text-zinc-500 mt-1">Pedals for jazz guitar tones</p>
                  </div>
                  <Link href="/pedals?genre=jazz" className="absolute inset-0 focus:outline-none">
                    <span className="sr-only">View Jazz Pedals</span>
                  </Link>
                </div>
              </div>
              <div className="mt-4 text-center">
                <Link
                  href="/explore?category=genres"
                  className="inline-flex h-10 items-center justify-center rounded-md border border-zinc-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-zinc-100 hover:text-zinc-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950"
                >
                  View All Genres
                </Link>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold tracking-tight mb-6">Trending Songs</h2>
              <div className="space-y-3">
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
                      <div className="text-sm text-zinc-500">John Mayer - Continuum (2006)</div>
                    </div>
                  </div>
                  <Link href="/songs/gravity" className="rounded-full bg-zinc-100 p-2 hover:bg-zinc-200">
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
                      className="h-4 w-4"
                    >
                      <path d="m9 18 6-6-6-6"></path>
                    </svg>
                    <span className="sr-only">View Song</span>
                  </Link>
                </div>

                <div className="flex items-center justify-between rounded-lg border border-zinc-200 bg-white p-4 hover:bg-zinc-50">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 overflow-hidden rounded">
                      <Image
                        src="https://images.unsplash.com/photo-1611955493983-356db1577115?q=80&w=1470&auto=format&fit=crop"
                        alt="Smells Like Teen Spirit"
                        width={48}
                        height={48}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-medium">Smells Like Teen Spirit</div>
                      <div className="text-sm text-zinc-500">Nirvana - Nevermind (1991)</div>
                    </div>
                  </div>
                  <Link
                    href="/songs/smells-like-teen-spirit"
                    className="rounded-full bg-zinc-100 p-2 hover:bg-zinc-200"
                  >
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
                      className="h-4 w-4"
                    >
                      <path d="m9 18 6-6-6-6"></path>
                    </svg>
                    <span className="sr-only">View Song</span>
                  </Link>
                </div>

                <div className="flex items-center justify-between rounded-lg border border-zinc-200 bg-white p-4 hover:bg-zinc-50">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 overflow-hidden rounded">
                      <Image
                        src="https://images.unsplash.com/photo-1635242948313-7b640949b825?q=80&w=1470&auto=format&fit=crop"
                        alt="Californication"
                        width={48}
                        height={48}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-medium">Californication</div>
                      <div className="text-sm text-zinc-500">Red Hot Chili Peppers - Californication (1999)</div>
                    </div>
                  </div>
                  <Link href="/songs/californication" className="rounded-full bg-zinc-100 p-2 hover:bg-zinc-200">
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
                      className="h-4 w-4"
                    >
                      <path d="m9 18 6-6-6-6"></path>
                    </svg>
                    <span className="sr-only">View Song</span>
                  </Link>
                </div>
              </div>
              <div className="mt-4 text-center">
                <Link
                  href="/explore?category=songs"
                  className="inline-flex h-10 items-center justify-center rounded-md border border-zinc-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-zinc-100 hover:text-zinc-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950"
                >
                  View All Songs
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

