import React from "react";
import Image from "next/image";

export default function DetailPage() {
  return (
    <div>
      <header class="sticky top-0 z-50 bg-[#141414] border-b border-[#262626]">
        <div class="flex items-center justify-between px-4 py-2 md:px-6">
          {/* <!-- Logo --> */}
          <div class="flex items-center gap-4">
            <button
              class="p-2 hover:bg-white/10 rounded-full transition-colors md:hidden"
              aria-label="Open menu"
              type="button"
            >
              <svg
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
            <a href="index.html" class="flex items-center gap-2">
              <Image src="./assets/Logo.svg" alt="CoderFlix" class="w-8 h-8" />
              <span class="text-xl font-medium hidden sm:inline">
                CoderFlix
              </span>
            </a>
          </div>

          {/* <!-- Search Bar --> */}
          <div class="flex-1 max-w-2xl mx-4 hidden md:flex">
            <div class="flex w-full">
              <div class="relative flex-1">
                <input
                  type="text"
                  placeholder="Search"
                  class="w-full px-4 py-2 border border-[#303030] bg-[#1f1f1f] text-[#e5e5e5] placeholder:text-gray-500 rounded-l-full focus:border-[#e50914] focus:ring-2 focus:ring-[#e50914]/40 focus:outline-none"
                />
              </div>
              <button
                class="px-6 py-2 bg-[#1f1f1f] border border-l-0 border-[#303030] rounded-r-full hover:bg-[#262626] transition-colors"
                type="button"
                aria-label="Search"
              >
                <svg
                  class="w-5 h-5 text-gray-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </button>
            </div>
            <button
              class="ml-2 p-2 hover:bg-white/10 rounded-full transition-colors"
              type="button"
              aria-label="Voice search"
            >
              <svg
                class="w-6 h-6 text-gray-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 11a7 7 0 01-7 7m0 0a7 7 0 0 1-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 0 1-3-3V5a3 3 0 1 1 6 0v6a3 3 0 0 1-3 3z"
                ></path>
              </svg>
            </button>
          </div>

          {/* <!-- Search Icon (Mobile) --> */}
          <button
            class="p-2 hover:bg-white/10 rounded-full transition-colors md:hidden"
            type="button"
            aria-label="Search"
          >
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </button>

          {/* <!-- Right Section --> */}
          <div class="flex items-center gap-2">
            <button
              class="p-2 hover:bg-white/10 rounded-full transition-colors hidden sm:block"
              type="button"
              aria-label="Create"
            >
              <svg
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 10l4.553-2.276A1 1 0 0 1 21 8.618v6.764a1 1 0 0 1-1.447.894L15 14M5 18h8a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2z"
                ></path>
              </svg>
            </button>
            <button
              class="p-2 hover:bg-white/10 rounded-full transition-colors hidden sm:block"
              type="button"
              aria-label="Notifications"
            >
              <svg
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0 1 18 14.158V11a6.002 6.002 0 0 0-4-5.659V5a2 2 0 1 0-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 1 1-6 0v-1m6 0H9"
                ></path>
              </svg>
            </button>
            <button
              class="w-8 h-8 rounded-full bg-gradient-to-br from-red-600 to-red-900 text-white font-medium flex items-center justify-center hover:opacity-90 transition-opacity"
              type="button"
              aria-label="User"
            >
              <span class="text-sm">JD</span>
            </button>
          </div>
        </div>
      </header>

      <main class="px-4 py-6 md:px-6 lg:px-8">
        <div class="max-w-7xl mx-auto">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
            {/* <!-- Primary --> */}
            <section class="lg:col-span-8">
              {/* <!-- Video --> */}
              <div class="relative aspect-video rounded-xl overflow-hidden bg-black ring-1 ring-white/10">
                <iframe
                  id="videoPlayer"
                  class="w-full h-full"
                  title="Video player"
                  src="https://www.youtube.com/embed/hMTdA8TAL1s?rel=0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen=""
                ></iframe>
              </div>

              {/* <!-- Info --> */}
              <div class="mt-4">
                <h1
                  id="videoTitle"
                  class="text-lg sm:text-xl font-medium leading-snug"
                >
                  OpenAI and Google Shocked by the First EVER Open Source AI
                  Agent
                </h1>

                <div class="mt-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <div id="videoMeta" class="text-sm text-gray-400">
                    <span id="viewCount">101K views</span>
                    <span class="mx-1">•</span>
                    <span id="publishTime">3 months ago</span>
                  </div>

                  <div class="flex items-center gap-2">
                    <div class="inline-flex items-center rounded-full border border-[#303030] overflow-hidden bg-[#1f1f1f]">
                      <button
                        class="px-4 py-2 flex items-center gap-2 hover:bg-[#262626] transition-colors"
                        type="button"
                        aria-label="Like"
                      >
                        <svg
                          class="w-5 h-5 text-gray-200"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9A2 2 0 0 0 19.68 9H14z"
                          ></path>
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"
                          ></path>
                        </svg>
                        <span
                          id="likeCount"
                          class="text-sm font-medium text-[#e5e5e5]"
                        >
                          6.8K
                        </span>
                      </button>
                      <div class="w-px h-8 bg-[#303030]"></div>
                      <button
                        class="px-4 py-2 flex items-center gap-2 hover:bg-[#262626] transition-colors"
                        type="button"
                        aria-label="Dislike"
                      >
                        <svg
                          class="w-5 h-5 text-gray-200"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7L2.34 12a2 2 0 0 0 1.98 3H10z"
                          ></path>
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M17 2h3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-3"
                          ></path>
                        </svg>
                        <span
                          id="dislikeCount"
                          class="text-sm font-medium text-[#e5e5e5]"
                        >
                          110
                        </span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* <!-- Channel row --> */}
                <div class="mt-4 flex items-center justify-between gap-3">
                  <div class="flex items-center gap-3 min-w-0">
                    <Image
                      id="channelAvatar"
                      src="https://yt3.ggpht.com/XRZC_XqZoSUtB_Zo9R0w2vDRqGqVv0lKZTRYI6b-7DPKi32MtByVhxgIokLAguhf7fw__K8o3g"
                      alt="GreatStack avatar"
                      class="w-10 h-10 rounded-full object-cover bg-[#262626] ring-1 ring-white/10 flex-shrink-0"
                      loading="lazy"
                    />
                    <div class="min-w-0">
                      <p
                        id="channelTitle"
                        class="font-medium leading-tight truncate"
                      >
                        GreatStack
                      </p>
                      <p class="text-xs text-gray-400">Publisher</p>
                    </div>
                  </div>
                </div>

                {/* <!-- Description --> */}
                <div class="mt-4">
                  <div class="bg-[#1f1f1f] border border-[#262626] rounded-xl p-4">
                    <p
                      id="videoDescription"
                      class="text-sm text-gray-200 whitespace-pre-line line-clamp-3"
                    >
                      Categories: AI • Open Source • Agents • Technology
                    </p>
                    <button
                      id="toggleDescription"
                      class="mt-3 text-sm font-medium text-gray-300 hover:text-white"
                      type="button"
                    >
                      Show more
                    </button>
                  </div>
                </div>
              </div>
            </section>

            {/* <!-- Similar Videos --> */}
            <aside class="lg:col-span-4">
              <h2 class="text-base font-medium mb-4">Similar videos</h2>
              <div id="similarVideos" class="space-y-3" aria-live="polite">
                <a
                  href="details.html?v=5JgsZCtIH_Q"
                  class="group flex gap-3 rounded-xl hover:bg-white/5 transition-colors p-2 -m-2"
                >
                  <div class="relative w-40 sm:w-44 aspect-video flex-shrink-0 rounded-xl overflow-hidden bg-[#262626] ring-1 ring-white/5">
                    <Image
                      src="https://i.ytImage.com/vi/5JgsZCtIH_Q/hq720.jpg"
                      alt="How to Build an ENTIRE iPhone/Android App From Scratch (AI + No code) | Rork AI"
                      loading="lazy"
                      class="w-full h-full object-cover group-hover:opacity-90 transition-opacity"
                    />
                    <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0"></div>
                    <div class="absolute bottom-2 right-2 bg-black bg-opacity-80 text-white text-xs font-medium px-1.5 py-0.5 rounded">
                      12:26
                    </div>
                  </div>
                  <div class="flex-1 min-w-0">
                    <p class="font-medium text-sm leading-tight line-clamp-2 group-hover:text-[#e50914] transition-colors">
                      How to Build an ENTIRE iPhone/Android App From Scratch (AI
                      + No code) | Rork AI
                    </p>
                    <p class="text-xs text-gray-400 mt-1 truncate">
                      Ed Hill | AI Automation
                    </p>
                    <div class="flex items-center gap-1 text-xs text-gray-400 mt-0.5">
                      <span>40K views</span>
                      <span>•</span>
                      <span>5 months ago</span>
                    </div>
                  </div>
                </a>
                <a
                  href="details.html?v=cNlJCQHSmbE"
                  class="group flex gap-3 rounded-xl hover:bg-white/5 transition-colors p-2 -m-2"
                >
                  <div class="relative w-40 sm:w-44 aspect-video flex-shrink-0 rounded-xl overflow-hidden bg-[#262626] ring-1 ring-white/5">
                    <Image
                      src="https://i.ytImage.com/vi/cNlJCQHSmbE/hq720.jpg"
                      alt="FastAPI, Flask or Django - Which Should You Use?"
                      loading="lazy"
                      class="w-full h-full object-cover group-hover:opacity-90 transition-opacity"
                    />
                    <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0"></div>
                    <div class="absolute bottom-2 right-2 bg-black bg-opacity-80 text-white text-xs font-medium px-1.5 py-0.5 rounded">
                      9:49
                    </div>
                  </div>
                  <div class="flex-1 min-w-0">
                    <p class="font-medium text-sm leading-tight line-clamp-2 group-hover:text-[#e50914] transition-colors">
                      FastAPI, Flask or Django - Which Should You Use?
                    </p>
                    <p class="text-xs text-gray-400 mt-1 truncate">
                      Astro K Joseph
                    </p>
                    <div class="flex items-center gap-1 text-xs text-gray-400 mt-0.5">
                      <span>127K views</span>
                      <span>•</span>
                      <span>3 months ago</span>
                    </div>
                  </div>
                </a>
                <a
                  href="details.html?v=gIoB6OaSMxc"
                  class="group flex gap-3 rounded-xl hover:bg-white/5 transition-colors p-2 -m-2"
                >
                  <div class="relative w-40 sm:w-44 aspect-video flex-shrink-0 rounded-xl overflow-hidden bg-[#262626] ring-1 ring-white/5">
                    <Image
                      src="https://i.ytImage.com/vi/gIoB6OaSMxc/hq720.jpg"
                      alt="This Artist Tried Everything To Hide Their AI Tracing..."
                      loading="lazy"
                      class="w-full h-full object-cover group-hover:opacity-90 transition-opacity"
                    />
                    <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0"></div>
                    <div class="absolute bottom-2 right-2 bg-black bg-opacity-80 text-white text-xs font-medium px-1.5 py-0.5 rounded">
                      10:57
                    </div>
                  </div>
                  <div class="flex-1 min-w-0">
                    <p class="font-medium text-sm leading-tight line-clamp-2 group-hover:text-[#e50914] transition-colors">
                      This Artist Tried Everything To Hide Their AI Tracing...
                    </p>
                    <p class="text-xs text-gray-400 mt-1 truncate">
                      Tech With Tim
                    </p>
                    <div class="flex items-center gap-1 text-xs text-gray-400 mt-0.5">
                      <span>292K views</span>
                      <span>•</span>
                      <span>1 year ago</span>
                    </div>
                  </div>
                </a>
                <a
                  href="details.html?v=aYu4xkBdkNA"
                  class="group flex gap-3 rounded-xl hover:bg-white/5 transition-colors p-2 -m-2"
                >
                  <div class="relative w-40 sm:w-44 aspect-video flex-shrink-0 rounded-xl overflow-hidden bg-[#262626] ring-1 ring-white/5">
                    <Image
                      src="https://i.ytImage.com/vi/aYu4xkBdkNA/hq720.jpg"
                      alt="Build and Deploy Full Stack AI Multi-Vendor E-Commerce App using Next js | PERN Stack Project 2025"
                      loading="lazy"
                      class="w-full h-full object-cover group-hover:opacity-90 transition-opacity"
                    />
                    <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0"></div>
                    <div class="absolute bottom-2 right-2 bg-black bg-opacity-80 text-white text-xs font-medium px-1.5 py-0.5 rounded">
                      8:50:40
                    </div>
                  </div>
                  <div class="flex-1 min-w-0">
                    <p class="font-medium text-sm leading-tight line-clamp-2 group-hover:text-[#e50914] transition-colors">
                      Build and Deploy Full Stack AI Multi-Vendor E-Commerce App
                      using Next js | PERN Stack Project 2025
                    </p>
                    <p class="text-xs text-gray-400 mt-1 truncate">
                      kat 'n chat
                    </p>
                    <div class="flex items-center gap-1 text-xs text-gray-400 mt-0.5">
                      <span>400K views</span>
                      <span>•</span>
                      <span>4 months ago</span>
                    </div>
                  </div>
                </a>
                <a
                  href="details.html?v=b5l5UodFzMo"
                  class="group flex gap-3 rounded-xl hover:bg-white/5 transition-colors p-2 -m-2"
                >
                  <div class="relative w-40 sm:w-44 aspect-video flex-shrink-0 rounded-xl overflow-hidden bg-[#262626] ring-1 ring-white/5">
                    <Image
                      src="https://i.ytImage.com/vi/b5l5UodFzMo/hq720.jpg"
                      alt="Learn Java in 15 Minutes (seriously)"
                      loading="lazy"
                      class="w-full h-full object-cover group-hover:opacity-90 transition-opacity"
                    />
                    <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0"></div>
                    <div class="absolute bottom-2 right-2 bg-black bg-opacity-80 text-white text-xs font-medium px-1.5 py-0.5 rounded">
                      19:50
                    </div>
                  </div>
                  <div class="flex-1 min-w-0">
                    <p class="font-medium text-sm leading-tight line-clamp-2 group-hover:text-[#e50914] transition-colors">
                      Learn Java in 15 Minutes (seriously)
                    </p>
                    <p class="text-xs text-gray-400 mt-1 truncate">
                      AI Revolution
                    </p>
                    <div class="flex items-center gap-1 text-xs text-gray-400 mt-0.5">
                      <span>57K views</span>
                      <span>•</span>
                      <span>8 days ago</span>
                    </div>
                  </div>
                </a>
                <a
                  href="details.html?v=knYusnpB9zI"
                  class="group flex gap-3 rounded-xl hover:bg-white/5 transition-colors p-2 -m-2"
                >
                  <div class="relative w-40 sm:w-44 aspect-video flex-shrink-0 rounded-xl overflow-hidden bg-[#262626] ring-1 ring-white/5">
                    <Image
                      src="https://i.ytImage.com/vi/knYusnpB9zI/hq720.jpg"
                      alt="Photo Restoration: The Only AI That Actually Works!"
                      loading="lazy"
                      class="w-full h-full object-cover group-hover:opacity-90 transition-opacity"
                    />
                    <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0"></div>
                    <div class="absolute bottom-2 right-2 bg-black bg-opacity-80 text-white text-xs font-medium px-1.5 py-0.5 rounded">
                      10:41
                    </div>
                  </div>
                  <div class="flex-1 min-w-0">
                    <p class="font-medium text-sm leading-tight line-clamp-2 group-hover:text-[#e50914] transition-colors">
                      Photo Restoration: The Only AI That Actually Works!
                    </p>
                    <p class="text-xs text-gray-400 mt-1 truncate">
                      PiXimperfect
                    </p>
                    <div class="flex items-center gap-1 text-xs text-gray-400 mt-0.5">
                      <span>344K views</span>
                      <span>•</span>
                      <span>5 months ago</span>
                    </div>
                  </div>
                </a>
                <a
                  href="details.html?v=Y02HlIIAg4Q"
                  class="group flex gap-3 rounded-xl hover:bg-white/5 transition-colors p-2 -m-2"
                >
                  <div class="relative w-40 sm:w-44 aspect-video flex-shrink-0 rounded-xl overflow-hidden bg-[#262626] ring-1 ring-white/5">
                    <Image
                      src="https://i.ytImage.com/vi/Y02HlIIAg4Q/hq720.jpg"
                      alt="If I started UX in 2026, I’d do this"
                      loading="lazy"
                      class="w-full h-full object-cover group-hover:opacity-90 transition-opacity"
                    />
                    <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0"></div>
                    <div class="absolute bottom-2 right-2 bg-black bg-opacity-80 text-white text-xs font-medium px-1.5 py-0.5 rounded">
                      21:01
                    </div>
                  </div>
                  <div class="flex-1 min-w-0">
                    <p class="font-medium text-sm leading-tight line-clamp-2 group-hover:text-[#e50914] transition-colors">
                      If I started UX in 2026, I’d do this
                    </p>
                    <p class="text-xs text-gray-400 mt-1 truncate">
                      Aliena Cai
                    </p>
                    <div class="flex items-center gap-1 text-xs text-gray-400 mt-0.5">
                      <span>33K views</span>
                      <span>•</span>
                      <span>3 weeks ago</span>
                    </div>
                  </div>
                </a>
                <a
                  href="details.html?v=KMyLefTzyUg"
                  class="group flex gap-3 rounded-xl hover:bg-white/5 transition-colors p-2 -m-2"
                >
                  <div class="relative w-40 sm:w-44 aspect-video flex-shrink-0 rounded-xl overflow-hidden bg-[#262626] ring-1 ring-white/5">
                    <Image
                      src="https://i.ytImage.com/vi/KMyLefTzyUg/hq720.jpg"
                      alt="Is JSON Dead? What is TOON? The New Data Format Built for AI | Lazy Programmer"
                      loading="lazy"
                      class="w-full h-full object-cover group-hover:opacity-90 transition-opacity"
                    />
                    <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0"></div>
                    <div class="absolute bottom-2 right-2 bg-black bg-opacity-80 text-white text-xs font-medium px-1.5 py-0.5 rounded">
                      6:58
                    </div>
                  </div>
                  <div class="flex-1 min-w-0">
                    <p class="font-medium text-sm leading-tight line-clamp-2 group-hover:text-[#e50914] transition-colors">
                      Is JSON Dead? What is TOON? The New Data Format Built for
                      AI | Lazy Programmer
                    </p>
                    <p class="text-xs text-gray-400 mt-1 truncate">
                      Lazy Programmer
                    </p>
                    <div class="flex items-center gap-1 text-xs text-gray-400 mt-0.5">
                      <span>117K views</span>
                      <span>•</span>
                      <span>1 month ago</span>
                    </div>
                  </div>
                </a>
                <a
                  href="details.html?v=1-rYQUrJPTE"
                  class="group flex gap-3 rounded-xl hover:bg-white/5 transition-colors p-2 -m-2"
                >
                  <div class="relative w-40 sm:w-44 aspect-video flex-shrink-0 rounded-xl overflow-hidden bg-[#262626] ring-1 ring-white/5">
                    <Image
                      src="https://i.ytImage.com/vi/1-rYQUrJPTE/hq720.jpg"
                      alt="Meta AI দিয়ে যত খুশি ভিডিও বানান সম্পুর্ন ফ্রিতে | Get veo 3 for free with meta ai"
                      loading="lazy"
                      class="w-full h-full object-cover group-hover:opacity-90 transition-opacity"
                    />
                    <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0"></div>
                    <div class="absolute bottom-2 right-2 bg-black bg-opacity-80 text-white text-xs font-medium px-1.5 py-0.5 rounded">
                      15:35
                    </div>
                  </div>
                  <div class="flex-1 min-w-0">
                    <p class="font-medium text-sm leading-tight line-clamp-2 group-hover:text-[#e50914] transition-colors">
                      Meta AI দিয়ে যত খুশি ভিডিও বানান সম্পুর্ন ফ্রিতে | Get veo
                      3 for free with meta ai
                    </p>
                    <p class="text-xs text-gray-400 mt-1 truncate">
                      Tanbin Tech
                    </p>
                    <div class="flex items-center gap-1 text-xs text-gray-400 mt-0.5">
                      <span>31K views</span>
                      <span>•</span>
                      <span>1 month ago</span>
                    </div>
                  </div>
                </a>
                <a
                  href="details.html?v=YLtlz88zrLg"
                  class="group flex gap-3 rounded-xl hover:bg-white/5 transition-colors p-2 -m-2"
                >
                  <div class="relative w-40 sm:w-44 aspect-video flex-shrink-0 rounded-xl overflow-hidden bg-[#262626] ring-1 ring-white/5">
                    <Image
                      src="https://i.ytImage.com/vi/YLtlz88zrLg/hq720.jpg"
                      alt="CI/CD Tutorial using GitHub Actions - Automated Testing &amp; Automated Deployments"
                      loading="lazy"
                      class="w-full h-full object-cover group-hover:opacity-90 transition-opacity"
                    />
                    <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0"></div>
                    <div class="absolute bottom-2 right-2 bg-black bg-opacity-80 text-white text-xs font-medium px-1.5 py-0.5 rounded">
                      6:13
                    </div>
                  </div>
                  <div class="flex-1 min-w-0">
                    <p class="font-medium text-sm leading-tight line-clamp-2 group-hover:text-[#e50914] transition-colors">
                      CI/CD Tutorial using GitHub Actions - Automated Testing
                      &amp; Automated Deployments
                    </p>
                    <p class="text-xs text-gray-400 mt-1 truncate">Tom Shaw</p>
                    <div class="flex items-center gap-1 text-xs text-gray-400 mt-0.5">
                      <span>206K views</span>
                      <span>•</span>
                      <span>1 year ago</span>
                    </div>
                  </div>
                </a>
              </div>
            </aside>
          </div>
        </div>
      </main>
    </div>
  );
}
