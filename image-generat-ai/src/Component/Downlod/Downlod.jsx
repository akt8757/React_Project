import React, { useContext } from "react";
import { downloadImageContext } from "../../assets/Provider";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { Image } from "antd";
export default function Downlod() {
  const { downLoadedImage } = useContext(downloadImageContext);
  const { isDownloadImage, handleDownloadImage } = downLoadedImage;

  return (
    <div>
      <main class="relative z-10">
        <h2 class="text-4xl font-bold mb-8">
          Downloaded <span class="text-2xl">👋</span>
        </h2>

        <div>
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            <Image.PreviewGroup>
              {isDownloadImage.map((item) => (
                <div class="image-card rounded-xl overflow-hidden cursor-pointer relative">
                  <div
                    onClick={() => handleDownloadImage(item.url)}
                    class="absolute z-100 bottom-2 right-2  p-1 text-2xl"
                  >
                    {<FaCloudDownloadAlt />}
                  </div>
                  <Image
                    src={item.url}
                    alt="Anime character in kimono"
                    class="w-auto h-auto"
                  />
                </div>
              ))}
            </Image.PreviewGroup>
          </div>
        </div>
      </main>
    </div>
  );
}
