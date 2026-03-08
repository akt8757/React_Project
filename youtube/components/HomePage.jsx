"use client";

import React, { use } from "react";
import Link from "next/link";
import data from "../videos";
import Image from "next/image";

export default function Home() {
  const handleVideo = (video) => {
    console.log("Video clicked:", video);
  };
  return (
    <div>
      <div className="bg-[#141414] text-[#e5e5e5]">
        {/* <!-- Header --> */}

        {/* <!-- Main Content --> */}
        <main className="px-4 py-6 md:px-6 lg:px-8">
          {/* <!-- Video Grid --> */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6">
            {data.map((video, index) => (
              <div
                onClick={() => handleVideo(video)}
                key={index}
                // href="details.html?v=5JgsZCtIH_Q"
                className="group block transition-transform hover:scale-[1.01]"
              >
                <div className="relative aspect-video rounded-xl overflow-hidden bg-[#262626] mb-3 ring-1 ring-white/5">
                  <Image
                    src={video.thumbnailURL}
                    alt="How to Build an ENTIRE iPhone/Android App From Scratch (AI + No code) | Rork AI"
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:opacity-90 transition-opacity"
                    width={1000}
                    height={1000}
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0"></div>
                  <div className="absolute bottom-2 right-2 bg-black bg-opacity-80 text-white text-xs font-medium px-1.5 py-0.5 rounded">
                    {video.duration}
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0">
                    <Image
                      src={video.channelAvatar}
                      alt="Ed Hill | AI Automation avatar"
                      loading="lazy"
                      className="w-9 h-9 rounded-full object-cover bg-[#262626] ring-1 ring-white/10"
                      width={20}
                      height={20}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-sm leading-tight mb-1 line-clamp-2 group-hover:text-[#e50914] transition-colors">
                      {video.videoTitle}
                    </h3>
                    <p className="text-xs text-gray-400 mb-0.5">
                      {video.channelName}
                    </p>
                    <div className="flex items-center gap-1 text-xs text-gray-400">
                      <span>{video.views}</span>
                      <span>•</span>
                      <span>{video.publishedDate}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
