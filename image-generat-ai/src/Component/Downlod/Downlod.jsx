import React from "react";
import image1 from "../../assets/Images/ai-image-1.jpeg";
import image2 from "../../assets/Images/ai-image-2.jpeg";
import image3 from "../../assets/Images/ai-image-3.jpeg";
import image4 from "../../assets/Images/ai-image-4.jpeg";
import image5 from "../../assets/Images/ai-image-5.jpeg";
import image6 from "../../assets/Images/ai-image-6.jpeg";
export default function Downlod() {
  const svg = (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="lucide lucide-image-down-icon lucide-image-down"
      >
        <path d="M10.3 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10l-3.1-3.1a2 2 0 0 0-2.814.014L6 21" />
        <path d="m14 19 3 3v-5.5" />
        <path d="m17 22 3-3" />
        <circle cx="9" cy="9" r="2" />
      </svg>
    </>
  );
  return (
    <div>
      <main class="relative z-10">
        <h2 class="text-4xl font-bold mb-8">
          Downloaded <span class="text-2xl">👋</span>
        </h2>

        <div>
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            <div class="image-card rounded-xl overflow-hidden cursor-pointer relative">
              <div class="absolute bottom-2 right-2  p-1 ">{svg}</div>
              <img
                src={image1}
                alt="Anime character in kimono"
                class="w-full h-48 object-cover"
              />
            </div>

            <div class="image-card rounded-xl overflow-hidden cursor-pointer relative">
              <div class="absolute bottom-2 right-2  p-1 ">{svg}</div>
              <img
                src={image2}
                alt="Portrait with yellow background"
                class="w-full h-48 object-cover"
              />
            </div>

            <div class="image-card rounded-xl overflow-hidden cursor-pointer relative">
              <div class="absolute bottom-2 right-2  p-1 ">{svg}</div>
              <img
                src={image3}
                alt="Fantasy landscape with castle"
                class="w-full h-48 object-cover"
              />
            </div>

            <div class="image-card rounded-xl overflow-hidden cursor-pointer relative">
              <div class="absolute bottom-2 right-2  p-1 ">{svg}</div>
              <img
                src={image4}
                alt="Colorful anime character"
                class="w-full h-48 object-cover"
              />
            </div>

            <div class="image-card rounded-xl overflow-hidden cursor-pointer relative">
              <div class="absolute bottom-2 right-2  p-1 ">{svg}</div>
              <img
                src={image5}
                alt="Abstract art"
                class="w-full h-48 object-cover"
              />
            </div>

            <div class="image-card rounded-xl overflow-hidden cursor-pointer relative">
              <div class="absolute bottom-2 right-2  p-1 ">{svg}</div>
              <img
                src={image6}
                alt="Anime character in kimono"
                class="w-full h-48 object-cover"
              />
            </div>

            <div class="image-card rounded-xl overflow-hidden cursor-pointer relative">
              <div class="absolute bottom-2 right-2  p-1 ">{svg}</div>
              <img
                src={image2}
                alt="Portrait with yellow background"
                class="w-full h-48 object-cover"
              />
            </div>

            <div class="image-card rounded-xl overflow-hidden cursor-pointer relative">
              <div class="absolute bottom-2 right-2  p-1 ">{svg}</div>
              <img
                src={image3}
                alt="Fantasy landscape with castle"
                class="w-full h-48 object-cover"
              />
            </div>

            <div class="image-card rounded-xl overflow-hidden cursor-pointer relative">
              <div class="absolute bottom-2 right-2  p-1 ">{svg}</div>
              <img
                src={image4}
                alt="Colorful anime character"
                class="w-full h-48 object-cover"
              />
            </div>

            <div class="image-card rounded-xl overflow-hidden cursor-pointer relative">
              <div class="absolute bottom-2 right-2  p-1 ">{svg}</div>
              <img
                src={image5}
                alt="Abstract art"
                class="w-full h-48 object-cover"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
