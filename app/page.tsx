'use client'

import { Search, Music, Guitar, Drum } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedGenre, setSelectedGenre] = useState<string | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState('recommended')

  const genres = ['Classic Rock', 'Jazz', 'Country', 'Blues', 'Metal', 'Pop', 'Indie', 'Electronic']

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-50 to-white">
      <header className="sticky top-0 z-50 w-full border-b border-zinc-200 bg-white/80 backdrop-blur-sm flex justify-center">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold tracking-tight">🎸 PedalFinder</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link
              href="/pedals"
              className="text-sm font-medium transition-colors hover:text-zinc-900/70"
            >
              Pedals
            </Link>
            <Link
              href="/artists"
              className="text-sm font-medium transition-colors hover:text-zinc-900/70"
            >
              Artists
            </Link>
            <Link
              href="/genres"
              className="text-sm font-medium transition-colors hover:text-zinc-900/70"
            >
              Genres
            </Link>
            <Link
              href="/explore"
              className="text-sm font-medium transition-colors hover:text-zinc-900/70"
            >
              Explore
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium transition-colors hover:text-zinc-900/70"
            >
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

      {/* Hero Section with Integrated Search */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-zinc-100 via-zinc-50 to-zinc-100 flex justify-center">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center mb-10">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-zinc-800 to-zinc-500 mb-4">
              Find the Perfect Pedal for Your Sound
            </h1>
            <p className="max-w-[600px] mx-auto text-zinc-500 md:text-xl mb-8">
              Discover effects pedals based on your favorite artists, songs, or the sound you want
              to create.
            </p>

            {/* Main Search Box */}
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-zinc-500" />
              <input
                type="search"
                placeholder="Describe the sound you're looking for..."
                className="h-14 w-full rounded-full border border-zinc-200 bg-white pl-12 pr-4 text-base shadow-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-zinc-900 px-5 py-2 text-sm font-medium text-zinc-50 shadow transition-colors hover:bg-zinc-800">
                Search
              </button>
            </div>
          </div>

          {/* Filters and Results Section */}
          <div className="bg-white rounded-xl border border-zinc-200 shadow-md overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-zinc-200">
              {/* Genre Filter - Left Column */}
              <div className="p-6 bg-zinc-50">
                <h3 className="font-semibold mb-4 flex items-center">
                  <Music className="h-4 w-4 mr-2" />
                  Music Genres
                </h3>
                <div className="space-y-2">
                  {genres.map((genre) => (
                    <div key={genre} className="flex items-center">
                      <input
                        type="radio"
                        id={`genre-${genre}`}
                        name="genre"
                        className="h-4 w-4 text-zinc-900 focus:ring-zinc-500"
                        checked={selectedGenre === genre}
                        onChange={() => setSelectedGenre(genre)}
                      />
                      <label htmlFor={`genre-${genre}`} className="ml-2 text-sm text-zinc-700">
                        {genre}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Main Content Area */}
              <div className="col-span-3 p-6">
                {/* Instrument Categories */}
                <div className="mb-6">
                  <h3 className="font-semibold mb-4">Instrument Categories</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div
                      className={`flex items-center justify-center p-4 rounded-lg border cursor-pointer transition-colors ${
                        selectedCategory === 'Guitar Pedals'
                          ? 'border-zinc-900 bg-zinc-50'
                          : 'border-zinc-200 hover:border-zinc-300'
                      }`}
                      onClick={() => setSelectedCategory('Guitar Pedals')}
                    >
                      <Guitar className="h-5 w-5 mr-2 text-zinc-700" />
                      <span className="font-medium">Guitar Pedals</span>
                    </div>
                    <div
                      className={`flex items-center justify-center p-4 rounded-lg border cursor-pointer transition-colors ${
                        selectedCategory === 'Guitar'
                          ? 'border-zinc-900 bg-zinc-50'
                          : 'border-zinc-200 hover:border-zinc-300'
                      }`}
                      onClick={() => setSelectedCategory('Guitar')}
                    >
                      <Guitar className="h-5 w-5 mr-2 text-zinc-700" />
                      <span className="font-medium">Guitar</span>
                    </div>
                    <div
                      className={`flex items-center justify-center p-4 rounded-lg border cursor-pointer transition-colors ${
                        selectedCategory === 'Drums'
                          ? 'border-zinc-900 bg-zinc-50'
                          : 'border-zinc-200 hover:border-zinc-300'
                      }`}
                      onClick={() => setSelectedCategory('Drums')}
                    >
                      <Drum className="h-5 w-5 mr-2 text-zinc-700" />
                      <span className="font-medium">Drums</span>
                    </div>
                  </div>
                </div>

                {/* Pedalboard Display */}
                <div className="mb-6">
                  <div className="aspect-[16/9] overflow-hidden rounded-lg border border-zinc-200">
                    <Image
                      src="https://images.unsplash.com/photo-1558098329-a11cff621064?q=80&w=1470&auto=format&fit=crop"
                      alt="Pedalboard with various effects pedals"
                      width={1200}
                      height={600}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <p className="text-sm text-zinc-500 mt-2 text-center">
                    Browse our collection of effects pedals to find your perfect sound
                  </p>
                </div>

                {/* Results Explanation */}
                <div className="mb-6 p-4 bg-zinc-50 rounded-lg border border-zinc-200">
                  <p className="text-zinc-700">
                    Based on your search, we'll highlight effects from our store pedalboard or find
                    similar options. Select a pedal to see recommended settings and usage guides.
                  </p>
                </div>

                {/* Tabs for Pedal Details */}
                <div>
                  <div className="border-b border-zinc-200">
                    <nav className="flex -mb-px">
                      <button
                        className={`py-4 px-6 border-b-2 font-medium ${
                          activeTab === 'recommended'
                            ? 'border-zinc-900 text-zinc-900'
                            : 'border-transparent text-zinc-500 hover:text-zinc-700 hover:border-zinc-300'
                        }`}
                        onClick={() => setActiveTab('recommended')}
                      >
                        Recommended Settings
                      </button>
                      <button
                        className={`py-4 px-6 border-b-2 font-medium ${
                          activeTab === 'additional'
                            ? 'border-zinc-900 text-zinc-900'
                            : 'border-transparent text-zinc-500 hover:text-zinc-700 hover:border-zinc-300'
                        }`}
                        onClick={() => setActiveTab('additional')}
                      >
                        Additional Settings
                      </button>
                      <button
                        className={`py-4 px-6 border-b-2 font-medium ${
                          activeTab === 'reviews'
                            ? 'border-zinc-900 text-zinc-900'
                            : 'border-transparent text-zinc-500 hover:text-zinc-700 hover:border-zinc-300'
                        }`}
                        onClick={() => setActiveTab('reviews')}
                      >
                        Reviews
                      </button>
                      <button
                        className={`py-4 px-6 border-b-2 font-medium ${
                          activeTab === 'videos'
                            ? 'border-zinc-900 text-zinc-900'
                            : 'border-transparent text-zinc-500 hover:text-zinc-700 hover:border-zinc-300'
                        }`}
                        onClick={() => setActiveTab('videos')}
                      >
                        Videos
                      </button>
                    </nav>
                  </div>

                  {/* Tab Content */}
                  <div className="p-6 border border-zinc-200 border-t-0 rounded-b-lg">
                    {activeTab === 'recommended' && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="rounded-lg border border-zinc-200 p-4">
                          <h3 className="font-semibold mb-2">Blues Tone</h3>
                          <div className="grid grid-cols-3 gap-4">
                            <div className="text-center">
                              <div className="font-medium">Drive</div>
                              <div className="text-zinc-500">10 o'clock</div>
                            </div>
                            <div className="text-center">
                              <div className="font-medium">Tone</div>
                              <div className="text-zinc-500">2 o'clock</div>
                            </div>
                            <div className="text-center">
                              <div className="font-medium">Level</div>
                              <div className="text-zinc-500">12 o'clock</div>
                            </div>
                          </div>
                        </div>
                        <div className="rounded-lg border border-zinc-200 p-4">
                          <h3 className="font-semibold mb-2">Rock Tone</h3>
                          <div className="grid grid-cols-3 gap-4">
                            <div className="text-center">
                              <div className="font-medium">Drive</div>
                              <div className="text-zinc-500">2 o'clock</div>
                            </div>
                            <div className="text-center">
                              <div className="font-medium">Tone</div>
                              <div className="text-zinc-500">1 o'clock</div>
                            </div>
                            <div className="text-center">
                              <div className="font-medium">Level</div>
                              <div className="text-zinc-500">3 o'clock</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {activeTab === 'additional' && (
                      <div className="space-y-4">
                        <p className="text-zinc-700">
                          Additional settings and configurations for your pedal.
                        </p>
                        <div className="rounded-lg border border-zinc-200 p-4">
                          <h3 className="font-semibold mb-2">Advanced Configuration</h3>
                          <p className="text-zinc-600">
                            Adjust these settings for more specialized tones:
                          </p>
                          <ul className="list-disc pl-5 mt-2 text-zinc-600">
                            <li>Input Gain: Adjust based on your guitar's output</li>
                            <li>Noise Gate: Recommended for high-gain settings</li>
                            <li>EQ Shaping: Use to match your amplifier's characteristics</li>
                          </ul>
                        </div>
                      </div>
                    )}

                    {activeTab === 'reviews' && (
                      <div className="space-y-4">
                        <div className="flex items-center mb-4">
                          <div className="flex mr-2">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <svg
                                key={star}
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
                            ))}
                          </div>
                          <span className="text-zinc-700">4.8 out of 5 (124 reviews)</span>
                        </div>

                        <div className="space-y-4">
                          <div className="border-b border-zinc-200 pb-4">
                            <div className="flex justify-between mb-1">
                              <h4 className="font-medium">John D.</h4>
                              <div className="flex">
                                {[1, 2, 3, 4, 5].map((star) => (
                                  <svg
                                    key={star}
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="#FFC107"
                                    stroke="#FFC107"
                                    strokeWidth="1"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="h-4 w-4"
                                  >
                                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                  </svg>
                                ))}
                              </div>
                            </div>
                            <p className="text-zinc-600 text-sm">
                              This pedal completely transformed my tone. The versatility is amazing,
                              and it pairs perfectly with my tube amp.
                            </p>
                          </div>

                          <div className="border-b border-zinc-200 pb-4">
                            <div className="flex justify-between mb-1">
                              <h4 className="font-medium">Sarah M.</h4>
                              <div className="flex">
                                {[1, 2, 3, 4].map((star) => (
                                  <svg
                                    key={star}
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="#FFC107"
                                    stroke="#FFC107"
                                    strokeWidth="1"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="h-4 w-4"
                                  >
                                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                  </svg>
                                ))}
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="#FFC107"
                                  strokeWidth="1"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="h-4 w-4"
                                >
                                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                </svg>
                              </div>
                            </div>
                            <p className="text-zinc-600 text-sm">
                              Great pedal overall, but it took some time to dial in the perfect
                              settings for my style.
                            </p>
                          </div>
                        </div>
                      </div>
                    )}

                    {activeTab === 'videos' && (
                      <div className="space-y-4">
                        <p className="text-zinc-700 mb-4">
                          Watch demo videos to hear this pedal in action:
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="rounded-lg border border-zinc-200 overflow-hidden">
                            <div className="aspect-video bg-zinc-100 flex items-center justify-center">
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
                                className="h-12 w-12 text-zinc-400"
                              >
                                <polygon points="5 3 19 12 5 21 5 3"></polygon>
                              </svg>
                            </div>
                            <div className="p-3">
                              <h4 className="font-medium">Blues Tone Demo</h4>
                              <p className="text-zinc-500 text-sm">3:45 • 45K views</p>
                            </div>
                          </div>

                          <div className="rounded-lg border border-zinc-200 overflow-hidden">
                            <div className="aspect-video bg-zinc-100 flex items-center justify-center">
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
                                className="h-12 w-12 text-zinc-400"
                              >
                                <polygon points="5 3 19 12 5 21 5 3"></polygon>
                              </svg>
                            </div>
                            <div className="p-3">
                              <h4 className="font-medium">Rock Settings Tutorial</h4>
                              <p className="text-zinc-500 text-sm">5:12 • 32K views</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Categories Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-zinc-50 flex justify-center">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Popular Pedal Categories
              </h2>
              <p className="max-w-[900px] text-zinc-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Explore our collection of effects pedals by category to find the perfect sound for
                your music.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center space-y-2 rounded-lg border border-zinc-200 bg-white p-6 shadow-sm">
              <div className="rounded-full bg-zinc-100 p-3">
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
                  <path d="m18 16 4-4-4-4"></path>
                  <path d="m6 8-4 4 4 4"></path>
                  <path d="m14.5 4-5 16"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold">Distortion</h3>
              <p className="text-center text-sm text-zinc-500">
                Add grit and character to your sound with our distortion pedals.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 rounded-lg border border-zinc-200 bg-white p-6 shadow-sm">
              <div className="rounded-full bg-zinc-100 p-3">
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
                  <path d="M2 9a7 7 0 1 0 14 0A7 7 0 1 0 2 9"></path>
                  <path d="M16 9h6"></path>
                  <path d="M21 6v6"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold">Delay</h3>
              <p className="text-center text-sm text-zinc-500">
                Create space and depth with our collection of delay pedals.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 rounded-lg border border-zinc-200 bg-white p-6 shadow-sm">
              <div className="rounded-full bg-zinc-100 p-3">
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
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                  <path d="m2 12 20 0"></path>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold">Reverb</h3>
              <p className="text-center text-sm text-zinc-500">
                Add ambience and atmosphere with our reverb pedals.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 rounded-lg border border-zinc-200 bg-white p-6 shadow-sm">
              <div className="rounded-full bg-zinc-100 p-3">
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
                  <path d="M2 12a5 5 0 0 0 5 5 8 8 0 0 1 5 2 8 8 0 0 1 5-2 5 5 0 0 0 5-5c0-8-7-5-10-2-3-3-10-6-10 2Z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold">Modulation</h3>
              <p className="text-center text-sm text-zinc-500">
                Add movement and texture with our modulation pedals.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 rounded-lg border border-zinc-200 bg-white p-6 shadow-sm">
              <div className="rounded-full bg-zinc-100 p-3">
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
                  <path d="M12 3v14"></path>
                  <path d="M15.5 5.5 12 3 8.5 5.5"></path>
                  <path d="M16.5 10.5 12 7 7.5 10.5"></path>
                  <path d="M17.5 15.5 12 12l-5.5 3.5"></path>
                  <path d="M3 18h18v3H3v-3z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold">Compression</h3>
              <p className="text-center text-sm text-zinc-500">
                Control dynamics and add sustain with our compression pedals.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 rounded-lg border border-zinc-200 bg-white p-6 shadow-sm">
              <div className="rounded-full bg-zinc-100 p-3">
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
                  <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
                  <path d="M12 12 8 8"></path>
                  <path d="M12 16v-4"></path>
                  <path d="M16 12h-4"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold">Multi-Effects</h3>
              <p className="text-center text-sm text-zinc-500">
                Get multiple effects in one with our multi-effects pedals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Artists Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 flex justify-center">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8 mb-8">
            <div>
              <h2 className="text-2xl font-bold tracking-tight">Popular Artists</h2>
              <p className="text-zinc-500 mt-2">Discover pedals used by your favorite musicians</p>
            </div>
            <Link
              href="/artists"
              className="inline-flex h-10 items-center justify-center rounded-md border border-zinc-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-zinc-100 hover:text-zinc-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950"
            >
              View All Artists
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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
            <div className="group relative overflow-hidden rounded-lg border border-zinc-200 bg-white shadow-sm transition-all hover:shadow-md">
              <div className="aspect-square overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=1470&auto=format&fit=crop"
                  alt="St. Vincent"
                  width={400}
                  height={400}
                  className="h-full w-full object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold">St. Vincent</h3>
                <p className="text-sm text-zinc-500">Art Rock</p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
              <div className="absolute inset-0 flex items-end p-4 opacity-0 transition-opacity group-hover:opacity-100">
                <button className="w-full rounded-full bg-white px-4 py-2 text-sm font-medium text-zinc-900 shadow-sm hover:bg-white/90">
                  View Pedals
                </button>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg border border-zinc-200 bg-white shadow-sm transition-all hover:shadow-md">
              <div className="aspect-square overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1501612780327-45045538702b?q=80&w=1470&auto=format&fit=crop"
                  alt="Kevin Parker"
                  width={400}
                  height={400}
                  className="h-full w-full object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold">Kevin Parker</h3>
                <p className="text-sm text-zinc-500">Psychedelic</p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
              <div className="absolute inset-0 flex items-end p-4 opacity-0 transition-opacity group-hover:opacity-100">
                <button className="w-full rounded-full bg-white px-4 py-2 text-sm font-medium text-zinc-900 shadow-sm hover:bg-white/90">
                  View Pedals
                </button>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg border border-zinc-200 bg-white shadow-sm transition-all hover:shadow-md">
              <div className="aspect-square overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=1631&auto=format&fit=crop"
                  alt="David Gilmour"
                  width={400}
                  height={400}
                  className="h-full w-full object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold">David Gilmour</h3>
                <p className="text-sm text-zinc-500">Progressive Rock</p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
              <div className="absolute inset-0 flex items-end p-4 opacity-0 transition-opacity group-hover:opacity-100">
                <button className="w-full rounded-full bg-white px-4 py-2 text-sm font-medium text-zinc-900 shadow-sm hover:bg-white/90">
                  View Pedals
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="w-full border-t bg-white py-6 md:py-12 flex justify-center">
        <div className="container flex flex-col items-center justify-center gap-4 px-4 text-center md:px-6 md:gap-10">
          <div className="flex items-center justify-between w-full container">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold tracking-tight text-left">🎸 PedalFinder</h2>
              <p className="text-zinc-500">Find the perfect pedal for your sound.</p>
            </div>
            <div>
              <div className="flex gap-4">
                <Link href="#" className="text-sm font-medium text-zinc-500 hover:text-zinc-900">
                  Terms
                </Link>
                <Link href="#" className="text-sm font-medium text-zinc-500 hover:text-zinc-900">
                  Privacy
                </Link>
                <Link href="#" className="text-sm font-medium text-zinc-500 hover:text-zinc-900">
                  Contact
                </Link>
              </div>
              <div className="text-sm text-zinc-500 mt-2">© 2023 PedalFinder. All rights reserved.</div>
            </div>
          </div>
        </div>
      </footer>

      {/* AI Chat Assistant */}
      <div className="fixed bottom-6 right-6 z-50">
        <div className="relative group">
          <button
            className="flex h-14 w-14 items-center justify-center rounded-full bg-zinc-900 text-white shadow-lg hover:bg-zinc-800 transition-all"
            onClick={() => document.getElementById('chat-modal')?.classList.toggle('hidden')}
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
              className="h-6 w-6"
            >
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            </svg>
          </button>
          <span className="absolute -top-10 right-0 w-auto p-2 bg-zinc-800 text-white text-xs rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Ask about pedals
          </span>
        </div>

        <div
          id="chat-modal"
          className="hidden fixed bottom-20 right-6 w-80 md:w-96 bg-white rounded-lg shadow-xl border border-zinc-200 overflow-hidden"
        >
          <div className="flex items-center justify-between p-4 border-b border-zinc-200 bg-zinc-50">
            <h3 className="font-medium">PedalFinder AI Assistant</h3>
            <button
              className="text-zinc-500 hover:text-zinc-700"
              onClick={() => document.getElementById('chat-modal')?.classList.add('hidden')}
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
                className="h-5 w-5"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
              <span className="sr-only">Close</span>
            </button>
          </div>
          <div className="h-80 overflow-y-auto p-4 bg-zinc-50">
            <div className="flex flex-col gap-4">
              <div className="flex gap-3">
                <div className="flex-shrink-0 h-8 w-8 rounded-full bg-zinc-200 flex items-center justify-center">
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
                    className="h-4 w-4 text-zinc-600"
                  >
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                  </svg>
                </div>
                <div className="bg-white p-3 rounded-lg shadow-sm max-w-[80%]">
                  <p className="text-sm">
                    Hi there! I'm your PedalFinder AI assistant. How can I help you find the perfect
                    pedal for your sound today?
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="p-4 border-t border-zinc-200">
            <div className="relative">
              <input
                type="text"
                placeholder="Ask about pedals, artists, or tones..."
                className="w-full rounded-full border border-zinc-300 py-2 pl-4 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-500"
              />
              <button className="absolute right-1 top-1/2 -translate-y-1/2 rounded-full bg-zinc-800 p-1.5 text-white hover:bg-zinc-700">
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
                  <path d="m22 2-7 20-4-9-9-4Z"></path>
                  <path d="M22 2 11 13"></path>
                </svg>
                <span className="sr-only">Send</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
