import { ArrowLeft, Heart, Share2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function PedalDetail() {
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
          href="/pedals"
          className="inline-flex items-center text-sm font-medium text-zinc-500 hover:text-zinc-900 mb-6"
        >
          <ArrowLeft className="mr-1 h-4 w-4" />
          Back to Pedals
        </Link>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-6">
            <div className="overflow-hidden rounded-xl border border-zinc-200 bg-white">
              <div className="relative aspect-square">
                <Image
                  src="https://images.unsplash.com/photo-1550123217-aad9257b5509?q=80&w=1470&auto=format&fit=crop"
                  alt="Boss DS-1 Distortion Pedal"
                  width={600}
                  height={600}
                  className="h-full w-full object-contain p-6"
                />
              </div>
              <div className="flex justify-between p-4 border-t border-zinc-200">
                <button className="inline-flex items-center text-sm font-medium text-zinc-500 hover:text-zinc-900">
                  <Heart className="mr-1 h-4 w-4" />
                  Add to Favorites
                </button>
                <button className="inline-flex items-center text-sm font-medium text-zinc-500 hover:text-zinc-900">
                  <Share2 className="mr-1 h-4 w-4" />
                  Share
                </button>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-2">
              <button className="overflow-hidden rounded-lg border border-zinc-200 bg-white p-1 hover:border-zinc-300">
                <div className="aspect-square">
                  <Image
                    src="https://images.unsplash.com/photo-1550123217-aad9257b5509?q=80&w=1470&auto=format&fit=crop"
                    alt="Pedal thumbnail 1"
                    width={100}
                    height={100}
                    className="h-full w-full object-contain"
                  />
                </div>
              </button>
              <button className="overflow-hidden rounded-lg border border-zinc-200 bg-white p-1 hover:border-zinc-300">
                <div className="aspect-square">
                  <Image
                    src="https://images.unsplash.com/photo-1558098329-a11cff621064?q=80&w=1470&auto=format&fit=crop"
                    alt="Pedal thumbnail 2"
                    width={100}
                    height={100}
                    className="h-full w-full object-contain"
                  />
                </div>
              </button>
              <button className="overflow-hidden rounded-lg border border-zinc-200 bg-white p-1 hover:border-zinc-300">
                <div className="aspect-square">
                  <Image
                    src="https://images.unsplash.com/photo-1516924962500-2b4b3b99ea02?q=80&w=1470&auto=format&fit=crop"
                    alt="Pedal thumbnail 3"
                    width={100}
                    height={100}
                    className="h-full w-full object-contain"
                  />
                </div>
              </button>
              <button className="overflow-hidden rounded-lg border border-zinc-200 bg-white p-1 hover:border-zinc-300">
                <div className="aspect-square">
                  <Image
                    src="https://images.unsplash.com/photo-1612225330812-01a9c6b355ec?q=80&w=1470&auto=format&fit=crop"
                    alt="Pedal thumbnail 4"
                    width={100}
                    height={100}
                    className="h-full w-full object-contain"
                  />
                </div>
              </button>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Boss DS-1 Distortion Pedal</h1>
              <p className="mt-2 text-lg text-zinc-500">The industry standard distortion pedal for over 40 years</p>
              <div className="mt-4 flex items-center">
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="#FFC107"
                    stroke="#FFC107"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="#FFC107"
                    stroke="#FFC107"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="#FFC107"
                    stroke="#FFC107"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="#FFC107"
                    stroke="#FFC107"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="#FFC107"
                    stroke="#FFC107"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                </div>
                <span className="ml-2 text-sm text-zinc-500">(4.9) 1,248 reviews</span>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Description</h2>
              <p className="text-zinc-600">
                The Boss DS-1 Distortion is a classic distortion pedal that has been defining the sound of rock for over
                40 years. From subtle overdrive to full-on distortion, this pedal delivers rich, responsive distortion
                while maintaining the character of your guitar and amp.
              </p>
              <p className="text-zinc-600">
                With its simple three-knob interface (Tone, Level, and Dist), you can easily dial in the perfect amount
                of distortion for your sound. The DS-1 is built to last with Boss's legendary build quality and
                reliability.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Featured Artists</h2>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                <div className="flex items-center gap-2">
                  <div className="h-10 w-10 overflow-hidden rounded-full">
                    <Image
                      src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=1470&auto=format&fit=crop"
                      alt="Kurt Cobain"
                      width={40}
                      height={40}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <span className="text-sm font-medium">Kurt Cobain</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-10 w-10 overflow-hidden rounded-full">
                    <Image
                      src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1470&auto=format&fit=crop"
                      alt="Steve Vai"
                      width={40}
                      height={40}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <span className="text-sm font-medium">Steve Vai</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-10 w-10 overflow-hidden rounded-full">
                    <Image
                      src="https://images.unsplash.com/photo-1501612780327-45045538702b?q=80&w=1470&auto=format&fit=crop"
                      alt="John Frusciante"
                      width={40}
                      height={40}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <span className="text-sm font-medium">John Frusciante</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Recommended Settings</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-lg border border-zinc-200 bg-white p-4">
                  <h3 className="font-medium">Classic Rock</h3>
                  <div className="mt-2 grid grid-cols-3 gap-2 text-sm">
                    <div className="text-center">
                      <div className="font-medium">Tone</div>
                      <div className="text-zinc-500">12 o'clock</div>
                    </div>
                    <div className="text-center">
                      <div className="font-medium">Level</div>
                      <div className="text-zinc-500">2 o'clock</div>
                    </div>
                    <div className="text-center">
                      <div className="font-medium">Dist</div>
                      <div className="text-zinc-500">10 o'clock</div>
                    </div>
                  </div>
                </div>
                <div className="rounded-lg border border-zinc-200 bg-white p-4">
                  <h3 className="font-medium">Heavy Metal</h3>
                  <div className="mt-2 grid grid-cols-3 gap-2 text-sm">
                    <div className="text-center">
                      <div className="font-medium">Tone</div>
                      <div className="text-zinc-500">3 o'clock</div>
                    </div>
                    <div className="text-center">
                      <div className="font-medium">Level</div>
                      <div className="text-zinc-500">1 o'clock</div>
                    </div>
                    <div className="text-center">
                      <div className="font-medium">Dist</div>
                      <div className="text-zinc-500">3 o'clock</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Songs You Can Play</h2>
              <div className="space-y-2">
                <div className="flex items-center justify-between rounded-lg border border-zinc-200 bg-white p-3 hover:bg-zinc-50">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 overflow-hidden rounded">
                      <Image
                        src="https://images.unsplash.com/photo-1611955493983-356db1577115?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Nirvana - Smells Like Teen Spirit"
                        width={40}
                        height={40}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-medium">Smells Like Teen Spirit</div>
                      <div className="text-sm text-zinc-500">Nirvana</div>
                    </div>
                  </div>
                  <button className="rounded-full bg-zinc-100 p-2 hover:bg-zinc-200">
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
                      <polygon points="5 3 19 12 5 21 5 3"></polygon>
                    </svg>
                    <span className="sr-only">Play</span>
                  </button>
                </div>
                <div className="flex items-center justify-between rounded-lg border border-zinc-200 bg-white p-3 hover:bg-zinc-50">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 overflow-hidden rounded">
                      <Image
                        src="https://images.unsplash.com/photo-1635242948313-7b640949b825?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Red Hot Chili Peppers - Californication"
                        width={40}
                        height={40}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-medium">Californication</div>
                      <div className="text-sm text-zinc-500">Red Hot Chili Peppers</div>
                    </div>
                  </div>
                  <button className="rounded-full bg-zinc-100 p-2 hover:bg-zinc-200">
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
                      <polygon points="5 3 19 12 5 21 5 3"></polygon>
                    </svg>
                    <span className="sr-only">Play</span>
                  </button>
                </div>
                <div className="flex items-center justify-between rounded-lg border border-zinc-200 bg-white p-3 hover:bg-zinc-50">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 overflow-hidden rounded">
                      <Image
                        src="https://images.unsplash.com/photo-1576897390373-97103c9c4e9c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Foo Fighters - Everlong"
                        width={40}
                        height={40}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-medium">Everlong</div>
                      <div className="text-sm text-zinc-500">Foo Fighters</div>
                    </div>
                  </div>
                  <button className="rounded-full bg-zinc-100 p-2 hover:bg-zinc-200">
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
                      <polygon points="5 3 19 12 5 21 5 3"></polygon>
                    </svg>
                    <span className="sr-only">Play</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

